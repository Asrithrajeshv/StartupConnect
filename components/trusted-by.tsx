"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const marqueeAnimation = () => {
      const logos = container.querySelectorAll(".logo-item")
      const containerWidth = container.offsetWidth

      logos.forEach((logo, index) => {
        const logoElement = logo as HTMLElement
        const speed = 0.5

        logoElement.style.animationDuration = `${30 + index * 5}s`
        logoElement.style.animationDelay = `${index * 0.5}s`
      })
    }

    marqueeAnimation()
    window.addEventListener("resize", marqueeAnimation)

    return () => {
      window.removeEventListener("resize", marqueeAnimation)
    }
  }, [])

  return (
    <section className="relative z-10 py-12 bg-black border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-400 mb-8 text-sm uppercase tracking-wider font-medium">
          Trusted by innovative teams worldwide
        </h3>

        <div ref={containerRef} className="overflow-hidden relative w-full">
          <div className="flex gap-8 logo-container">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="logo-item flex-shrink-0 h-12 w-32 bg-gray-800/50 rounded-lg flex items-center justify-center animate-marquee"
              >
                <Image
                  src="/placeholder-logo.svg"
                  alt={`Company logo ${index + 1}`}
                  width={80}
                  height={30}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .logo-container {
          width: fit-content;
          animation: marquee 30s linear infinite;
          display: flex;
        }
        
        .logo-item {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  )
}

