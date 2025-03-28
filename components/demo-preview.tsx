"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Download, Users, Target, TrendingUp, Star } from "lucide-react"

export function DemoPreview() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      title: "Startup Idea",
      content: (
        <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#7F5AF0]/30">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">EcoTrack: AI-Powered Sustainability Platform</h2>
              <p className="text-gray-300 mb-4">
                A SaaS platform that helps businesses track, analyze, and improve their environmental impact using AI
                and machine learning.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-3">
                    <Target className="h-4 w-4 text-[#7F5AF0]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Market</p>
                    <p className="text-sm font-medium text-white">B2B SaaS</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-3">
                    <Users className="h-4 w-4 text-[#2CB67D]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Target Users</p>
                    <p className="text-sm font-medium text-white">Enterprise Companies</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mr-3">
                    <TrendingUp className="h-4 w-4 text-[#FF5470]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Growth Potential</p>
                    <p className="text-sm font-medium text-white">High</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-3">
                    <Star className="h-4 w-4 text-[#7F5AF0]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Risk Level</p>
                    <p className="text-sm font-medium text-white">Moderate</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[200px]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 rounded-full blur-xl"></div>
                <div className="relative bg-black/50 backdrop-blur-sm rounded-full p-6 h-full flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="EcoTrack Logo"
                    width={150}
                    height={150}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Competitor Analysis",
      content: (
        <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#7F5AF0]/30">
          <h2 className="text-2xl font-bold text-white mb-6">Competitor Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Competitor A",
                logo: "/placeholder.svg?height=80&width=80",
                strength: 85,
                weakness: "Slow customer support",
              },
              {
                name: "Competitor B",
                logo: "/placeholder.svg?height=80&width=80",
                strength: 72,
                weakness: "Limited feature set",
              },
              {
                name: "Competitor C",
                logo: "/placeholder.svg?height=80&width=80",
                strength: 68,
                weakness: "High pricing",
              },
            ].map((competitor, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/5 to-[#2CB67D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={competitor.logo || "/placeholder.svg"}
                      alt={competitor.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <h3 className="text-lg font-medium text-white">{competitor.name}</h3>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Market Strength</span>
                      <span className="text-white font-medium">{competitor.strength}%</span>
                    </div>
                    <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                        style={{ width: `${competitor.strength}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-1">Key Weakness:</p>
                    <p className="text-sm text-white">{competitor.weakness}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Pitch Deck",
      content: (
        <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#7F5AF0]/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-white mb-4">Ready-to-Use Pitch Deck</h2>
              <p className="text-gray-300 mb-6">
                Download a professionally designed pitch deck tailored to your startup idea, complete with market
                analysis, business model, and financial projections.
              </p>
              <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                <Download className="h-4 w-4 mr-2" />
                Download Pitch Deck
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[16/9] w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 rounded-xl blur-md"></div>
                <div className="relative border border-[#7F5AF0]/30 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Pitch Deck Preview"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-40 border border-[#7F5AF0]/30 rounded-xl overflow-hidden rotate-6 bg-black/80">
                  <Image
                    src="/placeholder.svg?height=160&width=128"
                    alt="Pitch Deck Page"
                    width={128}
                    height={160}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-2 -left-4 w-32 h-40 border border-[#7F5AF0]/30 rounded-xl overflow-hidden -rotate-6 bg-black/80">
                  <Image
                    src="/placeholder.svg?height=160&width=128"
                    alt="Pitch Deck Page"
                    width={128}
                    height={160}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const next = () => {
    setActiveTab((activeTab + 1) % tabs.length)
  }

  const prev = () => {
    setActiveTab((activeTab - 1 + tabs.length) % tabs.length)
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-full border border-gray-800 p-1 bg-black/50">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeTab === index ? "text-white" : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
              {activeTab === index && (
                <motion.div
                  layoutId="activeDemoTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeTab].content}
          </motion.div>
        </AnimatePresence>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-800 bg-black/50 backdrop-blur-sm hover:bg-[#7F5AF0]/20 hover:border-[#7F5AF0]/50"
            onClick={prev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous</span>
          </Button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6 z-10">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-gray-800 bg-black/50 backdrop-blur-sm hover:bg-[#7F5AF0]/20 hover:border-[#7F5AF0]/50"
            onClick={next}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {tabs.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeTab === index ? "bg-[#7F5AF0] w-6" : "bg-gray-600"
            }`}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
    </div>
  )
}

