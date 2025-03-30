"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const testimonials = [
    {
      quote:
        "StartupGenius+ helped me transform my technical skills into a viable SaaS business idea. The competitor analysis was spot on and the pitch deck impressed my investors!",
      name: "Sarah Johnson",
      title: "Founder, TechFlow",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "I was stuck trying to figure out what kind of business to start. StartupGenius+ analyzed my resume and suggested a niche consulting service that perfectly matched my experience.",
      name: "Michael Chen",
      title: "CEO, DataConsult",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The funding strategy provided by StartupGenius+ was invaluable. It helped me secure seed funding within 3 months of launching my startup.",
      name: "Aisha Patel",
      title: "Founder, EcoRetail",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
    setAutoplay(false)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
    setAutoplay(false)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay, testimonials.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 md:-ml-6 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-800 bg-black/50 backdrop-blur-sm hover:bg-[#7F5AF0]/20 hover:border-[#7F5AF0]/50"
          onClick={prev}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl">
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="relative p-8 rounded-xl border border-gray-800 bg-black/50 backdrop-blur-sm h-full">
                <Quote className="absolute top-6 left-6 h-8 w-8 text-[#7F5AF0]/30" />
                <div className="flex flex-col h-full justify-between">
                  <p className="text-gray-300 text-lg italic mt-6 mb-6">"{testimonials[current].quote}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonials[current].avatar || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium text-white">{testimonials[current].name}</p>
                      <p className="text-sm text-gray-400">{testimonials[current].title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 md:-mr-6 z-10">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-800 bg-black/50 backdrop-blur-sm hover:bg-[#7F5AF0]/20 hover:border-[#7F5AF0]/50"
          onClick={next}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              current === index ? "bg-[#7F5AF0] w-6" : "bg-gray-600"
            }`}
            onClick={() => {
              setCurrent(index)
              setAutoplay(false)
            }}
          />
        ))}
      </div>
    </div>
  )
}

