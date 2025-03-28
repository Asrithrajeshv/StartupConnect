"use client"

import { motion } from "framer-motion"
import { FileText, Users, MessageSquare, Calendar, BarChart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function BonusFeatures() {
  const features = [
    {
      title: "Domain-Specific Monthly Startup Report",
      description:
        "Get detailed insights into emerging trends, funding activity, and market opportunities in your specific industry.",
      icon: FileText,
      color: "#7F5AF0",
      premium: true,
    },
    {
      title: "Startup Idea Trading Marketplace",
      description: "Buy and sell validated startup ideas with detailed business models and market research.",
      icon: BarChart,
      color: "#2CB67D",
      premium: true,
    },
    {
      title: "Investor Pitch Simulation Mode",
      description: "Practice your pitch with our AI investor that asks realistic questions and provides feedback.",
      icon: MessageSquare,
      color: "#FF5470",
      premium: true,
    },
    {
      title: "Startup Timeline Visualizer",
      description: "Get a dynamic Gantt chart roadmap for your startup's first 12 months.",
      icon: Calendar,
      color: "#7F5AF0",
      premium: true,
    },
    {
      title: "Co-Founder Matchmaking",
      description: "Find the perfect co-founder with complementary skills within your domain community.",
      icon: Users,
      color: "#2CB67D",
      premium: true,
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="relative p-px rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
              {feature.premium && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 text-xs font-medium text-[#7F5AF0]">
                  Premium
                </div>
              )}

              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{feature.description}</p>

              <Button variant="link" className="p-0 h-auto text-[#7F5AF0] hover:text-[#2CB67D]">
                <span className="flex items-center gap-1">
                  Learn More
                  <ArrowRight className="w-3 h-3" />
                </span>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
          Upgrade to Premium
        </Button>
      </div>
    </div>
  )
}

