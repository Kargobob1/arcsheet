import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ITEMS_DB } from '../data';

// Prepare a context string from the database to ground the AI
const DB_CONTEXT = JSON.stringify(ITEMS_DB.map(item => ({
  name: item.name,
  category: item.category,
  sub: item.subCategory,
  sell: item.sellValue,
  recycle: item.recycleValueChange,
  rarity: item.rarity
})));

const SYSTEM_INSTRUCTION = `
You are the "ARC Raiders Master Guide", an AI assistant embedded in a cheat sheet application.
Your goal is to help players decide what to sell, keep, or craft based on the provided data.

Data Context:
${DB_CONTEXT}

Rules:
1. When asked if an item is safe to sell, check if it's in the "Safe to Sell" category or has a high sell value compared to recycle value.
2. If the recycle value change is positive (e.g., +181%), STRONGLY advise recycling.
3. If the recycle value is negative (e.g., -50%), advise selling unless needed for crafting.
4. Be concise and tactical. Use military/scavenger jargon slightly.
5. If an item isn't in the database, say you don't have intel on that yet.
`;

export const askGemini = async (question: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key missing. Please provide a valid Gemini API Key to enable tactical support.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Communication disrupted. Try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Signal lost. Unable to retrieve tactical data.";
  }
};