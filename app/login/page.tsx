"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight, DollarSign, Rocket } from "lucide-react"
import { PageBackground } from "@/components/page-background"
import { Header } from "@/components/header"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [userType, setUserType] = useState<"startup" | "investor" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const isFormValid = () => {
    return formData.email && formData.password
  }

  const handleLogin = () => {
    // In a real app, this would authenticate the user
    // For now, we'll just redirect based on user type
    if (userType === "startup") {
      window.location.href = "/dashboard"
    } else {
      window.location.href = "/investor/marketplace"
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
          className="max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Welcome Back
            </h1>
            <p className="text-gray-300">Log in to continue your journey</p>
          </div>

          <div className="relative p-px rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8">
              <div className="space-y-6">
                {!userType ? (
                  <>
                    <p className="text-center text-white mb-4">I am a:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <Button
                        onClick={() => setUserType("startup")}
                        variant="outline"
                        className="h-auto py-4 rounded-xl border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(127,90,240,0.3)] transition-all duration-300"
                      >
                        <span className="flex flex-col items-center gap-2">
                          <Rocket className="w-6 h-6 text-[#7F5AF0]" />
                          <span className="text-white">Startup Founder</span>
                        </span>
                      </Button>

                      <Button
                        onClick={() => setUserType("investor")}
                        variant="outline"
                        className="h-auto py-4 rounded-xl border border-[#FF5470]/50 hover:border-[#FF5470] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,84,112,0.3)] transition-all duration-300"
                      >
                        <span className="flex flex-col items-center gap-2">
                          <DollarSign className="w-6 h-6 text-[#FF5470]" />
                          <span className="text-white">Investor</span>
                        </span>
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
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

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="password" className="text-white">
                          Password
                        </Label>
                        <Link href="/forgot-password" className="text-xs text-[#7F5AF0] hover:text-[#2CB67D]">
                          Forgot password?
                        </Link>
                      </div>
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

                    <Button
                      onClick={handleLogin}
                      disabled={!isFormValid()}
                      className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                    >
                      <span className="flex items-center gap-2">
                        Log In
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>

                    <div className="text-center">
                      <Button
                        variant="link"
                        onClick={() => setUserType(null)}
                        className="text-gray-400 hover:text-white p-0 h-auto"
                      >
                        Change user type
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-[#7F5AF0] hover:text-[#2CB67D] transition-colors">
                Sign up here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

