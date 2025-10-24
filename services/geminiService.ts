import { GoogleGenAI, Chat } from "@google/genai";

const API_KEY = process.env.API_KEY;
let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

if (API_KEY) {
  ai = new GoogleGenAI({ apiKey: API_KEY });
  chat = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: 'You are a friendly and helpful assistant in a WhatsApp chat. Keep your responses concise and conversational.',
    },
  });
}


export const sendMessageToAI = async (message: string) => {
  if (!API_KEY || !chat) {
    console.error("API_KEY not configured for this environment.");
    return "I'm sorry, I can't connect to the AI service. The API Key is missing. This can happen when the app is deployed to a static hosting service like GitHub Pages.";
  }

  try {
    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Oops! Something went wrong while talking to the AI. Please try again.";
  }
};