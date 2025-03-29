"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, FileText, Rocket, Shield, Sparkles, Users, Zap, Check } from "lucide-react"

export function PremiumServices() {
  return (
    <div className="relative p-px rounded-xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
      <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Add-On Services</h3>
            <p className="text-gray-300 mb-6">
              Enhance your startup journey with our premium services designed to accelerate your growth and increase
              your chances of success.
            </p>

            <div className="space-y-5 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                  <FileText className="w-5 h-5 text-[#7F5AF0]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">AI-Generated Business Plan & Pitch Deck</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Get professionally designed business plans and pitch decks tailored to your startup, ready to
                    present to investors.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-[#7F5AF0]">
                    <span className="text-xs flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                  <Zap className="w-5 h-5 text-[#2CB67D]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Growth Hacking Strategies</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Data-driven growth strategies customized for your industry, target audience, and business model.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-[#2CB67D]">
                    <span className="text-xs flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                  <Users className="w-5 h-5 text-[#FF5470]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Exclusive Investor & Founder Networking Events</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Virtual and in-person events to connect with potential investors, partners, and fellow founders.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-[#FF5470]">
                    <span className="text-xs flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                  <Shield className="w-5 h-5 text-[#7F5AF0]" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Startup Insurance System</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    Protect your investment with our innovative insurance system that covers losses in case of startup
                    failure.
                  </p>
                  <Button variant="link" className="h-auto p-0 text-[#7F5AF0]">
                    <span className="text-xs flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-gray-800 bg-black/50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium">Premium Accelerator Program</h4>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 text-xs font-medium text-[#7F5AF0]">
                  Most Popular
                </span>
              </div>
              <p className="text-sm text-gray-400 mb-3">
                Our comprehensive 12-week accelerator program includes all premium services plus dedicated mentorship,
                investor introductions, and personalized growth strategies.
              </p>
              <Button className="w-full rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                <span className="flex items-center gap-2">
                  <Rocket className="w-4 h-4" />
                  Apply for Accelerator
                </span>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative p-px rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-lg font-bold text-white">AI-Generated Pitch Deck Preview</h4>
                  <div className="px-3 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">Premium Feature</div>
                </div>

                <div className="relative aspect-[16/9] w-full mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 rounded-xl blur-md"></div>
                  <div className="relative border border-[#7F5AF0]/30 rounded-xl overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Pitch Deck Preview"
                      width={500}
                      height={300}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-40 border border-[#7F5AF0]/30 rounded-xl overflow-hidden rotate-6 bg-black/80">
                    <Image
                      src="/placeholder.svg?height=160&width=128"
                      alt="Pitch Deck Page"
                      width={128}
                      height={160}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-2 -left-4 w-32 h-40 border border-[#7F5AF0]/30 rounded-xl overflow-hidden -rotate-6 bg-black/80">
                    <Image
                      src="/placeholder.svg?height=160&width=128"
                      alt="Pitch Deck Page"
                      width={128}
                      height={160}
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-lg border border-gray-800 bg-black/30 mb-6">
                  <h5 className="text-white font-medium mb-3">Pitch Deck Includes</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      "Problem & Solution",
                      "Market Analysis",
                      "Business Model",
                      "Competitive Landscape",
                      "Go-to-Market Strategy",
                      "Financial Projections",
                      "Team Overview",
                      "Funding Ask",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                          <Check className="w-2 h-2 text-[#7F5AF0]" />
                        </div>
                        <span className="text-xs text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <Sparkles className="w-4 h-4 text-[#FFD700]" />
                    <span className="text-xs text-gray-400">AI-generated in minutes</span>
                  </div>

                  <Button
                    size="sm"
                    className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]"
                  >
                    <span className="text-xs flex items-center gap-1">
                      <Download className="w-3 h-3" />
                      Generate Your Pitch Deck
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

