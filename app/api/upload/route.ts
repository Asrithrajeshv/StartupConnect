import { NextResponse } from 'next/server'
import { API_CONFIG } from '../config'
import { PDFDocument } from 'pdf-lib'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!API_CONFIG.ALLOWED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF files are allowed.' },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > API_CONFIG.MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size exceeds 5MB limit' },
        { status: 400 }
      )
    }

    // Convert File to ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()
    
    // Load PDF document
    const pdfDoc = await PDFDocument.load(arrayBuffer)
    
    // Extract text from all pages
    let extractedText = ''
    for (let i = 0; i < pdfDoc.getPageCount(); i++) {
      const page = pdfDoc.getPage(i)
      const { width, height } = page.getSize()
      const textContent = await page.getTextContent()
      extractedText += textContent + '\n'
    }

    if (!extractedText.trim()) {
      return NextResponse.json(
        { error: 'No text content found in the PDF' },
        { status: 400 }
      )
    }

    return NextResponse.json({ text: extractedText })
  } catch (error) {
    console.error('Error processing PDF:', error)
    return NextResponse.json(
      { error: 'Failed to process PDF file' },
      { status: 500 }
    )
  }
} 