"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { PageBackground } from "@/components/page-background"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function GenerateResumePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    experience: "",
    education: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const isFormValid = () => {
    return formData.name && formData.email && formData.skills && formData.experience
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col min-h-screen">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col max-w-2xl mx-auto w-full"
        >
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
              Generate Your Resume
            </h1>
            <p className="text-gray-300">
              Fill in the details below to quickly generate a resume that we'll use to create startup ideas tailored to
              your skills.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                Phone (Optional)
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skills" className="text-white">
                Skills
              </Label>
              <Textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                placeholder="List your key skills (e.g., JavaScript, Project Management, Data Analysis)"
                className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10 min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-white">
                Work Experience
              </Label>
              <Textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="Briefly describe your work experience"
                className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10 min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education" className="text-white">
                Education (Optional)
              </Label>
              <Textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="List your educational background"
                className="bg-black/50 border-gray-800 focus:border-[#7F5AF0] focus:ring-[#7F5AF0]/10 min-h-[100px]"
              />
            </div>
          </div>

          <div className="mt-8">
            <Link href={isFormValid() ? "/preferences" : "#"}>
              <Button
                className="w-full rounded-full py-6 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] hover:shadow-[0_0_25px_rgba(127,90,240,0.5)] transition-all duration-300 flex items-center justify-center"
                disabled={!isFormValid()}
              >
                <span className="flex items-center gap-2">
                  Generate Resume & Continue
                  <Sparkles className="w-4 h-4" />
                </span>
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="mt-auto pt-8">
          <div className="w-full bg-gray-800/30 h-1 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] h-full w-1/4 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-2">
            <span className="font-medium text-white">Generate Resume</span>
            <span>Set Preferences</span>
            <span>Generate Ideas</span>
            <span>Results</span>
          </div>
        </div>
      </div>
    </div>
  )
}

