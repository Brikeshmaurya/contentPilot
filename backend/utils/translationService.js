import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const translateText = async (text, lang) => {
  if (lang.toLowerCase() === "english") return text;

  const res = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: `Translate this into ${lang}, keep same meaning:\n${text}`,
      },
    ],
  });

  return res.choices[0].message.content;
};
