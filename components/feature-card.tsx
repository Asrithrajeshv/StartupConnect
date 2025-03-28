"use client"

import { motion } from "framer-motion"
import {
  Sparkles,
  LayoutGrid,
  Users,
  FileIcon as FilePresentation,
  Wallet,
  Map,
  Palette,
  Mail,
  type LucideIcon,
} from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  gradient: string
}

export function FeatureCard({ title, description, icon, gradient }: FeatureCardProps) {
  const iconMap: Record<string, LucideIcon> = {
    Sparkles,
    LayoutGrid,
    Users,
    FilePresentation,
    Wallet,
    Map,
    Palette,
    Mail,
  }

  const Icon = iconMap[icon] || Sparkles

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group overflow-hidden rounded-xl border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
      ></div>
      <div className="relative p-6">
        <div
          className={`w-12 h-12 rounded-full bg-gradient-to-r ${gradient} bg-opacity-20 flex items-center justify-center mb-4`}
        >
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  )
}

