export const buildOrgPrompt = ({
  topic,
  type,
  tone,
  language,
  orgType,
  audienceHints,
}) => {
  return `
You are a senior content strategist creating ${type}.
Topic: ${topic}
Tone: ${tone}
Language: ${language}
Organization type: ${orgType}
Audience: ${audienceHints}

Rules:
- Start with a strong hook
- Write clear, structured, readable content
- Include insights and value
- No generic lines
- Produce final polished content
`;
};

export const improveForType = (type) => {
  const rules = {
    "social media post": "Use short punchy lines + strong CTA.",
    "blog paragraph": "Add deep insights and small examples.",
    caption: "Write emotional or witty, less than 15 words.",
  };

  return rules[type] || "";
};
