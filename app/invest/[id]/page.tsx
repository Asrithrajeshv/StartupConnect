"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, DollarSign, Info, TrendingUp, AlertTriangle } from "lucide-react"

// Mock data for startup details (same as in startup/[id]/page.tsx)
const STARTUP = {
  id: "1",
  name: "EcoTrack",
  logo: "/placeholder.svg?height=120&width=120",
  industry: "CleanTech",
  description: "AI-powered sustainability platform for businesses to track and reduce their carbon footprint",
  fundingGoal: 500000,
  currentFunding: 320000,
  riskLevel: "Moderate",
  growthScore: 87,
  investorInterest: 42,
  aiInsights:
    "Strong market potential with increasing corporate sustainability mandates. Team has relevant experience.",
  investmentTerms: {
    minInvestment: 5000,
    equity: "8% of company for current funding round",
    valuation: "6.5M",
    useOfFunds: [
      { category: "Product Development", percentage: 40 },
      { category: "Sales & Marketing", percentage: 35 },
      { category: "Operations", percentage: 15 },
      { category: "Legal & Admin", percentage: 10 },
    ],
  },
}

export default function InvestPage({ params }: { params: { id: string } }) {
  const [investmentAmount, setInvestmentAmount] = useState(STARTUP.investmentTerms.minInvestment)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [step, setStep] = useState(1)
  const fundingPercentage = (STARTUP.currentFunding / STARTUP.fundingGoal) * 100
  
  // Calculate new funding percentage if this investment is made
  const newFundingAmount = STARTUP.currentFunding + investmentAmount
  const newFundingPercentage = (newFundingAmount / STARTUP.fundingGoal) * 100

  // Calculate equity percentage based on investment amount
  const totalEquity = 8 // 8% for the entire funding round
  const equityPercentage = (investmentAmount / STARTUP.fundingGoal) * totalEquity
  
  // Calculate potential returns based on different exit scenarios
  const calculatePotentialReturn = (exitValuation: number) => {
    const currentValuation = 6500000 // $6.5M
    const multiplier = exitValuation / currentValuation
    return investmentAmount * multiplier
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Back Button */}
        <div className="mb-6">
          <Link href={`/startup/${STARTUP.id}`}>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Startup Profile
            </Button>
          </Link>
        </div>

        {/* Investment Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl bg-gray-900 overflow-hidden border border-gray-800">
            <Image
              src={STARTUP.logo || "/placeholder.svg"}
              alt={STARTUP.name}
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">Invest in {STARTUP.name}</h1>
                <p className="text-gray-400 mb-2">{STARTUP.description}</p>
                <div className="flex items-center gap-3 text-gray-400">
                  <Badge variant="outline" className="bg-gray-900/50 border-gray-800">
                    {STARTUP.industry}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="h-4 w-4 text-[#7F5AF0]" />
                    <span className="text-sm">Growth Score: {STARTUP.growthScore}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm">Risk: {STARTUP.riskLevel}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Investment Form */}
          <div className="lg:col-span-2">
            <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-8">
              <h2 className="text-xl font-medium text-white mb-6">Investment Details</h2>
              
              {/* Step 1: Investment Amount */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Investment Amount (Minimum ${STARTUP.investmentTerms.minInvestment.toLocaleString()})
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input
                        type="number"
                        min={STARTUP.investmentTerms.minInvestment}
                        step={1000}
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="pl-10 bg-gray-900/50 border-gray-800 focus:border-[#7F5AF0] text-white text-lg h-14"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Button
                      variant="outline"
                      className={`border-gray-800 ${
                        investmentAmount === 5000 ? "bg-[#7F5AF0]/20 border-[#7F5AF0]/50 text-white" : "text-gray-400"
                      }`}
                      onClick={() => setInvestmentAmount(5000)}
                    >
                      $5,000
                    </Button>
                    <Button
                      variant="outline"
                      className={`border-gray-800 ${
                        investmentAmount === 10000 ? "bg-[#7F5AF0]/20 border-[#7F5AF0]/50 text-white" : "text-gray-400"
                      }`}
                      onClick={() => setInvestmentAmount(10000)}
                    >
                      $10,000
                    </Button>
                    <Button
                      variant="outline"
                      className={`border-gray-800 ${
                        investmentAmount === 25000 ? "bg-[#7F5AF0]/20 border-[#7F5AF0]/50 text-white" : "text-gray-400"
                      }`}
                      onClick={() => setInvestmentAmount(25000)}
                    >
                      $25,000
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Info className="h-4 w-4 text-[#7F5AF0]" />
                      <h3 className="text-white font-medium">Your Investment Impact</h3>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">Current Funding</span>
                        <span className="text-sm text-white">${STARTUP.currentFunding.toLocaleString()} ({fundingPercentage.toFixed(0)}%)</span>
                      </div>
                      <Progress value={fundingPercentage} className="h-2 bg-gray-900 mb-2" />
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-400">After Your Investment</span>
                        <span className="text-sm text-[#2CB67D]">${newFundingAmount.toLocaleString()} ({newFundingPercentage.toFixed(0)}%)</span>
                      </div>
                      <Progress value={newFundingPercentage} className="h-2 bg-gray-900" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Your Equity Stake</p>
                        <p className="text-lg font-medium text-white">{equityPercentage.toFixed(2)}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">Investors Alongside You</p>
                        <p className="text-lg font-medium text-white">{STARTUP.investorInterest}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800 mb-6">
                    <h3 className="text-white font-medium mb-3">Potential Returns (Estimated)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Conservative Exit (3x)</span>
                        <span className="text-sm font-medium text-white">${calculatePotentialReturn(19500000).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-400">Moderate Exit (5\

