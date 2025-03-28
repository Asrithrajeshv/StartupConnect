"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline"
  popular?: boolean
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonVariant,
  popular = false,
}: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: popular ? 1.05 : 1.02 }}
      transition={{ duration: 0.3 }}
      className={`relative rounded-xl border ${
        popular
          ? "border-[#7F5AF0] bg-[#7F5AF0]/5 shadow-[0_0_25px_rgba(127,90,240,0.2)]"
          : "border-gray-800 bg-black/30"
      } overflow-hidden`}
    >
      {popular && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] text-white text-xs font-medium py-1 text-center">
          Most Popular
        </div>
      )}

      <div className="p-6 pt-8">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-white">{price}</span>
          {period && <span className="text-gray-400 ml-2">{period}</span>}
        </div>

        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div
                className={`w-5 h-5 rounded-full ${
                  popular ? "bg-[#7F5AF0]/20" : "bg-gray-800"
                } flex items-center justify-center mr-3 mt-0.5`}
              >
                <Check className={`h-3 w-3 ${popular ? "text-[#7F5AF0]" : "text-gray-400"}`} />
              </div>
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Link href="/upload" className="block">
          <Button
            variant={buttonVariant}
            className={`w-full rounded-full py-5 ${
              buttonVariant === "default"
                ? "bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)]"
                : "border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
            }`}
          >
            {buttonText}
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}

