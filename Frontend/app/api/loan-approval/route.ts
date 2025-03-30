import { NextResponse } from 'next/server'
import path from 'path'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    
    // Send the data to your backend API
    const response = await fetch('http://localhost:8000/api/loan-approval', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    return NextResponse.json(result)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process loan approval' }, { status: 500 })
  }
} 