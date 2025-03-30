import { NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'
import { spawn } from 'child_process'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Create a Python process to run the model prediction
    const pythonProcess = spawn('python', [
      path.join(process.cwd(), 'scripts', 'predict_loan.py'),
      JSON.stringify(data)
    ])

    return new Promise((resolve) => {
      let result = ''

      pythonProcess.stdout.on('data', (data) => {
        result += data.toString()
      })

      pythonProcess.stderr.on('data', (data) => {
        console.error(`Error: ${data}`)
      })

      pythonProcess.on('close', (code) => {
        resolve(NextResponse.json({ 
          prediction: result.trim(),
          success: true 
        }))
      })
    })

  } catch (error) {
    return NextResponse.json({ 
      error: 'Failed to process loan prediction',
      success: false 
    }, { status: 500 })
  }
} 