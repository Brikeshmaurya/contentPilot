import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// load .env properly
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.join(__dirname, "../.env"),
});

// IMPORTANT: import Groq AFTER dotenv is loaded
import Groq from "groq-sdk";

// DO NOT create Groq client here globally (causes crash)
// const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const detectTopicType = (topic) => {
  const t = topic.toLowerCase();

  const KEYWORD_MAP = {
    education: ["exam", "student", "school", "learning"],
    health: ["health", "fitness", "diet"],
    marketing: ["marketing", "seo", "brand"],
    finance: ["money", "loan", "bank"],
    tech: ["software", "ai", "developer"],
    ecommerce: ["product", "shopping"],
    media: ["journal", "news"],
    government: ["policy", "public"],
  };

  for (const [type, arr] of Object.entries(KEYWORD_MAP)) {
    for (const w of arr) {
      if (t.includes(w)) return { orgType: type, confidence: 0.9 };
    }
  }

  return null;
};

// LLM fallback — NOW Groq client created inside function
export const detectTopicTypeLLM = async (topic) => {
  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const res = await groq.chat.completions.create({
    model:"llama-3.1-8b-instant",
    messages: [
      {
        role: "user",
        content: `Classify: "${topic}". Answer like: education / tech / health / finance / marketing / ecommerce / media / government.`,
      },
    ],
  });

  return {
    orgType: res.choices[0].message.content.trim(),
    confidence: 0.6,
  };
};
