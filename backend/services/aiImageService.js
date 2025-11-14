import axios from "axios";

const wait = (ms) => new Promise((res) => setTimeout(res, ms));

export const generateImageAI = async (prompt) => {
  try {
    // --- STEP 1: SEND GENERATION REQUEST ---
    const generateRes = await axios.post(
      "https://api.nanobananaapi.ai/api/v1/nanobanana/generate",
      {
        prompt: prompt,
        numImages: 1,
        type: "TEXTTOIAMGE",
        aspect_ratio: "1:1",
        callBackUrl: null,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.NANO_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Generate Response:", generateRes.data);

    const taskId = generateRes.data.data?.taskId;
    if (!taskId) {
      throw new Error(
        `No taskId returned. Raw response: ${JSON.stringify(generateRes.data)}`
      );
    }

    // --- STEP 2: POLL FOR FINAL IMAGE ---
    let status = "PENDING";
    let imageUrl = null;

    while (status !== "SUCCESS") {
      const infoRes = await axios.get(
        `https://api.nanobananaapi.ai/api/v1/nanobanana/record-info?taskId=${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NANO_KEY}`,
          },
        }
      );

      console.log("Poll Status:", infoRes.data);

      status = infoRes.data.data?.status;

      if (status === "SUCCESS") {
        imageUrl = infoRes.data.data?.imageUrls?.[0];
        break;
      }

      if (status === "FAILED") {
        throw new Error(
          `Image generation failed. Response: ${JSON.stringify(infoRes.data)}`
        );
      }

      await wait(2000);
    }

    return imageUrl;

  } catch (error) {
    if (error.response) {
      console.error("NANOBANANA ERROR (RAW):", error.response.data);
    } else {
      console.error("NANOBANANA ERROR:", error.message);
    }

    throw new Error("NanoBanana image generation failed");
  }
};
