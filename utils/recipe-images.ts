// Função para inicializar as imagens das receitas no localStorage
export function initializeRecipeImages() {
  if (typeof window === "undefined") return

  try {
    // Definir imagens para receitas específicas
    const recipeImages = {
      "brownies-recheados": "/images/brownies-recheados-3.png",
      "cupcakes-decorados": "/images/cupcakes-decorados-2.png",
      "macarons-franceses": "/images/macarons-franceses-6.png",
      "bolo-chocolate-com-morango": "/images/bolo-chocolate-morango-3.png",
      "torta-de-limao": "/images/torta-de-limao-6.png",
      "pao-de-mel": "/images/pao-de-mel-5.png",
      "cookies-americanos": "/images/cookies-americanos-4.png",
      "brownie-tradicional": "/images/brownie-tradicional-5.png",
      "brownie-nutella": "/images/brownie-nutella-2.png",
      "cookie-red-velvet": "/images/cookie-red-velvet-2.png",
      "cookie-oreo": "/images/cookie-oreo-1.png",
      "cookie-brigadeiro": "/images/cookie-brigadeiro-1.png",
      "cookie-nutella": "/images/cookie-nutella-1.png",
      "blondie-frutas-vermelhas": "/images/blondie-frutas-vermelhas-1.png",
      "brownie-blondie-frutas": "/images/brownie-blondie-frutas-1.png",
    }

    // Salvar cada imagem no localStorage
    Object.entries(recipeImages).forEach(([recipeId, imageUrl]) => {
      localStorage.setItem(`recipe-image-${recipeId}`, imageUrl)
    })

    // Pré-carregar imagens importantes
    preloadCriticalImages()

    console.log("Imagens das receitas inicializadas com sucesso")
    return true
  } catch (error) {
    console.error("Erro ao inicializar imagens das receitas:", error)
    return false
  }
}

// Função para pré-carregar imagens críticas
export function preloadCriticalImages() {
  if (typeof window === "undefined") return

  const criticalImages = [
    "/images/macarons-franceses-6.png",
    "/images/macarons-franceses-5.png",
    "/images/macarons-franceses-4.png",
    "/images/brownies-recheados-3.png",
    "/images/cupcakes-decorados-2.png",
    "/images/bolo-chocolate-morango-3.png",
    "/images/torta-de-limao-6.png",
    "/images/pao-de-mel-5.png",
    "/images/cookies-americanos-4.png",
    "/images/brownie-tradicional-5.png",
    "/images/brownie-nutella-1.png",
    "/images/brownie-nutella-2.png",
    "/images/brownie-nutella-3.png",
    "/images/cookie-red-velvet-2.png",
    "/images/cookie-oreo-1.png",
    "/images/cookie-brigadeiro-1.png",
    "/images/cookie-nutella-1.png",
    "/images/blondie-frutas-vermelhas-1.png",
    "/images/blondie-frutas-vermelhas-2.png",
    "/images/brownie-blondie-frutas-1.png",
    "/images/brownie-blondie-frutas-2.png",
  ]

  criticalImages.forEach((src) => {
    const img = new Image()
    img.src = src
    img.onload = () => console.log(`Imagem pré-carregada: ${src}`)
    img.onerror = () => console.error(`Erro ao pré-carregar imagem: ${src}`)
  })
}

// Adicione o mapeamento para brownie-nutella no objeto recipeImageMap
export const recipeImageMap: Record<string, string[]> = {
  "cookie-red-velvet": ["/images/cookie-red-velvet-1.png", "/images/cookie-red-velvet-2.png"],
  "brigadeiro-gourmet": ["/images/brigadeiro-gourmet-1.png", "/images/brigadeiro-gourmet-2.png"],
  "brownies-recheados": ["/images/brownies-recheados-3.png"],
  "cupcakes-decorados": ["/images/cupcakes-decorados-2.png"],
  "macarons-franceses": ["/images/macarons-franceses-6.png"],
  "bolo-chocolate-com-morango": ["/images/bolo-chocolate-morango-3.png"],
  "torta-de-limao": ["/images/torta-de-limao-6.png"],
  "pao-de-mel": ["/images/pao-de-mel-5.png"],
  "cookies-americanos": ["/images/cookies-americanos-4.png"],
  "brownie-tradicional": ["/images/brownie-tradicional-5.png"],
  "brownie-nutella": [
    "/images/brownie-nutella-1.png",
    "/images/brownie-nutella-2.png",
    "/images/brownie-nutella-3.png",
  ],
  "cookie-oreo": ["/images/cookie-oreo-1.png", "/images/cookie-oreo-2.png"],
  "cookie-brigadeiro": ["/images/cookie-brigadeiro-1.png", "/images/cookie-brigadeiro-2.png"],
  "cookie-nutella": ["/images/cookie-nutella-1.png", "/images/cookie-nutella-2.png"],
  "blondie-frutas-vermelhas": ["/images/blondie-frutas-vermelhas-1.png", "/images/blondie-frutas-vermelhas-2.png"],
  "brownie-blondie-frutas": ["/images/brownie-blondie-frutas-1.png", "/images/brownie-blondie-frutas-2.png"],
}

