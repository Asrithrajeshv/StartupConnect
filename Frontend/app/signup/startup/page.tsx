"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, ArrowRight, Upload } from "lucide-react"
import { PageBackground } from "@/components/page-background"
import { Header } from "@/components/header"
import { useRouter } from "next/navigation"

export default function StartupSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    startupName: "",
    industry: "",
    businessIdea: "",
    targetMarket: "",
    fundingNeeded: "",
    annualRevenue: "",
    profitMargin: "",
    yearsInBusiness: "",
    creditScore: "",
    debtToIncomeRatio: "",
    marketGrowthRate: "",
    loanAmountRequested: "",
    startupType: "",
    founderExperience: "",
    coreTeamMembers: "",
    expectedFirstYearRevenue: "",
    monthlyBurnRate: "",
    industryRiskScore: "",
  })

  const [step, setStep] = useState(1)
  const [fileUploaded, setFileUploaded] = useState(false)
  const [predictionResult, setPredictionResult] = useState<string | null>(null)
  const [approvalStatus, setApprovalStatus] = useState<string>("")
  const [showResults, setShowResults] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = () => {
    setFileUploaded(true)
  }

  const isStep1Valid = () => {
    return (
      formData.name &&
      formData.email &&
      formData.password &&
      formData.confirmPassword &&
      formData.password === formData.confirmPassword
    )
  }

  const isStep2Valid = () => {
    return (
      formData.startupName &&
      formData.industry &&
      formData.businessIdea &&
      formData.targetMarket &&
      formData.fundingNeeded
    )
  }

  const isStep3Valid = () => {
    return (
      formData.annualRevenue &&
      formData.profitMargin &&
      formData.yearsInBusiness &&
      formData.creditScore &&
      formData.debtToIncomeRatio &&
      formData.loanAmountRequested
    )
  }

  const isNewStartupValid = () => {
    return (
      formData.founderExperience &&
      formData.coreTeamMembers &&
      formData.marketGrowthRate &&
      formData.expectedFirstYearRevenue &&
      formData.loanAmountRequested &&
      formData.monthlyBurnRate
    )
  }

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
    "Other",
  ]

  const fundingRanges = [
    "Less than $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $500,000",
    "$500,000 - $1 million",
    "$1 million - $5 million",
    "More than $5 million",
  ]

  const creditScoreRanges = [
    "300-579 (Poor)",
    "580-669 (Fair)",
    "670-739 (Good)",
    "740-799 (Very Good)",
    "800-850 (Excellent)",
  ]

  const marketGrowthRates = [
    "Less than 5%",
    "5% - 10%",
    "10% - 15%",
    "15% - 20%",
    "More than 20%",
  ]

  const checkLoanApproval = () => {
    const revenue = Number(formData.annualRevenue)
    const profitMargin = Number(formData.profitMargin) / 100
    const yearsInBusiness = Number(formData.yearsInBusiness)
    
    let creditScore = 0
    if (formData.creditScore.includes("300-579")) creditScore = 300
    else if (formData.creditScore.includes("580-669")) creditScore = 580
    else if (formData.creditScore.includes("670-739")) creditScore = 670
    else if (formData.creditScore.includes("740-799")) creditScore = 740
    else if (formData.creditScore.includes("800-850")) creditScore = 800
    
    const debtToIncome = Number(formData.debtToIncomeRatio) / 100
    const industryRisk = Number(formData.industryRiskScore)
    
    let marketGrowth = 0
    if (formData.marketGrowthRate === "Less than 5%") marketGrowth = 0.05
    else if (formData.marketGrowthRate === "5% - 10%") marketGrowth = 0.10
    else if (formData.marketGrowthRate === "10% - 15%") marketGrowth = 0.15
    else if (formData.marketGrowthRate === "15% - 20%") marketGrowth = 0.20
    else if (formData.marketGrowthRate === "More than 20%") marketGrowth = 0.25
    
    const loanAmount = Number(formData.loanAmountRequested)

    if (
      revenue > 5000000 &&
      profitMargin > 0.1 &&
      yearsInBusiness >= 2 &&
      creditScore >= 600 &&
      debtToIncome < 0.5 &&
      industryRisk < 6 &&
      marketGrowth > 0.05 &&
      loanAmount < revenue * 0.5
    ) {
      return "Approved"
    }
    return "Not Approved"
  }

  const getRecommendations = () => {
    const recommendations = []
    const revenue = Number(formData.annualRevenue)
    const profitMargin = Number(formData.profitMargin)
    const yearsInBusiness = Number(formData.yearsInBusiness)
    const creditScore = Number(formData.creditScore.split("-")[0])
    const debtToIncome = Number(formData.debtToIncomeRatio)

    if (revenue <= 5000000) {
      recommendations.push("Focus on revenue growth strategies to reach the minimum threshold of $5M")
    }
    if (profitMargin <= 10) {
      recommendations.push("Improve profit margins through cost optimization and pricing strategies")
    }
    if (yearsInBusiness < 2) {
      recommendations.push("Consider applying after establishing longer business history")
    }
    if (creditScore < 600) {
      recommendations.push("Work on improving credit score through timely payments and debt management")
    }
    if (debtToIncome >= 50) {
      recommendations.push("Reduce debt-to-income ratio by paying down existing debt")
    }

    return recommendations
  }

  const handleCreateAccount = async () => {
    if (formData.startupType === "existing") {
      setIsProcessing(true)
      try {
        const status = checkLoanApproval()
        setApprovalStatus(status)
        setShowResults(true)

        if (status === "Approved") {
          // Store form data in localStorage
          localStorage.setItem('startupFormData', JSON.stringify(formData))
          
          // Add a small delay before redirecting
          setTimeout(() => {
            router.push('/dashboard')
          }, 2000)
        }
      } catch (error) {
        setPredictionResult("Error processing loan application. Please try again.")
      } finally {
        setIsProcessing(false)
      }
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full"
        >
          <Link
            href="/signup"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Role Selection
          </Link>

          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Create Your Startup Account
            </h1>
            <p className="text-gray-300">
              {step === 1 ? "Let's start with your basic information" : step === 2 ? "Tell us about your startup idea" : "Provide financial information"}
            </p>
          </div>

          <div className="relative p-px rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">
                        Password
                      </Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword" className="text-white">
                        Confirm Password
                      </Label>
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="••••••••"
                        className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid()}
                    className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                  >
                    <span className="flex items-center gap-2">
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="startupName" className="text-white">
                      Startup Name
                    </Label>
                    <Input
                      id="startupName"
                      name="startupName"
                      value={formData.startupName}
                      onChange={handleChange}
                      placeholder="Your Startup Name"
                      className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-white">
                      Industry
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("industry", value)}
                      defaultValue={formData.industry}
                    >
                      <SelectTrigger className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10">
                        <SelectValue placeholder="Select an industry" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        {industries.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="businessIdea" className="text-white">
                      Business Idea
                    </Label>
                    <Textarea
                      id="businessIdea"
                      name="businessIdea"
                      value={formData.businessIdea}
                      onChange={handleChange}
                      placeholder="Describe your business idea in detail"
                      className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10 min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="targetMarket" className="text-white">
                      Target Market
                    </Label>
                    <Textarea
                      id="targetMarket"
                      name="targetMarket"
                      value={formData.targetMarket}
                      onChange={handleChange}
                      placeholder="Describe your target customers and market"
                      className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10 min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fundingNeeded" className="text-white">
                      Estimated Funding Needed
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("fundingNeeded", value)}
                      defaultValue={formData.fundingNeeded}
                    >
                      <SelectTrigger className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10">
                        <SelectValue placeholder="Select funding range" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        {fundingRanges.map((range) => (
                          <SelectItem key={range} value={range}>
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startupType" className="text-white">
                      Startup Type
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("startupType", value)}
                      defaultValue={formData.startupType}
                    >
                      <SelectTrigger className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10">
                        <SelectValue placeholder="Select startup type" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        <SelectItem value="new">New Startup</SelectItem>
                        <SelectItem value="existing">Existing Startup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1 rounded-full border border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
                    >
                      <span className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </span>
                    </Button>

                    <Button
                      onClick={() => setStep(3)}
                      disabled={!isStep2Valid()}
                      className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                    >
                      <span className="flex items-center gap-2">
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  {formData.startupType === "existing" ? (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="annualRevenue" className="text-white">
                            Annual Revenue
                          </Label>
                          <Input
                            id="annualRevenue"
                            name="annualRevenue"
                            value={formData.annualRevenue}
                            onChange={handleChange}
                            placeholder="$"
                            type="number"
                            className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="profitMargin" className="text-white">
                            Profit Margin (%)
                          </Label>
                          <Input
                            id="profitMargin"
                            name="profitMargin"
                            value={formData.profitMargin}
                            onChange={handleChange}
                            placeholder="0-100"
                            type="number"
                            min="0"
                            max="100"
                            className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="yearsInBusiness" className="text-white">
                            Years in Business
                          </Label>
                          <Input
                            id="yearsInBusiness"
                            name="yearsInBusiness"
                            value={formData.yearsInBusiness}
                            onChange={handleChange}
                            type="number"
                            min="0"
                            placeholder="Years"
                            className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="creditScore" className="text-white">
                            Credit Score
                          </Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("creditScore", value)}
                            defaultValue={formData.creditScore}
                          >
                            <SelectTrigger className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10">
                              <SelectValue placeholder="Select credit score range" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-800">
                              {creditScoreRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="debtToIncomeRatio" className="text-white">
                            Debt-to-Income Ratio (%)
                          </Label>
                          <Input
                            id="debtToIncomeRatio"
                            name="debtToIncomeRatio"
                            value={formData.debtToIncomeRatio}
                            onChange={handleChange}
                            type="number"
                            min="0"
                            max="100"
                            placeholder="0-100"
                            className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="marketGrowthRate" className="text-white">
                            Market Growth Rate
                          </Label>
                          <Select
                            onValueChange={(value) => handleSelectChange("marketGrowthRate", value)}
                            defaultValue={formData.marketGrowthRate}
                          >
                            <SelectTrigger className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10">
                              <SelectValue placeholder="Select growth rate" />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-800">
                              {marketGrowthRates.map((rate) => (
                                <SelectItem key={rate} value={rate}>
                                  {rate}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="loanAmountRequested" className="text-white">
                          Loan Amount Requested
                        </Label>
                        <Input
                          id="loanAmountRequested"
                          name="loanAmountRequested"
                          value={formData.loanAmountRequested}
                          onChange={handleChange}
                          type="number"
                          min="0"
                          placeholder="$"
                          className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="expectedFirstYearRevenue" className="text-white">
                            Expected First Year Revenue
                          </Label>
                          <Input
                            id="expectedFirstYearRevenue"
                            name="expectedFirstYearRevenue"
                            value={formData.expectedFirstYearRevenue}
                            onChange={handleChange}
                            type="number"
                            min="0"
                            placeholder="$"
                            className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="monthlyBurnRate" className="text-white">
                            Monthly Burn Rate
                          </Label>
                          <Input
                            id="monthlyBurnRate"
                            name="monthlyBurnRate"
                            value={formData.monthlyBurnRate}
                            onChange={handleChange}
                            type="number"
                            min="0"
                            placeholder="$"
                            className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="founderExperience" className="text-white">
                          Founder Experience
                        </Label>
                        <Textarea
                          id="founderExperience"
                          name="founderExperience"
                          value={formData.founderExperience}
                          onChange={handleChange}
                          placeholder="Describe your founder experience"
                          className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="coreTeamMembers" className="text-white">
                          Core Team Members
                        </Label>
                        <Textarea
                          id="coreTeamMembers"
                          name="coreTeamMembers"
                          value={formData.coreTeamMembers}
                          onChange={handleChange}
                          placeholder="List your core team members"
                          className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                        />
                      </div>
                    </>
                  )}

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep(2)}
                      variant="outline"
                      className="flex-1 rounded-full border border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/5"
                    >
                      <span className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </span>
                    </Button>

                    <Button
                      onClick={handleCreateAccount}
                      disabled={formData.startupType === "existing" ? !isStep3Valid() : !isNewStartupValid() || isProcessing}
                      className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                    >
                      <span className="flex items-center gap-2">
                        {isProcessing ? (
                          <>
                            Processing
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                          </>
                        ) : (
                          <>
                            Create Account
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                </div>
              )}

              <div className="mt-8">
                <div className="w-full bg-gray-800/30 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                    style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span className={step >= 1 ? "font-medium text-white" : ""}>Basic Information</span>
                  <span className={step >= 2 ? "font-medium text-white" : ""}>Startup Details</span>
                  <span className={step >= 3 ? "font-medium text-white" : ""}>Financial Information</span>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-400">
                  Already have an account?{" "}
                  <Link href="/login" className="text-[#7F5AF0] hover:text-[#2CB67D] transition-colors">
                    Log in here
                  </Link>
                </p>
              </div>

              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 rounded-xl bg-black/80 border border-gray-800"
                >
                  <h2 className={`text-2xl font-bold mb-4 ${
                    approvalStatus === "Approved" ? "text-[#2CB67D]" : "text-red-500"
                  }`}>
                    {approvalStatus === "Approved" ? "Congratulations! You're Approved!" : "Not Approved"}
                  </h2>

                  {approvalStatus === "Approved" ? (
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        Your business meets our criteria for approval. Redirecting to dashboard...
                      </p>
                      <div className="flex justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#2CB67D]"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <p className="text-gray-300">
                        Based on our analysis, we cannot approve your application at this time. Here are some recommendations to improve your application:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {getRecommendations().map((rec, index) => (
                          <li key={index} className="text-sm">{rec}</li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Button
                          onClick={() => setShowResults(false)}
                          variant="outline"
                          className="w-full rounded-full border border-gray-800"
                        >
                          Return to Form
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {predictionResult && (
                <div className="mt-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500">
                  {predictionResult}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

