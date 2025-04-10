"use client"

import { useState, useEffect } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import RecipeCard from "@/components/recipe-card"
import type { Recipe } from "@/utils/recipe-data"

interface RecipesClientProps {
  recipes: Recipe[]
}

export default function RecipesClient({ recipes }: RecipesClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(recipes)

  const recipesPerPage = 8

  // Extract unique categories
  const categories = Array.from(new Set(recipes.map((recipe) => recipe.category)))

  // Filter recipes based on search term and category
  useEffect(() => {
    let result = recipes

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (recipe) => recipe.title.toLowerCase().includes(term) || recipe.description.toLowerCase().includes(term),
      )
    }

    if (selectedCategory) {
      result = result.filter((recipe) => recipe.category === selectedCategory)
    }

    setFilteredRecipes(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchTerm, selectedCategory, recipes])

  // Calculate pagination
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage)
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory(null)
  }

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar receitas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Categorias</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSelectedCategory(null)}>Todas as categorias</DropdownMenuItem>
              {categories.map((category) => (
                <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Active filters */}
        <div className="flex items-center gap-2">
          {selectedCategory && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {selectedCategory}
              <button onClick={() => setSelectedCategory(null)} className="ml-1 rounded-full hover:bg-muted p-1">
                ×
              </button>
            </Badge>
          )}

          {(searchTerm || selectedCategory) && (
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Limpar filtros
            </Button>
          )}

          <div className="ml-auto text-sm text-muted-foreground">Mostrando {filteredRecipes.length} receitas</div>
        </div>
      </div>

      {/* Recipe grid */}
      {currentRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {currentRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              prepTime={recipe.prepTime}
              difficulty={recipe.difficulty}
              profitPotential={recipe.profitPotential}
              category={recipe.category}
              href={recipe.slug}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Nenhuma receita encontrada</h3>
          <p className="text-muted-foreground mt-2">Tente ajustar seus filtros ou termos de busca.</p>
          <Button variant="outline" className="mt-4" onClick={clearFilters}>
            Limpar filtros
          </Button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Próxima
          </Button>
        </div>
      )}
    </div>
  )
}
