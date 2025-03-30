import { Button } from "@/components/ui/button"
import { Upload, DollarSign, LineChart, LayoutGrid } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 md:py-32 z-10">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] mb-12">
          Implements dynamic funding models. List your business, get funded, and access powerful analytics all in one place.
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] text-white hover:opacity-90 transition-opacity">
            <Upload className="mr-2 h-4 w-4" /> Upload Resume
          </Button>
          
          <Button variant="outline" className="border-[#FF5470] text-[#FF5470] hover:bg-[#FF5470]/10 backdrop-blur-sm">
            <DollarSign className="mr-2 h-4 w-4" /> Investor Platform
          </Button>
          
          <Button variant="outline" className="border-[#2CB67D] text-[#2CB67D] hover:bg-[#2CB67D]/10 backdrop-blur-sm">
            <LineChart className="mr-2 h-4 w-4" /> Startup Dashboard
          </Button>
          
          <Button variant="outline" className="border-[#7F5AF0] text-[#7F5AF0] hover:bg-[#7F5AF0]/10 backdrop-blur-sm">
            <LayoutGrid className="mr-2 h-4 w-4" /> Platform Overview
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
} 