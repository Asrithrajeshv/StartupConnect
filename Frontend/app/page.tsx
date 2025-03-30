import { HeroSection } from "@/components/hero-section"
import { HeroBackground } from "@/components/hero-background"

export default function Home() {
  return (
    <main className="relative">
      <HeroBackground />
      <HeroSection />
      {/* Rest of the page content */}
    </main>
  )
} 