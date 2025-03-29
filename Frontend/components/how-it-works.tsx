"use client"

import React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileUp, Settings, Sparkles, Download } from "lucide-react"

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Upload or Generate Resume",
      description: "Upload your existing resume or use our AI to generate one based on your skills and experience.",
      icon: FileUp,
      color: "#7F5AF0",
    },
    {
      title: "Set Your Preferences",
      description: "Choose your budget level and risk tolerance to customize your startup recommendations.",
      icon: Settings,
      color: "#2CB67D",
    },
    {
      title: "AI Crafts Your Startup Idea",
      description:
        "Our AI analyzes your skills and preferences to generate tailored startup ideas and business models.",
      icon: Sparkles,
      color: "#FF5470",
    },
    {
      title: "Download Your Pitch Deck",
      description: "Get a professionally designed pitch deck and business plan ready to present to investors.",
      icon: Download,
      color: "#7F5AF0",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <motion.div
              key={index}
              className={`relative rounded-xl border ${
                activeStep === index ? "border-[#7F5AF0] bg-[#7F5AF0]/5" : "border-gray-800 bg-black/30"
              } p-6 cursor-pointer transition-all duration-300`}
              whileHover={{ y: -5 }}
              onClick={() => setActiveStep(index)}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${step.color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color: step.color }} />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
              <div className="absolute top-4 right-4 w-6 h-6 rounded-full border border-gray-700 flex items-center justify-center">
                <span className="text-xs font-medium text-gray-400">{index + 1}</span>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="relative h-[300px] md:h-[400px] rounded-xl border border-gray-800 bg-black/30 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7F5AF0]/10 to-transparent"></div>

        <div className="relative h-full flex items-center justify-center p-6">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg"
          >
            <div
              className="w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-6"
              style={{ backgroundColor: `${steps[activeStep].color}20` }}
            >
              {React.createElement(steps[activeStep].icon, {
                className: "w-10 h-10",
                style: { color: steps[activeStep].color },
              })}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{steps[activeStep].title}</h3>
            <p className="text-gray-300">{steps[activeStep].description}</p>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === index ? "bg-[#7F5AF0] w-6" : "bg-gray-600"
              }`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

