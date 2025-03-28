"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Trophy, Star, Award, Zap, Crown, Target } from "lucide-react"

export function GamifiedExperience() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-[#7F5AF0]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Points, Badges & Leaderboards</h3>
                <p className="text-gray-400">Earn points for every action and climb the ranks</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF5470]/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-[#FF5470]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Unlock Premium Reports</h3>
                <p className="text-gray-400">Gain access to exclusive market insights and analysis</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2CB67D]/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-[#2CB67D]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Get Featured in Founder Spotlight</h3>
                <p className="text-gray-400">Showcase your startup to our community and investors</p>
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 rounded-xl border border-gray-800 bg-black/30">
            <h3 className="text-lg font-bold text-white mb-4">Achievement Badges</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "Idea Master", icon: Zap, color: "#7F5AF0", unlocked: true },
                { name: "Pitch Pro", icon: Target, color: "#FF5470", unlocked: true },
                { name: "Community Leader", icon: Crown, color: "#2CB67D", unlocked: false },
              ].map((badge, index) => (
                <div
                  key={index}
                  className={`relative p-4 rounded-lg border ${
                    badge.unlocked ? "border-gray-700 bg-gray-900/50" : "border-gray-800 bg-gray-900/20"
                  } flex flex-col items-center text-center`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                      badge.unlocked ? `bg-${badge.color}/20` : "bg-gray-800/50"
                    }`}
                  >
                    <badge.icon className={`w-6 h-6 ${badge.unlocked ? `text-[${badge.color}]` : "text-gray-600"}`} />
                  </div>
                  <p className={`text-sm font-medium ${badge.unlocked ? "text-white" : "text-gray-500"}`}>
                    {badge.name}
                  </p>
                  {!badge.unlocked && (
                    <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black/60 backdrop-blur-sm">
                      <div className="w-8 h-8 rounded-full border-2 border-gray-700 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative p-px rounded-xl overflow-hidden h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full">
              <h3 className="text-xl font-bold text-white mb-6">Founder Leaderboard</h3>

              <div className="space-y-4">
                {[
                  { rank: 1, name: "Alex Chen", points: 2450, avatar: "/placeholder.svg?height=40&width=40" },
                  { rank: 2, name: "Sarah Johnson", points: 2280, avatar: "/placeholder.svg?height=40&width=40" },
                  { rank: 3, name: "Michael Lee", points: 2150, avatar: "/placeholder.svg?height=40&width=40" },
                  { rank: 4, name: "Jessica Williams", points: 1980, avatar: "/placeholder.svg?height=40&width=40" },
                  { rank: 5, name: "David Kim", points: 1840, avatar: "/placeholder.svg?height=40&width=40" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center p-3 rounded-lg ${
                      index === 0
                        ? "bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30"
                        : "bg-gray-900/30"
                    }`}
                  >
                    <div className="w-8 h-8 flex items-center justify-center mr-3">
                      <span
                        className={`text-lg font-bold ${
                          index === 0 ? "text-[#7F5AF0]" : index === 1 ? "text-[#FF5470]" : "text-gray-400"
                        }`}
                      >
                        {user.rank}
                      </span>
                    </div>
                    <Image
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      width={40}
                      height={40}
                      className="rounded-full mr-3"
                    />
                    <div className="flex-1">
                      <p className="font-medium text-white">{user.name}</p>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-[#FFD700] mr-1" />
                        <span className="text-xs text-gray-400">{user.points} points</span>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="w-8 h-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                        <Crown className="w-4 h-4 text-[#FFD700]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg border border-gray-800 bg-gray-900/30">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center mr-3">
                    <span className="text-lg font-bold text-gray-500">24</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-[#7F5AF0]">You</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-white">Your Ranking</p>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-[#FFD700] mr-1" />
                      <span className="text-xs text-gray-400">780 points</span>
                    </div>
                  </div>
                  <div className="text-[#2CB67D] text-sm font-medium">+5 ↑</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

