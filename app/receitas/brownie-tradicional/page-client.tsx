"use client"

import { useEffect } from "react"
import { preloadImages } from "@/utils/image-preloader"

export default function BrownieTradicionalClient() {
  useEffect(() => {
    // Pré-carregar imagens quando o componente montar
    preloadImages()

    // Inicializar imagens no localStorage
    try {
      if (typeof window !== "undefined") {
        import("@/utils/recipe-images").then((module) => {
          if (module.initializeRecipeImages) {
            module.initializeRecipeImages()
          }
        })
      }
    } catch (error) {
      console.error("Erro ao inicializar imagens:", error)
    }
  }, [])

  return <div className="hidden">{/* Componente invisível apenas para executar o useEffect */}</div>
}
