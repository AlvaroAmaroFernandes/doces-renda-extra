"use client"

import type React from "react"

import { useEffect } from "react"
import { initializeRecipeImages } from "@/utils/recipe-images"

export default function AppInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializar imagens das receitas quando o app carregar
    initializeRecipeImages()
  }, [])

  return <>{children}</>
}
