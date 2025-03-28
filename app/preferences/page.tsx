"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Banknote, Gauge } from "lucide-react"
import { motion } from "framer-motion"
import { PageBackground } from "@/components/page-background"

export default function PreferencesPage() {
  const [budget, setBudget] = useState<string | null>(null)
  const [risk, setRisk] = useState<string | null>(null)

  const budgetOptions = [
    { id: "bootstrapped", label: "Bootstrapped", description: "Self-funded with minimal initial investment" },
    { id: "seed", label: "Seed", description: "Small investment from angels or early-stage VCs" },
    { id: "vc", label: "VC-Backed", description: "Significant funding from venture capital firms" },
  ]

  const riskOptions = [
    { id: "safe", label: "Safe & Steady", description: "Lower risk, established markets, steady growth" },
    { id: "moderate", label: "Moderate", description: "Balanced approach with calculated risks" },
    { id: "bold", label: "Bold & Innovative", description: "High risk, high reward, disruptive ideas" },
  ]

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <Link href="/upload" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Upload
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col max-w-3xl mx-auto w-full"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Set Your Preferences
            </h1>
            <p className="text-gray-300">
              Tell us about your budget level and risk tolerance to help us generate the most suitable startup ideas for
              you.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center mb-6">
                <Banknote className="w-5 h-5 text-[#7F5AF0] mr-2" />
                <h2 className="text-xl font-semibold text-white">Budget Level</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {budgetOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`relative group overflow-hidden rounded-xl border transition-all duration-300 ${
                      budget === option.id
                        ? "border-[#7F5AF0] bg-[#7F5AF0]/10"
                        : "border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
                    }`}
                    onClick={() => setBudget(option.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/10 to-[#2CB67D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-6">
                      <h3 className="text-lg font-medium text-white mb-2">{option.label}</h3>
                      <p className="text-sm text-gray-400">{option.description}</p>
                    </div>
                    {budget === option.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <Gauge className="w-5 h-5 text-[#FF5470] mr-2" />
                <h2 className="text-xl font-semibold text-white">Risk Tolerance</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {riskOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`relative group overflow-hidden rounded-xl border transition-all duration-300 ${
                      risk === option.id
                        ? "border-[#FF5470] bg-[#FF5470]/10"
                        : "border-gray-800 bg-black/30 hover:border-[#FF5470]/50 hover:bg-[#FF5470]/5"
                    }`}
                    onClick={() => setRisk(option.id)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470]/10 to-[#2CB67D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative p-6">
                      <h3 className="text-lg font-medium text-white mb-2">{option.label}</h3>
                      <p className="text-sm text-gray-400">{option.description}</p>
                    </div>
                    {risk === option.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5470] to-[#2CB67D]"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href={budget && risk ? "/generating" : "#"}>
              <Button
                className="w-full rounded-full py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300 flex items-center justify-center"
                disabled={!budget || !risk}
              >
                <span className="flex items-center gap-2">
                  Generate My Startup Ideas
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="mt-auto pt-8">
          <div className="w-full bg-gray-800/30 h-1 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full w-2/4 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Upload Resume</span>
            <span className="font-medium text-white">Set Preferences</span>
            <span>Generate Ideas</span>
            <span>Results</span>
          </div>
        </div>
      </div>
    </div>
  )
}

