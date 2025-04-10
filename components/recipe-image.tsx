"use client"

import { useState } from "react"

interface RecipeImageProps {
  src: string
  alt: string
  className?: string
}

export default function RecipeImage({ src, alt, className = "" }: RecipeImageProps) {
  const [error, setError] = useState(false)
  const fallbackImage = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800"

  return (
    <img
      src={error ? fallbackImage : src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      onError={() => setError(true)}
    />
  )
}
