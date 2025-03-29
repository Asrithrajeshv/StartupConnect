"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LayoutGrid,
  List,
  Search,
  Filter,
  X,
  ChevronDown,
  BookmarkPlus,
  TrendingUp,
  Users,
  DollarSign,
  Brain,
} from "lucide-react"
import { StartupCard } from "@/components/startup-card"
import { StartupListItem } from "@/components/startup-list-item"
import { AIRecommendations } from "@/components/ai-recommendations"

// Mock data for startups
const MOCK_STARTUPS = [
  {
    id: "1",
    name: "EcoTrack",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "CleanTech",
    description: "AI-powered sustainability platform for businesses to track and reduce their carbon footprint",
    fundingGoal: 500000,
    currentFunding: 320000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 42,
    aiInsights:
      "Strong market potential with increasing corporate sustainability mandates. Team has relevant experience.",
    tags: ["Sustainability", "AI", "B2B"],
  },
  {
    id: "2",
    name: "FinanceFlow",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "FinTech",
    description: "Automated bookkeeping and financial forecasting solution for small businesses",
    fundingGoal: 350000,
    currentFunding: 210000,
    riskLevel: "Low",
    growthScore: 92,
    investorInterest: 56,
    aiInsights: "Addressing a clear pain point with proven market demand. Strong revenue model.",
    tags: ["Finance", "Automation", "SMB"],
  },
  {
    id: "3",
    name: "HealthSync",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "HealthTech",
    description: "Remote patient monitoring platform connecting patients with healthcare providers",
    fundingGoal: 750000,
    currentFunding: 450000,
    riskLevel: "Moderate",
    growthScore: 84,
    investorInterest: 38,
    aiInsights: "Growing telehealth market with regulatory tailwinds. Experienced healthcare team.",
    tags: ["Healthcare", "Telehealth", "IoT"],
  },
  {
    id: "4",
    name: "DataMesh",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Enterprise SaaS",
    description: "AI-powered data integration platform for enterprise data management",
    fundingGoal: 1000000,
    currentFunding: 650000,
    riskLevel: "Low",
    growthScore: 90,
    investorInterest: 64,
    aiInsights: "Strong enterprise demand for data solutions. Experienced founding team from tech giants.",
    tags: ["Data", "Enterprise", "AI"],
  },
  {
    id: "5",
    name: "RetailAI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Retail Tech",
    description: "AI-powered inventory management and demand forecasting for retailers",
    fundingGoal: 400000,
    currentFunding: 180000,
    riskLevel: "High",
    growthScore: 78,
    investorInterest: 29,
    aiInsights: "Innovative solution but facing established competitors. Strong technical team.",
    tags: ["Retail", "AI", "Supply Chain"],
  },
  {
    id: "6",
    name: "EduVerse",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "EdTech",
    description: "Virtual reality platform for immersive educational experiences",
    fundingGoal: 600000,
    currentFunding: 240000,
    riskLevel: "High",
    growthScore: 82,
    investorInterest: 35,
    aiInsights: "Growing EdTech market but VR adoption remains a challenge. Strong product vision.",
    tags: ["Education", "VR", "B2B2C"],
  },
  {
    id: "7",
    name: "SecureChain",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Cybersecurity",
    description: "Blockchain-based security solution for enterprise data protection",
    fundingGoal: 800000,
    currentFunding: 560000,
    riskLevel: "Moderate",
    growthScore: 85,
    investorInterest: 47,
    aiInsights: "Growing cybersecurity market with increasing threats. Technical team with security background.",
    tags: ["Security", "Blockchain", "Enterprise"],
  },
  {
    id: "8",
    name: "FoodConnect",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "FoodTech",
    description: "Farm-to-table platform connecting local farmers with restaurants and consumers",
    fundingGoal: 300000,
    currentFunding: 210000,
    riskLevel: "Moderate",
    growthScore: 80,
    investorInterest: 32,
    aiInsights: "Growing demand for sustainable food sources. Logistics remains a challenge.",
    tags: ["Food", "Marketplace", "Sustainability"],
  },
]

// Filter options
const INDUSTRIES = [
  "All Industries",
  "CleanTech",
  "FinTech",
  "HealthTech",
  "Enterprise SaaS",
  "Retail Tech",
  "EdTech",
  "Cybersecurity",
  "FoodTech",
]

const RISK_LEVELS = ["All Risks", "Low", "Moderate", "High"]

export default function StartupCatalogue() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [selectedRisk, setSelectedRisk] = useState("All Risks")
  const [fundingRange, setFundingRange] = useState([0, 1000000])
  const [growthScore, setGrowthScore] = useState([0, 100])
  const [filteredStartups, setFilteredStartups] = useState(MOCK_STARTUPS)
  const [bookmarkedStartups, setBookmarkedStartups] = useState<string[]>([])

  // Apply filters
  useEffect(() => {
    let filtered = MOCK_STARTUPS

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (startup) =>
          startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          startup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          startup.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply industry filter
    if (selectedIndustry !== "All Industries") {
      filtered = filtered.filter((startup) => startup.industry === selectedIndustry)
    }

    // Apply risk filter
    if (selectedRisk !== "All Risks") {
      filtered = filtered.filter((startup) => startup.riskLevel === selectedRisk)
    }

    // Apply funding range filter
    filtered = filtered.filter(
      (startup) => startup.fundingGoal >= fundingRange[0] && startup.fundingGoal <= fundingRange[1],
    )

    // Apply growth score filter
    filtered = filtered.filter(
      (startup) => startup.growthScore >= growthScore[0] && startup.growthScore <= growthScore[1],
    )

    setFilteredStartups(filtered)
  }, [searchQuery, selectedIndustry, selectedRisk, fundingRange, growthScore])

  // Toggle bookmark
  const toggleBookmark = (startupId: string) => {
    setBookmarkedStartups((prev) =>
      prev.includes(startupId) ? prev.filter((id) => id !== startupId) : [...prev, startupId],
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Startup Catalogue</h1>
      <div className="grid gap-6">
        <StartupListItem />
        {/* Add more startup items */}
      </div>
    </div>
  )
}

