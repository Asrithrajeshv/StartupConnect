"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Coins,
  Heart,
  Stethoscope,
  GraduationCap,
  Leaf,
  LayoutGrid,
  Blocks,
  CloudSun,
  Users,
  MessageSquare,
  Calendar,
  Award,
  ArrowRight,
} from "lucide-react"

export function CommunityHubs() {
  const [activeHub, setActiveHub] = useState("fintech")

  const hubs = [
    {
      id: "fintech",
      name: "FinTech",
      icon: Coins,
      color: "#7F5AF0",
      members: "2,450+",
      description: "Connect with founders building the future of finance, banking, and payments.",
    },
    {
      id: "healthtech",
      name: "HealthTech",
      icon: Stethoscope,
      color: "#FF5470",
      members: "1,870+",
      description: "Join healthcare innovators creating solutions for patients, providers, and payers.",
    },
    {
      id: "edtech",
      name: "EdTech",
      icon: GraduationCap,
      color: "#2CB67D",
      members: "1,340+",
      description: "Collaborate with founders revolutionizing education and learning experiences.",
    },
    {
      id: "agritech",
      name: "AgriTech",
      icon: Leaf,
      color: "#7F5AF0",
      members: "980+",
      description: "Connect with innovators transforming agriculture and food production systems.",
    },
    {
      id: "saas",
      name: "SaaS",
      icon: LayoutGrid,
      color: "#FF5470",
      members: "3,210+",
      description: "Join founders building scalable software-as-a-service solutions across industries.",
    },
    {
      id: "web3",
      name: "Web3",
      icon: Blocks,
      color: "#2CB67D",
      members: "1,650+",
      description: "Connect with builders creating the decentralized future of the internet.",
    },
    {
      id: "climatetech",
      name: "Climate Tech",
      icon: CloudSun,
      color: "#7F5AF0",
      members: "1,120+",
      description: "Join innovators tackling climate change and environmental challenges.",
    },
  ]

  const communityPerks = [
    {
      icon: Users,
      title: "Domain-based idea sharing",
      description: "Exchange ideas with founders in your specific industry",
    },
    {
      icon: Heart,
      title: "Expert mentors available",
      description: "Get guidance from experienced entrepreneurs in your field",
    },
    {
      icon: MessageSquare,
      title: "Live AMA sessions",
      description: "Join weekly Ask-Me-Anything sessions with industry leaders",
    },
    {
      icon: Award,
      title: "Voting for best ideas",
      description: "Get feedback and validation from the community",
    },
    {
      icon: Calendar,
      title: "Monthly hackathons",
      description: "Participate in community-led challenges and competitions",
    },
  ]

  const activeHubData = hubs.find((hub) => hub.id === activeHub)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-2">
            {hubs.map((hub) => {
              const Icon = hub.icon
              return (
                <button
                  key={hub.id}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                    activeHub === hub.id
                      ? "bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30"
                      : "bg-black/30 border border-gray-800 hover:border-[#7F5AF0]/30 hover:bg-[#7F5AF0]/5"
                  }`}
                  onClick={() => setActiveHub(hub.id)}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${hub.color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: hub.color }} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">{hub.name}</h3>
                    <p className="text-xs text-gray-400">{hub.members} members</p>
                  </div>
                  {activeHub === hub.id && <div className="ml-auto w-2 h-2 rounded-full bg-[#7F5AF0]"></div>}
                </button>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-5">
          {activeHubData && (
            <motion.div
              key={activeHubData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative p-px rounded-xl overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/50 to-[#2CB67D]/50 opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${activeHubData.color}20` }}
                  >
                    <activeHubData.icon className="w-7 h-7" style={{ color: activeHubData.color }} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{activeHubData.name} Community</h3>
                    <p className="text-gray-400">{activeHubData.members} founders and growing</p>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{activeHubData.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {communityPerks.map((perk, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <perk.icon className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{perk.title}</h4>
                        <p className="text-sm text-gray-400">{perk.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                    Join {activeHubData.name} Community
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
                  >
                    <span className="flex items-center gap-2">
                      Explore Ideas
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

