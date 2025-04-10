"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { getAllRecipes, type Recipe } from "@/utils/recipe-data"

export default function SearchPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const recipesPerPage = 8

  // Obter todas as categorias únicas
  const categories = [...new Set(recipes.map((recipe) => recipe.category))].sort()

  useEffect(() => {
    // Carregar receitas
    const allRecipes = getAllRecipes()
    setRecipes(allRecipes)
    setFilteredRecipes(allRecipes)
  }, [])

  useEffect(() => {
    // Filtrar receitas com base no termo de busca e categoria selecionada
    let results = recipes

    if (searchTerm) {
      results = results.filter(
        (recipe) =>
          recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          recipe.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (selectedCategory) {
      results = results.filter((recipe) => recipe.category === selectedCategory)
    }

    setFilteredRecipes(results)
    setCurrentPage(1) // Resetar para a primeira página quando os filtros mudam
  }, [searchTerm, selectedCategory, recipes])

  // Calcular receitas para a página atual
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  // Mudar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Buscar Receitas</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1 md:col-span-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar receitas..."
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Todas as categorias</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Nenhuma receita encontrada</h2>
            <p className="text-gray-600">Tente ajustar seus filtros ou buscar por outro termo.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {currentRecipes.map((recipe) => (
                <Link href={recipe.slug} key={recipe.id} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={recipe.image || "/placeholder.svg?height=400&width=600"}
                        alt={recipe.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-600 transition-colors duration-300">
                        {recipe.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{recipe.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">{recipe.prepTime}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{recipe.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Paginação */}
            {filteredRecipes.length > recipesPerPage && (
              <div className="flex justify-center mt-8">
                <nav className="inline-flex rounded-md shadow">
                  <button
                    onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Anterior
                  </button>
                  {Array.from({ length: Math.ceil(filteredRecipes.length / recipesPerPage) }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => paginate(index + 1)}
                      className={`px-3 py-1 border-t border-b border-gray-300 ${
                        currentPage === index + 1 ? "bg-pink-600 text-white" : "bg-white text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      paginate(
                        currentPage < Math.ceil(filteredRecipes.length / recipesPerPage)
                          ? currentPage + 1
                          : Math.ceil(filteredRecipes.length / recipesPerPage),
                      )
                    }
                    disabled={currentPage === Math.ceil(filteredRecipes.length / recipesPerPage)}
                    className="px-3 py-1 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Próxima
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}
