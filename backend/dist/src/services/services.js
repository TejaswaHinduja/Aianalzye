import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
dotenv.config();
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    throw new Error("GEMINI_API_KEY not found");
}
const ai = new GoogleGenAI({ apiKey });
export async function analyzeText(text) {
    const prompt = `You are a helpful assistant that analyzes a user's journal entry.
Return a strict JSON object with this exact shape:
{
  "emotion": string,          // single dominant emotion like "calm", "sad", "angry", "happy", "anxious"
  "keywords": string[],       // 3-8 short keywords
  "summary": string           // 1-2 sentence summary
}

Journal entry:
"${text}"

Respond with ONLY the JSON, no explanation or markdown.`;
    try {
        const res = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [{ role: "user", parts: [{ text: prompt }] }],
        });
        // Newer SDKs return plain text or an object; normalize to string
        const raw = res.response?.text?.() ?? res.text ?? "";
        const rawText = String(raw);
        const cleaned = rawText
            .replace(/```json/gi, "")
            .replace(/```/g, "")
            .trim();
        const parsed = JSON.parse(cleaned);
        return {
            emotion: parsed.emotion ?? "",
            keywords: Array.isArray(parsed.keywords) ? parsed.keywords : [],
            summary: parsed.summary ?? "",
        };
    }
    catch (error) {
        console.error("error in analyzing", error);
        return {
            emotion: "",
            keywords: [],
            summary: "",
        };
    }
}
//# sourceMappingURL=services.js.map