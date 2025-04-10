// Função para pré-carregar imagens importantes
export function preloadImagesBasic() {
  if (typeof window === "undefined") return

  const imagesToPreload = [
    "/images/brownies-recheados-3.png",
    "/images/cupcakes-decorados-2.png",
    "/images/macarons-franceses-2.png",
    "/images/bolo-chocolate-morango-3.png",
    "/images/torta-de-limao-6.png",
    "/images/pao-de-mel-5.png",
    "/images/cookies-americanos-4.png",
    "/images/brownie-tradicional-5.png",
    "/images/brownie-tradicional-4.png",
    // Removida a imagem problemática: "/images/brownie-tradicional-6.png",
    "/images/brownie-doce-de-leite-1.png",
    "/images/brigadeiro-gourmet-2.png",
  ]

  // Pré-carregar imagens com tratamento de erros melhorado
  imagesToPreload.forEach((src) => {
    const img = new Image()

    // Configurar handlers antes de definir src para garantir que eles sejam chamados
    img.onload = () => {
      console.log(`Imagem pré-carregada com sucesso: ${src}`)
    }

    img.onerror = () => {
      // Apenas registrar o erro, sem interromper o fluxo
      console.warn(`Aviso: Não foi possível pré-carregar a imagem: ${src}`)
      // Não propagar o erro para não interromper o carregamento das outras imagens
    }

    // Definir src após configurar os handlers
    img.src = src
  })

  // Salvar apenas as imagens que existem no localStorage
  try {
    // Verificar quais imagens existem antes de salvar no localStorage
    const existingImages = imagesToPreload.filter((src) => {
      try {
        const img = new Image()
        img.src = src
        return true
      } catch (e) {
        return false
      }
    })

    localStorage.setItem("preloaded-images", JSON.stringify(existingImages))
  } catch (error) {
    console.warn("Não foi possível salvar imagens no localStorage:", error)
  }
}

// Adicione esta função para pré-carregar imagens específicas
export function preloadCriticalImages() {
  const imagesToPreload = [
    "/images/cookie-red-velvet-2.png",
    "/images/brigadeiro-gourmet-2.png",
    "/images/brownie-tradicional-4.png",
    "/images/cookies-americanos-4.png",
    "/images/torta-de-limao-4.png",
    "/images/pao-de-mel-4.png",
    "/images/macarons-franceses-4.png",
    "/images/cupcakes-decorados-1.png",
    "/images/brownies-recheados-1.png",
    "/images/bolo-chocolate-morango-1.png",
    "/images/red-velvet-1.png",
    "/images/ovo-pascoa-trufado-brigadeiro-1.png",
  ]

  // Pré-carrega as imagens
  imagesToPreload.forEach((src) => {
    const img = new Image()
    img.src = src
  })
}

export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => resolve()
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`))
    img.src = src
  })
}

export async function preloadImages(srcs: string[]): Promise<void> {
  try {
    await Promise.all(srcs.map(preloadImage))
    console.log("All images preloaded successfully")
  } catch (error) {
    console.error("Error preloading images:", error)
  }
}

// Função para verificar se uma imagem existe
export async function imageExists(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (!url || url.includes("placeholder")) {
      resolve(false)
      return
    }

    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)

    // Adicionar um timeout para não ficar esperando indefinidamente
    setTimeout(() => resolve(false), 5000)

    img.src = url
  })
}

// Função para verificar se uma imagem existe
export async function checkImageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" })
    return response.ok
  } catch (error) {
    console.error(`Error checking image at ${url}:`, error)
    return false
  }
}

// Função para obter uma imagem alternativa se a original não existir
export async function getAlternativeImage(
  originalSrc: string,
  recipeId: string,
  defaultImage = "/placeholder.svg?height=400&width=600",
): Promise<string> {
  // Se a src for vazia ou um placeholder, retornar o placeholder padrão
  if (!originalSrc || originalSrc.includes("placeholder")) {
    return defaultImage
  }

  try {
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
      "pao-de-mel": "/images/pao-de-mel-5.png",
      "cookies-americanos": "/images/cookies-americanos-4.png",
      "brownie-tradicional": "/images/brownie-tradicional-5.png",
      "brownie-doce-de-leite": "/images/brownie-doce-de-leite-1.png",
      "brigadeiro-gourmet": "/images/brigadeiro-gourmet-2.png",
    }

    // Verificar se existe uma imagem alternativa no mapeamento
    if (recipeId && recipeImageMap[recipeId]) {
      const alternativeExists = await imageExists(recipeImageMap[recipeId])
      if (alternativeExists) return recipeImageMap[recipeId]
    }

    // Tentar encontrar qualquer versão da imagem (1 a 5)
    if (recipeId) {
      for (let i = 1; i <= 5; i++) {
        const altSrc = `/images/${recipeId}-${i}.png`
        const altExists = await imageExists(altSrc)
        if (altExists) return altSrc
      }
    }
  } catch (error) {
    console.warn("Erro ao buscar imagem alternativa:", error)
  }

  // Se nenhuma alternativa for encontrada, retornar a imagem padrão
  return defaultImage
}

// Adicione esta função para pré-carregar todas as imagens de receitas
export function preloadAllRecipeImages() {
  if (typeof window === "undefined") return

  import("@/utils/recipe-data").then(({ recipes }) => {
    recipes.forEach((recipe) => {
      if (recipe.image) {
        const img = new Image()
        img.src = recipe.image
        img.onload = () => console.log(`Imagem pré-carregada: ${recipe.image}`)
        img.onerror = () => console.error(`Erro ao pré-carregar imagem: ${recipe.image}`)
      }
    })
  })
}
