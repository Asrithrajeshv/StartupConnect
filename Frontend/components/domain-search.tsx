"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowRight, Search, Globe, TrendingUp, DollarSign, Users, Target } from "lucide-react"
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

export function DomainSearch() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchParams, setSearchParams] = useState({
    industry: "",
    minInvestment: 10000,
    maxInvestment: 1000000,
    riskTolerance: "moderate",
    growthStage: "early",
    marketSize: "medium",
  })
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [startups, setStartups] = useState<Startup[]>([])
  const router = useRouter()

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "E-commerce",
    "Manufacturing",
    "Real Estate",
    "Food & Beverage",
    "Entertainment",
    "Transportation",
    "Energy",
    "Agriculture",
  ]

  const handleIndustryToggle = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry],
    )
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
  }

  const searchStartups = async () => {
    setIsLoading(true)
    try {
      // Get the mock startups data from the catalogue page
      const mockStartups = [
        // Technology Domain Startups
        {
          id: "1",
          name: "AI Code Assistant",
          logo: "/placeholder.svg?height=80&width=80",
          industry: "Technology",
          description: "AI-powered code completion and debugging tool for developers",
          fundingGoal: 800000,
          currentFunding: 480000,
          riskLevel: "Moderate",
          growthScore: 89,
          investorInterest: 52,
          aiInsights: "Strong developer demand for AI coding tools. Experienced team from major tech companies.",
          tags: ["AI", "Developer Tools", "Code Generation", "Machine Learning"],
        },
        // Healthcare Domain Startups
        {
          id: "2",
          name: "MedAI Assistant",
          logo: "/placeholder.svg?height=80&width=80",
          industry: "Healthcare",
          description: "AI-powered medical diagnosis assistant for healthcare professionals",
          fundingGoal: 900000,
          currentFunding: 540000,
          riskLevel: "High",
          growthScore: 86,
          investorInterest: 46,
          aiInsights: "Strong potential for healthcare cost reduction. Experienced medical team.",
          tags: ["Healthcare", "AI", "Diagnostics", "Medical Tech"],
        },
        // Finance Domain Startups
        {
          id: "3",
          name: "FinAI Advisor",
          logo: "/placeholder.svg?height=80&width=80",
          industry: "Finance",
          description: "AI-powered personal finance management and investment advisor",
          fundingGoal: 750000,
          currentFunding: 450000,
          riskLevel: "Moderate",
          growthScore: 88,
          investorInterest: 52,
          aiInsights: "Growing demand for personalized financial advice. Strong user base.",
          tags: ["FinTech", "AI", "Personal Finance", "Investment"],
        },
        // Education Domain Startups
        {
          id: "4",
          name: "EduAI Platform",
          logo: "/placeholder.svg?height=80&width=80",
          industry: "Education",
          description: "AI-powered personalized learning platform with adaptive content",
          fundingGoal: 600000,
          currentFunding: 360000,
          riskLevel: "Moderate",
          growthScore: 88,
          investorInterest: 51,
          aiInsights: "Growing demand for personalized education. Strong engagement metrics.",
          tags: ["EdTech", "AI", "Personalization", "Learning"],
        },
        // E-commerce Domain Startups
        {
          id: "5",
          name: "ShopAI",
          logo: "/placeholder.svg?height=80&width=80",
          industry: "E-commerce",
          description: "AI-powered product recommendation and inventory management system",
          fundingGoal: 700000,
          currentFunding: 420000,
          riskLevel: "Moderate",
          growthScore: 88,
          investorInterest: 52,
          aiInsights: "Strong ROI for retailers. Proven conversion rate improvement.",
          tags: ["E-commerce", "AI", "Recommendations", "Retail"],
        }
      ]

      // Filter startups based on selected criteria
      let filteredStartups = mockStartups.filter(startup => {
        // Industry filter
        if (selectedIndustries.length > 0 && !selectedIndustries.includes(startup.industry)) {
          return false
        }

        // Risk level filter
        if (searchParams.riskTolerance === "conservative" && startup.riskLevel !== "Low") {
          return false
        }
        if (searchParams.riskTolerance === "aggressive" && startup.riskLevel === "Low") {
          return false
        }

        // Funding range filter
        const funding = startup.fundingGoal
        if (funding < searchParams.minInvestment || funding > searchParams.maxInvestment) {
          return false
        }

        // Growth stage filter
        if (searchParams.growthStage === "early" && startup.growthScore < 80) {
          return false
        }
        if (searchParams.growthStage === "growth" && startup.growthScore < 90) {
          return false
        }

        return true
      })

      // Transform the data to match the expected format
      const transformedStartups = filteredStartups.map(startup => ({
        name: startup.name,
        description: startup.description,
        industry: startup.industry,
        fundingNeeded: `$${startup.fundingGoal.toLocaleString()}`,
        marketSize: startup.growthScore > 90 ? "Large" : startup.growthScore > 80 ? "Medium" : "Small",
        growthPotential: startup.growthScore > 90 ? "High" : startup.growthScore > 80 ? "Medium" : "Low",
        riskLevel: startup.riskLevel,
        marketAnalysis: startup.aiInsights,
        swotAnalysis: {
          strengths: ["Strong technical team", "Growing market demand", "Innovative solution"],
          weaknesses: ["Early stage", "Limited market presence"],
          opportunities: ["Market expansion", "Partnership potential"],
          threats: ["Competition", "Market uncertainty"]
        }
      }))

      // Store results in localStorage
      localStorage.setItem('searchResults', JSON.stringify(transformedStartups))
      
      // Close the dialog
      setIsOpen(false)
      
      // Redirect to search results page
      router.push('/investor/search-results')
    } catch (error) {
      console.error("Error searching startups:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-black/30 border-gray-800">
          <Globe className="h-4 w-4 mr-2" />
          Search Other Domains
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/90 border-gray-800 max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-white via-[#FF5470] to-[#7F5AF0] bg-clip-text text-transparent">
            Search Startups Across Domains
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label className="text-white">Industries</Label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {industries.map((industry) => (
                <div key={industry} className="flex items-center space-x-2">
                  <Checkbox
                    id={industry}
                    checked={selectedIndustries.includes(industry)}
                    onCheckedChange={() => handleIndustryToggle(industry)}
                    className="data-[state=checked]:bg-[#FF5470] data-[state=checked]:border-[#FF5470]"
                  />
                  <label htmlFor={industry} className="text-sm text-gray-300 cursor-pointer">
                    {industry}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-white">Investment Range</Label>
            <div className="pt-6 pb-2">
              <Slider
                defaultValue={[searchParams.minInvestment, searchParams.maxInvestment]}
                min={10000}
                max={1000000}
                step={10000}
                onValueChange={(value) =>
                  setSearchParams((prev) => ({
                    ...prev,
                    minInvestment: value[0],
                    maxInvestment: value[1],
                  }))
                }
                className="[&>span]:bg-[#FF5470]"
              />
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>{formatCurrency(searchParams.minInvestment)}</span>
              <span>{formatCurrency(searchParams.maxInvestment)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label className="text-white">Risk Tolerance</Label>
              <Select
                value={searchParams.riskTolerance}
                onValueChange={(value) =>
                  setSearchParams((prev) => ({ ...prev, riskTolerance: value }))
                }
              >
                <SelectTrigger className="bg-black/50 border-gray-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800">
                  <SelectItem value="conservative">Conservative</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="aggressive">Aggressive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Growth Stage</Label>
              <Select
                value={searchParams.growthStage}
                onValueChange={(value) =>
                  setSearchParams((prev) => ({ ...prev, growthStage: value }))
                }
              >
                <SelectTrigger className="bg-black/50 border-gray-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800">
                  <SelectItem value="early">Early Stage</SelectItem>
                  <SelectItem value="seed">Seed Stage</SelectItem>
                  <SelectItem value="growth">Growth Stage</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-white">Market Size</Label>
              <Select
                value={searchParams.marketSize}
                onValueChange={(value) =>
                  setSearchParams((prev) => ({ ...prev, marketSize: value }))
                }
              >
                <SelectTrigger className="bg-black/50 border-gray-800">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-gray-800">
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button
            onClick={searchStartups}
            disabled={isLoading || selectedIndustries.length === 0}
            className="w-full rounded-full bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] hover:shadow-[0_0_15px_rgba(255,84,112,0.5)]"
          >
            <span className="flex items-center gap-2">
              {isLoading ? "Searching..." : "Search Startups"}
              <ArrowRight className="w-4 h-4" />
            </span>
          </Button>

          {startups.length > 0 && (
            <div className="space-y-6 mt-8">
              <h3 className="text-xl font-bold text-white">Search Results</h3>
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
} 