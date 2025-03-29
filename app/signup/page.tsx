"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Rocket } from "lucide-react"
import { PageBackground } from "@/components/page-background"
import { Header } from "@/components/header"

export default function SignupPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl w-full"
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Join Our AI-Powered Startup Ecosystem
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Select your role to get started with our platform. Whether you're looking to launch a startup or invest in
              the next big thing, we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Startup Card */}
            <Link href="/signup/startup">
              <motion.div
                className="relative p-px rounded-xl overflow-hidden h-full cursor-pointer"
                onMouseEnter={() => setHoveredCard("startup")}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mb-6">
                    <Rocket className="w-8 h-8 text-[#7F5AF0]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Start a Business</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    Create and grow your startup with AI-powered insights, connect with investors, and access real-time
                    market analytics.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#7F5AF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">AI-generated business analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#7F5AF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">Connect with the right investors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#7F5AF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">Dynamic payment model based on performance</span>
                    </li>
                  </ul>
                  <Button className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                    <span className="flex items-center gap-2">
                      Create Startup Account
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            </Link>

            {/* Investor Card */}
            <Link href="/signup/investor">
              <motion.div
                className="relative p-px rounded-xl overflow-hidden h-full cursor-pointer"
                onMouseEnter={() => setHoveredCard("investor")}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] opacity-20"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-[#FF5470]/20 flex items-center justify-center mb-6">
                    <DollarSign className="w-8 h-8 text-[#FF5470]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Invest in Startups</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    Discover high-potential startups, build a diversified portfolio, and track your investments with
                    real-time analytics.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#FF5470]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">AI-powered startup recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#FF5470]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">Advanced filtering by industry, risk, and potential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-[#FF5470]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300">Real-time portfolio tracking and analytics</span>
                    </li>
                  </ul>
                  <Button className="w-full rounded-full bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] hover:shadow-[0_0_15px_rgba(255,84,112,0.5)]">
                    <span className="flex items-center gap-2">
                      Create Investor Account
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-[#7F5AF0] hover:text-[#2CB67D] transition-colors">
                Log in here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

