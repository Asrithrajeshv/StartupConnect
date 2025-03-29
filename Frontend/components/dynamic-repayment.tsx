"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BarChart, CreditCard, DollarSign, LineChart, Lock, Shield, TrendingDown, TrendingUp } from "lucide-react"

export function DynamicRepayment() {
  return (
    <div className="relative p-px rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
      <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Smart Dynamic Repayment System</h3>
            <p className="text-gray-300 mb-6">
              Our revolutionary repayment system adjusts based on your startup's performance, allowing you to pay more
              when profitable and less during challenging periods.
            </p>

            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                  <CreditCard className="w-5 h-5 text-[#7F5AF0]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Flexible Repayment</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Unlike traditional fixed EMI payments, our system adjusts your monthly payments based on your
                    revenue and profitability.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-3 h-3 text-[#2CB67D]" />
                      <span className="text-xs text-[#2CB67D]">Higher when profitable</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingDown className="w-3 h-3 text-[#FF5470]" />
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
                    Our AI calculates a fair repayment amount based on your monthly revenue, typically ranging from 3-8%
                    of your revenue depending on your business model.
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
                    Startups with lower risk profiles enjoy lower interest rates, while higher-risk ventures pay
                    slightly higher rates to compensate investors for the additional risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
              <h4 className="text-white font-medium mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">Smart Contracts</span>
                <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                  AI for Revenue & Risk-Based Pricing
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                  Stripe/PayPal for Payments
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
                  <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">Interactive Demo</div>
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
                      <p className="text-xs text-gray-500">Loan Amount</p>
                      <p className="text-lg font-bold text-white">$250,000</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Interest Rate</p>
                      <p className="text-lg font-bold text-white">6.5%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Term</p>
                      <p className="text-sm font-medium text-white">36 months</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Risk Rating</p>
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
  )
}

