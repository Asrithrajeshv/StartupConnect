"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import {
  ArrowRight,
  BarChart,
  Brain,
  ChevronDown,
  Clock,
  CreditCard,
  DollarSign,
  FileText,
  HandshakeIcon,
  LineChart,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
  MessageSquare,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlatformOverviewPage() {
  const [activeTab, setActiveTab] = useState("matching")

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
              AI-Powered Investor-Startup Platform
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
            Connect, Fund, Grow & Thrive Together
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our revolutionary platform uses AI to match startups with investors, forecast business success, and
            implement dynamic profit-based repayment models.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link href="/dashboard">
              <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                  <Rocket className="w-4 h-4" />
                  Startup Dashboard
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>

            <Link href="/platform">
              <Button
                variant="outline"
                className="group relative overflow-hidden rounded-full px-8 py-6 border border-[#FF5470]/50 hover:border-[#FF5470] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(255,84,112,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] bg-clip-text text-transparent font-medium">
                  <DollarSign className="w-4 h-4 text-[#FF5470]" />
                  Investor Platform
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Platform Overview */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              End-to-End AI-Powered Platform
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our comprehensive platform connects startups with investors, forecasts business success, and implements
              dynamic profit-based repayment models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "AI Matching",
                description:
                  "Connect startups with investors based on business potential, industry, and risk appetite.",
                icon: HandshakeIcon,
                gradient: "from-[#7F5AF0] to-[#2CB67D]",
              },
              {
                title: "Business Forecasting",
                description: "AI-driven dashboards that forecast business growth and provide competitor analysis.",
                icon: LineChart,
                gradient: "from-[#FF5470] to-[#7F5AF0]",
              },
              {
                title: "Dynamic Repayment",
                description:
                  "Profit-based repayment model where startups pay more when profits are high and less when low.",
                icon: CreditCard,
                gradient: "from-[#2CB67D] to-[#FF5470]",
              },
              {
                title: "Community Forum",
                description:
                  "Connect with startups, investors, and industry experts to discuss trends and opportunities.",
                icon: Users,
                gradient: "from-[#7F5AF0] to-[#FF5470]",
              },
              {
                title: "Skills-to-Startup",
                description: "AI generator to help individuals find the best business ideas based on their expertise.",
                icon: Sparkles,
                gradient: "from-[#2CB67D] to-[#7F5AF0]",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="relative p-6">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.gradient} bg-opacity-20 flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Workflow Tabs */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Platform Features & Workflow
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive suite of tools designed to help startups grow and connect with investors.
            </p>
          </div>

          <Tabs
            defaultValue="matching"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-6xl mx-auto"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-transparent">
              {[
                { id: "matching", label: "AI Matching" },
                { id: "forecasting", label: "Business Forecasting" },
                { id: "repayment", label: "Dynamic Repayment" },
                { id: "community", label: "Community Forum" },
                { id: "generator", label: "Skills-to-Startup" },
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
                      layoutId="activeFeatureTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]"
                    />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* AI Matching Tab */}
            <TabsContent value="matching" className="mt-0">
              <div className="relative p-px rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        AI-Powered Investor-Startup Matching & Funding
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Our intelligent matching system connects startups with the perfect investors based on industry,
                        funding needs, risk profile, and growth potential.
                      </p>

                      <div className="space-y-6 mb-6">
                        <div>
                          <h4 className="text-lg font-medium text-white mb-3">How It Works</h4>
                          <div className="space-y-4">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                                <span className="text-sm font-bold text-[#7F5AF0]">1</span>
                              </div>
                              <div>
                                <h5 className="text-white font-medium">
                                  Startups upload business plans or enter key details
                                </h5>
                                <p className="text-sm text-gray-400">
                                  Revenue, market, goals, and other key metrics are analyzed by our AI
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                                <span className="text-sm font-bold text-[#7F5AF0]">2</span>
                              </div>
                              <div>
                                <h5 className="text-white font-medium">
                                  AI evaluates financial health, risk level, and potential growth
                                </h5>
                                <p className="text-sm text-gray-400">
                                  Our AI analyzes market data, business model, and team to assess risk and potential
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                                <span className="text-sm font-bold text-[#7F5AF0]">3</span>
                              </div>
                              <div>
                                <h5 className="text-white font-medium">Investors set preferences and criteria</h5>
                                <p className="text-sm text-gray-400">
                                  Budget level, risk tolerance, industry focus, and other preferences
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                                <span className="text-sm font-bold text-[#7F5AF0]">4</span>
                              </div>
                              <div>
                                <h5 className="text-white font-medium">AI matches investors with potential startups</h5>
                                <p className="text-sm text-gray-400">
                                  Smart matching algorithm connects the right investors with the right startups
                                </p>
                              </div>
                            </div>

                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                                <span className="text-sm font-bold text-[#7F5AF0]">5</span>
                              </div>
                              <div>
                                <h5 className="text-white font-medium">Funding and dynamic repayment begins</h5>
                                <p className="text-sm text-gray-400">
                                  Startups receive funding and begin repayment based on their profit levels
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
                        <h4 className="text-white font-medium mb-2">Key Benefits</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                            Higher Match Quality
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                            Reduced Search Time
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                            Better Investment Outcomes
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative p-px rounded-xl overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
                        <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-white">Investor Matching Dashboard</h4>
                            <div className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                              5 New Matches
                            </div>
                          </div>

                          <div className="space-y-4 mb-6">
                            {[
                              {
                                name: "EcoTrack",
                                description: "AI-powered sustainability platform for businesses",
                                amount: "$250,000",
                                risk: "Moderate",
                                match: "92%",
                                logo: "/placeholder.svg?height=40&width=40",
                              },
                              {
                                name: "FinanceFlow",
                                description: "Automated bookkeeping solution for SMBs",
                                amount: "$180,000",
                                risk: "Low",
                                match: "87%",
                                logo: "/placeholder.svg?height=40&width=40",
                              },
                              {
                                name: "HealthSync",
                                description: "Remote patient monitoring platform",
                                amount: "$320,000",
                                risk: "Moderate",
                                match: "84%",
                                logo: "/placeholder.svg?height=40&width=40",
                              },
                            ].map((startup, index) => (
                              <div
                                key={index}
                                className={`p-4 rounded-lg ${
                                  index === 0
                                    ? "bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30"
                                    : "bg-gray-900/30 border border-gray-800"
                                }`}
                              >
                                <div className="flex items-center gap-3 mb-3">
                                  <Image
                                    src={startup.logo || "/placeholder.svg"}
                                    alt={startup.name}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                  />
                                  <div>
                                    <h5 className="text-white font-medium">{startup.name}</h5>
                                    <p className="text-xs text-gray-400">{startup.description}</p>
                                  </div>
                                  <div className="ml-auto px-2 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                                    {startup.match} Match
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-3">
                                  <div>
                                    <p className="text-xs text-gray-500">Funding Need</p>
                                    <p className="text-sm font-medium text-white">{startup.amount}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Risk Level</p>
                                    <p className="text-sm font-medium text-white">{startup.risk}</p>
                                  </div>
                                  <div>
                                    <p className="text-xs text-gray-500">Est. ROI</p>
                                    <p className="text-sm font-medium text-[#2CB67D]">2.8x</p>
                                  </div>
                                </div>

                                <div className="flex justify-between">
                                  <Button variant="link" className="h-auto p-0 text-[#7F5AF0]">
                                    <span className="text-xs flex items-center gap-1">
                                      View Details
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

                          <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                            <div className="flex items-center justify-between mb-3">
                              <h5 className="text-white font-medium">Your Investor Profile</h5>
                              <Button variant="outline" size="sm" className="h-7 rounded-full text-xs">
                                Edit Profile
                              </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-3">
                              <div>
                                <p className="text-xs text-gray-500">Investment Range</p>
                                <p className="text-sm font-medium text-white">$100K - $500K</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Preferred Industries</p>
                                <p className="text-sm font-medium text-white">FinTech, HealthTech, SaaS</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Risk Tolerance</p>
                                <p className="text-sm font-medium text-white">Moderate</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Expected ROI</p>
                                <p className="text-sm font-medium text-white">2.5x - 3x</p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1">
                                <Shield className="w-4 h-4 text-[#2CB67D]" />
                                <span className="text-xs text-gray-400">Verified Investor</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-[#FFD700]" />
                                <span className="text-xs text-gray-400">Premium Member</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Business Forecasting Tab */}
            <TabsContent value="forecasting" className="mt-0">
              <div className="relative p-px rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Real-Time AI Business Forecasting & Competitor Insights
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Our advanced AI analyzes market data, competitor landscapes, and industry trends to provide
                        accurate forecasts and business insights for your startup.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <BarChart className="w-4 h-4 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Growth Prediction</h4>
                            <p className="text-sm text-gray-400">
                              Accurate forecasts for 1, 5, and 10 years based on market data and your business model
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                            <TrendingUp className="w-4 h-4 text-[#2CB67D]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Competitor Analysis</h4>
                            <p className="text-sm text-gray-400">
                              Detailed analysis of competitors' strengths, weaknesses, and market positioning
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                            <Search className="w-4 h-4 text-[#FF5470]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Market Trend Tracking</h4>
                            <p className="text-sm text-gray-400">
                              Real-time analysis of market trends and growth opportunities
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <Target className="w-4 h-4 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Investment Risk Assessment</h4>
                            <p className="text-sm text-gray-400">
                              Comprehensive analysis of investment risks and potential returns
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                            <Clock className="w-4 h-4 text-[#2CB67D]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Custom Roadmap for Growth</h4>
                            <p className="text-sm text-gray-400">
                              Personalized action plan with milestones and growth targets
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
                        <h4 className="text-white font-medium mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                            GPT-4 for Business Forecasting
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                            Web Scraping for Market Data
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                            Predictive Analytics
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative p-px rounded-xl overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
                        <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-lg font-bold text-white">Revenue Forecast</h4>
                            <div className="flex gap-2">
                              <button className="px-2 py-1 rounded bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                                1 Year
                              </button>
                              <button className="px-2 py-1 rounded bg-black/30 text-gray-400 text-xs">3 Years</button>
                              <button className="px-2 py-1 rounded bg-black/30 text-gray-400 text-xs">5 Years</button>
                            </div>
                          </div>

                          <div className="h-64 mb-6">
                            <Image
                              src="/placeholder.svg?height=256&width=500"
                              alt="Revenue Forecast Chart"
                              width={500}
                              height={256}
                              className="w-full h-full object-contain"
                            />
                          </div>

                          <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/20">
                              <p className="text-xs text-gray-400 mb-1">Revenue</p>
                              <p className="text-lg font-bold text-white">$1.2M</p>
                              <p className="text-xs text-[#2CB67D]">+24% YoY</p>
                            </div>
                            <div className="p-3 rounded-lg bg-[#2CB67D]/10 border border-[#2CB67D]/20">
                              <p className="text-xs text-gray-400 mb-1">Profit</p>
                              <p className="text-lg font-bold text-white">$320K</p>
                              <p className="text-xs text-[#2CB67D]">+18% YoY</p>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FF5470]/10 border border-[#FF5470]/20">
                              <p className="text-xs text-gray-400 mb-1">Market Share</p>
                              <p className="text-lg font-bold text-white">4.8%</p>
                              <p className="text-xs text-[#2CB67D]">+1.2% YoY</p>
                            </div>
                          </div>

                          <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                            <h4 className="text-white font-medium mb-3">AI Insights</h4>
                            <p className="text-sm text-gray-300 mb-2">
                              Your SaaS platform shows strong growth potential in the B2B market. Consider expanding
                              your sales team in Q3 to capitalize on the projected market expansion.
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-1">
                                <Brain className="w-4 h-4 text-[#7F5AF0]" />
                                <span className="text-xs text-gray-400">Generated by AI</span>
                              </div>
                              <Button variant="link" className="h-auto p-0 text-[#7F5AF0]">
                                <span className="text-xs flex items-center gap-1">
                                  View Full Report
                                  <ArrowRight className="w-3 h-3" />
                                </span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Dynamic Repayment Tab */}
            <TabsContent value="repayment" className="mt-0">
              <div className="relative p-px rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Smart Dynamic Repayment System</h3>
                      <p className="text-gray-300 mb-6">
                        Our revolutionary repayment system adjusts based on your startup's performance, allowing you to
                        pay more when profitable and less during challenging periods.
                      </p>

                      <div className="space-y-6 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <CreditCard className="w-5 h-5 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Flexible Repayment</h4>
                            <p className="text-sm text-gray-400 mb-2">
                              Unlike traditional fixed EMI payments, our system adjusts your monthly payments based on
                              your revenue and profitability.
                            </p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3 text-[#2CB67D]" />
                                <span className="text-xs text-[#2CB67D]">Higher when profitable</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <TrendingUp className="w-3 h-3 text-[#FF5470] rotate-180" />
                                <span className="text-xs text-[#FF5470]">Lower when struggling</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                            <BarChart className="w-5 h-5 text-[#2CB67D]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Revenue-Based Payback System</h4>
                            <p className="text-sm text-gray-400">
                              Our AI calculates a fair repayment amount based on your monthly revenue, typically ranging
                              from 3-8% of your revenue depending on your business model.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                            <Shield className="w-5 h-5 text-[#FF5470]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Risk-Based Interest Rates</h4>
                            <p className="text-sm text-gray-400">
                              Startups with lower risk profiles enjoy lower interest rates, while higher-risk ventures
                              pay slightly higher rates to compensate investors for the additional risk.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
                        <h4 className="text-white font-medium mb-2">Benefits for Startups</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                            Cash Flow Friendly
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                            Reduced Financial Stress
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                            Aligned with Business Performance
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative p-px rounded-xl overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
                        <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-white">Repayment Simulator</h4>
                            <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              Interactive Demo
                            </div>
                          </div>

                          <div className="p-4 rounded-lg border border-gray-800 bg-black/30 mb-6">
                            <div className="flex justify-between items-center mb-4">
                              <h5 className="text-white font-medium">Loan Details</h5>
                              <div className="flex items-center gap-1">
                                <Lock className="w-3 h-3 text-[#2CB67D]" />
                                <span className="text-xs text-[#2CB67D]">Secured</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Loan Amount</p>
                                <p className="text-lg font-bold text-white">$250,000</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Interest Rate</p>
                                <p className="text-lg font-bold text-white">6.5%</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Term</p>
                                <p className="text-sm font-medium text-white">36 months</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500 mb-1">Risk Rating</p>
                                <div className="flex items-center gap-1">
                                  <span className="text-sm font-medium text-white">B+</span>
                                  <span className="px-2 py-0.5 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                                    Low-Moderate
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="h-px bg-gray-800 mb-4"></div>

                            <div>
                              <p className="text-xs text-gray-500 mb-2">Repayment Model</p>
                              <div className="flex gap-2">
                                <button className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                                  Revenue-Based
                                </button>
                                <button className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                                  Fixed
                                </button>
                                <button className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                                  Milestone-Based
                                </button>
                              </div>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h5 className="text-white font-medium mb-3">Monthly Payment Simulation</h5>
                            <div className="h-48">
                              <Image
                                src="/placeholder.svg?height=192&width=400"
                                alt="Repayment Simulation Chart"
                                width={400}
                                height={192}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-3 mb-6">
                            <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/20">
                              <p className="text-xs text-gray-400 mb-1">Avg. Monthly</p>
                              <p className="text-lg font-bold text-white">$8,250</p>
                              <p className="text-xs text-gray-400">3.3% of revenue</p>
                            </div>
                            <div className="p-3 rounded-lg bg-[#2CB67D]/10 border border-[#2CB67D]/20">
                              <p className="text-xs text-gray-400 mb-1">Min Payment</p>
                              <p className="text-lg font-bold text-white">$5,000</p>
                              <p className="text-xs text-gray-400">2% of revenue</p>
                            </div>
                            <div className="p-3 rounded-lg bg-[#FF5470]/10 border border-[#FF5470]/20">
                              <p className="text-xs text-gray-400 mb-1">Max Payment</p>
                              <p className="text-lg font-bold text-white">$12,500</p>
                              <p className="text-xs text-gray-400">5% of revenue</p>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
                            >
                              <span className="text-xs flex items-center gap-1">
                                <LineChart className="w-3 h-3" />
                                Run Simulation
                              </span>
                            </Button>

                            <Button
                              size="sm"
                              className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                            >
                              <span className="text-xs flex items-center gap-1">
                                <DollarSign className="w-3 h-3" />
                                Apply for Funding
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Community Forum Tab */}
            <TabsContent value="community" className="mt-0">
              <div className="relative p-px rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Startup Community & Domain-Specific Forum</h3>
                      <p className="text-gray-300 mb-6">
                        Connect with like-minded founders, investors, and industry experts in our vibrant community
                        forums categorized by industry domains.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <Users className="w-4 h-4 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Domain-Based Communities</h4>
                            <p className="text-sm text-gray-400">
                              Connect with founders and investors in your specific industry domain
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                            <MessageSquare className="w-4 h-4 text-[#2CB67D]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Expert Advice & Mentorship</h4>
                            <p className="text-sm text-gray-400">
                              Get guidance from experienced entrepreneurs and industry experts
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                            <Search className="w-4 h-4 text-[#FF5470]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Find Co-Founders & Team Members</h4>
                            <p className="text-sm text-gray-400">
                              Connect with potential co-founders and team members with complementary skills
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <TrendingUp className="w-4 h-4 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Trending Discussions & Insights</h4>
                            <p className="text-sm text-gray-400">
                              Stay updated with the latest trends and insights in your industry
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
                        <h4 className="text-white font-medium mb-2">Available Industry Domains</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">FinTech</span>
                          <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                            HealthTech
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">EdTech</span>
                          <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                            AgriTech
                          </span>
                          <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">SaaS</span>
                          <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">Web3</span>
                          <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                            Climate Tech
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative p-px rounded-xl overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
                        <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-white">FinTech Community</h4>
                            <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              2,450+ Members
                            </div>
                          </div>

                          <div className="space-y-4 mb-6">
                            {[
                              {
                                title: "How to navigate regulatory challenges in fintech?",
                                author: "Sarah Chen",
                                company: "PaymentFlow",
                                replies: 24,
                                views: 342,
                                time: "2 hours ago",
                                avatar: "/placeholder.svg?height=32&width=32",
                                hot: true,
                              },
                              {
                                title: "Best practices for securing seed funding in 2023",
                                author: "Michael Rodriguez",
                                company: "InvestorConnect",
                                replies: 18,
                                views: 256,
                                time: "Yesterday",
                                avatar: "/placeholder.svg?height=32&width=32",
                                hot: false,
                              },
                              {
                                title: "Looking for a technical co-founder with blockchain experience",
                                author: "Jennifer Wu",
                                company: "CryptoFinance",
                                replies: 32,
                                views: 412,
                                time: "2 days ago",
                                avatar: "/placeholder.svg?height=32&width=32",
                                hot: true,
                              },
                            ].map((discussion, index) => (
                              <div
                                key={index}
                                className={`p-4 rounded-lg ${
                                  discussion.hot
                                    ? "bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30"
                                    : "bg-gray-900/30 border border-gray-800"
                                }`}
                              >
                                <div className="flex items-start gap-3 mb-3">
                                  <Image
                                    src={discussion.avatar || "/placeholder.svg"}
                                    alt={discussion.author}
                                    width={32}
                                    height={32}
                                    className="rounded-full mt-0.5"
                                  />
                                  <div className="flex-1">
                                    <h5 className="text-white font-medium">{discussion.title}</h5>
                                    <div className="flex items-center text-xs text-gray-400">
                                      <span>{discussion.author}</span>
                                      <span className="mx-1">•</span>
                                      <span>{discussion.company}</span>
                                    </div>
                                  </div>
                                  {discussion.hot && (
                                    <div className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                                      Hot
                                    </div>
                                  )}
                                </div>

                                <div className="flex justify-between items-center text-xs text-gray-500">
                                  <div className="flex items-center gap-3">
                                    <span>{discussion.replies} replies</span>
                                    <span>{discussion.views} views</span>
                                  </div>
                                  <span>{discussion.time}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="p-4 rounded-lg border border-gray-800 bg-black/30 mb-6">
                            <h5 className="text-white font-medium mb-3">Trending Topics</h5>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                                #AIinFinance
                              </span>
                              <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                                #FundingStrategies
                              </span>
                              <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                                #RegTech
                              </span>
                              <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                                #BlockchainFinance
                              </span>
                              <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                                #InclusiveFinance
                              </span>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
                            >
                              <span className="text-xs flex items-center gap-1">Browse All Communities</span>
                            </Button>

                            <Button
                              size="sm"
                              className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                            >
                              <span className="text-xs flex items-center gap-1">Start New Discussion</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Skills-to-Startup Tab */}
            <TabsContent value="generator" className="mt-0">
              <div className="relative p-px rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Skill-to-Startup Idea Generator</h3>
                      <p className="text-gray-300 mb-6">
                        Our AI-powered generator helps you find the best business ideas based on your skills,
                        experience, and interests.
                      </p>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <FileText className="w-4 h-4 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Resume Upload</h4>
                            <p className="text-sm text-gray-400">
                              Upload your resume for automatic business idea generation based on your skills and
                              experience
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                            <Sparkles className="w-4 h-4 text-[#2CB67D]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">AI-Generated Business Ideas</h4>
                            <p className="text-sm text-gray-400">
                              Get personalized startup ideas that match your skills and experience
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                            <Target className="w-4 h-4 text-[#FF5470]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Market Analysis</h4>
                            <p className="text-sm text-gray-400">
                              Detailed market analysis for each business idea, including target audience and competition
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <FileText className="w-4 h-4 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Automated Pitch Deck Generation</h4>
                            <p className="text-sm text-gray-400">
                              Download professionally designed pitch decks for your business ideas
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
                        <h4 className="text-white font-medium mb-2">How It Works</h4>
                        <ol className="space-y-2 text-sm text-gray-300 list-decimal list-inside">
                          <li>Upload your resume or enter your skills manually</li>
                          <li>Our AI analyzes your skills and experience</li>
                          <li>Get personalized business ideas that match your profile</li>
                          <li>Download pitch decks and business plans</li>
                          <li>Connect with investors who are interested in your idea</li>
                        </ol>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="relative p-px rounded-xl overflow-hidden h-full">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
                        <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="text-lg font-bold text-white">Startup Idea Generator</h4>
                            <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                              AI-Powered
                            </div>
                          </div>

                          <div className="p-4 rounded-lg border border-gray-800 bg-black/30 mb-6">
                            <div className="flex items-center justify-between mb-4">
                              <h5 className="text-white font-medium">Upload Resume</h5>
                              <div className="flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-[#2CB67D]" />
                                <span className="text-xs text-[#2CB67D]">Quick Analysis</span>
                              </div>
                            </div>

                            <div className="w-full p-6 border-2 border-dashed rounded-xl flex flex-col items-center justify-center transition-all duration-300 border-gray-700 hover:border-[#7F5AF0]/50 bg-black/30 backdrop-blur-sm">
                              <div className="w-12 h-12 bg-[#7F5AF0]/20 rounded-full flex items-center justify-center mb-4">
                                <FileText className="h-6 w-6 text-[#7F5AF0]" />
                              </div>
                              <p className="text-white font-medium mb-1">Drag & drop your resume here</p>
                              <p className="text-gray-400 text-sm mb-4">Supports PDF, DOC, DOCX (Max 5MB)</p>
                              <Button
                                variant="outline"
                                className="border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
                              >
                                Browse Files
                              </Button>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h5 className="text-white font-medium mb-3">Or Enter Your Skills Manually</h5>
                            <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                              <div className="space-y-3">
                                <div>
                                  <label className="text-sm text-white mb-1 block">Skills & Expertise</label>
                                  <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                                      JavaScript
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs border border-[#2CB67D]/30">
                                      Data Analysis
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs border border-[#FF5470]/30">
                                      UX Design
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                                      + Add More
                                    </span>
                                  </div>
                                </div>

                                <div>
                                  <label className="text-sm text-white mb-1 block">Industry Interests</label>
                                  <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs border border-[#7F5AF0]/30">
                                      FinTech
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs border border-[#2CB67D]/30">
                                      HealthTech
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-black/30 text-gray-400 text-xs border border-gray-800">
                                      + Add More
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between">
                            <Button
                              variant="outline"
                              size="sm"
                              className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
                            >
                              <span className="text-xs flex items-center gap-1">
                                <Brain className="w-3 h-3" />
                                View Sample Ideas
                              </span>
                            </Button>

                            <Button
                              size="sm"
                              className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                            >
                              <span className="text-xs flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                Generate Ideas
                              </span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              How Our Platform Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our end-to-end platform connects startups with investors, forecasts business success, and implements
              dynamic profit-based repayment models.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800 md:left-1/2"></div>

              {[
                {
                  title: "Startup Onboarding",
                  description:
                    "Startups upload business plans or enter key details. Our AI analyzes financial health, risk level, and potential growth.",
                  icon: FileText,
                  color: "#7F5AF0",
                  align: "left",
                },
                {
                  title: "Investor Matching",
                  description:
                    "Investors set preferences for budget level, risk tolerance, and industry focus. Our AI matches investors with potential startups.",
                  icon: HandshakeIcon,
                  color: "#2CB67D",
                  align: "right",
                },
                {
                  title: "Business Forecasting",
                  description:
                    "Our AI provides growth predictions, competitor analysis, and market insights to help startups and investors make informed decisions.",
                  icon: LineChart,
                  color: "#FF5470",
                  align: "left",
                },
                {
                  title: "Funding & Dynamic Repayment",
                  description:
                    "Startups receive funding and begin repayment based on their profit levels. Higher repayment when profits are high, lower when profits drop.",
                  icon: CreditCard,
                  color: "#7F5AF0",
                  align: "right",
                },
                {
                  title: "Community & Growth",
                  description:
                    "Startups and investors connect in our community forums, share insights, and continue to grow together.",
                  icon: Users,
                  color: "#2CB67D",
                  align: "left",
                },
              ].map((step, index) => (
                <div key={index} className="relative mb-12 md:mb-16">
                  <div className={`flex flex-col ${step.align === "right" ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="md:w-1/2 mb-4 md:mb-0">
                      <div
                        className={`relative p-6 rounded-xl border border-gray-800 bg-black/30 ${
                          step.align === "right" ? "md:ml-8" : "md:mr-8"
                        }`}
                      >
                        <div className="flex items-center mb-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                            style={{ backgroundColor: `${step.color}20` }}
                          >
                            <step.icon className="w-5 h-5" style={{ color: step.color }} />
                          </div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-gray-300">{step.description}</p>
                      </div>
                    </div>

                    <div className="md:w-1/2 flex justify-center items-center">
                      <div
                        className="absolute left-0 top-6 w-8 h-8 rounded-full border-4 border-gray-900 md:left-1/2 md:ml-[-16px]"
                        style={{ backgroundColor: step.color }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Powered by Cutting-Edge Technology
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform leverages the latest technologies to provide the best experience for startups and investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="relative p-px rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                      <span className="text-[#7F5AF0] font-bold">R</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">React (Next.js)</p>
                      <p className="text-xs text-gray-400">Modern UI with smooth animations</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center">
                      <span className="text-[#2CB67D] font-bold">T</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Tailwind CSS</p>
                      <p className="text-xs text-gray-400">For a sleek & responsive design</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center">
                      <span className="text-[#FF5470] font-bold">F</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Framer Motion</p>
                      <p className="text-xs text-gray-400">For interactive elements</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative p-px rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                      <span className="text-[#7F5AF0] font-bold">P</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Python (FastAPI/Django)</p>
                      <p className="text-xs text-gray-400">API for processing startup data</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center">
                      <span className="text-[#2CB67D] font-bold">D</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">PostgreSQL / MongoDB</p>
                      <p className="text-xs text-gray-400">Database for storing user info</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center">
                      <span className="text-[#FF5470] font-bold">C</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Celery & Redis</p>
                      <p className="text-xs text-gray-400">For background tasks</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative p-px rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <h3 className="text-xl font-bold text-white mb-4">AI & Data Processing</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                      <span className="text-[#7F5AF0] font-bold">G</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">GPT-4 & Gemini AI</p>
                      <p className="text-xs text-gray-400">Text-based analysis</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center">
                      <span className="text-[#2CB67D] font-bold">T</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">TensorFlow / PyTorch</p>
                      <p className="text-xs text-gray-400">AI models for forecasting</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center">
                      <span className="text-[#FF5470] font-bold">L</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">LangChain</p>
                      <p className="text-xs text-gray-400">Connecting AI models</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="relative p-px rounded-xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] animate-pulse"></div>
            <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Startup Journey?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join thousands of entrepreneurs and investors who are already using our platform to create successful
                startups and generate returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/dashboard">
                  <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                      Get Started Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
                <Link href="/platform">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(127,90,240,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#7F5AF0] group-hover:text-[#2CB67D] transition-colors duration-300" />
                      Explore Investor Platform
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

