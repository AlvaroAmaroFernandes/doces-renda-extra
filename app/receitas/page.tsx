import type { Metadata } from "next"
import { getAllRecipes } from "@/utils/recipe-data"
import RecipesClient from "./page-client"

export const metadata: Metadata = {
  title: "Receitas Lucrativas para Confeitaria | Doces & Negócios",
  description:
    "Descubra receitas exclusivas e lucrativas para sua confeitaria. Brownies, cookies, bolos e muito mais para aumentar seu faturamento.",
}

export default function RecipesPage() {
  const recipes = getAllRecipes()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Receitas Lucrativas para Confeitaria</h1>
        <p className="text-lg text-muted-foreground">
          Descubra receitas exclusivas e testadas para aumentar o faturamento do seu negócio de doces.
        </p>
      </div>

      <RecipesClient recipes={recipes} />
    </div>
  )
}
