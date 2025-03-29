"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"
import { InvestorMatchmaking } from "@/components/investor-matchmaking"
import { DynamicRepayment } from "@/components/dynamic-repayment"
import { StartupDashboard } from "@/components/startup-dashboard"
import { PremiumServices } from "@/components/premium-services"

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState("forecast")

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
              Introducing the Next Evolution
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
            Startups & Investors Connect Seamlessly
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            AI-powered forecasting, dynamic payment models, and smart investor matching to transform how startups grow
            and get funded.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link href="/platform/demo">
              <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                  <Rocket className="w-4 h-4" />
                  Try Platform Demo
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>

            <Link href="#features">
              <Button
                variant="outline"
                className="group relative overflow-hidden rounded-full px-8 py-6 border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(127,90,240,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent font-medium">
                  <Zap className="w-4 h-4 text-[#2CB67D]" />
                  Explore Features
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Core Concept Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              The Future of Startup Funding & Growth
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our platform combines AI forecasting, investor matchmaking, and dynamic payment models to create a
              seamless ecosystem for startups and investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "AI Forecasts Startup's Future",
                description:
                  "Our AI predicts revenue, market growth, and competition to help startups and investors make data-driven decisions.",
                icon: Brain,
                gradient: "from-[#7F5AF0] to-[#2CB67D]",
              },
              {
                title: "Dynamic Payment Model",
                description:
                  "Flexible payments based on startup's profitability - pay more when doing well, less when struggling.",
                icon: CreditCard,
                gradient: "from-[#FF5470] to-[#7F5AF0]",
              },
              {
                title: "Investor Loan System",
                description:
                  "Startups get funding through smart contracts and AI risk assessment, creating trust and transparency.",
                icon: HandshakeIcon,
                gradient: "from-[#2CB67D] to-[#FF5470]",
              },
              {
                title: "Real-Time Startup Dashboard",
                description:
                  "Monitor competitor analysis, market insights, funding status, and growth metrics in one place.",
                icon: LineChart,
                gradient: "from-[#7F5AF0] to-[#FF5470]",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features & Workflow Tabs */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Features & Workflow
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive suite of tools designed to help startups grow and connect with investors.
            </p>
          </div>

          <Tabs
            defaultValue="forecast"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-6xl mx-auto"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-transparent">
              {[
                { id: "forecast", label: "AI Forecast" },
                { id: "matchmaking", label: "Investor Matchmaking" },
                { id: "repayment", label: "Dynamic Repayment" },
                { id: "dashboard", label: "Startup Dashboard" },
                { id: "premium", label: "Premium Services" },
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

            <TabsContent value="forecast" className="mt-0">
              <div className="relative p-px rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        AI-Powered Future Forecast & Business Insights
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
                            <h4 className="text-white font-medium">Revenue & Profit Predictions</h4>
                            <p className="text-sm text-gray-400">
                              Accurate forecasts for 1-5 years based on market data and your business model
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                            <TrendingUp className="w-4 h-4 text-[#2CB67D]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Market Trend & Growth Insights</h4>
                            <p className="text-sm text-gray-400">
                              Real-time analysis of market trends and growth opportunities
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                            <Search className="w-4 h-4 text-[#FF5470]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">AI-Powered SWOT Analysis</h4>
                            <p className="text-sm text-gray-400">
                              Comprehensive analysis of strengths, weaknesses, opportunities, and threats
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                            <Users className="w-4 h-4 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Competitor Landscape & Threats</h4>
                            <p className="text-sm text-gray-400">
                              Detailed analysis of competitors and potential market threats
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                            <Clock className="w-4 h-4 text-[#2CB67D]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Custom Roadmap for Next 12 Months</h4>
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

            <TabsContent value="matchmaking" className="mt-0">
              <InvestorMatchmaking />
            </TabsContent>

            <TabsContent value="repayment" className="mt-0">
              <DynamicRepayment />
            </TabsContent>

            <TabsContent value="dashboard" className="mt-0">
              <StartupDashboard />
            </TabsContent>

            <TabsContent value="premium" className="mt-0">
              <PremiumServices />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How We Make Money */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              How We Make Money
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our business model is designed to align our success with the success of startups and investors on our
              platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "AI Business Forecast Reports",
                description: "Premium subscription for detailed AI-generated business forecasts and market insights.",
                icon: FileText,
                gradient: "from-[#7F5AF0] to-[#2CB67D]",
              },
              {
                title: "Revenue-Based Loan Repayment",
                description:
                  "We take a small percentage of the repayments made by startups to investors on our platform.",
                icon: DollarSign,
                gradient: "from-[#FF5470] to-[#7F5AF0]",
              },
              {
                title: "Investor Matching Fees",
                description: "Investors pay a fee to access premium startup deals and advanced filtering options.",
                icon: HandshakeIcon,
                gradient: "from-[#2CB67D] to-[#FF5470]",
              },
              {
                title: "Premium Accelerator Program",
                description: "Exclusive mentorship, networking, and growth strategies for startups ready to scale.",
                icon: Rocket,
                gradient: "from-[#7F5AF0] to-[#FF5470]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group overflow-hidden rounded-xl border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>
                <div className="relative p-6">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} bg-opacity-20 flex items-center justify-center mb-4`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-black">
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
                <Link href="/platform/demo">
                  <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                      Get Started Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
                <Link href="#" className="group">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(127,90,240,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#7F5AF0] group-hover:text-[#2CB67D] transition-colors duration-300" />
                      Book a Demo
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

