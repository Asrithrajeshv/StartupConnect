import { NextResponse } from 'next/server'
import { API_CONFIG } from '../config'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const { text } = await request.json()

    if (!text) {
      return NextResponse.json(
        { error: 'No text provided' },
        { status: 400 }
      )
    }

    if (!API_CONFIG.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured' },
        { status: 500 }
      )
    }

    const prompt = `Based on the following resume text, generate 3 innovative startup ideas that would be a good fit for this person's skills and experience. For each idea, provide:
1. A brief description of the startup concept
2. Why it's a good fit for this person's background
3. Potential challenges and how to address them

Resume text:
${text}`

    const response = await fetch(API_CONFIG.GEMINI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.GEMINI_API_KEY}`,
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }]
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error?.message || 'Failed to get response from Gemini API')
    }

    const data = await response.json()
    
    // Parse the response text into structured ideas
    const ideas = parseGeminiResponse(data.candidates[0].content.parts[0].text)
    
    return NextResponse.json({ ideas })
  } catch (error) {
    console.error('Error analyzing resume:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to analyze resume' },
      { status: 500 }
    )
  }
}

function parseGeminiResponse(text: string) {
  // Split the response into individual ideas
  const ideaBlocks = text.split(/\d+\./).filter(block => block.trim())
  
  return ideaBlocks.map(block => {
    const lines = block.split('\n').filter(line => line.trim())
    const description = lines[0]?.trim() || ''
    const fit = lines.find(line => line.toLowerCase().includes('fit'))?.trim() || ''
    const challenges = lines.find(line => line.toLowerCase().includes('challenge'))?.trim() || ''
    
    return {
      description,
      fit,
      challenges
    }
  })
} 