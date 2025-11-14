
export const buildOrgPrompt = ({ topic, type, tone, language }) => `
You are an experienced content strategist working for a large organization 
(media, education, corporate, advertising, or public communication).

Generate a high-quality ${type} in ${language} for the topic: "${topic}".
Tone: ${tone}

Rules:
1. Start with a powerful hook.
2. Use simple, clear sentences.
3. Structure must be: Intro → Key Points → Summary/CTA.
4. Make it professional, audience-centric and impactful.
5. Make it ready for social media, blogs, or campaigns.
6. No generic filler — only meaningful lines.
7. End with a short CTA or takeaway.
`;


export const socialPrompt = (topic, language, tone) => `
Generate a social media post in ${language}.
Topic: "${topic}"
Tone: ${tone}

Guidelines:
- Strong hook
- Short, crisp lines
- Emotional + shareable
- Mobile friendly
- End with a CTA
`;


export const scriptPrompt = (topic, language, tone) => `
Write a video script in ${language} about: "${topic}".
Tone: ${tone}

Structure:
Hook → Story → Core Message → CTA
`;

export const eduPrompt = (topic, language) => `
Explain "${topic}" in ${language} for students.

Rules:
- Use simple explanations
- Add examples
- Provide step-by-step flow
- End with a summary
`;


export const adPrompt = (topic, language, tone) => `
Write an advertisement copy in ${language} for: "${topic}".
Tone: ${tone}

Guidelines:
- Short lines
- Emotional impact
- High-conversion focused
- End with a strong CTA
`;
