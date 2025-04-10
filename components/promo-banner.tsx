"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PromoBannerProps {
  message: string
  linkText: string
  linkUrl: string
  showCloseButton?: boolean
}

export default function PromoBanner({ message, linkText, linkUrl, showCloseButton = true }: PromoBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center flex-wrap gap-2 md:gap-4">
        <p className="text-center font-medium">{message}</p>
        <Link href={linkUrl}>
          <Button variant="secondary" size="sm" className="font-semibold text-pink-600 hover:text-pink-700">
            {linkText}
          </Button>
        </Link>

        {showCloseButton && (
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
            aria-label="Fechar banner"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  )
}
