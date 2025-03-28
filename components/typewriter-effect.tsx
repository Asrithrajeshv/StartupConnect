"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
}

export function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          // Deleting text
          setCurrentText(word.substring(0, currentText.length - 1))

          // If all text is deleted, move to the next word
          if (currentText.length === 0) {
            setIsDeleting(false)
            setCurrentWordIndex((prev) => (prev + 1) % words.length)
          }
        } else {
          // Typing text
          setCurrentText(word.substring(0, currentText.length + 1))

          // If word is complete, start deleting after pause
          if (currentText.length === word.length) {
            setTimeout(() => {
              setIsDeleting(true)
            }, pauseTime)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <div className="text-lg md:text-xl text-white font-medium flex items-center justify-center">
      <span>{currentText}</span>
      <span className="ml-1 h-6 w-[2px] bg-[#7F5AF0] animate-blink"></span>
    </div>
  )
}

