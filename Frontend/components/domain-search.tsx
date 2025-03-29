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
      const prompt = `Find 10 promising startups that match the following criteria:
        - Industries: ${selectedIndustries.join(", ")}
        - Investment Range: ${formatCurrency(searchParams.minInvestment)} - ${formatCurrency(searchParams.maxInvestment)}
        - Risk Tolerance: ${searchParams.riskTolerance}
        - Growth Stage: ${searchParams.growthStage}
        - Market Size: ${searchParams.marketSize}

        For each startup, provide:
        1. Name and brief description
        2. Industry
        3. Funding needed
        4. Market size
        5. Growth potential
        6. Risk level
        7. Market analysis
        8. SWOT analysis

        Format the response as a JSON array of startup objects with the following structure:
        [
          {
            "name": "string",
            "description": "string",
            "industry": "string",
            "fundingNeeded": "string",
            "marketSize": "string",
            "growthPotential": "string",
            "riskLevel": "string",
            "marketAnalysis": "string",
            "swotAnalysis": {
              "strengths": ["string"],
              "weaknesses": ["string"],
              "opportunities": ["string"],
              "threats": ["string"]
            }
          }
        ]`

      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      })

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`)
      }

      const data = await response.json()
      
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts || !data.candidates[0].content.parts[0]) {
        throw new Error("Invalid API response structure")
      }

      const responseText = data.candidates[0].content.parts[0].text
      try {
        const startups = JSON.parse(responseText)
        if (!Array.isArray(startups)) {
          throw new Error("Response is not an array of startups")
        }
        setStartups(startups)
      } catch (parseError) {
        console.error("Error parsing JSON response:", parseError)
        throw new Error("Failed to parse startup data")
      }
    } catch (error) {
      console.error("Error searching startups:", error)
      // You might want to show an error message to the user here
      setStartups([])
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