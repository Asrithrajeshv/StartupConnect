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

export default function CataloguePage() {
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
              Investor Dashboard
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Startup Catalogue</h1>
          <p className="text-gray-400 max-w-2xl">
            Discover and invest in promising startups across various industries. Use our AI-powered filters to find the
            perfect match for your investment portfolio.
          </p>
        </div>

        {/* AI Recommendations */}
        <AIRecommendations />

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="relative w-full md:w-auto flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search startups, industries, or tags..."
              className="pl-10 bg-gray-900/50 border-gray-800 focus:border-[#7F5AF0] text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              className={`border-gray-800 ${
                showFilters ? "bg-[#7F5AF0]/20 border-[#7F5AF0]/50 text-[#7F5AF0]" : "bg-gray-900/50 text-gray-400"
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {showFilters ? <X className="h-4 w-4 ml-2" /> : <ChevronDown className="h-4 w-4 ml-2" />}
            </Button>

            <div className="border-l border-gray-800 h-8 hidden md:block"></div>

            <div className="flex items-center bg-gray-900/50 rounded-md p-1">
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-sm ${view === "grid" ? "bg-gray-800" : "text-gray-400"}`}
                onClick={() => setView("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className={`rounded-sm ${view === "list" ? "bg-gray-800" : "text-gray-400"}`}
                onClick={() => setView("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
                    <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                      <SelectTrigger className="bg-gray-900/50 border-gray-800 text-white">
                        <SelectValue placeholder="Select Industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        {INDUSTRIES.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Risk Level</label>
                    <Select value={selectedRisk} onValueChange={setSelectedRisk}>
                      <SelectTrigger className="bg-gray-900/50 border-gray-800 text-white">
                        <SelectValue placeholder="Select Risk Level" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        {RISK_LEVELS.map((risk) => (
                          <SelectItem key={risk} value={risk}>
                            {risk}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Funding Goal Range: ${fundingRange[0].toLocaleString()} - ${fundingRange[1].toLocaleString()}
                    </label>
                    <Slider
                      defaultValue={[0, 1000000]}
                      min={0}
                      max={1000000}
                      step={50000}
                      value={fundingRange}
                      onValueChange={setFundingRange}
                      className="my-4"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Growth Score: {growthScore[0]} - {growthScore[1]}
                    </label>
                    <Slider
                      defaultValue={[0, 100]}
                      min={0}
                      max={100}
                      step={5}
                      value={growthScore}
                      onValueChange={setGrowthScore}
                      className="my-4"
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mr-2 border-gray-800 text-gray-400"
                    onClick={() => {
                      setSelectedIndustry("All Industries")
                      setSelectedRisk("All Risks")
                      setFundingRange([0, 1000000])
                      setGrowthScore([0, 100])
                      setSearchQuery("")
                    }}
                  >
                    Reset Filters
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Stats */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-400">
            Showing <span className="text-white font-medium">{filteredStartups.length}</span> startups
          </p>
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm">Sort by:</span>
            <Select defaultValue="aiRanking">
              <SelectTrigger className="bg-gray-900/50 border-gray-800 text-white h-8 text-sm w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 border-gray-800">
                <SelectItem value="aiRanking">
                  <div className="flex items-center">
                    <Brain className="h-3 w-3 mr-2 text-[#7F5AF0]" />
                    AI Ranking
                  </div>
                </SelectItem>
                <SelectItem value="fundingProgress">
                  <div className="flex items-center">
                    <DollarSign className="h-3 w-3 mr-2 text-[#2CB67D]" />
                    Funding Progress
                  </div>
                </SelectItem>
                <SelectItem value="investorInterest">
                  <div className="flex items-center">
                    <Users className="h-3 w-3 mr-2 text-[#FF5470]" />
                    Investor Interest
                  </div>
                </SelectItem>
                <SelectItem value="growthScore">
                  <div className="flex items-center">
                    <TrendingUp className="h-3 w-3 mr-2 text-[#7F5AF0]" />
                    Growth Score
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs for All/Bookmarked */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-gray-900/30 border border-gray-800 p-1">
            <TabsTrigger value="all" className="data-[state=active]:bg-gray-800">
              All Startups
            </TabsTrigger>
            <TabsTrigger value="bookmarked" className="data-[state=active]:bg-gray-800">
              Bookmarked ({bookmarkedStartups.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            {filteredStartups.length === 0 ? (
              <div className="text-center py-12 bg-gray-900/20 rounded-xl border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gray-900/50 flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">No startups found</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  We couldn't find any startups matching your current filters. Try adjusting your search criteria.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedIndustry("All Industries")
                    setSelectedRisk("All Risks")
                    setFundingRange([0, 1000000])
                    setGrowthScore([0, 100])
                    setSearchQuery("")
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStartups.map((startup) => (
                  <StartupCard
                    key={startup.id}
                    startup={startup}
                    isBookmarked={bookmarkedStartups.includes(startup.id)}
                    onBookmark={() => toggleBookmark(startup.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredStartups.map((startup) => (
                  <StartupListItem
                    key={startup.id}
                    startup={startup}
                    isBookmarked={bookmarkedStartups.includes(startup.id)}
                    onBookmark={() => toggleBookmark(startup.id)}
                  />
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="bookmarked" className="mt-6">
            {bookmarkedStartups.length === 0 ? (
              <div className="text-center py-12 bg-gray-900/20 rounded-xl border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gray-900/50 flex items-center justify-center mx-auto mb-4">
                  <BookmarkPlus className="h-8 w-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-medium text-white mb-2">No bookmarked startups</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  You haven't bookmarked any startups yet. Browse the catalogue and bookmark startups you're interested
                  in.
                </p>
                <Button variant="outline" onClick={() => document.getElementById("all-tab")?.click()}>
                  Browse Startups
                </Button>
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredStartups
                  .filter((startup) => bookmarkedStartups.includes(startup.id))
                  .map((startup) => (
                    <StartupCard
                      key={startup.id}
                      startup={startup}
                      isBookmarked={true}
                      onBookmark={() => toggleBookmark(startup.id)}
                    />
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredStartups
                  .filter((startup) => bookmarkedStartups.includes(startup.id))
                  .map((startup) => (
                    <StartupListItem
                      key={startup.id}
                      startup={startup}
                      isBookmarked={true}
                      onBookmark={() => toggleBookmark(startup.id)}
                    />
                  ))}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Load More Button */}
        {filteredStartups.length > 0 && (
          <div className="text-center mt-10">
            <Button
              variant="outline"
              className="border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/10 text-gray-300"
            >
              Load More Startups
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </main>
    </div>
  )
}

