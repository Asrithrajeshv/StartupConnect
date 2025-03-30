"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Target, DollarSign, TrendingUp } from "lucide-react"
import { useRouter } from "next/navigation"

interface Startup {
  name: string
  description: string
  industry: string
  fundingNeeded: string
  marketSize: string
  growthPotential: string
  riskLevel: string
  marketAnalysis: string
  swotAnalysis: {
    strengths: string[]
    weaknesses: string[]
    opportunities: string[]
    threats: string[]
  }
}

export default function SearchResultsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [startups, setStartups] = useState<Startup[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Get search results from localStorage
    const searchResults = localStorage.getItem('searchResults')
    if (searchResults) {
      setStartups(JSON.parse(searchResults))
    }
    setIsLoading(false)
  }, [])

  const handleBack = () => {
    router.push('/investor/marketplace')
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="text-gray-400 hover:text-white"
            >
              ← Back to Marketplace
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#FF5470] to-[#7F5AF0] bg-clip-text text-transparent">
              Search Results
            </h1>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search within results..."
              className="pl-10 bg-black/30 border-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Results */}
          {isLoading ? (
            <div className="text-center text-gray-400">Loading results...</div>
          ) : startups.length > 0 ? (
            <div className="space-y-6">
              {startups.map((startup, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-[#7F5AF0]/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-2">{startup.name}</h4>
                      <p className="text-gray-400 mb-3">{startup.description}</p>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Target className="h-4 w-4 text-[#7F5AF0]" />
                          {startup.industry}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-[#2CB67D]" />
                          {startup.fundingNeeded}
                        </div>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="h-4 w-4 text-[#FF5470]" />
                          {startup.growthPotential}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-white font-medium mb-2">Market Analysis</h5>
                      <p className="text-gray-400 text-sm">{startup.marketAnalysis}</p>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-2">SWOT Analysis</h5>
                      <div className="space-y-2">
                        <div>
                          <span className="text-[#2CB67D] text-sm font-medium">Strengths:</span>
                          <ul className="list-disc list-inside text-gray-400 text-sm ml-2">
                            {startup.swotAnalysis.strengths.map((strength, i) => (
                              <li key={i}>{strength}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-[#FF5470] text-sm font-medium">Weaknesses:</span>
                          <ul className="list-disc list-inside text-gray-400 text-sm ml-2">
                            {startup.swotAnalysis.weaknesses.map((weakness, i) => (
                              <li key={i}>{weakness}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-[#7F5AF0] text-sm font-medium">Opportunities:</span>
                          <ul className="list-disc list-inside text-gray-400 text-sm ml-2">
                            {startup.swotAnalysis.opportunities.map((opportunity, i) => (
                              <li key={i}>{opportunity}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <span className="text-yellow-400 text-sm font-medium">Threats:</span>
                          <ul className="list-disc list-inside text-gray-400 text-sm ml-2">
                            {startup.swotAnalysis.threats.map((threat, i) => (
                              <li key={i}>{threat}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-400">No results found</div>
          )}
        </motion.div>
      </main>
    </div>
  )
} 