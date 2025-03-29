"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Sparkles, TrendingUp, AlertTriangle, ArrowRight, Brain, X } from "lucide-react"

// Mock data for AI recommendations
const AI_RECOMMENDATIONS = [
  {
    id: "1",
    name: "EcoTrack",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "CleanTech",
    description: "AI-powered sustainability platform for businesses",
    fundingGoal: 500000,
    currentFunding: 320000,
    riskLevel: "Moderate",
    growthScore: 87,
    matchScore: 92,
    reason: "Matches your interest in sustainability and AI technologies with moderate risk profile.",
  },
  {
    id: "4",
    name: "DataMesh",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "Enterprise SaaS",
    description: "AI-powered data integration platform for enterprise",
    fundingGoal: 1000000,
    currentFunding: 650000,
    riskLevel: "Low",
    growthScore: 90,
    matchScore: 88,
    reason: "Aligns with your preference for B2B SaaS investments with strong growth potential.",
  },
  {
    id: "7",
    name: "SecureChain",
    logo: "/placeholder.svg?height=40&width=40",
    industry: "Cybersecurity",
    description: "Blockchain-based security solution for enterprise",
    fundingGoal: 800000,
    currentFunding: 560000,
    riskLevel: "Moderate",
    growthScore: 85,
    matchScore: 85,
    reason: "Matches your interest in security technologies and blockchain innovations.",
  },
]

export function AIRecommendations() {
  const [showRecommendations, setShowRecommendations] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate recommendations
  useEffect(() => {
    if (!showRecommendations) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % AI_RECOMMENDATIONS.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [showRecommendations])

  if (!showRecommendations) return null

  const recommendation = AI_RECOMMENDATIONS[currentIndex]
  const fundingPercentage = (recommendation.currentFunding / recommendation.fundingGoal) * 100

  // Risk level color
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-400"
      case "Moderate":
        return "text-yellow-400"
      case "High":
        return "text-red-400"
      default:
        return "text-gray-400"
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative mb-8 p-px rounded-xl overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] animate-pulse opacity-50"></div>
        <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-4 md:p-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 h-6 w-6 rounded-full hover:bg-gray-800"
            onClick={() => setShowRecommendations(false)}
          >
            <X className="h-3 w-3 text-gray-400" />
          </Button>

          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-[#7F5AF0]" />
            </div>
            <h3 className="text-lg font-medium text-white">AI-Powered Recommendations</h3>
            <Badge className="ml-2 bg-[#7F5AF0]/20 text-[#7F5AF0] border-none">
              {currentIndex + 1}/{AI_RECOMMENDATIONS.length}
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Startup Info */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <div className="relative w-10 h-10 rounded-full bg-gray-900 overflow-hidden border border-gray-800">
                  <Image
                    src={recommendation.logo || "/placeholder.svg"}
                    alt={recommendation.name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">{recommendation.name}</h4>
                  <Badge variant="outline" className="text-xs bg-gray-900/50 border-gray-800 text-gray-400">
                    {recommendation.industry}
                  </Badge>
                </div>
                <Badge className="ml-auto bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] border-none">
                  {recommendation.matchScore}% Match
                </Badge>
              </div>

              <p className="text-gray-300 mb-4">{recommendation.description}</p>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/10 flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-[#7F5AF0]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Growth Score</p>
                    <p className="text-sm font-medium text-white">{recommendation.growthScore}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div
                    className={`w-8 h-8 rounded-full ${
                      recommendation.riskLevel === "Low"
                        ? "bg-green-400/10"
                        : recommendation.riskLevel === "Moderate"
                          ? "bg-yellow-400/10"
                          : "bg-red-400/10"
                    } flex items-center justify-center`}
                  >
                    <AlertTriangle
                      className={`h-4 w-4 ${
                        recommendation.riskLevel === "Low"
                          ? "text-green-400"
                          : recommendation.riskLevel === "Moderate"
                            ? "text-yellow-400"
                            : "text-red-400"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Risk Level</p>
                    <p className={`text-sm font-medium ${getRiskColor(recommendation.riskLevel)}`}>
                      {recommendation.riskLevel}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">Funding Progress</p>
                  <Progress value={fundingPercentage} className="h-2 bg-gray-900 mb-1" />
                  <p className="text-xs text-gray-400">
                    ${recommendation.currentFunding.toLocaleString()} of ${recommendation.fundingGoal.toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 mb-4">
                <div className="flex items-center gap-1 mb-1">
                  <Brain className="h-3 w-3 text-[#7F5AF0]" />
                  <span className="text-xs text-[#7F5AF0]">Why We Recommend This</span>
                </div>
                <p className="text-sm text-gray-300">{recommendation.reason}</p>
              </div>

              <div className="flex gap-3">
                <Link href={`/startup/${recommendation.id}`} className="flex-1">
                  <Button
                    variant="outline"
                    className="w-full border-gray-800 text-gray-300 hover:bg-[#7F5AF0]/10 hover:border-[#7F5AF0]/50"
                  >
                    View Details
                  </Button>
                </Link>
                <Link href={`/invest/${recommendation.id}`} className="flex-1">
                  <Button className="w-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                    Invest Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="hidden md:block border-l border-gray-800 pl-6">
              <h4 className="text-white font-medium mb-3">More Recommendations</h4>
              <div className="space-y-3">
                {AI_RECOMMENDATIONS.map((rec, index) => (
                  <button
                    key={rec.id}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      index === currentIndex
                        ? "bg-[#7F5AF0]/20 border border-[#7F5AF0]/50"
                        : "bg-gray-900/30 border border-gray-800 hover:border-[#7F5AF0]/30"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full bg-gray-900 overflow-hidden border border-gray-800">
                        <Image
                          src={rec.logo || "/placeholder.svg"}
                          alt={rec.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-white">{rec.name}</h5>
                        <div className="flex items-center gap-1">
                          <Badge
                            variant="outline"
                            className="text-xs bg-gray-900/50 border-gray-800 text-gray-400 px-1 py-0"
                          >
                            {rec.industry}
                          </Badge>
                          <span className="text-xs text-[#7F5AF0]">{rec.matchScore}% Match</span>
                        </div>
                      </div>
                      {index === currentIndex && <div className="ml-auto w-2 h-2 rounded-full bg-[#7F5AF0]"></div>}
                    </div>
                  </button>
                ))}
              </div>

              <Button variant="ghost" className="w-full mt-4 text-[#7F5AF0] hover:bg-[#7F5AF0]/10 justify-between">
                <span>View All Recommendations</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-4 md:hidden">
            {AI_RECOMMENDATIONS.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? "bg-[#7F5AF0]" : "bg-gray-700"}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

