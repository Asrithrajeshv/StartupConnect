"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bell,
  Calendar,
  Clock,
  DollarSign,
  LineChart,
  MessageSquare,
  Search,
  Settings,
  TrendingUp,
  Users,
} from "lucide-react"

export function StartupDashboard() {
  return (
    <div className="relative p-px rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
      <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Real-Time Startup Dashboard</h3>
            <p className="text-gray-300 mb-6">
              A comprehensive control panel that gives you real-time insights into your startup's performance, market
              position, and funding status.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                  <LineChart className="w-4 h-4 text-[#7F5AF0]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Live Revenue & Profit Tracker</h4>
                  <p className="text-sm text-gray-400">
                    Monitor your financial performance in real-time with automated data integration
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                  <MessageSquare className="w-4 h-4 text-[#2CB67D]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Investor Communication Portal</h4>
                  <p className="text-sm text-gray-400">Direct messaging and update sharing with your investors</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                  <Users className="w-4 h-4 text-[#FF5470]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">AI-Powered Competitor Watchlist</h4>
                  <p className="text-sm text-gray-400">Track your competitors' moves and market positioning</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                  <TrendingUp className="w-4 h-4 text-[#7F5AF0]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Personalized Growth Recommendations</h4>
                  <p className="text-sm text-gray-400">AI-generated strategies to accelerate your growth</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                  <DollarSign className="w-4 h-4 text-[#2CB67D]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Funding Health Status</h4>
                  <p className="text-sm text-gray-400">
                    Track your loan repayments, upcoming payments, and funding runway
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
              <h4 className="text-white font-medium mb-2">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                  React.js + Tailwind UI
                </span>
                <span className="px-3 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                  Django/Python Backend
                </span>
                <span className="px-3 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                  AI Forecasting Models
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-px rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/placeholder.svg?height=32&width=32"
                      alt="Company Logo"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <h4 className="text-lg font-bold text-white">EcoTrack Dashboard</h4>
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors">
                      <Bell className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-900 hover:bg-gray-800 transition-colors">
                      <Settings className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/20">
                    <p className="text-xs text-gray-400 mb-1">Monthly Revenue</p>
                    <p className="text-lg font-bold text-white">$78,450</p>
                    <p className="text-xs text-[#2CB67D]">+12.4% MoM</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#2CB67D]/10 border border-[#2CB67D]/20">
                    <p className="text-xs text-gray-400 mb-1">Active Users</p>
                    <p className="text-lg font-bold text-white">2,845</p>
                    <p className="text-xs text-[#2CB67D]">+8.7% MoM</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#FF5470]/10 border border-[#FF5470]/20">
                    <p className="text-xs text-gray-400 mb-1">Burn Rate</p>
                    <p className="text-lg font-bold text-white">$42,300</p>
                    <p className="text-xs text-[#2CB67D]">-3.2% MoM</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <h5 className="text-white font-medium">Revenue Growth</h5>
                    <div className="flex gap-2">
                      <button className="px-2 py-1 rounded bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">Monthly</button>
                      <button className="px-2 py-1 rounded bg-black/30 text-gray-400 text-xs">Quarterly</button>
                      <button className="px-2 py-1 rounded bg-black/30 text-gray-400 text-xs">Yearly</button>
                    </div>
                  </div>

                  <div className="h-40">
                    <Image
                      src="/placeholder.svg?height=160&width=400"
                      alt="Revenue Growth Chart"
                      width={400}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h5 className="text-white font-medium mb-3">Competitor Analysis</h5>
                    <div className="p-3 rounded-lg border border-gray-800 bg-black/30">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Image
                            src="/placeholder.svg?height=24&width=24"
                            alt="Competitor Logo"
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <p className="text-sm font-medium text-white">GreenMetrics</p>
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">
                          Main Competitor
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">Market Share</span>
                            <span className="text-white">12.4%</span>
                          </div>
                          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#FF5470] h-full rounded-full" style={{ width: "12.4%" }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span className="text-gray-400">Growth Rate</span>
                            <span className="text-white">8.7%</span>
                          </div>
                          <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-[#FF5470] h-full rounded-full" style={{ width: "8.7%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-white font-medium mb-3">Funding Status</h5>
                    <div className="p-3 rounded-lg border border-gray-800 bg-black/30">
                      <div className="mb-3">
                        <p className="text-xs text-gray-400 mb-1">Next Payment Due</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-white">$8,250</p>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 text-[#7F5AF0]" />
                            <span className="text-xs text-gray-400">May 15, 2023</span>
                          </div>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-xs text-gray-400 mb-1">Funding Runway</p>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-white">14 months</p>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-[#2CB67D]" />
                            <span className="text-xs text-[#2CB67D]">Healthy</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-gray-400 mb-1">Total Remaining</p>
                        <p className="text-sm font-medium text-white">$198,750 / $250,000</p>
                        <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden mt-1">
                          <div
                            className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full rounded-full"
                            style={{ width: "79.5%" }}
                          ></div>
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
                      <Search className="w-3 h-3" />
                      View Full Analytics
                    </span>
                  </Button>

                  <Button
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                  >
                    <span className="text-xs flex items-center gap-1">
                      <BarChart className="w-3 h-3" />
                      Generate Report
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

