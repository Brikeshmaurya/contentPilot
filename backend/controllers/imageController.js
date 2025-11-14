import { generateImageAI } from "../services/aiImageService.js";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) return res.status(400).json({ error: "Prompt required" });

    const url = await generateImageAI(prompt);

    res.json({ success: true, image_url: url });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const generateBulkImages = async (req, res) => {
  try {
    const { prompts } = req.body;

    if (!prompts || prompts.length === 0)
      return res.status(400).json({ error: "Prompts required" });

    const results = [];

    for (const p of prompts) {
      const url = await generateImageAI(p);
      results.push({ prompt: p, image_url: url });
    }

    res.json({ success: true, results });

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
