"use client"

import Image from "next/image"
import { useState } from "react"

interface FallbackImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  recipeId?: string
}

export default function FallbackImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  recipeId,
}: FallbackImageProps) {
  const [error, setError] = useState(false)

  // Fallback para quando a imagem não carrega
  const fallbackSrc = "/placeholder.svg?height=400&width=600"

  return (
    <Image
      src={error ? fallbackSrc : src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      style={{ objectFit: "cover" }}
      className={className}
      onError={() => setError(true)}
    />
  )
}
