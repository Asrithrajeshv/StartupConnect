"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react"
import { PageBackground } from "@/components/page-background"
import { Header } from "@/components/header"

export default function InvestorSignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    investmentRange: [100000, 500000],
    riskTolerance: "moderate",
    roiTimeframe: "",
    linkedinProfile: "",
  })

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([])
  const [step, setStep] = useState(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSliderChange = (value: number[]) => {
    setFormData((prev) => ({ ...prev, investmentRange: value }))
  }

  const handleIndustryToggle = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry],
    )
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
    return selectedIndustries.length > 0 && formData.riskTolerance && formData.roiTimeframe
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
  ]

  const roiTimeframes = ["Less than 1 year", "1-3 years", "3-5 years", "5-10 years", "10+ years"]

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value)
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
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#FF5470] to-[#7F5AF0] bg-clip-text text-transparent mb-4">
              Create Your Investor Account
            </h1>
            <p className="text-gray-300">
              {step === 1 ? "Let's start with your basic information" : "Tell us about your investment preferences"}
            </p>
          </div>

          <div className="relative p-px rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8">
              {step === 1 ? (
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
                        className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10"
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
                        className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10"
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
                      className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10"
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
                        className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10"
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
                        className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10"
                      />
                    </div>
                  </div>

                  <Button
                    onClick={() => setStep(2)}
                    disabled={!isStep1Valid()}
                    className="w-full rounded-full bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] hover:shadow-[0_0_15px_rgba(255,84,112,0.5)]"
                  >
                    <span className="flex items-center gap-2">
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label className="text-white">Industries Interested In</Label>
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
                        defaultValue={formData.investmentRange}
                        min={10000}
                        max={5000000}
                        step={10000}
                        onValueChange={handleSliderChange}
                        className="[&>span]:bg-[#FF5470]"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{formatCurrency(formData.investmentRange[0])}</span>
                      <span>{formatCurrency(formData.investmentRange[1])}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="riskTolerance" className="text-white">
                      Risk Tolerance
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("riskTolerance", value)}
                      defaultValue={formData.riskTolerance}
                    >
                      <SelectTrigger className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10">
                        <SelectValue placeholder="Select risk tolerance" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        <SelectItem value="conservative">Conservative (Safe)</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="aggressive">Aggressive (Bold)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roiTimeframe" className="text-white">
                      Expected ROI Timeframe
                    </Label>
                    <Select
                      onValueChange={(value) => handleSelectChange("roiTimeframe", value)}
                      defaultValue={formData.roiTimeframe}
                    >
                      <SelectTrigger className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10">
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-800">
                        {roiTimeframes.map((timeframe) => (
                          <SelectItem key={timeframe} value={timeframe}>
                            {timeframe}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedinProfile" className="text-white">
                      LinkedIn Profile (Optional)
                    </Label>
                    <div className="relative">
                      <Input
                        id="linkedinProfile"
                        name="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={handleChange}
                        placeholder="https://linkedin.com/in/username"
                        className="bg-black/50 border-gray-800 focus:border-[#FF5470] focus:ring-[#FF5470]/10 pl-10"
                      />
                      <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-xs text-gray-500">
                      Adding your LinkedIn profile increases credibility with startups
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1 rounded-full border border-gray-800 hover:border-[#FF5470]/50 hover:bg-[#FF5470]/5"
                    >
                      <span className="flex items-center gap-2">
                        <ArrowLeft className="w-4 h-4" />
                        Back
                      </span>
                    </Button>

                    <Link href="/investor/marketplace" className="flex-1">
                      <Button
                        disabled={!isStep2Valid()}
                        className="w-full rounded-full bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] hover:shadow-[0_0_15px_rgba(255,84,112,0.5)]"
                      >
                        <span className="flex items-center gap-2">
                          Create Account
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-8">
            <div className="w-full bg-gray-800/30 h-1 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] h-full rounded-full"
                style={{ width: step === 1 ? "50%" : "100%" }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span className={step >= 1 ? "font-medium text-white" : ""}>Basic Information</span>
              <span className={step >= 2 ? "font-medium text-white" : ""}>Investment Preferences</span>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-[#FF5470] hover:text-[#7F5AF0] transition-colors">
                Log in here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

