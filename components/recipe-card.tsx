import Link from "next/link"

interface RecipeCardProps {
  title: string
  description: string
  image: string
  prepTime: string
  difficulty: string
  profitPotential?: string
  category: string
  href: string
}

export default function RecipeCard({
  title,
  description,
  image,
  prepTime,
  difficulty,
  profitPotential,
  category,
  href,
}: RecipeCardProps) {
  // Imagem de fallback padrão
  const fallbackImage = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800"

  return (
    <Link href={href}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <img
            src={image || fallbackImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              console.log("Imagem falhou, usando fallback:", title)
              ;(e.target as HTMLImageElement).src = fallbackImage
            }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{prepTime}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">{difficulty}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
