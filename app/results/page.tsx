"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ExternalLink, Heart, Share2, Star, Target, TrendingUp, Users } from "lucide-react"
import { motion } from "framer-motion"
import { PageBackground } from "@/components/page-background"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("idea")

  const competitors = [
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
    { name: "Competitor C", logo: "/placeholder.svg?height=80&width=80", strength: 68, weakness: "High pricing" },
  ]

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 w-full max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
                Your Startup Idea
              </h1>
              <p className="text-gray-400">Based on your resume and preferences</p>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
              >
                <Heart className="h-4 w-4 mr-2 text-[#FF5470]" />
                Save
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
              >
                <Share2 className="h-4 w-4 mr-2 text-[#7F5AF0]" />
                Share
              </Button>
              <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                <Download className="h-4 w-4 mr-2" />
                Download Pitch Deck
              </Button>
            </div>
          </div>

          <div className="relative p-px rounded-xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] animate-pulse"></div>
            <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white mb-2">EcoTrack: AI-Powered Sustainability Platform</h2>
                  <p className="text-gray-300 mb-4">
                    A SaaS platform that helps businesses track, analyze, and improve their environmental impact using
                    AI and machine learning.
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
          </div>

          <Tabs defaultValue="idea" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 bg-transparent">
              {[
                { id: "idea", label: "Idea" },
                { id: "business", label: "Business Model" },
                { id: "competitors", label: "Competitors" },
                { id: "funding", label: "Funding" },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className={`relative py-3 data-[state=active]:shadow-none data-[state=active]:bg-transparent ${
                    activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]"
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="idea" className="mt-0">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Idea Overview</CardTitle>
                  <CardDescription>Detailed explanation of your startup idea</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    EcoTrack is an AI-powered sustainability platform that helps businesses measure, analyze, and reduce
                    their environmental impact. The platform uses machine learning algorithms to process data from
                    various sources, including energy usage, supply chain operations, and waste management, to provide
                    actionable insights and recommendations.
                  </p>
                  <p className="text-gray-300">
                    The platform includes features such as automated carbon footprint calculation, sustainability
                    reporting that meets global standards, predictive analytics for environmental impact, and
                    personalized recommendations for reducing environmental footprint.
                  </p>
                  <p className="text-gray-300">
                    With increasing regulatory pressure and consumer demand for sustainable practices, EcoTrack
                    addresses a growing market need while leveraging your technical expertise in data analysis and
                    software development.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="business" className="mt-0">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Business Model</CardTitle>
                  <CardDescription>Revenue streams and go-to-market strategy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Revenue Streams</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#7F5AF0]">1</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Subscription Model:</span> Tiered pricing based on
                          company size and feature access, starting at $499/month for small businesses and up to
                          $4,999/month for enterprise solutions.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#7F5AF0]">2</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Implementation Services:</span> One-time setup and
                          integration fees ranging from $2,000 to $25,000 depending on complexity.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#7F5AF0]">3</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Consulting Services:</span> Additional sustainability
                          consulting at $150-$250/hour.
                        </p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Go-to-Market Strategy</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#2CB67D]">1</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Initial Target:</span> Mid-sized manufacturing and
                          retail companies with existing sustainability initiatives but lacking sophisticated tools.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#2CB67D]">2</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Channel Strategy:</span> Direct sales team for
                          enterprise clients, digital marketing and self-service for smaller businesses.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#2CB67D]">3</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Partnerships:</span> Strategic alliances with
                          sustainability consultancies and ESG reporting platforms.
                        </p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="competitors" className="mt-0">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Competitor Analysis</CardTitle>
                  <CardDescription>Overview of market competitors and your advantages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {competitors.map((competitor, index) => (
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

                  <div>
                    <h3 className="text-lg font-medium text-white mb-4">Your Competitive Advantages</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#FF5470]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#FF5470]">1</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Advanced AI Capabilities:</span> More sophisticated
                          machine learning algorithms for predictive analytics compared to competitors.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#FF5470]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#FF5470]">2</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">Comprehensive Solution:</span> End-to-end platform
                          versus competitors' point solutions.
                        </p>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-[#FF5470]/20 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-xs font-bold text-[#FF5470]">3</span>
                        </div>
                        <p className="text-gray-300">
                          <span className="font-medium text-white">User Experience:</span> More intuitive interface and
                          actionable insights compared to data-heavy competitor approaches.
                        </p>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="funding" className="mt-0">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Funding Strategy</CardTitle>
                  <CardDescription>Financial projections and funding recommendations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Financial Projections</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
                        <p className="text-sm text-gray-400 mb-1">Year 1 Revenue</p>
                        <p className="text-2xl font-bold text-white">$750K</p>
                        <p className="text-xs text-gray-500">20 clients @ avg $37.5K/year</p>
                      </div>
                      <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
                        <p className="text-sm text-gray-400 mb-1">Year 2 Revenue</p>
                        <p className="text-2xl font-bold text-white">$2.4M</p>
                        <p className="text-xs text-gray-500">50 clients @ avg $48K/year</p>
                      </div>
                      <div className="rounded-xl border border-gray-800 bg-black/30 p-4">
                        <p className="text-sm text-gray-400 mb-1">Year 3 Revenue</p>
                        <p className="text-2xl font-bold text-white">$6.5M</p>
                        <p className="text-xs text-gray-500">100 clients @ avg $65K/year</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Recommended Funding Approach</h3>
                    <div className="rounded-xl border border-gray-800 bg-black/30 p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-4">
                          <Star className="h-5 w-5 text-[#7F5AF0]" />
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-white">Seed Round: $1.5M</h4>
                          <p className="text-sm text-gray-400">
                            Target: Angel investors and early-stage VCs focused on sustainability
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3 mb-4">
                        <p className="text-gray-300">
                          Based on your moderate risk profile and the capital-intensive nature of B2B SaaS, we recommend
                          raising a seed round to fund:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-bold text-[#2CB67D]">1</span>
                            </div>
                            <p className="text-gray-300">18 months of runway for a team of 8-10 people</p>
                          </li>
                          <li className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-bold text-[#2CB67D]">2</span>
                            </div>
                            <p className="text-gray-300">Product development and initial AI model training</p>
                          </li>
                          <li className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-3 mt-0.5">
                              <span className="text-xs font-bold text-[#2CB67D]">3</span>
                            </div>
                            <p className="text-gray-300">Go-to-market strategy execution and first 10 customers</p>
                          </li>
                        </ul>
                      </div>

                      <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                        <Button
                          variant="outline"
                          className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/5"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 text-[#7F5AF0]" />
                          View Investor Matches
                        </Button>
                        <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                          <Download className="h-4 w-4 mr-2" />
                          Download Pitch Deck
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <div className="mt-auto pt-8">
          <div className="w-full bg-gray-800/30 h-1 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full w-full rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span>Upload Resume</span>
            <span>Set Preferences</span>
            <span>Generate Ideas</span>
            <span className="font-medium text-white">Results</span>
          </div>
        </div>
      </div>
    </div>
  )
}

