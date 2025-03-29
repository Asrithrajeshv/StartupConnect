"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bookmark, BookmarkCheck, TrendingUp, AlertTriangle, Users, DollarSign, Brain } from "lucide-react"

interface StartupCardProps {
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

export function StartupCard({ startup, isBookmarked, onBookmark }: StartupCardProps) {
  const [isHovered, setIsHovered] = useState(false)
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
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group overflow-hidden rounded-xl border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/10 to-[#2CB67D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card Header */}
      <div className="relative p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
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
              <BookmarkCheck className="h-5 w-5 text-[#7F5AF0]" />
            ) : (
              <Bookmark className="h-5 w-5 text-gray-400 group-hover:text-[#7F5AF0]" />
            )}
          </Button>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{startup.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {startup.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-900/50 text-gray-300 border-none">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Funding Progress */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-gray-400">Funding Progress</span>
            <span className="text-xs font-medium text-white">{fundingPercentage.toFixed(0)}%</span>
          </div>
          <Progress value={fundingPercentage} className="h-2 bg-gray-900" />
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-400">
              <DollarSign className="inline h-3 w-3 text-[#2CB67D]" /> ${startup.currentFunding.toLocaleString()}
            </span>
            <span className="text-xs text-gray-400">Goal: ${startup.fundingGoal.toLocaleString()}</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="h-3 w-3 text-[#7F5AF0]" />
              <span className="text-xs text-gray-400">Growth</span>
            </div>
            <span className="text-sm font-medium text-white">{startup.growthScore}</span>
          </div>
          <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
            <div className="flex items-center gap-1 mb-1">
              <AlertTriangle className="h-3 w-3 text-yellow-400" />
              <span className="text-xs text-gray-400">Risk</span>
            </div>
            <span className={`text-sm font-medium ${getRiskColor(startup.riskLevel)}`}>{startup.riskLevel}</span>
          </div>
          <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
            <div className="flex items-center gap-1 mb-1">
              <Users className="h-3 w-3 text-[#FF5470]" />
              <span className="text-xs text-gray-400">Interest</span>
            </div>
            <span className="text-sm font-medium text-white">{startup.investorInterest}</span>
          </div>
        </div>

        {/* AI Insights */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 mb-4"
          >
            <div className="flex items-center gap-1 mb-1">
              <Brain className="h-3 w-3 text-[#7F5AF0]" />
              <span className="text-xs text-[#7F5AF0]">AI Insights</span>
            </div>
            <p className="text-xs text-gray-300">{startup.aiInsights}</p>
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="flex justify-between">
          <Link href={`/startup/${startup.id}`} className="w-full">
            <Button
              variant="outline"
              size="sm"
              className="w-full border-gray-800 text-gray-300 hover:bg-[#7F5AF0]/10 hover:border-[#7F5AF0]/50"
            >
              View Details
            </Button>
          </Link>
          <div className="w-2"></div>
          <Link href={`/invest/${startup.id}`} className="w-full">
            <Button
              size="sm"
              className="w-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
            >
              Invest Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

