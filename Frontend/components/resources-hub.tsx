"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, Video, Download, BookOpen, ArrowRight, Calendar, Clock } from "lucide-react"

export function ResourcesHub() {
  const [activeTab, setActiveTab] = useState("blog")

  const tabs = [
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "videos", label: "Masterclasses", icon: Video },
    { id: "templates", label: "Templates", icon: FileText },
  ]

  const blogPosts = [
    {
      title: "10 Startup Trends to Watch in 2023",
      excerpt: "Discover the emerging trends that will shape the startup ecosystem this year.",
      image: "/placeholder.svg?height=200&width=300",
      date: "May 15, 2023",
      readTime: "5 min read",
    },
    {
      title: "How to Validate Your Startup Idea",
      excerpt: "Learn proven methods to test your startup concept before investing time and money.",
      image: "/placeholder.svg?height=200&width=300",
      date: "April 28, 2023",
      readTime: "7 min read",
    },
    {
      title: "Fundraising 101: A Guide for First-Time Founders",
      excerpt: "Everything you need to know about raising capital for your startup.",
      image: "/placeholder.svg?height=200&width=300",
      date: "April 10, 2023",
      readTime: "9 min read",
    },
  ]

  const masterclasses = [
    {
      title: "Building a Minimum Viable Product",
      instructor: "Alex Chen, Product Lead",
      image: "/placeholder.svg?height=200&width=300",
      duration: "45 minutes",
    },
    {
      title: "Pitching to Investors: Do's and Don'ts",
      instructor: "Sarah Johnson, VC Partner",
      image: "/placeholder.svg?height=200&width=300",
      duration: "60 minutes",
    },
    {
      title: "Growth Hacking for Early-Stage Startups",
      instructor: "Michael Lee, Growth Expert",
      image: "/placeholder.svg?height=200&width=300",
      duration: "50 minutes",
    },
  ]

  const templates = [
    {
      title: "Startup Financial Model",
      description: "A comprehensive Excel template for financial projections.",
      downloads: "2.4K",
      format: "XLSX",
    },
    {
      title: "Investor Pitch Deck",
      description: "A professionally designed PowerPoint template for pitching to investors.",
      downloads: "3.8K",
      format: "PPTX",
    },
    {
      title: "Product Roadmap",
      description: "A visual template to plan and communicate your product strategy.",
      downloads: "1.9K",
      format: "PDF",
    },
    {
      title: "Investor Outreach Email Templates",
      description: "Proven email templates for cold outreach to potential investors.",
      downloads: "4.2K",
      format: "DOCX",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-center mb-10">
        <div className="inline-flex rounded-full border border-gray-800 p-1 bg-black/50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id ? "text-white" : "text-gray-400 hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeResourceTab"
                  className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 border border-[#7F5AF0]/30 rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        {activeTab === "blog" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-[#7F5AF0] hover:text-[#2CB67D]">
                      <span className="flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
              >
                View All Blog Posts
              </Button>
            </div>
          </motion.div>
        )}

        {activeTab === "videos" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {masterclasses.map((video, index) => (
                <div
                  key={index}
                  className="rounded-xl overflow-hidden border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden group">
                    <Image
                      src={video.image || "/placeholder.svg"}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-[#7F5AF0]/80 flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{video.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{video.instructor}</p>
                    <Button variant="link" className="p-0 h-auto text-[#7F5AF0] hover:text-[#2CB67D]">
                      <span className="flex items-center gap-1">
                        Watch Now
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
              >
                View All Masterclasses
              </Button>
            </div>
          </motion.div>
        )}

        {activeTab === "templates" && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {templates.map((template, index) => (
                <div
                  key={index}
                  className="flex items-center p-5 rounded-xl border border-gray-800 bg-black/30 hover:border-[#7F5AF0]/50 hover:shadow-[0_0_25px_rgba(127,90,240,0.2)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-[#7F5AF0]/20 flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-[#7F5AF0]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{template.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{template.description}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="bg-gray-800 px-2 py-0.5 rounded">{template.format}</span>
                      <span className="flex items-center">
                        <Download className="w-3 h-3 mr-1" />
                        {template.downloads} downloads
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="ml-4 rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Download
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="rounded-full border-[#7F5AF0]/50 hover:border-[#7F5AF0] hover:bg-[#7F5AF0]/10"
              >
                View All Templates
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

