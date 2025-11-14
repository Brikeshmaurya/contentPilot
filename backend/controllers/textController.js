import { buildOrgPrompt, improveForType } from "../utils/prompts.js";
import { detectTopicType, detectTopicTypeLLM } from "../utils/topicDetector.js";
import { generateTextAI } from "../services/aiTextService.js";
import { translateText } from "../utils/translationService.js";
import { cleanOutput } from "../utils/postProcess.js";

export const generateText = async (req, res) => {
  try {
    const { topic, type, tone, language } = req.body;

    if (!topic || !type)
      return res.status(400).json({ error: "Topic and type are required" });

    let det = detectTopicType(topic);
    if (!det) det = await detectTopicTypeLLM(topic);

    const orgType = det.orgType;
    const audienceMap = {
      education: "students and aspirants",
      health: "health-conscious people",
      marketing: "marketers",
      finance: "investors",
      tech: "developers",
      ecommerce: "buyers",
      media: "readers",
      government: "citizens",
      other: "general audience",
    };

    const basePrompt = buildOrgPrompt({
      topic,
      type,
      tone,
      language,
      orgType,
      audienceHints: audienceMap[orgType],
    });

    const finalPrompt = `${basePrompt}\n${improveForType(type, language)}\nWrite final content:`;

    let output = await generateTextAI(finalPrompt);
    output = cleanOutput(output);

    let finalOutput = output;
    if (language.toLowerCase() !== "english") {
      finalOutput = await translateText(output, language);
      finalOutput = cleanOutput(finalOutput);
    }

    res.json({
      content: finalOutput,
      meta: {
        detectedOrgType: orgType,
        confidence: det.confidence,
        language,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
