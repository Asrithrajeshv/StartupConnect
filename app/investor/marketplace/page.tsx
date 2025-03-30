"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { InvestorMatchmaking } from "@/components/investor-matchmaking"
import { DomainSearch } from "@/components/domain-search"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter } from "lucide-react"

export default function InvestorMarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#FF5470] to-[#7F5AF0] bg-clip-text text-transparent mb-4">
              Investor Marketplace
            </h1>
            <p className="text-gray-300">
              Discover and invest in promising startups that match your investment criteria
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search startups by name, industry, or keywords..."
                className="pl-10 bg-black/30 border-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="bg-black/30 border-gray-800">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <DomainSearch />
            </div>
          </div>

          {/* Main Content */}
          <InvestorMatchmaking />
        </motion.div>
      </main>
    </div>
  )
} 