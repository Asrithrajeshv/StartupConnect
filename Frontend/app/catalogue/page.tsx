"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  LayoutGrid,
  List,
  Search,
  Filter,
  X,
  ChevronDown,
  BookmarkPlus,
  TrendingUp,
  Users,
  DollarSign,
  Brain,
} from "lucide-react"
import { StartupCard } from "@/components/startup-card"
import { StartupListItem } from "@/components/startup-list-item"
import { AIRecommendations } from "@/components/ai-recommendations"

// Mock data for startups
const MOCK_STARTUPS = [
  // Technology Domain Startups
  {
    id: "1",
    name: "AI Code Assistant",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Technology",
    description: "AI-powered code completion and debugging tool for developers",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "Moderate",
    growthScore: 89,
    investorInterest: 52,
    aiInsights: "Strong developer demand for AI coding tools. Experienced team from major tech companies.",
    tags: ["AI", "Developer Tools", "Code Generation", "Machine Learning"],
  },
  {
    id: "2",
    name: "CloudSync Pro",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Technology",
    description: "Intelligent cloud storage management platform with automated optimization",
    fundingGoal: 600000,
    currentFunding: 360000,
    riskLevel: "Low",
    growthScore: 87,
    investorInterest: 48,
    aiInsights: "Growing cloud adoption rates. Strong enterprise customer base.",
    tags: ["Cloud Computing", "Storage", "AI", "Enterprise"],
  },
  {
    id: "3",
    name: "DevOps Hub",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Technology",
    description: "Unified platform for automated DevOps workflows and CI/CD pipelines",
    fundingGoal: 750000,
    currentFunding: 450000,
    riskLevel: "Moderate",
    growthScore: 88,
    investorInterest: 51,
    aiInsights: "Increasing demand for DevOps automation. Strong technical team.",
    tags: ["DevOps", "Automation", "Cloud", "Enterprise"],
  },
  {
    id: "4",
    name: "QuantumTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Technology",
    description: "Quantum computing software development platform for researchers",
    fundingGoal: 1200000,
    currentFunding: 720000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 45,
    aiInsights: "Early mover in quantum computing software. Strong research partnerships.",
    tags: ["Quantum Computing", "Research", "AI", "Deep Tech"],
  },

  // Healthcare Domain Startups
  {
    id: "5",
    name: "MedAI Assistant",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Healthcare",
    description: "AI-powered medical diagnosis assistant for healthcare professionals",
    fundingGoal: 900000,
    currentFunding: 540000,
    riskLevel: "High",
    growthScore: 86,
    investorInterest: 46,
    aiInsights: "Strong potential for healthcare cost reduction. Experienced medical team.",
    tags: ["Healthcare", "AI", "Diagnostics", "Medical Tech"],
  },
  {
    id: "6",
    name: "HealthTrack Pro",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Healthcare",
    description: "Comprehensive health monitoring platform with predictive analytics",
    fundingGoal: 700000,
    currentFunding: 420000,
    riskLevel: "Moderate",
    growthScore: 88,
    investorInterest: 50,
    aiInsights: "Growing demand for preventive healthcare. Strong user engagement.",
    tags: ["Healthcare", "IoT", "Analytics", "Preventive Care"],
  },
  {
    id: "7",
    name: "TeleMed Plus",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Healthcare",
    description: "Advanced telehealth platform with AR/VR consultation capabilities",
    fundingGoal: 850000,
    currentFunding: 510000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Post-pandemic telehealth growth. Strong clinical partnerships.",
    tags: ["Telehealth", "AR/VR", "Healthcare", "Digital Health"],
  },
  {
    id: "8",
    name: "BioTech Solutions",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Healthcare",
    description: "AI-driven drug discovery and development platform",
    fundingGoal: 1500000,
    currentFunding: 900000,
    riskLevel: "High",
    growthScore: 84,
    investorInterest: 44,
    aiInsights: "Innovative approach to drug discovery. Strong research team.",
    tags: ["Biotech", "AI", "Drug Discovery", "Research"],
  },

  // Finance Domain Startups
  {
    id: "9",
    name: "FinAI Advisor",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Finance",
    description: "AI-powered personal finance management and investment advisor",
    fundingGoal: 750000,
    currentFunding: 450000,
    riskLevel: "Moderate",
    growthScore: 88,
    investorInterest: 52,
    aiInsights: "Growing demand for personalized financial advice. Strong user base.",
    tags: ["FinTech", "AI", "Personal Finance", "Investment"],
  },
  {
    id: "10",
    name: "BlockChain Pay",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Finance",
    description: "Blockchain-based payment processing platform for businesses",
    fundingGoal: 900000,
    currentFunding: 540000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 47,
    aiInsights: "Early mover in blockchain payments. Strong technical team.",
    tags: ["Blockchain", "Payments", "FinTech", "Crypto"],
  },
  {
    id: "11",
    name: "RiskGuard AI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Finance",
    description: "AI-powered risk assessment and fraud detection system",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 50,
    aiInsights: "Increasing demand for fraud prevention. Strong security expertise.",
    tags: ["Risk Management", "AI", "Security", "FinTech"],
  },
  {
    id: "12",
    name: "InsurTech Pro",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Finance",
    description: "Automated insurance processing and claims management platform",
    fundingGoal: 700000,
    currentFunding: 420000,
    riskLevel: "Low",
    growthScore: 89,
    investorInterest: 54,
    aiInsights: "Strong cost-saving potential. Proven ROI in pilot programs.",
    tags: ["Insurance", "AI", "Automation", "FinTech"],
  },

  // Education Domain Startups
  {
    id: "13",
    name: "EduAI Platform",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Education",
    description: "AI-powered personalized learning platform with adaptive content",
    fundingGoal: 600000,
    currentFunding: 360000,
    riskLevel: "Moderate",
    growthScore: 88,
    investorInterest: 51,
    aiInsights: "Growing demand for personalized education. Strong engagement metrics.",
    tags: ["EdTech", "AI", "Personalization", "Learning"],
  },
  {
    id: "14",
    name: "SkillBridge",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Education",
    description: "VR-based skill development platform for technical training",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 46,
    aiInsights: "Innovative approach to technical training. Strong partnerships.",
    tags: ["VR", "Education", "Training", "EdTech"],
  },
  {
    id: "15",
    name: "LearnSmart",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Education",
    description: "Gamified learning platform with real-time progress tracking",
    fundingGoal: 500000,
    currentFunding: 300000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Strong user engagement. Proven learning outcomes.",
    tags: ["Gamification", "Education", "Analytics", "EdTech"],
  },
  {
    id: "16",
    name: "EduConnect",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Education",
    description: "Platform connecting students with expert tutors worldwide",
    fundingGoal: 450000,
    currentFunding: 270000,
    riskLevel: "Low",
    growthScore: 86,
    investorInterest: 48,
    aiInsights: "Growing demand for online tutoring. Strong marketplace potential.",
    tags: ["Education", "Marketplace", "Tutoring", "EdTech"],
  },

  // E-commerce Domain Startups
  {
    id: "17",
    name: "ShopAI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "E-commerce",
    description: "AI-powered product recommendation and inventory management system",
    fundingGoal: 700000,
    currentFunding: 420000,
    riskLevel: "Moderate",
    growthScore: 88,
    investorInterest: 52,
    aiInsights: "Strong ROI for retailers. Proven conversion rate improvement.",
    tags: ["E-commerce", "AI", "Recommendations", "Retail"],
  },
  {
    id: "18",
    name: "EcoShop",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "E-commerce",
    description: "Sustainable e-commerce platform with carbon footprint tracking",
    fundingGoal: 600000,
    currentFunding: 360000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Growing demand for sustainable shopping. Strong brand partnerships.",
    tags: ["E-commerce", "Sustainability", "Green Tech", "Retail"],
  },
  {
    id: "19",
    name: "ShopSocial",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "E-commerce",
    description: "Social commerce platform with live shopping features",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 46,
    aiInsights: "Rising social commerce trend. Strong user engagement.",
    tags: ["Social Commerce", "Live Shopping", "E-commerce", "Social Media"],
  },
  {
    id: "20",
    name: "RetailAnalytics",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "E-commerce",
    description: "Advanced analytics platform for retail performance optimization",
    fundingGoal: 750000,
    currentFunding: 450000,
    riskLevel: "Moderate",
    growthScore: 86,
    investorInterest: 50,
    aiInsights: "Strong data-driven insights. Proven ROI for retailers.",
    tags: ["Analytics", "Retail", "AI", "E-commerce"],
  },

  // Manufacturing Domain Startups
  {
    id: "21",
    name: "SmartFactory",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Manufacturing",
    description: "IoT-based smart factory management system",
    fundingGoal: 1000000,
    currentFunding: 600000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 45,
    aiInsights: "Industry 4.0 transformation. Strong manufacturing expertise.",
    tags: ["IoT", "Manufacturing", "Automation", "Industry 4.0"],
  },
  {
    id: "22",
    name: "QualityAI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Manufacturing",
    description: "AI-powered quality control system for manufacturing",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Strong defect detection accuracy. Cost-saving potential.",
    tags: ["AI", "Quality Control", "Manufacturing", "Computer Vision"],
  },
  {
    id: "23",
    name: "SupplyChain Pro",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Manufacturing",
    description: "Blockchain-based supply chain management platform",
    fundingGoal: 900000,
    currentFunding: 540000,
    riskLevel: "Moderate",
    growthScore: 86,
    investorInterest: 48,
    aiInsights: "Transparent supply chain tracking. Strong enterprise demand.",
    tags: ["Supply Chain", "Blockchain", "Manufacturing", "Logistics"],
  },
  {
    id: "24",
    name: "3DPrint Hub",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Manufacturing",
    description: "Platform for on-demand 3D printing services",
    fundingGoal: 600000,
    currentFunding: 360000,
    riskLevel: "Moderate",
    growthScore: 88,
    investorInterest: 51,
    aiInsights: "Growing 3D printing adoption. Strong service network.",
    tags: ["3D Printing", "Manufacturing", "On-demand", "Additive Manufacturing"],
  },

  // Real Estate Domain Startups
  {
    id: "25",
    name: "PropTech AI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Real Estate",
    description: "AI-powered property valuation and market analysis platform",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Accurate property valuations. Strong market data integration.",
    tags: ["Real Estate", "AI", "Analytics", "Property Tech"],
  },
  {
    id: "26",
    name: "SmartHome Realty",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Real Estate",
    description: "Virtual reality property viewing platform",
    fundingGoal: 700000,
    currentFunding: 420000,
    riskLevel: "Moderate",
    growthScore: 86,
    investorInterest: 47,
    aiInsights: "Enhanced property viewing experience. Strong agent partnerships.",
    tags: ["Real Estate", "VR", "Property Viewing", "PropTech"],
  },
  {
    id: "27",
    name: "EcoProperty",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Real Estate",
    description: "Sustainable property development and management platform",
    fundingGoal: 900000,
    currentFunding: 540000,
    riskLevel: "Moderate",
    growthScore: 85,
    investorInterest: 46,
    aiInsights: "Growing demand for sustainable properties. Strong developer network.",
    tags: ["Real Estate", "Sustainability", "Property Management", "Green Tech"],
  },
  {
    id: "28",
    name: "RentSmart",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Real Estate",
    description: "AI-powered rental property management system",
    fundingGoal: 600000,
    currentFunding: 360000,
    riskLevel: "Low",
    growthScore: 88,
    investorInterest: 52,
    aiInsights: "Efficient property management. Strong tenant satisfaction.",
    tags: ["Real Estate", "AI", "Property Management", "Rental Tech"],
  },

  // Food & Beverage Domain Startups
  {
    id: "29",
    name: "FoodTech AI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Food & Beverage",
    description: "AI-powered restaurant management and optimization platform",
    fundingGoal: 700000,
    currentFunding: 420000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Strong cost-saving potential. Proven ROI for restaurants.",
    tags: ["Food Tech", "AI", "Restaurant Management", "Analytics"],
  },
  {
    id: "30",
    name: "BeverageBot",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Food & Beverage",
    description: "Automated beverage dispensing and customization system",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 45,
    aiInsights: "Innovative beverage technology. Strong market potential.",
    tags: ["Beverage Tech", "Automation", "Customization", "IoT"],
  },
  {
    id: "31",
    name: "FoodWaste AI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Food & Beverage",
    description: "AI system for restaurant inventory and waste management",
    fundingGoal: 600000,
    currentFunding: 360000,
    riskLevel: "Low",
    growthScore: 88,
    investorInterest: 51,
    aiInsights: "Strong cost reduction potential. Environmental impact.",
    tags: ["Food Tech", "AI", "Sustainability", "Restaurant Tech"],
  },
  {
    id: "32",
    name: "BrewTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Food & Beverage",
    description: "Smart brewing system with recipe optimization",
    fundingGoal: 500000,
    currentFunding: 300000,
    riskLevel: "Moderate",
    growthScore: 86,
    investorInterest: 47,
    aiInsights: "Growing craft beer market. Strong brewing expertise.",
    tags: ["Beverage Tech", "IoT", "Brewing", "Smart Home"],
  },

  // Entertainment Domain Startups
  {
    id: "33",
    name: "EntertainAI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Entertainment",
    description: "AI-powered content creation and recommendation platform",
    fundingGoal: 900000,
    currentFunding: 540000,
    riskLevel: "High",
    growthScore: 86,
    investorInterest: 48,
    aiInsights: "Strong content personalization. Growing user base.",
    tags: ["Entertainment", "AI", "Content Creation", "Recommendations"],
  },
  {
    id: "34",
    name: "GameVerse",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Entertainment",
    description: "Cross-platform gaming and social platform",
    fundingGoal: 1000000,
    currentFunding: 600000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 46,
    aiInsights: "Growing gaming market. Strong social features.",
    tags: ["Gaming", "Social Platform", "Cross-platform", "Entertainment"],
  },
  {
    id: "35",
    name: "StreamSmart",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Entertainment",
    description: "AI-powered streaming quality optimization platform",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 50,
    aiInsights: "Strong streaming optimization. Growing content demand.",
    tags: ["Streaming", "AI", "Quality Optimization", "Entertainment"],
  },
  {
    id: "36",
    name: "EventTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Entertainment",
    description: "Virtual and hybrid event management platform",
    fundingGoal: 700000,
    currentFunding: 420000,
    riskLevel: "Moderate",
    growthScore: 88,
    investorInterest: 52,
    aiInsights: "Post-pandemic event industry growth. Strong engagement features.",
    tags: ["Events", "Virtual Reality", "Hybrid Events", "Entertainment"],
  },

  // Transportation Domain Startups
  {
    id: "37",
    name: "TransitAI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Transportation",
    description: "AI-powered public transportation optimization system",
    fundingGoal: 900000,
    currentFunding: 540000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Strong efficiency improvements. Government partnerships.",
    tags: ["Transportation", "AI", "Public Transit", "Smart City"],
  },
  {
    id: "38",
    name: "FleetTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Transportation",
    description: "Smart fleet management and optimization platform",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "Moderate",
    growthScore: 86,
    investorInterest: 48,
    aiInsights: "Strong cost reduction potential. Growing fleet market.",
    tags: ["Fleet Management", "IoT", "Analytics", "Transportation"],
  },
  {
    id: "39",
    name: "RideShare Pro",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Transportation",
    description: "Advanced ridesharing platform with dynamic pricing",
    fundingGoal: 1000000,
    currentFunding: 600000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 46,
    aiInsights: "Innovative pricing model. Strong driver network.",
    tags: ["Ride Sharing", "AI", "Dynamic Pricing", "Transportation"],
  },
  {
    id: "40",
    name: "LogiTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Transportation",
    description: "AI-powered logistics optimization platform",
    fundingGoal: 850000,
    currentFunding: 510000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 50,
    aiInsights: "Strong route optimization. Growing e-commerce demand.",
    tags: ["Logistics", "AI", "Supply Chain", "Transportation"],
  },

  // Energy Domain Startups
  {
    id: "41",
    name: "EnergyAI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Energy",
    description: "AI-powered energy consumption optimization platform",
    fundingGoal: 900000,
    currentFunding: 540000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Strong cost savings potential. Growing energy efficiency demand.",
    tags: ["Energy", "AI", "Optimization", "Smart Grid"],
  },
  {
    id: "42",
    name: "SolarTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Energy",
    description: "Smart solar panel management and optimization system",
    fundingGoal: 1000000,
    currentFunding: 600000,
    riskLevel: "Moderate",
    growthScore: 86,
    investorInterest: 48,
    aiInsights: "Growing solar adoption. Strong efficiency improvements.",
    tags: ["Solar", "IoT", "Energy Management", "Clean Tech"],
  },
  {
    id: "43",
    name: "GridSmart",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Energy",
    description: "Smart grid management and demand response platform",
    fundingGoal: 1200000,
    currentFunding: 720000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 46,
    aiInsights: "Strong grid optimization. Government support.",
    tags: ["Smart Grid", "Energy Management", "IoT", "Clean Tech"],
  },
  {
    id: "44",
    name: "BatteryTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Energy",
    description: "Advanced battery management and optimization system",
    fundingGoal: 1100000,
    currentFunding: 660000,
    riskLevel: "High",
    growthScore: 84,
    investorInterest: 45,
    aiInsights: "Growing battery market. Strong efficiency improvements.",
    tags: ["Battery Tech", "Energy Storage", "IoT", "Clean Tech"],
  },

  // Agriculture Domain Startups
  {
    id: "45",
    name: "AgriTech AI",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Agriculture",
    description: "AI-powered crop management and yield optimization platform",
    fundingGoal: 800000,
    currentFunding: 480000,
    riskLevel: "Moderate",
    growthScore: 87,
    investorInterest: 49,
    aiInsights: "Strong yield improvements. Growing adoption rate.",
    tags: ["Agriculture", "AI", "Precision Farming", "IoT"],
  },
  {
    id: "46",
    name: "FarmBot",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Agriculture",
    description: "Automated farming robot for crop maintenance",
    fundingGoal: 1000000,
    currentFunding: 600000,
    riskLevel: "High",
    growthScore: 85,
    investorInterest: 46,
    aiInsights: "Labor shortage solution. Strong efficiency gains.",
    tags: ["Agriculture", "Robotics", "Automation", "Precision Farming"],
  },
  {
    id: "47",
    name: "SoilTech",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Agriculture",
    description: "Smart soil monitoring and nutrient management system",
    fundingGoal: 700000,
    currentFunding: 420000,
    riskLevel: "Moderate",
    growthScore: 86,
    investorInterest: 48,
    aiInsights: "Strong crop health improvements. Growing adoption.",
    tags: ["Agriculture", "IoT", "Soil Management", "Precision Farming"],
  },
  {
    id: "48",
    name: "AgriMarket",
    logo: "/placeholder.svg?height=80&width=80",
    industry: "Agriculture",
    description: "Digital marketplace connecting farmers with buyers",
    fundingGoal: 600000,
    currentFunding: 360000,
    riskLevel: "Low",
    growthScore: 88,
    investorInterest: 52,
    aiInsights: "Strong market efficiency. Growing user base.",
    tags: ["Agriculture", "Marketplace", "Supply Chain", "Digital Platform"],
  }
]

