"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import {
  ArrowRight,
  BarChart,
  Bell,
  Brain,
  Clock,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  HandshakeIcon,
  LineChart,
  Plus,
  Settings,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  RevenueChart,
  UsersChart,
  BurnRateChart,
  RevenueForecastChart,
  MarketSegmentsChart,
  CompetitorLandscapeChart,
  RunwayChart,
  MarketSizeChart,
  RevenueStreamsChart,
  FiveYearForecastChart,
} from "@/components/charts"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      {/* Dashboard Header */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F5AF0] via-[#2CB67D] to-[#FF5470] flex items-center justify-center shadow-lg shadow-[#7F5AF0]/20">
                <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                <div className="relative w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7F5AF0]/30 to-[#2CB67D]/30 rounded-lg"></div>
                  <div className="relative w-4 h-4 rounded-md bg-white/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-sm bg-white/40"></div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF5470] shadow-lg shadow-[#FF5470]/50"></div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">EcoTrack Dashboard</h1>
              <span className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs border border-[#2CB67D]/30">
                Active
              </span>
            </div>
            <p className="text-gray-400">AI-powered sustainability platform for businesses</p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
            >
              <Bell className="w-4 h-4 mr-2" />
              Notifications
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
            >
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
              <Plus className="w-4 h-4 mr-2" />
              Find Investors
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Navigation */}
      <section className="relative z-10 container mx-auto px-4 pb-8">
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-8 mb-8 bg-transparent">
            {[
              { id: "overview", label: "Overview" },
              { id: "market", label: "Market Analysis" },
              { id: "forecast", label: "Financial Forecast" },
              { id: "swot", label: "SWOT Analysis" },
              { id: "investors", label: "Investors" },
              { id: "funding", label: "Funding" },
              { id: "loan", label: "Loan & Sale" },
              { id: "collaboration", label: "Collaboration" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`relative py-1.5 text-sm data-[state=active]:shadow-none data-[state=active]:bg-transparent ${
                  activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeDashboardTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]"
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <DollarSign className="w-4 h-4 mr-2 text-[#7F5AF0]" />
                    Revenue
                  </CardTitle>
                  <CardDescription>Monthly recurring revenue</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-1">$78,450</div>
                  <div className="flex items-center">
                    <span className="text-[#2CB67D] text-sm mr-1">+12.4%</span>
                    <span className="text-gray-400 text-xs">from last month</span>
                  </div>
                  <div className="mt-4 h-[60px]">
                    <RevenueChart />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <CreditCard className="w-4 h-4 mr-2 text-[#FF5470]" />
                    Burn Rate
                  </CardTitle>
                  <CardDescription>Monthly expenses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-1">$42,300</div>
                  <div className="flex items-center">
                    <span className="text-[#2CB67D] text-sm mr-1">-3.2%</span>
                    <span className="text-gray-400 text-xs">from last month</span>
                  </div>
                  <div className="mt-4 h-[60px]">
                    <BurnRateChart />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-[#FFD700]" />
                    Profit
                  </CardTitle>
                  <CardDescription>Monthly net profit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white mb-1">$36,150</div>
                  <div className="flex items-center">
                    <span className="text-[#2CB67D] text-sm mr-1">+15.8%</span>
                    <span className="text-gray-400 text-xs">from last month</span>
                  </div>
                  <div className="mt-4 h-[60px]">
                    <RevenueChart />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Revenue Forecast</CardTitle>
                    <CardDescription>Projected revenue for the next 12 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <RevenueForecastChart />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800 h-full">
                  <CardHeader>
                    <CardTitle>Funding Status</CardTitle>
                    <CardDescription>Current funding round and runway</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-sm text-gray-400">Seed Round</div>
                          <div className="text-sm font-medium text-white">$250,000</div>
                        </div>
                        <Progress value={75} className="h-2 bg-gray-800">
                          <div className="h-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] rounded-full" />
                        </Progress>
                        <div className="flex justify-between items-center mt-1">
                          <div className="text-xs text-gray-500">$187,500 used</div>
                          <div className="text-xs text-gray-500">$62,500 remaining</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm text-gray-400">Runway</div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 text-[#2CB67D] mr-1" />
                            <span className="text-sm font-medium text-white">14 months</span>
                          </div>
                        </div>
                        <div className="p-3 rounded-lg border border-gray-800 bg-black/30">
                          <div className="flex justify-between items-center mb-2">
                            <div className="text-xs text-gray-500">Next Payment Due</div>
                            <div className="text-xs text-gray-500">May 15, 2023</div>
                          </div>
                          <div className="text-sm font-medium text-white">$8,250</div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <div className="text-sm text-gray-400">Investor Match Score</div>
                          <div className="text-sm font-medium text-white">92%</div>
                        </div>
                        <div className="p-3 rounded-lg border border-gray-800 bg-black/30">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                              <HandshakeIcon className="w-4 h-4 text-[#7F5AF0]" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">5 New Investor Matches</div>
                              <div className="text-xs text-gray-500">View potential investors</div>
                            </div>
                            <Button variant="ghost" size="icon" className="ml-auto">
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>AI Insights</CardTitle>
                  <CardDescription>Personalized recommendations based on your data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#7F5AF0] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Growth Opportunity Detected</h4>
                          <p className="text-sm text-gray-300">
                            Your user acquisition cost has decreased by 18% while conversion rates have increased.
                            Consider increasing your marketing budget by 15-20% to capitalize on this efficiency.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">Generated 2 hours ago</div>
                        <Button variant="link" size="sm" className="h-auto p-0 text-[#7F5AF0]">
                          <span className="text-xs flex items-center gap-1">
                            View Details
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#2CB67D] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Investor Interest Alert</h4>
                          <p className="text-sm text-gray-300">
                            Three investors specializing in sustainability tech have viewed your profile in the last 24
                            hours. Consider updating your pitch deck with your latest user metrics.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-gray-500">Generated 5 hours ago</div>
                        <Button variant="link" size="sm" className="h-auto p-0 text-[#2CB67D]">
                          <span className="text-xs flex items-center gap-1">
                            View Investors
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Competitor Watchlist</CardTitle>
                  <CardDescription>Monitor your top competitors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "GreenMetrics",
                        logo: "https://ui-avatars.com/api/?name=GreenMetrics&background=2CB67D&color=fff&size=32",
                        change: "+2.4%",
                        positive: true,
                        alert: "Launched new feature",
                        marketShare: 12.4,
                      },
                      {
                        name: "EcoSense",
                        logo: "https://ui-avatars.com/api/?name=EcoSense&background=7F5AF0&color=fff&size=32",
                        change: "-1.8%",
                        positive: false,
                        alert: "Lost key customer",
                        marketShare: 8.7,
                      },
                      {
                        name: "SustainAI",
                        logo: "https://ui-avatars.com/api/?name=SustainAI&background=FF5470&color=fff&size=32",
                        change: "+3.2%",
                        positive: true,
                        alert: "Raised $5M Series A",
                        marketShare: 10.2,
                      },
                      {
                        name: "EcoTrack",
                        logo: "https://ui-avatars.com/api/?name=EcoTrack&background=FFD700&color=fff&size=32",
                        change: "+1.5%",
                        positive: true,
                        alert: "New partnership",
                        marketShare: 9.8,
                      },
                      {
                        name: "GreenTech",
                        logo: "https://ui-avatars.com/api/?name=GreenTech&background=2CB67D&color=fff&size=32",
                        change: "-2.1%",
                        positive: false,
                        alert: "Service outage",
                        marketShare: 7.5,
                      },
                      {
                        name: "EcoFlow",
                        logo: "https://ui-avatars.com/api/?name=EcoFlow&background=7F5AF0&color=fff&size=32",
                        change: "+4.2%",
                        positive: true,
                        alert: "New product launch",
                        marketShare: 6.9,
                      }
                    ].map((competitor, index) => (
                      <div key={index} className="p-3 rounded-lg border border-gray-800 bg-black/30">
                        <div className="flex items-center gap-3 mb-2">
                          <Image
                            src={competitor.logo}
                            alt={competitor.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="text-white font-medium">{competitor.name}</h4>
                              <span className={competitor.positive ? "text-[#2CB67D]" : "text-[#FF5470]"}>
                                {competitor.change}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <p className="text-xs text-gray-500">Market Share: {competitor.marketShare}%</p>
                              <p className="text-xs text-gray-500">{competitor.alert}</p>
                            </div>
                          </div>
                        </div>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              index === 0 ? "bg-[#FF5470]" : 
                              index === 1 ? "bg-[#7F5AF0]" : 
                              index === 2 ? "bg-[#2CB67D]" :
                              index === 3 ? "bg-[#FFD700]" :
                              index === 4 ? "bg-[#2CB67D]" :
                              "bg-[#7F5AF0]"
                            }`}
                            style={{ width: `${competitor.marketShare}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Market Analysis Tab */}
          <TabsContent value="market" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Market Size & Growth</CardTitle>
                    <CardDescription>Total addressable market and growth trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] mb-4">
                      <MarketSizeChart />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/20">
                        <p className="text-xs text-gray-400 mb-1">Total Market Size</p>
                        <p className="text-lg font-bold text-white">$8.2B</p>
                        <p className="text-xs text-[#2CB67D]">+12.5% YoY</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#2CB67D]/10 border border-[#2CB67D]/20">
                        <p className="text-xs text-gray-400 mb-1">Serviceable Market</p>
                        <p className="text-lg font-bold text-white">$2.4B</p>
                        <p className="text-xs text-[#2CB67D]">+18.3% YoY</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#FF5470]/10 border border-[#FF5470]/20">
                        <p className="text-xs text-gray-400 mb-1">Your Market Share</p>
                        <p className="text-lg font-bold text-white">0.32%</p>
                        <p className="text-xs text-[#2CB67D]">+0.08% YoY</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800 mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Market Segments</CardTitle>
                    <CardDescription>Distribution by industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[180px] mb-2">
                      <MarketSegmentsChart />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#7F5AF0] mr-2"></div>
                          <span className="text-xs text-gray-300">Manufacturing</span>
                        </div>
                        <span className="text-xs font-medium text-white">42%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#2CB67D] mr-2"></div>
                          <span className="text-xs text-gray-300">Retail</span>
                        </div>
                        <span className="text-xs font-medium text-white">28%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#FF5470] mr-2"></div>
                          <span className="text-xs text-gray-300">Technology</span>
                        </div>
                        <span className="text-xs font-medium text-white">18%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-[#FFD700] mr-2"></div>
                          <span className="text-xs text-gray-300">Others</span>
                        </div>
                        <span className="text-xs font-medium text-white">12%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Growth Drivers</CardTitle>
                    <CardDescription>Key factors driving market growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                          <TrendingUp className="w-3 h-3 text-[#7F5AF0]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Regulatory Pressure</p>
                          <p className="text-xs text-gray-400">Increasing environmental regulations driving adoption</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                          <TrendingUp className="w-3 h-3 text-[#2CB67D]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Consumer Demand</p>
                          <p className="text-xs text-gray-400">Growing consumer preference for sustainable brands</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                          <TrendingUp className="w-3 h-3 text-[#FF5470]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Cost Savings</p>
                          <p className="text-xs text-gray-400">Sustainability initiatives reducing operational costs</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Competitor Landscape</CardTitle>
                  <CardDescription>Positioning map of key competitors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px] mb-4">
                    <CompetitorLandscapeChart />
                  </div>
                  <div className="flex justify-between">
                    <div className="text-xs text-gray-500">
                      <span className="inline-block w-3 h-3 rounded-full bg-[#7F5AF0] mr-1"></span>
                      Your Position
                    </div>
                    <Button variant="link" size="sm" className="h-auto p-0 text-[#7F5AF0]">
                      <span className="text-xs flex items-center gap-1">
                        View Detailed Analysis
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Market Trends</CardTitle>
                  <CardDescription>Emerging trends and opportunities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "AI-Powered Sustainability Solutions",
                        description: "Growing adoption of AI to optimize resource usage and reduce waste",
                        relevance: "High",
                        opportunity: "Strong",
                        color: "#7F5AF0",
                      },
                      {
                        title: "Carbon Credit Marketplaces",
                        description: "Expansion of carbon credit trading platforms for businesses",
                        relevance: "Medium",
                        opportunity: "Moderate",
                        color: "#2CB67D",
                      },
                      {
                        title: "Supply Chain Transparency",
                        description: "Increasing demand for end-to-end supply chain visibility",
                        relevance: "High",
                        opportunity: "Strong",
                        color: "#7F5AF0",
                      },
                      {
                        title: "Circular Economy Solutions",
                        description: "Tools for product lifecycle management and waste reduction",
                        relevance: "Medium",
                        opportunity: "Strong",
                        color: "#2CB67D",
                      },
                    ].map((trend, index) => (
                      <div key={index} className="p-4 rounded-lg border border-gray-800 bg-black/30">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-medium">{trend.title}</h4>
                          <div
                            className={`px-2 py-0.5 rounded-full bg-[${trend.color}]/20 text-[${trend.color}] text-xs`}
                          >
                            {trend.relevance} Relevance
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mb-2">{trend.description}</p>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-gray-500">Opportunity: {trend.opportunity}</div>
                          <Button variant="ghost" size="sm" className="h-6 px-2">
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Financial Forecast Tab */}
          <TabsContent value="forecast" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-3">
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <CardTitle>5-Year Financial Forecast</CardTitle>
                      <CardDescription>AI-generated revenue and profit projections</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="h-8 rounded-full">
                        <LineChart className="w-3 h-3 mr-1" />
                        Revenue
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 rounded-full">
                        <BarChart className="w-3 h-3 mr-1" />
                        Profit
                      </Button>
                      <Button variant="outline" size="sm" className="h-8 rounded-full">
                        <Users className="w-3 h-3 mr-1" />
                        Users
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[400px] mb-4">
                      <FiveYearForecastChart />
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                      {[
                        { year: "Year 1", revenue: "$1.2M", profit: "$320K", users: "5.8K" },
                        { year: "Year 2", revenue: "$3.5M", profit: "$980K", users: "12.4K" },
                        { year: "Year 3", revenue: "$7.8M", profit: "$2.3M", users: "24.7K" },
                        { year: "Year 4", revenue: "$14.2M", profit: "$4.8M", users: "42.3K" },
                        { year: "Year 5", revenue: "$22.5M", profit: "$8.2M", users: "68.5K" },
                      ].map((year, index) => (
                        <div key={index} className="p-3 rounded-lg border border-gray-800 bg-black/30">
                          <p className="text-xs text-gray-400 mb-1">{year.year}</p>
                          <div className="space-y-1">
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500">Revenue:</span>
                              <span className="text-xs font-medium text-white">{year.revenue}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500">Profit:</span>
                              <span className="text-xs font-medium text-white">{year.profit}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-gray-500">Users:</span>
                              <span className="text-xs font-medium text-white">{year.users}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Revenue Streams</CardTitle>
                  <CardDescription>Breakdown of projected revenue sources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[200px] mb-4">
                    <RevenueStreamsChart />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#7F5AF0] mr-2"></div>
                        <span className="text-xs text-gray-300">Subscription</span>
                      </div>
                      <span className="text-xs font-medium text-white">65%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#2CB67D] mr-2"></div>
                        <span className="text-xs text-gray-300">Implementation</span>
                      </div>
                      <span className="text-xs font-medium text-white">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#FF5470] mr-2"></div>
                        <span className="text-xs text-gray-300">Consulting</span>
                      </div>
                      <span className="text-xs font-medium text-white">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Unit Economics</CardTitle>
                  <CardDescription>Key metrics and customer lifetime value</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-white">Customer Acquisition Cost</h4>
                        <span className="text-[#2CB67D] text-xs">-8.3% MoM</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">$1,250</div>
                      <p className="text-xs text-gray-500">Average cost to acquire a new customer</p>
                    </div>

                    <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-white">Customer Lifetime Value</h4>
                        <span className="text-[#2CB67D] text-xs">+12.5% MoM</span>
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">$8,750</div>
                      <p className="text-xs text-gray-500">Average revenue from a customer</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-white">LTV:CAC Ratio</h4>
                        <span className="text-lg font-bold text-white">7.0x</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Target: 3.0x</span>
                        <span>Excellent: 7.0x+</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-white">Payback Period</h4>
                        <span className="text-lg font-bold text-white">7.2 months</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Target: 12 months</span>
                        <span>Excellent: 6 months</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-medium text-white">Gross Margin</h4>
                        <span className="text-lg font-bold text-white">78%</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Target: 70%</span>
                        <span>Excellent: 80%+</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>AI-Generated Financial Insights</CardTitle>
                  <CardDescription>Strategic recommendations based on forecast data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#7F5AF0] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Optimize Pricing Strategy</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Your current pricing model is undervalued compared to market benchmarks. Consider a 15-20%
                            price increase for enterprise tiers, which could increase revenue by $180K annually with
                            minimal customer churn based on your strong retention metrics.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              High Impact
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                              Low Risk
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-black/30 text-gray-400 text-xs">
                              Revenue Optimization
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#2CB67D] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Expand Sales Team</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Your sales efficiency metrics show each sales rep generates 4.2x their cost. Expanding your
                            sales team by 3-5 people could accelerate growth by 25-30% in the next fiscal year, with a
                            projected ROI of 320% within 18 months.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              High Impact
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                              Medium Risk
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-black/30 text-gray-400 text-xs">
                              Growth Strategy
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#FF5470] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Consider Series A Funding</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Based on your growth trajectory and market opportunity, you're well-positioned for a Series
                            A round of $5-7M. This would extend your runway by 24 months and enable you to capture an
                            additional 2.8% market share through accelerated product development and marketing.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              High Impact
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                              High Risk
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-black/30 text-gray-400 text-xs">
                              Funding Strategy
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* SWOT Analysis Tab */}
          <TabsContent value="swot" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-2">
                      <Star className="w-3 h-3 text-[#7F5AF0]" />
                    </div>
                    Strengths
                  </CardTitle>
                  <CardDescription>Your competitive advantages</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Proprietary AI Technology",
                        description:
                          "Your machine learning algorithms outperform competitors by 32% in accuracy and processing speed",
                        impact: "High",
                      },
                      {
                        title: "Strong Customer Retention",
                        description: "97.8% monthly retention rate, significantly above industry average of 92%",
                        impact: "High",
                      },
                      {
                        title: "Experienced Leadership Team",
                        description: "Founding team with 25+ years combined experience in sustainability and software",
                        impact: "Medium",
                      },
                      {
                        title: "Scalable SaaS Architecture",
                        description:
                          "Cloud-native platform with 99.99% uptime and ability to scale to enterprise needs",
                        impact: "Medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-white font-medium">{item.title}</h4>
                          <div className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                            {item.impact} Impact
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#FF5470]/20 flex items-center justify-center mr-2">
                      <Shield className="w-3 h-3 text-[#FF5470]" />
                    </div>
                    Weaknesses
                  </CardTitle>
                  <CardDescription>Areas for improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Limited Market Presence",
                        description:
                          "Low brand recognition compared to established competitors with 5+ years in market",
                        impact: "High",
                      },
                      {
                        title: "Small Sales Team",
                        description: "Current team of 3 sales reps limiting growth potential and market reach",
                        impact: "High",
                      },
                      {
                        title: "Integration Complexity",
                        description:
                          "Average implementation time of 6 weeks is longer than industry standard of 3-4 weeks",
                        impact: "Medium",
                      },
                      {
                        title: "Limited Industry Coverage",
                        description: "Solution optimized for manufacturing and retail, with gaps in other verticals",
                        impact: "Medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-white font-medium">{item.title}</h4>
                          <div className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                            {item.impact} Impact
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mr-2">
                      <TrendingUp className="w-3 h-3 text-[#2CB67D]" />
                    </div>
                    Opportunities
                  </CardTitle>
                  <CardDescription>Potential growth areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Regulatory Tailwinds",
                        description: "New sustainability reporting requirements creating urgent demand for solutions",
                        impact: "High",
                      },
                      {
                        title: "International Expansion",
                        description: "Growing demand in European markets with stricter environmental regulations",
                        impact: "High",
                      },
                      {
                        title: "Strategic Partnerships",
                        description:
                          "Potential alliances with ESG reporting platforms and sustainability consultancies",
                        impact: "Medium",
                      },
                      {
                        title: "Carbon Credit Integration",
                        description: "Expanding into carbon credit marketplace could open new revenue streams",
                        impact: "Medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-white font-medium">{item.title}</h4>
                          <div className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                            {item.impact} Impact
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-[#FF5470]/20 flex items-center justify-center mr-2">
                      <Shield className="w-3 h-3 text-[#FF5470]" />
                    </div>
                    Threats
                  </CardTitle>
                  <CardDescription>Potential risks and challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Increasing Competition",
                        description:
                          "3 new competitors entered the market in the last 6 months with significant funding",
                        impact: "High",
                      },
                      {
                        title: "Pricing Pressure",
                        description: "Larger competitors offering bundled solutions at discounted rates",
                        impact: "Medium",
                      },
                      {
                        title: "Talent Acquisition",
                        description:
                          "Difficulty hiring specialized AI and sustainability experts in competitive market",
                        impact: "Medium",
                      },
                      {
                        title: "Economic Uncertainty",
                        description: "Potential budget cuts for sustainability initiatives during economic downturns",
                        impact: "Medium",
                      },
                    ].map((item, index) => (
                      <div key={index} className="p-3 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-white font-medium">{item.title}</h4>
                          <div className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                            {item.impact} Impact
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Investors Tab */}
          <TabsContent value="investors" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Investor Matches</CardTitle>
                    <CardDescription>AI-matched investors based on your startup profile</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "Green Ventures Capital",
                          logo: "https://ui-avatars.com/api/?background=2CB67D&color=fff&size=48&bold=true&length=1&name=G",
                          type: "Venture Capital",
                          focus: "Sustainability, CleanTech",
                          stage: "Seed, Series A",
                          match: 94,
                          portfolio: "12 companies",
                          avgInvestment: "$2.5M - $5M",
                        },
                        {
                          name: "Impact Horizon Fund",
                          logo: "https://ui-avatars.com/api/?background=7F5AF0&color=fff&size=48&bold=true&length=1&name=I",
                          type: "Impact Investor",
                          focus: "ESG, Sustainability",
                          stage: "Seed, Series A",
                          match: 92,
                          portfolio: "28 companies",
                          avgInvestment: "$1M - $3M",
                        },
                        {
                          name: "TechSustain Partners",
                          logo: "https://ui-avatars.com/api/?background=FF5470&color=fff&size=48&bold=true&length=1&name=T",
                          type: "Venture Capital",
                          focus: "Enterprise SaaS, Sustainability",
                          stage: "Series A, Series B",
                          match: 88,
                          portfolio: "35 companies",
                          avgInvestment: "$3M - $8M",
                        },
                        {
                          name: "Future Planet Capital",
                          logo: "https://ui-avatars.com/api/?background=FFD700&color=fff&size=48&bold=true&length=1&name=F",
                          type: "Corporate VC",
                          focus: "Climate Tech, AI",
                          stage: "Seed, Series A",
                          match: 85,
                          portfolio: "42 companies",
                          avgInvestment: "$2M - $6M",
                        },
                      ].map((investor, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5 transition-all duration-200"
                        >
                          <div className="flex items-center gap-4 mb-3">
                            <Image
                              src={investor.logo}
                              alt={investor.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <h4 className="text-white font-medium">{investor.name}</h4>
                                <div className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                                  {investor.match}% Match
                                </div>
                              </div>
                              <p className="text-sm text-gray-400">
                                {investor.type} • {investor.focus}
                              </p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4 mb-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Investment Stage</p>
                              <p className="text-sm text-white">{investor.stage}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Portfolio Size</p>
                              <p className="text-sm text-white">{investor.portfolio}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Average Investment</p>
                              <p className="text-sm text-white">{investor.avgInvestment}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Match Reason</p>
                              <p className="text-sm text-white">Industry & Growth Stage</p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button variant="link" size="sm" className="h-auto p-0 text-[#7F5AF0]">
                              <span className="text-xs flex items-center gap-1">
                                View Profile
                                <ArrowRight className="w-3 h-3" />
                              </span>
                            </Button>

                            <Button
                              size="sm"
                              className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                            >
                              <span className="text-xs flex items-center gap-1">
                                <HandshakeIcon className="w-3 h-3" />
                                Connect
                              </span>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800 mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Investor Match Criteria</CardTitle>
                    <CardDescription>Customize your investor matching</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-white mb-1 block">Investment Stage</label>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                            Seed
                          </div>
                          <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                            Series A
                          </div>
                          <div className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                            Series B
                          </div>
                          <div className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                            Series C+
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-white mb-1 block">Investment Amount</label>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                            $1M - $5M
                          </div>
                          <div className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                            $5M - $10M
                          </div>
                          <div className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                            $10M+
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="text-sm text-white mb-1 block">Investor Type</label>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                            VC
                          </div>
                          <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                            Angel
                          </div>
                          <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                            Impact
                          </div>
                          <div className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                            Corporate
                          </div>
                        </div>
                      </div>

                      <Button className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                        Update Preferences
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Investor Interest</CardTitle>
                    <CardDescription>Recent profile views and interactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        {
                          name: "Sarah Chen",
                          company: "Green Ventures Capital",
                          time: "2 hours ago",
                          action: "Viewed your profile",
                          avatar: "https://ui-avatars.com/api/?background=2CB67D&color=fff&size=32&bold=true&length=1&name=S",
                        },
                        {
                          name: "Michael Rodriguez",
                          company: "TechSustain Partners",
                          time: "Yesterday",
                          action: "Downloaded pitch deck",
                          avatar: "https://ui-avatars.com/api/?background=FF5470&color=fff&size=32&bold=true&length=1&name=M",
                        },
                        {
                          name: "Jennifer Wu",
                          company: "Impact Horizon Fund",
                          time: "2 days ago",
                          action: "Requested financials",
                          avatar: "https://ui-avatars.com/api/?background=7F5AF0&color=fff&size=32&bold=true&length=1&name=J",
                        },
                      ].map((activity, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 p-3 rounded-lg border border-gray-800 bg-black/30"
                        >
                          <Image
                            src={activity.avatar}
                            alt={activity.name}
                            width={32}
                            height={32}
                            className="rounded-full mt-0.5"
                          />
                          <div>
                            <p className="text-sm font-medium text-white">{activity.name}</p>
                            <p className="text-xs text-gray-400">{activity.company}</p>
                            <div className="flex items-center mt-1">
                              <p className="text-xs text-gray-500">{activity.action}</p>
                              <span className="mx-1 text-gray-600">•</span>
                              <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Pitch Materials</CardTitle>
                  <CardDescription>Documents and materials for investor outreach</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[#7F5AF0]" />
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                          Updated 3 days ago
                        </div>
                      </div>
                      <h4 className="text-white font-medium mb-1">Pitch Deck</h4>
                      <p className="text-sm text-gray-400 mb-4">
                        12 slides showcasing your business model and traction
                      </p>
                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
                        >
                          <span className="text-xs">Preview</span>
                        </Button>
                        <Button size="sm" className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
                          <Download className="w-3 h-3 mr-1" />
                          <span className="text-xs">Download</span>
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#2CB67D]/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[#2CB67D]" />
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                          Updated 1 week ago
                        </div>
                      </div>
                      <h4 className="text-white font-medium mb-1">Financial Model</h4>
                      <p className="text-sm text-gray-400 mb-4">5-year projections with detailed assumptions</p>
                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
                        >
                          <span className="text-xs">Preview</span>
                        </Button>
                        <Button size="sm" className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
                          <Download className="w-3 h-3 mr-1" />
                          <span className="text-xs">Download</span>
                        </Button>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#FF5470]/20 flex items-center justify-center">
                          <FileText className="w-5 h-5 text-[#FF5470]" />
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                          Needs update
                        </div>
                      </div>
                      <h4 className="text-white font-medium mb-1">Executive Summary</h4>
                      <p className="text-sm text-gray-400 mb-4">2-page overview of your business and opportunity</p>
                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
                        >
                          <span className="text-xs">Preview</span>
                        </Button>
                        <Button size="sm" className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
                          <Download className="w-3 h-3 mr-1" />
                          <span className="text-xs">Download</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Funding Tab */}
          <TabsContent value="funding" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Funding History & Projections</CardTitle>
                    <CardDescription>Past and planned funding rounds</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative pb-12">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800"></div>

                      <div className="relative pl-10 pb-8">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#2CB67D]/20 border border-[#2CB67D]/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#2CB67D]"></div>
                        </div>
                        <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-white font-medium">Pre-Seed Round</h4>
                            <div className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                              Completed
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Amount Raised</p>
                              <p className="text-sm font-medium text-white">$250,000</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Date</p>
                              <p className="text-sm font-medium text-white">June 2022</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Valuation</p>
                              <p className="text-sm font-medium text-white">$2.5M</p>
                            </div>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Investors</p>
                            <div className="flex items-center gap-2">
                              <div className="flex -space-x-2">
                                <Image
                                  src="https://ui-avatars.com/api/?background=2CB67D&color=fff&size=24&bold=true&length=1&name=A"
                                  alt="Investor"
                                  width={24}
                                  height={24}
                                  className="rounded-full border border-black"
                                />
                                <Image
                                  src="https://ui-avatars.com/api/?background=7F5AF0&color=fff&size=24&bold=true&length=1&name=B"
                                  alt="Investor"
                                  width={24}
                                  height={24}
                                  className="rounded-full border border-black"
                                />
                                <Image
                                  src="https://ui-avatars.com/api/?background=FF5470&color=fff&size=24&bold=true&length=1&name=C"
                                  alt="Investor"
                                  width={24}
                                  height={24}
                                  className="rounded-full border border-black"
                                />
                              </div>
                              <span className="text-xs text-gray-400">3 Angel Investors</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="relative pl-10 pb-8">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-[#7F5AF0]/20 border border-[#7F5AF0]/30 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#7F5AF0]"></div>
                        </div>
                        <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-white font-medium">Seed Round</h4>
                            <div className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              In Progress
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Target Amount</p>
                              <p className="text-sm font-medium text-white">$1.5M</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Timeline</p>
                              <p className="text-sm font-medium text-white">Q3 2023</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Target Valuation</p>
                              <p className="text-sm font-medium text-white">$8M</p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <p className="text-xs text-gray-500 mb-1">Progress</p>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                              <div
                                className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                                style={{ width: "40%" }}
                              ></div>
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>$600K committed</span>
                              <span>$900K remaining</span>
                            </div>
                          </div>
                          <Button size="sm" className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
                            <span className="text-xs">View Investor Pipeline</span>
                          </Button>
                        </div>
                      </div>

                      <div className="relative pl-10">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                        </div>
                        <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-white font-medium">Series A</h4>
                            <div className="px-2 py-0.5 rounded-full bg-gray-800 text-gray-400 text-xs">Planned</div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Target Amount</p>
                              <p className="text-sm font-medium text-white">$5M - $7M</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Timeline</p>
                              <p className="text-sm font-medium text-white">Q4 2024</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Target Valuation</p>
                              <p className="text-sm font-medium text-white">$25M - $30M</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400">
                            Milestone requirements: $250K MRR, 20% MoM growth, 15+ enterprise customers
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800 mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Funding Runway</CardTitle>
                    <CardDescription>Cash flow and burn rate analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[180px] mb-4">
                      <RunwayChart />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Current Cash</p>
                        <p className="text-sm font-medium text-white">$620,000</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Monthly Burn</p>
                        <p className="text-sm font-medium text-white">$42,300</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Runway</p>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 text-[#2CB67D] mr-1" />
                          <p className="text-sm font-medium text-white">14.6 months</p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Runway Extension</p>
                        <div className="flex items-center">
                          <p className="text-sm font-medium text-white">+8 months</p>
                          <span className="text-xs text-gray-500 ml-1">(with current raise)</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Dynamic Repayment Model</CardTitle>
                    <CardDescription>Revenue-based financing options</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5 mb-4">
                      <div className="flex items-start gap-3 mb-3">
                        <CreditCard className="w-5 h-5 text-[#7F5AF0] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Flexible Repayment</h4>
                          <p className="text-xs text-gray-300 mb-2">
                            Pay 4-8% of monthly revenue instead of fixed payments. Adjusts automatically based on your
                            business performance.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              No Fixed Terms
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                              No Personal Guarantee
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Available Amount</p>
                        <p className="text-sm font-medium text-white">Up to $500,000</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Revenue Share</p>
                        <p className="text-sm font-medium text-white">4-8% of MRR</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Repayment Cap</p>
                        <p className="text-sm font-medium text-white">1.3x - 1.5x</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-400">Eligibility</p>
                        <div className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">Qualified</div>
                      </div>
                    </div>

                    <Button className="w-full mt-4 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
                      <span className="text-xs">Apply for Funding</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                <CardHeader>
                  <CardTitle>Funding Recommendations</CardTitle>
                  <CardDescription>AI-generated funding strategies based on your business metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#7F5AF0] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Accelerate Seed Round</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Based on your current growth rate of 18% MoM and strong unit economics, we recommend
                            accelerating your seed round timeline. Your metrics now exceed typical seed-stage
                            benchmarks, which could lead to a higher valuation (potentially $9-10M instead of $8M).
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              High Priority
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                              Low Risk
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#2CB67D] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Consider Revenue-Based Financing</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Your predictable MRR growth makes you an excellent candidate for revenue-based financing as
                            a complement to equity. We recommend securing a $300K facility with a 5% revenue share to
                            extend runway and fund marketing initiatives without additional dilution.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              Medium Priority
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                              Low Risk
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                      <div className="flex items-start gap-3 mb-2">
                        <Brain className="w-5 h-5 text-[#FF5470] mt-0.5" />
                        <div>
                          <h4 className="text-white font-medium">Strategic Investor Outreach</h4>
                          <p className="text-sm text-gray-300 mb-2">
                            Analysis of your current investor pipeline shows a gap in strategic investors with
                            sustainability pipeline shows a gap in strategic investors with sustainability expertise. We
                            recommend targeting 3-5 corporate VCs with sustainability mandates who can provide both
                            capital and strategic partnerships to accelerate enterprise customer acquisition.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              High Priority
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                              Medium Risk
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Loan & Sale Tab */}
          <TabsContent value="loan" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Loan Repayment Status</CardTitle>
                    <CardDescription>Track your loan repayment progress and remaining balance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                          <p className="text-xs text-gray-400 mb-1">Total Loan Amount</p>
                          <p className="text-2xl font-bold text-white">$200,000</p>
                          <p className="text-xs text-gray-500 mt-1">Initial loan from founder</p>
                        </div>
                        <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                          <p className="text-xs text-gray-400 mb-1">Amount Paid</p>
                          <p className="text-2xl font-bold text-white">$80,000</p>
                          <p className="text-xs text-gray-500 mt-1">40% of total loan</p>
                        </div>
                        <div className="p-4 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                          <p className="text-xs text-gray-400 mb-1">Remaining Balance</p>
                          <p className="text-2xl font-bold text-white">$120,000</p>
                          <p className="text-xs text-gray-500 mt-1">To be repaid</p>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-sm text-gray-400">Repayment Progress</p>
                          <p className="text-sm font-medium text-white">40%</p>
                        </div>
                        <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                        <h4 className="text-white font-medium mb-3">Repayment History</h4>
                        <div className="space-y-3">
                          {[
                            { date: "Jan 2024", amount: "$20,000", status: "Paid" },
                            { date: "Feb 2024", amount: "$20,000", status: "Paid" },
                            { date: "Mar 2024", amount: "$20,000", status: "Paid" },
                            { date: "Apr 2024", amount: "$20,000", status: "Paid" },
                            { date: "May 2024", amount: "$20,000", status: "Pending" },
                            { date: "Jun 2024", amount: "$20,000", status: "Pending" },
                          ].map((payment, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${
                                  payment.status === "Paid" ? "bg-[#2CB67D]" : "bg-[#FF5470]"
                                }`}></div>
                                <span className="text-sm text-gray-300">{payment.date}</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm font-medium text-white">{payment.amount}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${
                                  payment.status === "Paid" 
                                    ? "bg-[#2CB67D]/20 text-[#2CB67D]" 
                                    : "bg-[#FF5470]/20 text-[#FF5470]"
                                }`}>
                                  {payment.status}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800 mb-6">
                  <CardHeader>
                    <CardTitle>Sale Calculator</CardTitle>
                    <CardDescription>Calculate potential profit from selling the business</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                        <h4 className="text-white font-medium mb-3">Startup Valuation</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Monthly Revenue</span>
                            <span className="text-sm font-medium text-white">$45,000</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Annual Revenue</span>
                            <span className="text-sm font-medium text-white">$540,000</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Growth Rate</span>
                            <span className="text-sm font-medium text-[#2CB67D]">+12% MoM</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Valuation Multiple</span>
                            <span className="text-sm font-medium text-white">5x ARR</span>
                          </div>
                          <div className="pt-2 border-t border-gray-800">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-white">Proposed Sale Price</span>
                              <span className="text-sm font-medium text-[#7F5AF0]">$2,700,000</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                        <h4 className="text-white font-medium mb-3">Repayment Breakdown</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Sale Amount</span>
                            <span className="text-sm font-medium text-white">$2,700,000</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Remaining Loan</span>
                            <span className="text-sm font-medium text-white">$120,000</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Founder's Share (15%)</span>
                            <span className="text-sm font-medium text-white">$405,000</span>
                          </div>
                          <div className="pt-2 border-t border-gray-800">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-white">Your Profit</span>
                              <span className="text-sm font-medium text-[#2CB67D]">$2,175,000</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                        <h4 className="text-white font-medium mb-3">Profit Breakdown</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Initial Investment</span>
                            <span className="text-sm font-medium text-white">$200,000</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Final Profit</span>
                            <span className="text-sm font-medium text-[#2CB67D]">$2,175,000</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">ROI</span>
                            <span className="text-sm font-medium text-[#2CB67D]">987%</span>
                          </div>
                        </div>
                      </div>

                      <Button className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]">
                        Generate Sale Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Sale Recommendations</CardTitle>
                    <CardDescription>AI-generated insights for optimal sale timing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                        <div className="flex items-start gap-3 mb-2">
                          <Brain className="w-5 h-5 text-[#7F5AF0] mt-0.5" />
                          <div>
                            <h4 className="text-white font-medium">Optimal Sale Timing</h4>
                            <p className="text-sm text-gray-300">
                              Based on your current growth rate and market conditions, we recommend waiting 3-6 months before selling. This could increase your valuation by 25-30% due to projected revenue growth.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                        <div className="flex items-start gap-3 mb-2">
                          <Brain className="w-5 h-5 text-[#2CB67D] mt-0.5" />
                          <div>
                            <h4 className="text-white font-medium">Valuation Factors</h4>
                            <p className="text-sm text-gray-300">
                              Your current metrics suggest a valuation range of $2.5M - $3M. Key factors include:
                              • 18% MoM growth rate
                              • 97.8% customer retention
                              • Strong unit economics
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Collaboration Tab */}
          <TabsContent value="collaboration" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <div className="lg:col-span-2">
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Performance Analysis</CardTitle>
                    <CardDescription>Areas requiring improvement and potential collaboration opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-4 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                        <h4 className="text-white font-medium mb-3">Critical Areas for Improvement</h4>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-400">Customer Acquisition Cost</span>
                              <span className="text-sm text-[#FF5470]">32% above target</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-[#FF5470] h-full rounded-full" style={{ width: "78%" }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Current: $180 vs Target: $120</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-400">Market Reach</span>
                              <span className="text-sm text-[#FF5470]">45% below target</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-[#FF5470] h-full rounded-full" style={{ width: "55%" }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Current: 3 markets vs Target: 7 markets</p>
                          </div>

                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm text-gray-400">Technology Integration</span>
                              <span className="text-sm text-[#FF5470]">28% below industry standard</span>
                            </div>
                            <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                              <div className="bg-[#FF5470] h-full rounded-full" style={{ width: "62%" }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Integration success rate: 72% vs Industry: 90%</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                          <h4 className="text-white font-medium mb-3">Your Strengths</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#2CB67D]"></div>
                              <span className="text-sm text-gray-300">AI Algorithm Accuracy (92%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#2CB67D]"></div>
                              <span className="text-sm text-gray-300">Customer Retention (97.8%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#2CB67D]"></div>
                              <span className="text-sm text-gray-300">Product Innovation</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                          <h4 className="text-white font-medium mb-3">Collaboration Benefits</h4>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#7F5AF0]"></div>
                              <span className="text-sm text-gray-300">Reduced operational costs (est. 25%)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#7F5AF0]"></div>
                              <span className="text-sm text-gray-300">Expanded market reach (4 new markets)</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-[#7F5AF0]"></div>
                              <span className="text-sm text-gray-300">Enhanced tech capabilities</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-gray-800 mt-6">
                  <CardHeader>
                    <CardTitle>Recommended Collaborations</CardTitle>
                    <CardDescription>AI-matched startups based on complementary strengths</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "MarketReach Solutions",
                          logo: "https://ui-avatars.com/api/?background=2CB67D&color=fff&size=48&bold=true&length=1&name=M",
                          strength: "Market Penetration",
                          match: 94,
                          benefits: "Established presence in 12 markets, Strong distribution network",
                          synergy: "Their market reach + Your AI technology",
                          color: "#2CB67D"
                        },
                        {
                          name: "TechFlow Integration",
                          logo: "https://ui-avatars.com/api/?background=7F5AF0&color=fff&size=48&bold=true&length=1&name=T",
                          strength: "Technology Integration",
                          match: 91,
                          benefits: "95% integration success rate, Rapid deployment system",
                          synergy: "Their integration expertise + Your product innovation",
                          color: "#7F5AF0"
                        },
                        {
                          name: "CostEfficient AI",
                          logo: "https://ui-avatars.com/api/?background=FF5470&color=fff&size=48&bold=true&length=1&name=C",
                          strength: "Cost Optimization",
                          match: 88,
                          benefits: "Lowest CAC in industry ($85), Automated marketing system",
                          synergy: "Their cost efficiency + Your retention rates",
                          color: "#FF5470"
                        }
                      ].map((company, index) => (
                        <div key={index} className="p-4 rounded-lg border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5 transition-all duration-200">
                          <div className="flex items-center gap-4 mb-3">
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={48}
                              height={48}
                              className="rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <h4 className="text-white font-medium">{company.name}</h4>
                                <div className="px-2 py-0.5 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                                  {company.match}% Match
                                </div>
                              </div>
                              <p className="text-sm text-gray-400">Specializes in {company.strength}</p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Key Benefits</p>
                              <p className="text-sm text-white">{company.benefits}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 mb-1">Potential Synergy</p>
                              <p className="text-sm text-white">{company.synergy}</p>
                            </div>
                          </div>

                          <div className="flex justify-between mt-4">
                            <Button variant="link" size="sm" className="h-auto p-0 text-[#7F5AF0]">
                              <span className="text-xs flex items-center gap-1">
                                View Details
                                <ArrowRight className="w-3 h-3" />
                              </span>
                            </Button>

                            <Button
                              size="sm"
                              className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]"
                            >
                              <span className="text-xs">Initiate Discussion</span>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="bg-black/50 backdrop-blur-sm border-gray-800 mb-6">
                  <CardHeader>
                    <CardTitle>Collaboration Impact</CardTitle>
                    <CardDescription>Projected benefits of strategic partnerships</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg border border-[#2CB67D]/30 bg-[#2CB67D]/5">
                        <h4 className="text-white font-medium mb-3">Financial Projections</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Cost Reduction</span>
                            <span className="text-sm font-medium text-[#2CB67D]">25-30%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Revenue Growth</span>
                            <span className="text-sm font-medium text-[#2CB67D]">40-45%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-400">Market Expansion</span>
                            <span className="text-sm font-medium text-[#2CB67D]">4 markets</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                        <h4 className="text-white font-medium mb-3">Timeline to Results</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-400">Integration Phase</span>
                              <span className="text-sm text-white">2-3 months</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#7F5AF0] h-full rounded-full" style={{ width: "30%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-400">Market Expansion</span>
                              <span className="text-sm text-white">4-6 months</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#7F5AF0] h-full rounded-full" style={{ width: "50%" }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-sm text-gray-400">Full Optimization</span>
                              <span className="text-sm text-white">8-10 months</span>
                            </div>
                            <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-[#7F5AF0] h-full rounded-full" style={{ width: "80%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                        <h4 className="text-white font-medium mb-3">Risk Assessment</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-[#FF5470]" />
                            <span className="text-sm text-gray-300">Integration Complexity: Medium</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-[#2CB67D]" />
                            <span className="text-sm text-gray-300">Market Risk: Low</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-[#7F5AF0]" />
                            <span className="text-sm text-gray-300">Financial Risk: Low</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/50 backdrop-blur-sm border-gray-800">
                  <CardHeader>
                    <CardTitle>Next Steps</CardTitle>
                    <CardDescription>Action plan for collaboration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                        <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">1</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Initial Discussion</p>
                          <p className="text-xs text-gray-400">Schedule meetings with top matches</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-800 bg-black/30">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">2</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Due Diligence</p>
                          <p className="text-xs text-gray-400">Review financials and integration plans</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg border border-gray-800 bg-black/30">
                        <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                          <span className="text-sm font-medium text-white">3</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-white">Partnership Agreement</p>
                          <p className="text-xs text-gray-400">Finalize terms and structure</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}