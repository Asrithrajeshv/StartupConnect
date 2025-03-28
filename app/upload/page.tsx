"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Upload } from "lucide-react"
import { motion } from "framer-motion"
import { PageBackground } from "@/components/page-background"

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)
  const [file, setFile] = useState<File | null>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto w-full"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Upload Your Resume
            </h1>
            <p className="text-gray-300">
              Upload your resume so we can analyze your skills and experience to generate the perfect startup ideas for
              you.
            </p>
          </div>

          <div
            className={`w-full p-8 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
              isDragging
                ? "border-[#7F5AF0] bg-[#7F5AF0]/10"
                : file
                  ? "border-[#2CB67D] bg-[#2CB67D]/10"
                  : "border-gray-700 hover:border-[#7F5AF0]/50 bg-black/30 backdrop-blur-sm"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="resume-upload"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />

            {file ? (
              <div className="text-center">
                <div className="w-16 h-16 bg-[#2CB67D]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-[#2CB67D]" />
                </div>
                <p className="text-white font-medium mb-1">{file.name}</p>
                <p className="text-gray-400 text-sm mb-4">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                <Button
                  variant="outline"
                  className="border-[#2CB67D]/50 text-[#2CB67D] hover:bg-[#2CB67D]/10"
                  onClick={() => setFile(null)}
                >
                  Change File
                </Button>
              </div>
            ) : (
              <>
                <div className="w-16 h-16 bg-[#7F5AF0]/20 rounded-full flex items-center justify-center mb-4">
                  <Upload className="h-8 w-8 text-[#7F5AF0]" />
                </div>
                <p className="text-white font-medium mb-1">Drag & drop your resume here</p>
                <p className="text-gray-400 text-sm mb-4">Supports PDF, DOC, DOCX (Max 5MB)</p>
                <label htmlFor="resume-upload">
                  <Button
                    variant="outline"
                    className="border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
                  >
                    Browse Files
                  </Button>
                </label>
              </>
            )}
          </div>

          <div className="w-full mt-8">
            <Link href={file ? "/preferences" : "#"}>
              <Button
                className="w-full rounded-full py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300 flex items-center justify-center"
                disabled={!file}
              >
                <span className="flex items-center gap-2">
                  Continue to Preferences
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="mt-auto pt-8">
          <div className="w-full bg-gray-800/30 h-1 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full w-1/4 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className="font-medium text-white">Upload Resume</span>
            <span>Set Preferences</span>
            <span>Generate Ideas</span>
            <span>Results</span>
          </div>
        </div>
      </div>
    </div>
  )
}

