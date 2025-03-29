"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, BookmarkCheck, TrendingUp, AlertTriangle, Users, Brain, ChevronRight } from "lucide-react"

interface StartupListItemProps {
  startup: {
    id: string
    name: string
    logo: string
    industry: string
    description: string
    fundingGoal: number
    currentFunding: number
    riskLevel: string
    growthScore: number
    investorInterest: number
    aiInsights: string
    tags: string[]
  }
  isBookmarked: boolean
  onBookmark: () => void
}

export function StartupListItem({ startup, isBookmarked, onBookmark }: StartupListItemProps) {
  const [showInsights, setShowInsights] = useState(false)
  const fundingPercentage = (startup.currentFunding / startup.fundingGoal) * 100

  // Risk level color
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-400 bg-green-400/10"
      case "Moderate":
        return "text-yellow-400 bg-yellow-400/10"
      case "High":
        return "text-red-400 bg-red-400/10"
      default:
        return "text-gray-400 bg-gray-400/10"
    }
  }

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative group overflow-hidden rounded-xl border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/10 to-[#2CB67D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 md:w-1/4">
            <div className="relative w-12 h-12 rounded-full bg-gray-900 overflow-hidden border border-gray-800">
              <Image
                src={startup.logo || "/placeholder.svg"}
                alt={startup.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">{startup.name}</h3>
              <Badge variant="outline" className="text-xs bg-gray-900/50 border-gray-800 text-gray-400">
                {startup.industry}
              </Badge>
            </div>
          </div>

          {/* Description and Tags */}
          <div className="md:w-2/5">
            <p className="text-gray-400 text-sm mb-2 line-clamp-1">{startup.description}</p>
            <div className="flex flex-wrap gap-1">
              {startup.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-900/50 text-gray-300 border-none text-xs">
                  {tag}
                </Badge>
              ))}
              {startup.tags.length > 3 && (
                <Badge variant="secondary" className="bg-gray-900/50 text-gray-300 border-none text-xs">
                  +{startup.tags.length - 3} more
                </Badge>
              )}
            </div>
          </div>

          {/* Metrics */}
          <div className="flex gap-3 md:w-1/5">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-[#7F5AF0]" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Growth</p>
                <p className="text-sm font-medium text-white">{startup.growthScore}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div
                className={`w-8 h-8 rounded-full ${
                  startup.riskLevel === "Low"
                    ? "bg-green-400/10"
                    : startup.riskLevel === "Moderate"
                      ? "bg-yellow-400/10"
                      : "bg-red-400/10"
                } flex items-center justify-center`}
              >
                <AlertTriangle
                  className={`h-4 w-4 ${
                    startup.riskLevel === "Low"
                      ? "text-green-400"
                      : startup.riskLevel === "Moderate"
                        ? "text-yellow-400"
                        : "text-red-400"
                  }`}
                />
              </div>
              <div>
                <p className="text-xs text-gray-400">Risk</p>
                <p className={`text-sm font-medium ${getRiskColor(startup.riskLevel)}`}>{startup.riskLevel}</p>
              </div>
            </div>
          </div>

          {/* Funding and Actions */}
          <div className="md:w-1/5">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-gray-400">Funding</span>
              <span className="text-xs font-medium text-white">{fundingPercentage.toFixed(0)}%</span>
            </div>
            <Progress value={fundingPercentage} className="h-2 bg-gray-900 mb-2" />
            <div className="flex justify-between">
              <Link href={`/startup/${startup.id}`}>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-gray-800 text-gray-300 hover:bg-[#7F5AF0]/10 hover:border-[#7F5AF0]/50"
                >
                  Details
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full hover:bg-gray-900"
                  onClick={(e) => {
                    e.preventDefault()
                    onBookmark()
                  }}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="h-4 w-4 text-[#7F5AF0]" />
                  ) : (
                    <Bookmark className="h-4 w-4 text-gray-400 group-hover:text-[#7F5AF0]" />
                  )}
                </Button>
                <Link href={`/invest/${startup.id}`}>
                  <Button
                    size="sm"
                    className="h-8 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                  >
                    Invest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights (Expandable) */}
        <div className="mt-3">
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-between text-[#7F5AF0] hover:bg-[#7F5AF0]/10 border-t border-gray-800 rounded-none"
            onClick={() => setShowInsights(!showInsights)}
          >
            <div className="flex items-center">
              <Brain className="h-3 w-3 mr-1" />
              <span className="text-xs">AI Insights</span>
            </div>
            <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${showInsights ? "rotate-90" : ""}`} />
          </Button>

          {showInsights && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="p-3 bg-[#7F5AF0]/10 border-t border-[#7F5AF0]/30"
            >
              <p className="text-sm text-gray-300">{startup.aiInsights}</p>
              <div className="flex items-center mt-2">
                <Users className="h-3 w-3 text-[#FF5470] mr-1" />
                <span className="text-xs text-gray-400">{startup.investorInterest} investors interested</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

