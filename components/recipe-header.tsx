import { Clock, Users, ChefHat } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import FallbackImage from "./fallback-image"

interface RecipeHeaderProps {
  title: string
  description: string
  image?: string
  category?: string
  difficulty?: string
  time?: string
  prepTime?: string
  cookTime?: string
  totalTime?: string
  servings?: string
  authorName?: string
  authorImage?: string
  publishDate?: string
  updateDate?: string
}

export default function RecipeHeader({
  title,
  description,
  image = "/placeholder.svg?height=400&width=600",
  category,
  difficulty,
  time,
  prepTime,
  cookTime,
  totalTime,
  servings,
  authorName,
  authorImage,
  publishDate,
  updateDate,
}: RecipeHeaderProps) {
  // Extrair o ID da receita do título
  const recipeId = title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")

  return (
    <div className="mb-8">
      <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden mb-6">
        <FallbackImage
          src={image}
          alt={title}
          width={1200}
          height={600}
          className="object-cover w-full h-full"
          priority
          recipeId={recipeId}
        />
        {category && (
          <div className="absolute top-4 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
            {category}
          </div>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-3">{title}</h1>
      <p className="text-lg text-muted-foreground mb-6">{description}</p>

      {(time || prepTime || cookTime || totalTime || difficulty || servings) && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(time || prepTime) && (
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Tempo de Preparo</p>
                  <p className="text-sm text-muted-foreground">{time || prepTime}</p>
                </div>
              </div>
            )}
            {cookTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Tempo de Cozimento</p>
                  <p className="text-sm text-muted-foreground">{cookTime}</p>
                </div>
              </div>
            )}
            {totalTime && (
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Tempo Total</p>
                  <p className="text-sm text-muted-foreground">{totalTime}</p>
                </div>
              </div>
            )}
            {servings && (
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Rendimento</p>
                  <p className="text-sm text-muted-foreground">{servings}</p>
                </div>
              </div>
            )}
            {difficulty && (
              <div className="flex items-center gap-2">
                <ChefHat className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">Dificuldade</p>
                  <p className="text-sm text-muted-foreground">{difficulty}</p>
                </div>
              </div>
            )}
          </div>
          <Separator className="mb-6" />
        </>
      )}

      {(authorName || publishDate || updateDate) && (
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          {authorName && authorImage && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <FallbackImage src={authorImage} alt={authorName} width={32} height={32} className="object-cover" />
              </div>
              <span>{authorName}</span>
            </div>
          )}
          {publishDate && <span>Publicado em: {publishDate}</span>}
          {updateDate && <span>Atualizado em: {updateDate}</span>}
        </div>
      )}
    </div>
  )
}
