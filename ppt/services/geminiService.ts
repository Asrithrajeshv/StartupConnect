import type { SlideData } from '../types';

const SLIDE_TITLES = [
  'Problem Definition',
  'Technical Approach',
  'Impacts and Benefits',
  'Feasibility and Viability',
  'Research Review',
  'Conclusion & Next Steps',
];

// Constants for API configuration
const DEFAULT_TIMEOUT = 30000;
const DEFAULT_RETRIES = 3;
const DEFAULT_DELAY = 1000;

/**
 * Build the prompt for the Gemini API
 */
function buildPrompt(projectIdea: string): string {
  return `You are an expert product manager and startup consultant. A user has provided a project idea.
Your task is to generate the content for a 6-slide presentation deck based on this idea.
Respond ONLY with a valid JSON object containing a single key "slides", which is an array of 6 slide objects.
Each slide object must have a "title" and "content" property. The content for each slide should be concise, professional, and formatted in bullet points.
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
Respond ONLY with valid JSON, no explanation, no markdown, no extra text, no code block, no comments, no formatting. Output only the JSON object.`;
}

/**
 * Extract text content from Gemini API response
 */
async function extractTextFromResponse(json: any): Promise<string> {
  try {
    if (!json) return '';
    
    // Handle Gemini's specific response format
    if (json.candidates?.[0]?.content?.parts) {
      const text = json.candidates[0].content.parts[0].text;
      // If the text is wrapped in a code block, extract the JSON content
      const match = text.match(/```json\s*([\s\S]*?)\s*```/);
      return match ? match[1] : text;
    }

    // Fallback to handling other response formats
    if (typeof json.text === 'string') return json.text;
    
    return JSON.stringify(json);
  } catch (e) {
    return '';
  }
}

/**
 * Fetch with retry mechanism for handling temporary failures
 */
async function fetchWithRetry(
  url: string, 
  options: RequestInit, 
  retries: number = DEFAULT_RETRIES, 
  delay: number = DEFAULT_DELAY
): Promise<Response> {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      
      // If rate limited, wait longer
      if (response.status === 429) {
        await new Promise(resolve => setTimeout(resolve, delay * 2));
        continue;
      }
      
      throw new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= 2; // Exponential backoff
    }
  }
  throw new Error('Max retries reached');
}

/**
 * Main function to generate presentation content using Gemini API
 */
export async function generatePresentationContent(projectIdea: string): Promise<SlideData[]> {
  // Validate and get API key
  const key = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!key) {
    throw new Error('GEMINI_API_KEY (or API_KEY) is not set in environment variables');
  }
  
  // Log API configuration (but not the full key)
  console.log('API Configuration:', {
    keyPresent: !!key,
    keyLength: key?.length,
    projectIdeaLength: projectIdea?.length,
    hasEnvVars: !!process.env.GEMINI_API_KEY || !!process.env.API_KEY
  });

  // Configure API endpoint
  const model = 'gemini-2.5-pro';
  const url = process.env.GEMINI_API_URL || 
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;

  // Build the prompt for content generation
  const prompt = buildPrompt(projectIdea);

  try {
    // Make API request with retry mechanism
    const resp = await fetchWithRetry(url, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        contents: [{ 
          parts: [{ text: prompt }] 
        }] 
      }),
      signal: AbortSignal.timeout(DEFAULT_TIMEOUT),
      cache: 'no-cache',
      keepalive: true,
      referrerPolicy: 'no-referrer'
    });

    // Handle API errors
    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error(`Gemini API error: ${resp.status} ${errText}`);
    }

    // Parse response and extract content
    const json = await resp.json();
    const text = await extractTextFromResponse(json);

    if (!text) {
      throw new Error('Empty response from Gemini API');
    }

    // Try to parse the response text as JSON
    let parsed: any = null;
    try {
      // First attempt: direct parse
      parsed = JSON.parse(text);
    } catch {
      // Second attempt: extract from code block
      let match = text.match(/```json[\s\S]*?(\{[\s\S]*"slides"[\s\S]*\})[\s\S]*?```/);
      if (match?.[1]) {
        try {
          parsed = JSON.parse(match[1]);
        } catch {}
      }

      // Third attempt: find JSON substring
      if (!parsed) {
        match = text.match(/\{[\s\S]*"slides"[\s\S]*\}/);
        if (match) {
          try {
            parsed = JSON.parse(match[0]);
          } catch {}
        }
      }

      // Final attempt: scan for valid JSON objects
      if (!parsed) {
        const curlyMatches = text.match(/\{[\s\S]*\}/g);
        if (curlyMatches) {
          for (const candidate of curlyMatches) {
            try {
              const obj = JSON.parse(candidate);
              if (obj && Array.isArray(obj.slides)) {
                parsed = obj;
                break;
              }
            } catch {}
          }
        }
      }
    }

    // Validate parsed content
    if (parsed && Array.isArray(parsed.slides) && parsed.slides.length > 0) {
      return parsed.slides as SlideData[];
    }

    // If we reach here, no valid content was found
    console.error('Gemini raw response:', text);
    throw new Error('Invalid response format from API');
  } catch (error) {
    console.error('Error generating presentation content:', error);
    throw error;
  }
}
