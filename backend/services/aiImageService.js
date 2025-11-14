import axios from "axios";

export const generateImageAI = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.fal.ai/flux-image",   // ✔ stable working endpoint
      {
        prompt: prompt,
        image_size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Key ${process.env.FAL_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Fal returns images array
    return response.data.images[0].url;

  } catch (error) {
    console.log("FAL ERROR:", error.response?.data || error.message);
    throw new Error("Fal Image Generation Failed");
  }
};
