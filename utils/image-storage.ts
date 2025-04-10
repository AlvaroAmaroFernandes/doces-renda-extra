// Função para inicializar as imagens no localStorage
export function initializeRecipeImages() {
  if (typeof window === "undefined") return

  // Verifica se já existe o registro no localStorage
  if (!localStorage.getItem("recipe-images")) {
    // Inicializa com um objeto vazio
    localStorage.setItem("recipe-images", JSON.stringify({}))
  }
}

// Função para salvar o status de uma imagem
export function saveImageStatus(imagePath: string, status: boolean) {
  if (typeof window === "undefined") return

  try {
    const storedImages = localStorage.getItem("recipe-images")
    if (storedImages) {
      const imagesObj = JSON.parse(storedImages)
      imagesObj[imagePath] = status
      localStorage.setItem("recipe-images", JSON.stringify(imagesObj))
    }
  } catch (error) {
    console.error("Error saving image status:", error)
  }
}

// Função para verificar o status de uma imagem
export function getImageStatus(imagePath: string): boolean {
  if (typeof window === "undefined") return true

  try {
    const storedImages = localStorage.getItem("recipe-images")
    if (storedImages) {
      const imagesObj = JSON.parse(storedImages)
      // Se a imagem não estiver no objeto, assume que está ok
      return imagesObj[imagePath] !== false
    }
  } catch (error) {
    console.error("Error getting image status:", error)
  }

  // Por padrão, retorna true (assume que a imagem está ok)
  return true
}
