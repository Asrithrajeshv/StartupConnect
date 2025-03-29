"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  Brain,
  Building,
  Calendar,
  Clock,
  DollarSign,
  Download,
  FileText,
  Globe,
  LinkIcon,
  BarChart,
  PieChart,
  Share2,
  Shield,
  Star,
  TrendingUp,
  Users,
  AlertTriangle,
  Sparkles,
} from "lucide-react"

// Mock data for startup details
const STARTUP = {
  id: "1",
  name: "EcoTrack",
  logo: "/placeholder.svg?height=120&width=120",
  industry: "CleanTech",
  description: "AI-powered sustainability platform for businesses to track and reduce their carbon footprint",
  longDescription:
    "EcoTrack is revolutionizing how businesses approach sustainability by providing an AI-powered platform that tracks, analyzes, and helps reduce carbon footprints. Our solution integrates with existing business systems to automatically collect data on energy usage, supply chain emissions, and operational inefficiencies. The platform then uses machine learning to identify patterns and suggest actionable improvements that can lead to significant cost savings while reducing environmental impact. With increasing regulatory pressure and consumer demand for sustainable practices, EcoTrack offers businesses a competitive advantage in the market.",
  fundingGoal: 500000,
  currentFunding: 320000,
  riskLevel: "Moderate",
  growthScore: 87,
  investorInterest: 42,
  aiInsights:
    "Strong market potential with increasing corporate sustainability mandates. Team has relevant experience in both sustainability and software development. Revenue model is solid with recurring subscription fees. Main risks include market competition and potential regulatory changes.",
  tags: ["Sustainability", "AI", "B2B", "SaaS", "Climate Tech"],
  team: [
    {
      name: "Sarah Johnson",
      role: "CEO & Co-Founder",
      bio: "Former sustainability consultant with 10+ years experience working with Fortune 500 companies",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Michael Chen",
      role: "CTO & Co-Founder",
      bio: "AI researcher with PhD from MIT and previous experience at Google's sustainability team",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Priya Patel",
      role: "Head of Product",
      bio: "Product leader with experience at leading SaaS companies and passion for climate solutions",
      image: "/placeholder.svg?height=80&width=80",
    },
  ],
  financials: {
    revenue: [
      { year: "2023", amount: 120000 },
      { year: "2024 (Projected)", amount: 450000 },
      { year: "2025 (Projected)", amount: 1200000 },
    ],
    expenses: [
      { year: "2023", amount: 280000 },
      { year: "2024 (Projected)", amount: 380000 },
      { year: "2025 (Projected)", amount: 750000 },
    ],
    profitMargin: [
      { year: "2023", value: -133 },
      { year: "2024 (Projected)", value: 16 },
      { year: "2025 (Projected)", value: 38 },
    ],
  },
  marketSize: {
    tam: "12B",
    sam: "4.5B",
    som: "120M",
  },
  competitors: [
    { name: "GreenMetrics", strength: 75, weakness: 60 },
    { name: "CarbonTrack", strength: 65, weakness: 45 },
    { name: "SustainAI", strength: 80, weakness: 70 },
  ],
  milestones: [
    { date: "Q1 2023", title: "MVP Launch", description: "Launched minimum viable product with 5 beta customers" },
    { date: "Q3 2023", title: "Seed Funding", description: "Raised $250K in pre-seed funding" },
    {
      date: "Q1 2024",
      title: "Enterprise Client",
      description: "Signed first enterprise client with $100K annual contract",
    },
    { date: "Q2 2024", title: "Team Expansion", description: "Grew team to 10 full-time employees" },
    { date: "Q4 2024 (Planned)", title: "Series A", description: "Targeting $3M raise to accelerate growth" },
  ],
  investmentTerms: {
    minInvestment: 5000,
    equity: "8% of company for current funding round",
    valuation: "6.5M",
    useOfFunds: [
      { category: "Product Development", percentage: 40 },
      { category: "Sales & Marketing", percentage: 35 },
      { category: "Operations", percentage: 15 },
      { category: "Legal & Admin", percentage: 10 },
    ],
  },
  documents: [
    { name: "Business Plan", type: "PDF", size: "2.4 MB" },
    { name: "Financial Projections", type: "XLSX", size: "1.8 MB" },
    { name: "Pitch Deck", type: "PDF", size: "5.2 MB" },
    { name: "Market Analysis", type: "PDF", size: "3.1 MB" },
  ],
  website: "https://ecotrack.example.com",
  founded: "2022",
}

