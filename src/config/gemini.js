import { GoogleGenAI } from "@google/genai";
const apikey="AIzaSyD4fNHZSUyjwRmAHj9k4iXtoZ_f6aAambQ"
const ai = new GoogleGenAI({apiKey:apikey});
async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  console.log(response.text);
  return response.text
}

export default await main;


