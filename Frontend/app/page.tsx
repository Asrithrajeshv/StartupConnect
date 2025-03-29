import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Brain,
  ChevronDown,
  CreditCard,
  DollarSign,
  ExternalLink,
  HandshakeIcon,
  LineChart,
  Rocket,
  Sparkles,
  BarChart,
  Users,
  LayoutGrid,
  MessageSquare,
  TrendingUp,
} from "lucide-react"
import { HeroBackground } from "@/components/hero-background"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { PricingCard } from "@/components/pricing-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HowItWorks } from "@/components/how-it-works"
import { DemoPreview } from "@/components/demo-preview"
import { TrustedBy } from "@/components/trusted-by"
import { Header } from "@/components/header"
import { CommunityHubs } from "@/components/community-hubs"
import { GamifiedExperience } from "@/components/gamified-experience"
import { ResourcesHub } from "@/components/resources-hub"
import { BonusFeatures } from "@/components/bonus-features"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative bg-black overflow-hidden">
      <HeroBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 backdrop-blur-sm">
            <span className="text-sm font-medium bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
              AI-Powered Startup Ecosystem
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
            Connect, Fund, and Scale Your Startup with AI
          </h1>

          <div className="h-8 md:h-12">
            <TypewriterEffect
              words={[
                "AI-Powered Investor Matching",
                "Dynamic Funding Models",
                "Real-Time Growth Forecasting",
                "Startup Community",
              ]}
            />
          </div>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our AI platform connects startups with investors, provides real-time business insights, and implements
            dynamic funding models. List your business, get funded, and access powerful analytics all in one place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            <Link href="/upload">
              <Button className="w-full group relative overflow-hidden rounded-full px-6 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                  <Rocket className="w-4 h-4" />
                  Upload Resume
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>

            <Link href="/platform">
              <Button
                variant="outline"
                className="w-full group relative overflow-hidden rounded-full px-6 py-6 border border-[#FF5470]/50 hover:border-[#FF5470] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(255,84,112,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] bg-clip-text text-transparent font-medium">
                  <DollarSign className="w-4 h-4 text-[#FF5470]" />
                  Investor Platform
                </span>
              </Button>
            </Link>

            <Link href="/dashboard">
              <Button
                variant="outline"
                className="w-full group relative overflow-hidden rounded-full px-6 py-6 border border-[#2CB67D]/50 hover:border-[#2CB67D] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(44,182,125,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] bg-clip-text text-transparent font-medium">
                  <BarChart className="w-4 h-4 text-[#2CB67D]" />
                  Startup Dashboard
                </span>
              </Button>
            </Link>

            <Link href="/platform-overview">
              <Button
                variant="outline"
                className="w-full group relative overflow-hidden rounded-full px-6 py-6 border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(127,90,240,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent font-medium">
                  <LayoutGrid className="w-4 h-4 text-[#7F5AF0]" />
                  Platform Overview
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
        {/* Live Stats */}
        <div className="absolute bottom-24 left-0 right-0">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#7F5AF0]/30">
              <span className="text-sm font-medium text-white">
                Total Investments Processed: <span className="text-[#2CB67D]">$42.8 Million</span>
              </span>
            </div>
            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#FF5470]/30">
              <span className="text-sm font-medium text-white">
                Successful Startups: <span className="text-[#FF5470]">320+</span>
              </span>
            </div>
            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-[#2CB67D]/30">
              <span className="text-sm font-medium text-white">
                Active Investors: <span className="text-[#7F5AF0]">1,250+</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Our Core Platform Features
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A complete ecosystem for startups and investors powered by advanced AI technology.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
            <div className="relative p-px rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <Rocket className="w-5 h-5 mr-2 text-[#7F5AF0]" />
                  For Startups
                </h3>
                <p className="text-gray-300">
                  List your business, get AI-powered growth insights, and connect with the perfect investors for your
                  industry and stage.
                </p>
              </div>
            </div>

            <div className="relative p-px rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-[#FF5470]" />
                  For Investors
                </h3>
                <p className="text-gray-300">
                  Discover high-potential startups, filter by industry and risk level, and build a diversified
                  investment portfolio.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative p-px rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#FF5470]/20 flex items-center justify-center mb-6">
                  <HandshakeIcon className="w-6 h-6 text-[#FF5470]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">AI-Powered Investor Matching</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Our AI analyzes your startup's potential and matches you with investors who align with your industry,
                  growth stage, and vision.
                </p>
                <Link href="/platform">
                  <Button
                    variant="outline"
                    className="w-full justify-center rounded-full border border-[#FF5470]/50 hover:border-[#FF5470] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,84,112,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 text-[#FF5470]">
                      Explore Investor Platform
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative p-px rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mb-6">
                  <LineChart className="w-6 h-6 text-[#2CB67D]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Real-Time Growth Forecasting</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Get AI-powered insights into your startup's growth trajectory, market position, and competitor
                  analysis with our dynamic dashboards.
                </p>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="w-full justify-center rounded-full border border-[#2CB67D]/50 hover:border-[#2CB67D] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(44,182,125,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 text-[#2CB67D]">
                      View Startup Dashboard
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative p-px rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#FF5470] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6 text-[#7F5AF0]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Dynamic Repayment Model</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Our innovative funding model adjusts repayments based on your startup's performance - pay more when
                  profitable, less when struggling.
                </p>
                <Link href="/platform-overview">
                  <Button
                    variant="outline"
                    className="w-full justify-center rounded-full border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(127,90,240,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 text-[#7F5AF0]">
                      Learn About Funding
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
            <div className="relative p-px rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-[#7F5AF0]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Skill-to-Startup Generator</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Transform your skills and experience into viable startup ideas with our AI-powered generator. Upload
                  your resume or enter your skills to get personalized business recommendations.
                </p>
                <Link href="/upload">
                  <Button
                    variant="outline"
                    className="w-full justify-center rounded-full border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(127,90,240,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 text-[#7F5AF0]">
                      Generate Startup Ideas
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative p-px rounded-xl overflow-hidden h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470] to-[#2CB67D] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-[#FF5470]/20 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-[#FF5470]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Startup Community & Forums</h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Connect with like-minded founders, investors, and industry experts in our domain-specific communities.
                  Share insights, find co-founders, and stay updated on industry trends.
                </p>
                <Link href="#communities">
                  <Button
                    variant="outline"
                    className="w-full justify-center rounded-full border border-[#FF5470]/50 hover:border-[#FF5470] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,84,112,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2 text-[#FF5470]">
                      Join Communities
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/platform-overview">
              <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                  Explore All Platform Features
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Authentication & Community */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Authentication */}
            <div className="relative p-px rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Dual-User Authentication System</h3>
                <p className="text-gray-300 mb-6">
                  Our platform features separate authentication flows for startups and investors, ensuring each user
                  gets a tailored experience from the moment they sign up.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-lg border border-[#7F5AF0]/30 bg-[#7F5AF0]/5">
                    <h4 className="text-white font-medium mb-2">Startup Access</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#7F5AF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">Business registration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#7F5AF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">AI-powered business analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#7F5AF0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">Investor communication panel</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg border border-[#FF5470]/30 bg-[#FF5470]/5">
                    <h4 className="text-white font-medium mb-2">Investor Access</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#FF5470]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">Startup marketplace</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#FF5470]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">Advanced filtering options</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-[#FF5470]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300">Investment portfolio tracking</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link href="/signup">
                    <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                      <span className="flex items-center gap-2">
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Community Forum */}
            <div className="relative p-px rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Domain-Specific Community Forum</h3>
                <p className="text-gray-300 mb-6">
                  Connect with like-minded founders and investors in our industry-specific community forums, powered by
                  AI-suggested discussion topics.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">AI-Suggested Topics</h4>
                        <p className="text-sm text-gray-400 mb-2">
                          Our AI analyzes market trends to suggest relevant discussion topics
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 rounded-full bg-[#7F5AF0]/20 text-[#7F5AF0] text-xs">
                            Tech Trends
                          </span>
                          <span className="px-2 py-1 rounded-full bg-[#2CB67D]/20 text-[#2CB67D] text-xs">
                            Healthcare
                          </span>
                          <span className="px-2 py-1 rounded-full bg-[#FF5470]/20 text-[#FF5470] text-xs">FinTech</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#2CB67D]/20 flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#2CB67D]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Networking Opportunities</h4>
                        <p className="text-sm text-gray-400">
                          Connect with potential co-founders, mentors, and investors in your industry
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-gray-800 bg-black/30">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF5470]/20 flex items-center justify-center">
                        <LineChart className="w-5 h-5 text-[#FF5470]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Live Market Updates</h4>
                        <p className="text-sm text-gray-400">
                          Stay informed with real-time industry news and market announcements
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Link href="#communities">
                    <Button
                      variant="outline"
                      className="rounded-full border border-[#FF5470]/50 hover:border-[#FF5470] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(255,84,112,0.3)]"
                    >
                      <span className="flex items-center gap-2 text-[#FF5470]">
                        Explore Communities
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <TrustedBy />

      {/* How It Works Section */}
      <section className="relative z-10 py-20 bg-black" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              How Our Platform Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From idea generation to funding and growth - our AI-powered platform supports your entire startup journey.
            </p>
          </div>

          <HowItWorks />
        </div>
      </section>

      {/* Domain-Specific Community Hubs */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900" id="communities">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Join Domain-Specific Startup Communities
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Connect with like-minded founders in your industry and get specialized insights and support.
            </p>
          </div>

          <CommunityHubs />
        </div>
      </section>

      {/* Live Demo Preview */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              See Our Platform in Action
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Preview the powerful features that will help you connect, fund, and scale your startup.
            </p>
          </div>

          <DemoPreview />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black" id="features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Packed with Everything You Need
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Powerful tools to help you ideate, validate, fund, and launch your startup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Investor Matchmaking",
                description: "Get matched with investors who are most likely to fund your specific type of startup.",
                icon: "Handshake",
                gradient: "from-[#FF5470] to-[#7F5AF0]",
              },
              {
                title: "Dynamic Repayment Model",
                description: "Pay more when profitable, less when struggling with our innovative funding approach.",
                icon: "CreditCard",
                gradient: "from-[#7F5AF0] to-[#2CB67D]",
              },
              {
                title: "Real-Time Growth Forecasting",
                description: "AI-powered predictions on your startup's growth trajectory and market position.",
                icon: "LineChart",
                gradient: "from-[#2CB67D] to-[#FF5470]",
              },
              {
                title: "Competitor Analysis",
                description:
                  "Get detailed insights into your competitors' strengths and weaknesses to find your unique market position.",
                icon: "Users",
                gradient: "from-[#FF5470] to-[#7F5AF0]",
              },
              {
                title: "Instant Pitch Decks",
                description:
                  "Download professionally designed pitch decks tailored to your startup idea and ready for investors.",
                icon: "FilePresentation",
                gradient: "from-[#2CB67D] to-[#FF5470]",
              },
              {
                title: "Skill-to-Startup Generator",
                description: "Transform your skills into viable startup ideas with our AI-powered generator.",
                icon: "Sparkles",
                gradient: "from-[#7F5AF0] to-[#2CB67D]",
              },
              {
                title: "Community Forums",
                description: "Connect with founders, investors, and experts in domain-specific communities.",
                icon: "MessageSquare",
                gradient: "from-[#FF5470] to-[#7F5AF0]",
              },
              {
                title: "Funding Progress Tracking",
                description: "Monitor your funding journey with real-time updates and analytics.",
                icon: "BarChart",
                gradient: "from-[#7F5AF0] to-[#2CB67D]",
              },
              {
                title: "Market Opportunity Heatmap",
                description: "Visualize untapped market opportunities and gaps your startup can fill.",
                icon: "LayoutGrid",
                gradient: "from-[#2CB67D] to-[#FF5470]",
              },
            ].map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gamified Experience */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Make Your Startup Journey Fun!
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Earn rewards and recognition as you build your startup with our gamified experience.
            </p>
          </div>

          <GamifiedExperience />
        </div>
      </section>

      {/* Resources Hub */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Learn, Build, Launch
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Access exclusive resources to help you at every stage of your startup journey.
            </p>
          </div>

          <ResourcesHub />
        </div>
      </section>

      {/* Bonus Features */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Premium Features for Power Users
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Take your startup to the next level with these advanced tools and features.
            </p>
          </div>

          <BonusFeatures />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-gray-900 to-black" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              What Founders Are Saying
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join thousands of entrepreneurs who have launched successful startups with StartupGenius+.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-20 bg-black" id="pricing">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Built for Every Founder's Budget
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Select the perfect plan for your startup journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Free Tier"
              price="$0"
              description="Perfect for testing the waters"
              features={[
                "1 Startup Idea Generation",
                "Basic Business Model",
                "Limited Competitor Analysis",
                "Simple Pitch Deck",
                "Community Access",
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
              popular={false}
            />

            <PricingCard
              title="Pro"
              price="$29"
              period="per month"
              description="For serious entrepreneurs"
              features={[
                "Unlimited Idea Generation",
                "Advanced Business Models",
                "Detailed Competitor Analysis",
                "Professional Pitch Deck",
                "Funding Strategy",
                "Weekly Insights Email",
                "Priority Support",
              ]}
              buttonText="Get Started"
              buttonVariant="default"
              popular={true}
            />

            <PricingCard
              title="Lifetime Access"
              price="$499"
              period="one-time payment"
              description="For committed founders"
              features={[
                "Everything in Pro",
                "Market Opportunity Heatmap",
                "Investor Matching",
                "Financial Projections",
                "Custom Branding",
                "API Access",
                "Dedicated Support",
              ]}
              buttonText="Get Started"
              buttonVariant="outline"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">Find answers to common questions about StartupGenius+.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "How does the AI investor matching work?",
                answer:
                  "Our AI analyzes your startup's business plan, market position, and growth potential, then matches you with investors whose preferences align with your profile. The matching algorithm considers factors like industry focus, funding stage, risk tolerance, and investment goals to create the most compatible connections.",
              },
              {
                question: "What is the dynamic repayment model?",
                answer:
                  "Our dynamic repayment model adjusts your funding repayments based on your startup's actual performance. When your business is thriving, you pay back more, and when you're facing challenges, you pay less. This innovative approach aligns investor returns with your business reality, creating  you pay less. This innovative approach aligns investor returns with your business reality, creating a more sustainable funding relationship that grows with your startup.",
              },
              {
                question: "Can I use StartupGenius+ if I don't have a business plan yet?",
                answer:
                  "Our Skill-to-Startup Generator is designed specifically for entrepreneurs who are still in the ideation phase. Simply upload your resume or enter your skills and experience, and our AI will generate viable startup ideas tailored to your profile, complete with business models and market analysis.",
              },
              {
                question: "How accurate is the growth forecasting?",
                answer:
                  "Our AI-powered growth forecasting uses current market data, industry trends, and your startup's specific metrics to provide highly accurate predictions. While no forecast can be 100% certain, our models are regularly updated and calibrated against real-world outcomes to ensure the highest possible accuracy.",
              },
              {
                question: "How do I connect with investors on the platform?",
                answer:
                  "Once you've completed your startup profile and business plan, our AI automatically matches you with compatible investors. You can also browse investor profiles, participate in virtual pitch events, and engage with potential investors in our community forums. Premium users get priority matching and direct introduction opportunities.",
              },
              {
                question: "Is my data secure and confidential?",
                answer:
                  "Yes, we take data security very seriously. All data is encrypted both in transit and at rest. We never share your personal information or startup ideas with third parties without your explicit consent. You can review our privacy policy for more details.",
              },
            ].map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-800 rounded-lg bg-black/50 backdrop-blur-sm px-6"
              >
                <AccordionTrigger className="text-white hover:text-[#7F5AF0] text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Platform Overview Highlight */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="relative p-px rounded-xl overflow-hidden max-w-6xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
            <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-8 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 backdrop-blur-sm">
                    <span className="text-sm font-medium bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
                      Complete Platform
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Full Platform</h2>

                  <p className="text-gray-300 mb-6">
                    Discover how our comprehensive platform connects startups with investors, provides real-time
                    analytics, and implements dynamic funding models.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <Brain className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">AI-Powered Matching</h4>
                        <p className="text-sm text-gray-400">Connect with the perfect investors for your startup</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                        <LineChart className="w-4 h-4 text-[#2CB67D]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Real-Time Analytics</h4>
                        <p className="text-sm text-gray-400">Track your growth and market position</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                        <CreditCard className="w-4 h-4 text-[#FF5470]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Dynamic Funding Model</h4>
                        <p className="text-sm text-gray-400">Pay more when profitable, less when struggling</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/platform-overview">
                    <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                      <span className="flex items-center gap-2">
                        Explore Full Platform
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Button>
                  </Link>
                </div>

                <div className="relative">
                  <div className="relative p-px rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
                    <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6">
                      <Image
                        src="/placeholder.svg?height=400&width=500"
                        alt="Platform Overview"
                        width={500}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />

                      <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl overflow-hidden rotate-6 bg-black/80 border border-[#2CB67D]/30 flex items-center justify-center">
                        <LineChart className="w-12 h-12 text-[#2CB67D]" />
                      </div>

                      <div className="absolute -top-4 -left-4 w-32 h-32 rounded-xl overflow-hidden -rotate-6 bg-black/80 border border-[#7F5AF0]/30 flex items-center justify-center">
                        <HandshakeIcon className="w-12 h-12 text-[#7F5AF0]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Payment Model */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              AI-Powered Dynamic Payment Model
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our innovative revenue-based contribution system adjusts based on your startup's performance.
            </p>
          </div>

          <div className="relative p-px rounded-xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Revenue-Based Contribution</h3>
                  <p className="text-gray-300 mb-6">
                    Our platform uses AI to analyze your startup's financial health and adjusts payment terms
                    accordingly:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#2CB67D]/20 flex items-center justify-center mt-0.5">
                        <TrendingUp className="w-4 h-4 text-[#2CB67D]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">When Profits Are High</h4>
                        <p className="text-sm text-gray-400">
                          During profitable periods, your startup contributes a higher percentage, supporting the
                          ecosystem
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#FF5470]/20 flex items-center justify-center mt-0.5">
                        <TrendingUp className="w-4 h-4 text-[#FF5470]" transform="rotate(180)" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">When Facing Challenges</h4>
                        <p className="text-sm text-gray-400">
                          During difficult times, your contribution decreases, giving you breathing room to recover
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mt-0.5">
                        <Brain className="w-4 h-4 text-[#7F5AF0]" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">AI-Powered Adjustments</h4>
                        <p className="text-sm text-gray-400">
                          Our AI continuously monitors your business metrics to make real-time payment adjustments
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href="/platform-overview">
                      <Button className="rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_15px_rgba(127,90,240,0.5)]">
                        <span className="flex items-center gap-2">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <div className="relative p-px rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/30 to-[#2CB67D]/30 opacity-50"></div>
                    <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6">
                      <div className="h-64">
                        <Image
                          src="/placeholder.svg?height=256&width=400"
                          alt="Dynamic Payment Model"
                          width={400}
                          height={256}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="p-3 rounded-lg bg-[#2CB67D]/10 border border-[#2CB67D]/20">
                          <p className="text-xs text-gray-400 mb-1">High Growth</p>
                          <p className="text-lg font-bold text-white">8-12%</p>
                          <p className="text-xs text-gray-400">of revenue</p>
                        </div>

                        <div className="p-3 rounded-lg bg-[#FF5470]/10 border border-[#FF5470]/20">
                          <p className="text-xs text-gray-400 mb-1">Recovery Mode</p>
                          <p className="text-lg font-bold text-white">3-5%</p>
                          <p className="text-xs text-gray-400">of revenue</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Quick Access
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Jump directly to the section of our platform that interests you most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Link href="/upload">
              <div className="relative p-px rounded-xl overflow-hidden h-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center">
                  <Sparkles className="w-12 h-12 text-[#7F5AF0] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Generate Startup Ideas</h3>
                  <p className="text-gray-400 text-sm">Transform your skills into viable business ideas</p>
                </div>
              </div>
            </Link>

            <Link href="/platform">
              <div className="relative p-px rounded-xl overflow-hidden h-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5470] to-[#7F5AF0] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center">
                  <HandshakeIcon className="w-12 h-12 text-[#FF5470] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Investor Platform</h3>
                  <p className="text-gray-400 text-sm">Connect with investors and secure funding</p>
                </div>
              </div>
            </Link>

            <Link href="/dashboard">
              <div className="relative p-px rounded-xl overflow-hidden h-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center">
                  <BarChart className="w-12 h-12 text-[#2CB67D] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Startup Dashboard</h3>
                  <p className="text-gray-400 text-sm">Track growth and analyze market position</p>
                </div>
              </div>
            </Link>

            <Link href="/platform-overview">
              <div className="relative p-px rounded-xl overflow-hidden h-full group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#FF5470] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center text-center">
                  <LayoutGrid className="w-12 h-12 text-[#7F5AF0] mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">Platform Overview</h3>
                  <p className="text-gray-400 text-sm">Explore all features and capabilities</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="relative p-px rounded-xl overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] animate-pulse"></div>
            <div className="relative bg-black/90 backdrop-blur-sm rounded-xl p-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Launch Your Startup?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join thousands of entrepreneurs who have transformed their skills into successful startups with
                StartupGenius+.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/upload">
                  <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2 text-white font-medium">
                      Get Started Now
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#2CB67D] to-[#7F5AF0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Button>
                </Link>
                <Link href="/platform-overview">
                  <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 border border-[#7F5AF0]/50 hover:border-[#7F5AF0] bg-black/30 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(127,90,240,0.3)] transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-[#7F5AF0] group-hover:text-[#2CB67D] transition-colors duration-300" />
                      Explore Platform
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">StartupGenius+</span>
              </div>
              <p className="text-gray-400 mb-4">
                AI-powered platform that connects startups with investors and provides growth analytics.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.615 11.615 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/upload" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Generate Ideas
                  </Link>
                </li>
                <li>
                  <Link href="/platform" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Investor Platform
                  </Link>
                </li>
                <li>
                  <Link href="/dashboard" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Startup Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/platform-overview" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Platform Overview
                  </Link>
                </li>
                <li>
                  <Link href="#communities" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Communities
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-[#7F5AF0] transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2025 StartupGenius+. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