export default function StartupDetailPage({ params }: { params: { id: string } }) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const fundingPercentage = (STARTUP.currentFunding / STARTUP.fundingGoal) * 100

  // Risk level color
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "text-green-400 bg-green-400/10"
      case "Moderate":
        return "text-yellow-400 bg-yellow-400/10"
      case "High":
        return "text-red-400 bg-red-400/10"
      default:
        return "text-gray-400 bg-gray-400/10"
    }
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/catalogue">
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Catalogue
            </Button>
          </Link>
        </div>

        {/* Startup Header */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl bg-gray-900 overflow-hidden border border-gray-800">
            <Image
              src={STARTUP.logo || "/placeholder.svg"}
              alt={STARTUP.name}
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">{STARTUP.name}</h1>
                  <Badge className="bg-[#7F5AF0]/20 text-[#7F5AF0] border-none">AI Match: 92%</Badge>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-gray-400 mb-3">
                  <Badge variant="outline" className="bg-gray-900/50 border-gray-800">
                    {STARTUP.industry}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    <span className="text-sm">Founded {STARTUP.founded}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <a
                      href={STARTUP.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#7F5AF0] hover:underline"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {STARTUP.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-gray-900/50 text-gray-300 border-none">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/10"
                  onClick={() => setIsBookmarked(!isBookmarked)}
                >
                  {isBookmarked ? (
                    <BookmarkCheck className="h-5 w-5 text-[#7F5AF0]" />
                  ) : (
                    <Bookmark className="h-5 w-5 text-gray-400" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-gray-800 hover:border-[#7F5AF0]/50 hover:bg-[#7F5AF0]/10"
                >
                  <Share2 className="h-5 w-5 text-gray-400" />
                </Button>
                <Link href={`/invest/${STARTUP.id}`}>
                  <Button className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                    Invest Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Funding Progress */}
        <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-white mb-2">Funding Progress</h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">
                  ${STARTUP.currentFunding.toLocaleString()} raised of ${STARTUP.fundingGoal.toLocaleString()} goal
                </span>
                <span className="text-white font-medium">{fundingPercentage.toFixed(0)}%</span>
              </div>
              <Progress value={fundingPercentage} className="h-3 bg-gray-900 mb-4" />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-[#FF5470]" />
                  <span className="text-sm text-gray-400">{STARTUP.investorInterest} investors interested</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-[#7F5AF0]" />
                  <span className="text-sm text-gray-400">18 days left in funding round</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Minimum Investment</h3>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-[#2CB67D]" />
                <span className="text-2xl font-bold text-white">
                  ${STARTUP.investmentTerms.minInvestment.toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-2">Equity: {STARTUP.investmentTerms.equity}</p>
              <p className="text-sm text-gray-400">Valuation: ${STARTUP.investmentTerms.valuation}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-2">Key Metrics</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="h-3 w-3 text-[#7F5AF0]" />
                    <span className="text-xs text-gray-400">Growth Score</span>
                  </div>
                  <span className="text-lg font-medium text-white">{STARTUP.growthScore}</span>
                </div>
                <div className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
                  <div className="flex items-center gap-1 mb-1">
                    <AlertTriangle className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-gray-400">Risk Level</span>
                  </div>
                  <span className={`text-lg font-medium ${getRiskColor(STARTUP.riskLevel)}`}>{STARTUP.riskLevel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Insights */}
        <div className="p-6 rounded-xl bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-5 w-5 text-[#7F5AF0]" />
            <h3 className="text-lg font-medium text-white">AI-Generated Insights</h3>
          </div>
          <p className="text-gray-300 mb-4">{STARTUP.aiInsights}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg bg-black/30 border border-gray-800">
              <div className="flex items-center gap-1 mb-1">
                <Sparkles className="h-3 w-3 text-[#7F5AF0]" />
                <span className="text-xs text-[#7F5AF0]">Strengths</span>
              </div>
              <ul className="text-sm text-gray-300 list-disc list-inside">
                <li>Strong founding team with domain expertise</li>
                <li>Growing market with regulatory tailwinds</li>
                <li>Scalable SaaS business model</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-black/30 border border-gray-800">
              <div className="flex items-center gap-1 mb-1">
                <AlertTriangle className="h-3 w-3 text-yellow-400" />
                <span className="text-xs text-yellow-400">Risks</span>
              </div>
              <ul className="text-sm text-gray-300 list-disc list-inside">
                <li>Competitive market with established players</li>
                <li>Long sales cycles for enterprise clients</li>
                <li>Regulatory landscape may change</li>
              </ul>
            </div>
            <div className="p-3 rounded-lg bg-black/30 border border-gray-800">
              <div className="flex items-center gap-1 mb-1">
                <TrendingUp className="h-3 w-3 text-[#2CB67D]" />
                <span className="text-xs text-[#2CB67D]">Growth Potential</span>
              </div>
              <ul className="text-sm text-gray-300 list-disc list-inside">
                <li>Projected 3x revenue growth in next 12 months</li>
                <li>Expansion into international markets planned</li>
                <li>Strong product roadmap with AI enhancements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tabs for Detailed Information */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="bg-gray-900/30 border border-gray-800 p-1">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gray-800">
              Overview
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-gray-800">
              Team
            </TabsTrigger>
            <TabsTrigger value="financials" className="data-[state=active]:bg-gray-800">
              Financials
            </TabsTrigger>
            <TabsTrigger value="market" className="data-[state=active]:bg-gray-800">
              Market Analysis
            </TabsTrigger>
            <TabsTrigger value="documents" className="data-[state=active]:bg-gray-800">
              Documents
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium text-white mb-4">About {STARTUP.name}</h3>
                <p className="text-gray-300 mb-6 whitespace-pre-line">{STARTUP.longDescription}</p>

                <h3 className="text-xl font-medium text-white mb-4">Milestones</h3>
                <div className="relative pl-8 pb-2 before:absolute before:left-3 before:top-2 before:h-full before:w-[1px] before:bg-gray-800">
                  {STARTUP.milestones.map((milestone, index) => (
                    <div key={index} className="mb-6 relative">
                      <div className="absolute left-[-30px] top-0 w-6 h-6 rounded-full bg-[#7F5AF0]/20 border border-[#7F5AF0]/50 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#7F5AF0]"></div>
                      </div>
                      <div className="mb-1">
                        <Badge className="bg-gray-900/50 text-gray-400 border-gray-800">{milestone.date}</Badge>
                      </div>
                      <h4 className="text-white font-medium mb-1">{milestone.title}</h4>
                      <p className="text-sm text-gray-400">{milestone.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-medium text-white mb-4">Use of Funds</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {STARTUP.investmentTerms.useOfFunds.map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="w-full h-2 bg-gray-800 rounded-full mb-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D]"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-sm font-medium text-white mb-1">{item.percentage}%</p>
                        <p className="text-xs text-gray-400">{item.category}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-300">
                    The funds raised will be primarily used to accelerate product development and expand our sales and
                    marketing efforts. We plan to enhance our AI capabilities, integrate with more enterprise systems,
                    and grow our team to support our expansion into new markets.
                  </p>
                </div>
              </div>

              <div>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <h3 className="text-lg font-medium text-white mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <Building className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Founded</h4>
                        <p className="text-sm text-gray-400">{STARTUP.founded}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <Globe className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Website</h4>
                        <a
                          href={STARTUP.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#7F5AF0] hover:underline flex items-center gap-1"
                        >
                          {STARTUP.website.replace("https://", "")}
                          <LinkIcon className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <Users className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Team Size</h4>
                        <p className="text-sm text-gray-400">10 employees</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <DollarSign className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Previous Funding</h4>
                        <p className="text-sm text-gray-400">$250K Seed Round (2023)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <Shield className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Legal Structure</h4>
                        <p className="text-sm text-gray-400">Delaware C-Corporation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                  <h3 className="text-lg font-medium text-white mb-4">Investor Interest</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-[#FF5470]" />
                      <span className="text-gray-300">{STARTUP.investorInterest} investors viewing</span>
                    </div>
                    <Badge className="bg-[#FF5470]/20 text-[#FF5470] border-none">High Demand</Badge>
                  </div>
                  <div className="space-y-3">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="relative w-8 h-8 rounded-full bg-gray-900 overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=32&width=32`}
                            alt="Investor"
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="text-sm text-white">Anonymous Investor</p>
                            <p className="text-xs text-gray-400">2h ago</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-[#FFD700]" />
                            <Star className="h-3 w-3 text-[#FFD700]" />
                            <Star className="h-3 w-3 text-[#FFD700]" />
                            <Star className="h-3 w-3 text-[#FFD700]" />
                            <Star className="h-3 w-3 text-gray-600" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4 text-[#7F5AF0] hover:bg-[#7F5AF0]/10">
                    View All Activity
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team" className="mt-6">
            <h3 className="text-xl font-medium text-white mb-6">Leadership Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {STARTUP.team.map((member, index) => (
                <div key={index} className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full bg-gray-900 overflow-hidden border border-gray-800">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{member.name}</h4>
                      <p className="text-sm text-[#7F5AF0]">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="border-gray-800 text-gray-400 hover:text-white">
                      <LinkIcon className="h-3 w-3 mr-1" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="border-gray-800 text-gray-400 hover:text-white">
                      More Info
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
              <h3 className="text-lg font-medium text-white mb-4">Company Culture & Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <h4 className="text-white font-medium mb-2">Mission</h4>
                  <p className="text-sm text-gray-300">
                    To empower businesses to reduce their environmental impact through accessible, data-driven
                    sustainability solutions.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <h4 className="text-white font-medium mb-2">Vision</h4>
                  <p className="text-sm text-gray-300">
                    A world where every business decision is made with environmental sustainability as a core
                    consideration.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                  <h4 className="text-white font-medium mb-2">Values</h4>
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>Environmental impact</li>
                    <li>Data-driven decisions</li>
                    <li>Innovation & continuous improvement</li>
                    <li>Transparency & accountability</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#7F5AF0]/10 border border-[#7F5AF0]/30">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-5 w-5 text-[#7F5AF0]" />
                <h3 className="text-lg font-medium text-white">AI Team Assessment</h3>
              </div>
              <p className="text-gray-300 mb-4">
                The founding team demonstrates strong complementary skills with the CEO bringing industry expertise and
                the CTO providing technical leadership. The team has a proven track record of working together
                effectively and has successfully navigated early-stage challenges. The addition of an experienced Head
                of Product strengthens their ability to execute on their roadmap.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 rounded-lg bg-black/30 border border-gray-800">
                  <h4 className="text-white font-medium mb-2">Strengths</h4>
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>Complementary skill sets across technical and business domains</li>
                    <li>Prior startup experience among key team members</li>
                    <li>Strong academic credentials and industry connections</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-black/30 border border-gray-800">
                  <h4 className="text-white font-medium mb-2">Areas for Growth</h4>
                  <ul className="text-sm text-gray-300 list-disc list-inside">
                    <li>Could benefit from adding sales leadership</li>
                    <li>Limited international market experience</li>
                    <li>Small team size may limit execution speed</li>
                  </ul>
                </div>
                <div className="p-3 rounded-lg bg-black/30 border border-gray-800">
                  <h4 className="text-white font-medium mb-2">Team Cohesion</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-[#7F5AF0]" style={{ width: "85%" }}></div>
                    </div>
                    <span className="text-white font-medium">85%</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    Strong team cohesion with aligned vision and complementary skills.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Financials Tab */}
          <TabsContent value="financials" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium text-white mb-6">Financial Projections</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-white mb-4">Revenue & Expenses</h4>
                    <div className="h-64 mb-4">
                      <Image
                        src="/placeholder.svg?height=256&width=600"
                        alt="Financial Chart"
                        width={600}
                        height={256}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {STARTUP.financials.revenue.map((item, index) => (
                        <div key={index} className="text-center">
                          <p className="text-sm text-gray-400">{item.year}</p>
                          <p className="text-lg font-medium text-white">${item.amount.toLocaleString()}</p>
                          <p className="text-xs text-[#2CB67D]">
                            {index > 0
                              ? `+${Math.round((item.amount / STARTUP.financials.revenue[index - 1].amount - 1) * 100)}%`
                              : ""}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-4">Profit Margin</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {STARTUP.financials.profitMargin.map((item, index) => (
                        <div key={index} className="text-center">
                          <p className="text-sm text-gray-400">{item.year}</p>
                          <p className={`text-lg font-medium ${item.value < 0 ? "text-red-400" : "text-[#2CB67D]"}`}>
                            {item.value}%
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-4">Business Model</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Revenue Streams</h4>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="text-white font-medium">SaaS Subscription</h5>
                            <Badge className="bg-[#2CB67D]/20 text-[#2CB67D] border-none">75%</Badge>
                          </div>
                          <p className="text-sm text-gray-300">
                            Monthly subscription based on company size and features
                          </p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="text-white font-medium">Implementation Services</h5>
                            <Badge className="bg-[#7F5AF0]/20 text-[#7F5AF0] border-none">15%</Badge>
                          </div>
                          <p className="text-sm text-gray-300">One-time setup and integration with client systems</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="text-white font-medium">Consulting & Training</h5>
                            <Badge className="bg-[#FF5470]/20 text-[#FF5470] border-none">10%</Badge>
                          </div>
                          <p className="text-sm text-gray-300">Sustainability consulting and platform training</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Key Metrics</h4>
                      <div className="space-y-4">
                        <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="text-white font-medium">Customer Acquisition Cost</h5>
                            <span className="text-white font-medium">$4,200</span>
                          </div>
                          <p className="text-sm text-gray-300">Average cost to acquire a new customer</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="text-white font-medium">Lifetime Value</h5>
                            <span className="text-white font-medium">$28,500</span>
                          </div>
                          <p className="text-sm text-gray-300">Average revenue generated per customer</p>
                        </div>
                        <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="text-white font-medium">Churn Rate</h5>
                            <span className="text-white font-medium">5.2%</span>
                          </div>
                          <p className="text-sm text-gray-300">Annual customer churn rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-6 rounded-xl bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="h-5 w-5 text-[#7F5AF0]" />
                    <h3 className="text-lg font-medium text-white">AI Financial Analysis</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    EcoTrack shows strong financial potential with a clear path to profitability by 2024. The company's
                    revenue growth projections are ambitious but achievable given the market opportunity and their
                    current traction. The business model is scalable with high margins once they reach scale.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Financial Model Strength</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Revenue Projection Accuracy</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-gray-600" />
                        <Star className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Cash Runway</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <h3 className="text-lg font-medium text-white mb-4">Funding History</h3>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <Badge className="bg-gray-800 text-gray-300 border-none">Q3 2023</Badge>
                        <span className="text-white font-medium">$250,000</span>
                      </div>
                      <h5 className="text-white font-medium mb-1">Pre-Seed Round</h5>
                      <p className="text-sm text-gray-300">Angel investors and founders' capital</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <Badge className="bg-[#7F5AF0]/20 text-[#7F5AF0] border-none">Current</Badge>
                        <span className="text-white font-medium">$500,000</span>
                      </div>
                      <h5 className="text-white font-medium mb-1">Seed Round</h5>
                      <p className="text-sm text-gray-300">Seeking investment to accelerate growth</p>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800 opacity-50">
                      <div className="flex justify-between items-center mb-1">
                        <Badge className="bg-gray-800 text-gray-300 border-none">Planned Q4 2024</Badge>
                        <span className="text-white font-medium">$3,000,000</span>
                      </div>
                      <h5 className="text-white font-medium mb-1">Series A</h5>
                      <p className="text-sm text-gray-300">For international expansion and product development</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                  <h3 className="text-lg font-medium text-white mb-4">Investment Terms</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Minimum Investment</span>
                      <span className="text-white font-medium">
                        ${STARTUP.investmentTerms.minInvestment.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Equity Offered</span>
                      <span className="text-white font-medium">{STARTUP.investmentTerms.equity}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Valuation</span>
                      <span className="text-white font-medium">${STARTUP.investmentTerms.valuation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Investment Type</span>
                      <span className="text-white font-medium">SAFE Note</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Expected Exit Timeline</span>
                      <span className="text-white font-medium">4-6 Years</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                    Invest Now
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Market Analysis Tab */}
          <TabsContent value="market" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium text-white mb-6">Market Opportunity</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                      <h4 className="text-sm text-gray-400 mb-1">Total Addressable Market</h4>
                      <p className="text-2xl font-bold text-white">${STARTUP.marketSize.tam}</p>
                      <p className="text-xs text-gray-400">Global sustainability software market</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                      <h4 className="text-sm text-gray-400 mb-1">Serviceable Available Market</h4>
                      <p className="text-2xl font-bold text-white">${STARTUP.marketSize.sam}</p>
                      <p className="text-xs text-gray-400">Mid to large enterprises in target regions</p>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                      <h4 className="text-sm text-gray-400 mb-1">Serviceable Obtainable Market</h4>
                      <p className="text-2xl font-bold text-white">${STARTUP.marketSize.som}</p>
                      <p className="text-xs text-gray-400">Realistic market capture in 5 years</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-white mb-3">Market Growth Drivers</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                        <h5 className="text-white font-medium mb-2">Regulatory Pressure</h5>
                        <p className="text-sm text-gray-300">
                          Increasing government regulations requiring businesses to report and reduce carbon emissions
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                        <h5 className="text-white font-medium mb-2">Consumer Demand</h5>
                        <p className="text-sm text-gray-300">
                          Growing consumer preference for environmentally responsible businesses
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                        <h5 className="text-white font-medium mb-2">Cost Savings</h5>
                        <p className="text-sm text-gray-300">
                          Businesses recognizing that sustainability initiatives often lead to operational cost savings
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                        <h5 className="text-white font-medium mb-2">Investor Pressure</h5>
                        <p className="text-sm text-gray-300">
                          ESG (Environmental, Social, Governance) metrics becoming critical for investment decisions
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Market Trends</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                          <TrendingUp className="w-4 h-4 text-[#7F5AF0]" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">AI-Powered Sustainability Solutions</h5>
                          <p className="text-sm text-gray-300">
                            Growing adoption of AI and machine learning to optimize sustainability efforts and provide
                            predictive insights
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                          <TrendingUp className="w-4 h-4 text-[#7F5AF0]" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Supply Chain Transparency</h5>
                          <p className="text-sm text-gray-300">
                            Increasing focus on end-to-end supply chain visibility for comprehensive sustainability
                            reporting
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                          <TrendingUp className="w-4 h-4 text-[#7F5AF0]" />
                        </div>
                        <div>
                          <h5 className="text-white font-medium">Integration with Business Systems</h5>
                          <p className="text-sm text-gray-300">
                            Demand for sustainability solutions that integrate seamlessly with existing enterprise
                            systems
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-4">Competitive Landscape</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <div className="mb-6">
                    <h4 className="text-lg font-medium text-white mb-4">Competitor Analysis</h4>
                    <div className="space-y-4">
                      {STARTUP.competitors.map((competitor, index) => (
                        <div key={index} className="p-4 rounded-lg bg-gray-900/50 border border-gray-800">
                          <div className="flex justify-between items-center mb-3">
                            <h5 className="text-white font-medium">{competitor.name}</h5>
                            <Badge
                              className={
                                index === 0
                                  ? "bg-yellow-400/20 text-yellow-400 border-none"
                                  : "bg-gray-800 text-gray-300 border-none"
                              }
                            >
                              {index === 0 ? "Main Competitor" : "Secondary"}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Strengths</p>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-[#2CB67D]"
                                    style={{ width: `${competitor.strength}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-white">{competitor.strength}%</span>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-400 mb-1">Weaknesses</p>
                              <div className="flex items-center gap-2">
                                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-[#FF5470]"
                                    style={{ width: `${competitor.weakness}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-white">{competitor.weakness}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-white mb-3">Our Competitive Advantages</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30">
                        <h5 className="text-white font-medium mb-2">Advanced AI Capabilities</h5>
                        <p className="text-sm text-gray-300">
                          Our proprietary AI algorithms provide more accurate predictions and actionable insights than
                          competitors
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30">
                        <h5 className="text-white font-medium mb-2">Seamless Integration</h5>
                        <p className="text-sm text-gray-300">
                          Faster and more comprehensive integration with existing business systems
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30">
                        <h5 className="text-white font-medium mb-2">Industry-Specific Solutions</h5>
                        <p className="text-sm text-gray-300">
                          Tailored solutions for specific industries rather than one-size-fits-all approach
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[#7F5AF0]/10 border border-[#7F5AF0]/30">
                        <h5 className="text-white font-medium mb-2">Cost-Effective Pricing</h5>
                        <p className="text-sm text-gray-300">
                          More affordable solution with flexible pricing tiers for businesses of all sizes
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-6 rounded-xl bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="h-5 w-5 text-[#7F5AF0]" />
                    <h3 className="text-lg font-medium text-white">AI Market Analysis</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    EcoTrack is positioned in a rapidly growing market with strong tailwinds from regulatory changes and
                    increasing corporate sustainability commitments. The company has identified a clear gap in the
                    market for AI-powered sustainability solutions that are both powerful and user-friendly.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Market Growth Rate</span>
                      <Badge className="bg-[#2CB67D]/20 text-[#2CB67D] border-none">24% CAGR</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Market Position</span>
                      <Badge className="bg-[#7F5AF0]/20 text-[#7F5AF0] border-none">Emerging Leader</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Competitive Intensity</span>
                      <Badge className="bg-yellow-400/20 text-yellow-400 border-none">Moderate</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Barriers to Entry</span>
                      <Badge className="bg-[#7F5AF0]/20 text-[#7F5AF0] border-none">Medium-High</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <h3 className="text-lg font-medium text-white mb-4">Target Customer Segments</h3>
                  <div className="space-y-4">
                    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="text-white font-medium">Mid-Size Enterprises</h5>
                        <Badge className="bg-[#2CB67D]/20 text-[#2CB67D] border-none">Primary</Badge>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        Companies with 100-1000 employees seeking cost-effective sustainability solutions
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">Market Fit</span>
                        <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#7F5AF0]" style={{ width: "90%" }}></div>
                        </div>
                        <span className="text-xs text-white">90%</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="text-white font-medium">Enterprise Corporations</h5>
                        <Badge className="bg-[#7F5AF0]/20 text-[#7F5AF0] border-none">Secondary</Badge>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        Large organizations with complex sustainability reporting requirements
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">Market Fit</span>
                        <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#7F5AF0]" style={{ width: "75%" }}></div>
                        </div>
                        <span className="text-xs text-white">75%</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-900/50 border border-gray-800">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="text-white font-medium">Sustainability-Focused SMBs</h5>
                        <Badge className="bg-gray-800 text-gray-300 border-none">Tertiary</Badge>
                      </div>
                      <p className="text-sm text-gray-300 mb-2">
                        Small and medium businesses with strong sustainability commitments
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">Market Fit</span>
                        <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#7F5AF0]" style={{ width: "60%" }}></div>
                        </div>
                        <span className="text-xs text-white">60%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                  <h3 className="text-lg font-medium text-white mb-4">Market Expansion Strategy</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-bold text-[#7F5AF0]">1</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">North American Expansion</h5>
                        <p className="text-sm text-gray-300">Focus on US and Canada markets in years 1-2</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-bold text-[#7F5AF0]">2</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">European Market Entry</h5>
                        <p className="text-sm text-gray-300">
                          Expand to EU markets with strong sustainability regulations in years 2-3
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <span className="text-sm font-bold text-[#7F5AF0]">3</span>
                      </div>
                      <div>
                        <h5 className="text-white font-medium">Asia-Pacific Growth</h5>
                        <p className="text-sm text-gray-300">Target developed APAC markets in years 3-5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Documents Tab */}
          <TabsContent value="documents" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-xl font-medium text-white mb-6">Company Documents</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <div className="space-y-4">
                    {STARTUP.documents.map((doc, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-gray-900/50 border border-gray-800 hover:border-[#7F5AF0]/50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#7F5AF0]/20 flex items-center justify-center">
                            <FileText className="w-5 h-5 text-[#7F5AF0]" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium">{doc.name}</h4>
                            <p className="text-xs text-gray-400">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-800 text-gray-300 hover:bg-[#7F5AF0]/10 hover:border-[#7F5AF0]/50"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-4">Pitch Deck Preview</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <div className="aspect-video bg-gray-900 rounded-lg mb-4 flex items-center justify-center">
                    <Image
                      src="/placeholder.svg?height=400&width=700"
                      alt="Pitch Deck Preview"
                      width={700}
                      height={400}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-gray-800 text-gray-300 hover:bg-[#7F5AF0]/10 hover:border-[#7F5AF0]/50"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Full Deck
                    </Button>
                    <Button className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                      Request Investor Presentation
                    </Button>
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-4">Financial Projections</h3>
                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center p-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Revenue Chart"
                        width={200}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center p-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Expenses Chart"
                        width={200}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center p-4">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        alt="Profit Margin Chart"
                        width={200}
                        height={200}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      className="border-gray-800 text-gray-300 hover:bg-[#7F5AF0]/10 hover:border-[#7F5AF0]/50"
                    >
                      <BarChart className="h-4 w-4 mr-2" />
                      View Detailed Projections
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gray-800 text-gray-300 hover:bg-[#7F5AF0]/10 hover:border-[#7F5AF0]/50"
                    >
                      <PieChart className="h-4 w-4 mr-2" />
                      View Financial Models
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-6 rounded-xl bg-[#7F5AF0]/10 border border-[#7F5AF0]/30 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="h-5 w-5 text-[#7F5AF0]" />
                    <h3 className="text-lg font-medium text-white">AI Document Analysis</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Our AI has analyzed all available documents and found them to be comprehensive and well-prepared.
                    The financial projections are realistic and supported by market data. The business plan demonstrates
                    a clear understanding of the market and a viable path to growth.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Document Completeness</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Financial Model Quality</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">Market Analysis Depth</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-[#FFD700]" />
                        <Star className="h-4 w-4 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800 mb-6">
                  <h3 className="text-lg font-medium text-white mb-4">Request Additional Information</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Need more detailed information about this startup? Submit a request and the team will respond within
                    24 hours.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                    Request Information
                  </Button>
                </div>

                <div className="p-6 rounded-xl bg-gray-900/30 border border-gray-800">
                  <h3 className="text-lg font-medium text-white mb-4">Schedule a Meeting</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Interested in learning more? Schedule a virtual meeting with the founding team to discuss your
                    questions.
                  </p>
                  <Button className="w-full bg-[#7F5AF0] hover:bg-[#7F5AF0]/80">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="relative p-px rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] animate-pulse"></div>
          <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Invest in {STARTUP.name}?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              Join {STARTUP.investorInterest} other investors who see the potential in this promising startup. Minimum
              investment starts at ${STARTUP.investmentTerms.minInvestment.toLocaleString()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/invest/${STARTUP.id}`}>
                <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                    Invest Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Button>
              </Link>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(127,90,240,0.3)] transition-all duration-300"
              >
                <span className="flex items-center gap-2 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent font-medium">
                  <Bookmark className="w-4 h-4 text-[#7F5AF0]" />
                  Save for Later
                </span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

