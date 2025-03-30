"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { PageBackground } from "@/components/page-background"
import { LoadingAnimation } from "@/components/loading-animation"

export default function GeneratingPage() {
  const router = useRouter()
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    "Analyzing your resume and skills...",
    "Identifying market opportunities...",
    "Generating startup ideas...",
    "Creating business models...",
    "Analyzing competitors...",
    "Crafting funding strategies...",
    "Designing pitch deck...",
    "Finalizing results...",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            router.push("/results")
          }, 1000)
          return 100
        }
        return prev + 1
      })
    }, 80)

    return () => clearInterval(interval)
  }, [router])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval)
          return steps.length - 1
        }
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(stepInterval)
  }, [steps.length])

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full text-center"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-8">
            Crafting Your Startup Idea
          </h1>

          <div className="relative mb-12 w-64 h-64 mx-auto">
            <LoadingAnimation progress={progress} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">{progress}%</span>
            </div>
          </div>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: currentStep >= index ? 1 : 0.3,
                  y: 0,
                }}
                transition={{ delay: index * 0.2 }}
                className={`py-2 px-4 rounded-lg ${
                  currentStep === index
                    ? "bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30"
                    : currentStep > index
                      ? "bg-[#2CB67D]/10 border border-[#2CB67D]/30"
                      : "bg-gray-900/50 border border-gray-800"
                }`}
              >
                <span className={currentStep >= index ? "text-white" : "text-gray-500"}>{step}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-auto pt-8 w-full max-w-md">
          <div className="w-full bg-gray-800/30 h-1 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full transition-all duration-300"
              style={{ width: `${75 + (progress / 100) * 25}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Upload Resume</span>
            <span>Set Preferences</span>
            <span className="font-medium text-white">Generate Ideas</span>
            <span>Results</span>
          </div>
        </div>
      </div>
    </div>
  )
}