// Filter options
const INDUSTRIES = [
  "All Industries",
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "E-commerce",
  "Manufacturing",
  "Real Estate",
  "Food & Beverage",
  "Entertainment",
  "Transportation",
  "Energy",
  "Agriculture",
  "CleanTech",
  "HealthTech",
  "FinTech",
  "EdTech",
  "Cybersecurity",
  "FoodTech",
  "IoT",
  "Robotics",
  "AI",
  "Blockchain",
  "VR/AR",
  "Enterprise SaaS",
  "Retail Tech",
  "Urban Tech",
  "Creative Tech",
  "Fitness Tech",
  "Fashion Tech",
  "Biotech",
  "Quantum Computing",
  "Smart City",
  "Digital Health",
  "InsurTech",
  "AgriTech",
  "MedTech",
  "DevOps",
  "Cloud Computing",
  "Supply Chain",
  "3D Printing",
  "Social Commerce",
  "Analytics",
  "Personal Finance",
  "Telehealth",
  "Mental Health",
  "Elder Care",
  "Drug Discovery",
  "Precision Agriculture",
  "Smart Grid",
  "EV",
  "NFT",
  "Gamification",
  "Marketplace",
  "Logistics",
  "Automation",
  "Computer Vision",
  "Machine Learning",
  "Deep Tech",
  "Digital Art",
  "STEM Education",
  "Financial Literacy",
  "Smart Home",
  "Energy Efficiency",
  "Circular Economy",
  "Preventive Care",
  "Personalization",
  "Enterprise",
  "SMB",
  "B2B",
  "B2C",
  "B2B2C"
]

