"use client"

import { Header } from "@/components/header"
import { PageBackground } from "@/components/page-background"
import { DemoPreview } from "@/components/demo-preview"

export default function PlatformDemoPage() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <PageBackground />
      <Header />

      <section className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent mb-4">
            Platform Demo Preview
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Experience the powerful features that will help you connect, fund, and scale your startup.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <DemoPreview />
        </div>
      </section>
    </div>
  )
}