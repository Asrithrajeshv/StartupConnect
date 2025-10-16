
import { GoogleGenAI, Type } from "@google/genai";
import type { SlideData } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const SLIDE_TITLES = [
    "Problem Definition",
    "Technical Approach",
    "Impacts and Benefits",
    "Feasibility and Viability",
    "Research Review",
    "Conclusion & Next Steps"
];

export async function generatePresentationContent(projectIdea: string): Promise<SlideData[]> {
    const model = 'gemini-2.5-pro';

    const prompt = `
        You are an expert product manager and startup consultant. A user has provided a project idea. 
        Your task is to generate the content for a 6-slide presentation deck based on this idea.
        The output must be a JSON object containing a single key 'slides', which is an array of 6 slide objects.
        Each slide object must have a 'title' and 'content' property. The content for each slide should be concise, professional, and formatted in bullet points.

        The required slide titles are exactly:
        1. ${SLIDE_TITLES[0]}
        2. ${SLIDE_TITLES[1]}
        3. ${SLIDE_TITLES[2]}
        4. ${SLIDE_TITLES[3]}
        5. ${SLIDE_TITLES[4]}
        6. ${SLIDE_TITLES[5]}

        Here is the user's project idea:
        ---
        ${projectIdea}
        ---

        Generate the JSON output now.
    `;

    const responseSchema = {
      type: Type.OBJECT,
      properties: {
        slides: {
          type: Type.ARRAY,
          description: "An array of 6 slide objects.",
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "The title of the slide." },
              content: { type: Type.STRING, description: "The content of the slide, formatted with bullet points." }
            },
            required: ["title", "content"]
          }
        }
      },
      required: ["slides"]
    };

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.7,
            },
        });

        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);
        
        if (parsedJson && Array.isArray(parsedJson.slides) && parsedJson.slides.length > 0) {
            return parsedJson.slides;
        } else {
            throw new Error("Invalid response format from API.");
        }
    } catch (error) {
        console.error("Error generating presentation content:", error);
        throw new Error("Failed to generate presentation. Please check your API key and try again.");
    }
}