const RISK_LEVELS = ["All Risks", "Low", "Moderate", "High"]

export default function StartupCatalogue() {
  const [view, setView] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("All Industries")
  const [selectedRisk, setSelectedRisk] = useState("All Risks")
  const [fundingRange, setFundingRange] = useState([0, 1000000])
  const [growthScore, setGrowthScore] = useState([0, 100])
  const [filteredStartups, setFilteredStartups] = useState(MOCK_STARTUPS)
  const [bookmarkedStartups, setBookmarkedStartups] = useState<string[]>([])

  // Get investor's preferred domain from localStorage or session
  useEffect(() => {
    const investorData = localStorage.getItem('investorData')
    if (investorData) {
      const { preferredDomain } = JSON.parse(investorData)
      if (preferredDomain) {
        setSelectedIndustry(preferredDomain)
      }
    }
  }, [])

  // Apply filters
  useEffect(() => {
    let filtered = MOCK_STARTUPS

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (startup) =>
          startup.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          startup.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          startup.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    }

    // Apply industry filter
    if (selectedIndustry !== "All Industries") {
      filtered = filtered.filter((startup) => startup.industry === selectedIndustry)
    }

    // Apply risk filter
    if (selectedRisk !== "All Risks") {
      filtered = filtered.filter((startup) => startup.riskLevel === selectedRisk)
    }

    // Apply funding range filter
    filtered = filtered.filter(
      (startup) => startup.fundingGoal >= fundingRange[0] && startup.fundingGoal <= fundingRange[1],
    )

    // Apply growth score filter
    filtered = filtered.filter(
      (startup) => startup.growthScore >= growthScore[0] && startup.growthScore <= growthScore[1],
    )

    setFilteredStartups(filtered)
  }, [searchQuery, selectedIndustry, selectedRisk, fundingRange, growthScore])

  // Toggle bookmark
  const toggleBookmark = (startupId: string) => {
    setBookmarkedStartups((prev) =>
      prev.includes(startupId) ? prev.filter((id) => id !== startupId) : [...prev, startupId],
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Startup Catalogue</h1>
      <div className="grid gap-6">
        {filteredStartups.map((startup) => (
          <StartupListItem
            key={startup.id}
            startup={startup}
            isBookmarked={bookmarkedStartups.includes(startup.id)}
            onBookmark={() => toggleBookmark(startup.id)}
          />
        ))}
      </div>
    </div>
  )
}

