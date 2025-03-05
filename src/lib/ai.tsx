import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

export async function askAIQuestion({ prompt = "" }: { prompt: string }) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a helpful assistant. Answer the following question concisely and directly.
      If asked about who created you or the owner, answer "Sujoy".
      If asked when you were created, answer "February 2025".
      Do not mention that you are an AI model.

      Strictly just answer the question.
      
      Question: ${prompt}`,
    });
    return response.text; // Ensure we access the text property correctly based on SDK usage
  } catch (error) {
    console.error("Error asking AI:", error);
    return "Sorry, I encountered an error while processing your request.";
  }
}
