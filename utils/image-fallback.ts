// Função para verificar se uma imagem existe
export function imageExists(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") {
      resolve(false)
      return
    }

    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}

// Função para obter uma imagem alternativa se a original não existir
export async function getAlternativeImage(
  originalSrc: string,
  recipeId: string,
  defaultImage = "/placeholder.svg?height=400&width=600",
): Promise<string> {
  if (typeof window === "undefined") return defaultImage

  // Verificar se a imagem original existe
  const originalExists = await imageExists(originalSrc)
  if (originalExists) return originalSrc

  // Mapeamento direto de receitas para imagens
  const recipeImageMap: Record<string, string> = {
    "brownies-recheados": "/images/brownies-recheados-3.png",
    "cupcakes-decorados": "/images/cupcakes-decorados-2.png",
    "macarons-franceses": "/images/macarons-franceses-2.png",
    "bolo-chocolate-com-morango": "/images/bolo-chocolate-morango-3.png",
    "torta-de-limao": "/images/torta-de-limao-6.png",
    "pao-de-mel": "/images/pao-de-mel-2.png",
    "cookies-americanos": "/images/cookies-americanos-4.png",
    "brownie-tradicional": "/images/brownie-tradicional-1.png",
  }

  // Verificar se existe uma imagem alternativa no mapeamento
  if (recipeImageMap[recipeId]) {
    const alternativeExists = await imageExists(recipeImageMap[recipeId])
    if (alternativeExists) return recipeImageMap[recipeId]
  }

  // Tentar encontrar qualquer versão da imagem (1 a 6)
  const baseName = recipeId.replace(/-\d+$/, "")
  const extension = originalSrc.split(".").pop() || "png"

  for (let i = 1; i <= 6; i++) {
    const altSrc = `/images/${baseName}-${i}.${extension}`
    const altExists = await imageExists(altSrc)
    if (altExists) return altSrc
  }

  // Se nenhuma alternativa for encontrada, retornar a imagem padrão
  return defaultImage
}

// Função para pré-carregar imagens importantes
export function preloadRecipeImages(): void {
  if (typeof window === "undefined") return

  const imagesToPreload = [
    "/images/brownies-recheados-3.png",
    "/images/cupcakes-decorados-2.png",
    "/images/macarons-franceses-2.png",
    "/images/bolo-chocolate-morango-3.png",
    "/images/torta-de-limao-6.png",
    "/images/pao-de-mel-2.png",
    "/images/cookies-americanos-4.png",
    "/images/brownie-tradicional-1.png",
  ]

  imagesToPreload.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}
