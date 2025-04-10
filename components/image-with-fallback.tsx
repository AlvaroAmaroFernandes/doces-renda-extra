"use client"

import { useState } from "react"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
}

export default function ImageWithFallback({ src, alt, className = "", width, height }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)
  const fallbackImage = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800"

  return (
    <img
      src={error ? fallbackImage : src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setError(true)}
    />
  )
}
