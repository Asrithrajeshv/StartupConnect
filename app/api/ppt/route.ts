import { NextResponse } from 'next/server'

// Import generator from ppt app folder
import { generatePresentationContent } from '../../../ppt/services/geminiService'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { projectIdea } = body

    if (!projectIdea || typeof projectIdea !== 'string') {
      return NextResponse.json({ error: 'projectIdea is required' }, { status: 400 })
    }

    const slides = await generatePresentationContent(projectIdea)

    return NextResponse.json({ slides })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error generating slides:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    console.error('Detailed error:', {
      message: errorMessage,
      stack: error instanceof Error ? error.stack : undefined,
      cause: error instanceof Error ? error.cause : undefined
    })
    return NextResponse.json(
      { 
        error: 'Failed to generate slides', 
        details: errorMessage,
        cause: error instanceof Error ? error.cause : undefined
      },
      { status: 500 }
    )
  }
}
