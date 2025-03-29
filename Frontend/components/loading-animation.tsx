"use client"

import { useEffect, useRef } from "react"

interface LoadingAnimationProps {
  progress: number
}

export function LoadingAnimation({ progress }: LoadingAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 256
    canvas.height = 256

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 80
      const lineWidth = 10

      // Draw background circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = lineWidth
      ctx.stroke()

      // Draw progress arc
      const startAngle = -Math.PI / 2
      const endAngle = startAngle + Math.PI * 2 * (progress / 100)

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.strokeStyle = createGradient(ctx, centerX, centerY, radius)
      ctx.lineWidth = lineWidth
      ctx.lineCap = "round"
      ctx.stroke()

      // Draw particles around the progress
      drawParticles(ctx, centerX, centerY, radius, progress)

      requestAnimationFrame(draw)
    }

    function createGradient(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number) {
      const gradient = ctx.createLinearGradient(x - radius, y, x + radius, y)
      gradient.addColorStop(0, "#7F5AF0")
      gradient.addColorStop(1, "#2CB67D")
      return gradient
    }

    function drawParticles(
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number,
      radius: number,
      progress: number,
    ) {
      const particleCount = 5
      const angle = -Math.PI / 2 + Math.PI * 2 * (progress / 100)

      for (let i = 0; i < particleCount; i++) {
        const particleRadius = 3 - i * 0.5
        const distance = radius + 15 - i * 3

        const x = centerX + Math.cos(angle) * distance
        const y = centerY + Math.sin(angle) * distance

        ctx.beginPath()
        ctx.arc(x, y, particleRadius, 0, Math.PI * 2)
        ctx.fillStyle = i % 2 === 0 ? "#7F5AF0" : "#2CB67D"
        ctx.fill()
      }

      // Draw glow effect
      ctx.beginPath()
      ctx.arc(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius, 15, 0, Math.PI * 2)
      const glowGradient = ctx.createRadialGradient(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        0,
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        15,
      )
      glowGradient.addColorStop(0, "rgba(127, 90, 240, 0.5)")
      glowGradient.addColorStop(1, "rgba(127, 90, 240, 0)")
      ctx.fillStyle = glowGradient
      ctx.fill()
    }

    draw()
  }, [progress])

  return <canvas ref={canvasRef} className="w-64 h-64" />
}