// Função para obter a imagem de uma receita
export function getRecipeImage(recipeId: string, defaultImage: string): string {
  if (typeof window === "undefined") return defaultImage

  try {
    // Mapeamento direto de receitas para imagens (fallback caso localStorage falhe)
    const recipeImageMapSingle: Record<string, string> = {
      "brownies-recheados": "/images/brownies-recheados-3.png",
      "cupcakes-decorados": "/images/cupcakes-decorados-2.png",
      "macarons-franceses": "/images/macarons-franceses-6.png",
      "bolo-chocolate-com-morango": "/images/bolo-chocolate-morango-3.png",
      "torta-de-limao": "/images/torta-de-limao-6.png",
      "pao-de-mel": "/images/pao-de-mel-5.png",
      "cookies-americanos": "/images/cookies-americanos-4.png",
      "brownie-tradicional": "/images/brownie-tradicional-5.png",
      "brownie-nutella": "/images/brownie-nutella-2.png",
      "cookie-red-velvet": "/images/cookie-red-velvet-2.png",
      "cookie-oreo": "/images/cookie-oreo-1.png",
      "cookie-brigadeiro": "/images/cookie-brigadeiro-1.png",
      "cookie-nutella": "/images/cookie-nutella-1.png",
      "blondie-frutas-vermelhas": "/images/blondie-frutas-vermelhas-1.png",
      "brownie-blondie-frutas": "/images/brownie-blondie-frutas-1.png",
    }

    // Primeiro tenta obter do localStorage
    const savedImage = localStorage.getItem(`recipe-image-${recipeId}`)

    // Se não encontrar no localStorage, verifica no mapeamento direto
    if (!savedImage && recipeImageMapSingle[recipeId]) {
      return recipeImageMapSingle[recipeId]
    }

    // Retorna a imagem salva ou a imagem padrão
    return savedImage || defaultImage
  } catch (error) {
    console.error("Erro ao obter imagem da receita:", error)

    // Mapeamento direto como último recurso
    const fallbackMap: Record<string, string> = {
      "brownies-recheados": "/images/brownies-recheados-3.png",
      "cupcakes-decorados": "/images/cupcakes-decorados-2.png",
      "macarons-franceses": "/images/macarons-franceses-6.png",
      "bolo-chocolate-com-morango": "/images/bolo-chocolate-morango-3.png",
      "torta-de-limao": "/images/torta-de-limao-6.png",
      "pao-de-mel": "/images/pao-de-mel-5.png",
      "cookies-americanos": "/images/cookies-americanos-4.png",
      "brownie-tradicional": "/images/brownie-tradicional-5.png",
      "brownie-nutella": "/images/brownie-nutella-2.png",
      "cookie-red-velvet": "/images/cookie-red-velvet-2.png",
      "cookie-oreo": "/images/cookie-oreo-1.png",
      "cookie-brigadeiro": "/images/cookie-brigadeiro-1.png",
      "cookie-nutella": "/images/cookie-nutella-1.png",
      "blondie-frutas-vermelhas": "/images/blondie-frutas-vermelhas-1.png",
      "brownie-blondie-frutas": "/images/brownie-blondie-frutas-1.png",
    }

    return fallbackMap[recipeId] || defaultImage
  }
}

// Função para verificar se uma imagem existe
export async function imageExists(url: string): Promise<boolean> {
  if (typeof window === "undefined") return false

  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}
