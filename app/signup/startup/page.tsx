"use client"

import { useState } from "react"

export default function StartupSignupPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    try {
      // Your form submission logic here
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <button
      type="submit"
      className="..."
      disabled={isProcessing}
    >
      <span className="flex items-center gap-2">
        {isProcessing ? (
          <>
            Processing
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          </>
        ) : (
          "Sign Up"
        )}
      </span>
    </button>
  )
} 