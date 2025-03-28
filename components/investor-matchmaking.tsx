"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, HandshakeIcon, Shield, Star } from "lucide-react"

export function InvestorMatchmaking() {
  return (
    <div className="relative p-px rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
      <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">AI-Driven Investor-Startup Matchmaking</h3>
            <p className="text-gray-300 mb-6">
              Our intelligent matching system connects startups with the perfect investors based on industry, funding
              needs, risk profile, and growth potential.
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
                      <h5 className="text-white font-medium">Startup submits funding request</h5>
                      <p className="text-sm text-gray-400">
                        Startups specify their funding needs, business model, and growth projections
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold text-[#7F5AF0]">2</span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">AI evaluates startup risk & assigns credibility score</h5>
                      <p className="text-sm text-gray-400">
                        Our AI analyzes market data, business model, and team to assess risk
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold text-[#7F5AF0]">3</span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">Matching investors receive the proposal</h5>
                      <p className="text-sm text-gray-400">
                        Investors who match the startup's profile receive detailed investment proposals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold text-[#7F5AF0]">4</span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">If an investor agrees, funds are locked in escrow</h5>
                      <p className="text-sm text-gray-400">
                        Smart contracts ensure secure and transparent fund transfers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                      <span className="text-sm font-bold text-[#7F5AF0]">5</span>
                    </div>
                    <div>
                      <h5 className="text-white font-medium">
                        Startups receive loans & begin repayment based on performance
                      </h5>
                      <p className="text-sm text-gray-400">
                        Dynamic repayment system adjusts based on startup's revenue and growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
              <h4 className="text-white font-medium mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                  AI Matching Algorithm
                </span>
                <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">Smart Contracts</span>
                <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                  Risk Assessment Models
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
                  <div className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">5 New Matches</div>
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
  )
}

