"use client"

import { useState, useEffect } from "react"

export function usePersistentImage(key: string, initialValue: string): [string, (value: string) => void] {
  // Inicializa o estado com o valor inicial
  const [value, setValue] = useState<string>(initialValue)

  // Quando o componente montar, tenta carregar o valor do localStorage
  useEffect(() => {
    try {
      const item = localStorage.getItem(`image-${key}`)
      // Se o valor existir no localStorage, use-o
      if (item) {
        setValue(item)
      }
    } catch (error) {
      // Se houver erro ao acessar localStorage, use o valor inicial
      console.error("Error reading from localStorage:", error)
    }
  }, [key])

  // Retorna uma função para atualizar o valor no estado e no localStorage
  const setPersistedValue = (newValue: string) => {
    try {
      // Atualiza o estado React
      setValue(newValue)
      // Atualiza o localStorage
      localStorage.setItem(`image-${key}`, newValue)
    } catch (error) {
      console.error("Error writing to localStorage:", error)
    }
  }

  return [value, setPersistedValue]
}

// Função para definir imagens específicas para receitas
export function setRecipeImage(recipeId: string, imageUrl: string) {
  try {
    localStorage.setItem(`recipe-image-${recipeId}`, imageUrl)
    return true
  } catch (error) {
    console.error("Erro ao salvar imagem da receita:", error)
    return false
  }
}

// Função para obter a imagem de uma receita específica
export function getRecipeImage(recipeId: string, defaultImage: string): string {
  try {
    const savedImage = localStorage.getItem(`recipe-image-${recipeId}`)
    return savedImage || defaultImage
  } catch (error) {
    console.error("Erro ao obter imagem da receita:", error)
    return defaultImage
  }
}

// Função para remover da lista de prioridades
export function removeFromPriorityList(imageKey: string) {
  try {
    const priorityList = localStorage.getItem("priority_images_list")
    if (priorityList) {
      const list = JSON.parse(priorityList)
      const updatedList = list.filter((key: string) => key !== imageKey)
      localStorage.setItem("priority_images_list", JSON.stringify(updatedList))
    }
  } catch (error) {
    console.error("Erro ao remover imagem da lista de prioridades:", error)
  }
}
