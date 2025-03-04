"use client"

import { Send } from "lucide-react"
import { useState } from "react"

interface GetStartedButtonProps {
  className?: string
}

export default function GetStartedButton({ className = "" }: GetStartedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={`bg-white text-black px-8 py-4 rounded-full flex items-center gap-2 font-medium hover:bg-gray-200 transition-all ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
      GetStarted
    </button>
  )
}

