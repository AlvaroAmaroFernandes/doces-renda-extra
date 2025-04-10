"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BusinessTipCardProps {
  title: string
  description: string
  image?: string
  id: string
  category: string
}

export function BusinessTipCard({ title, description, image, id, category }: BusinessTipCardProps) {
  return (
    <Link href={`/dicas-de-venda/${id}`}>
      <Card className="group h-full flex flex-col">
        <CardHeader className="flex-grow">
          <div className="mb-2">
            <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-pink-100 text-pink-800">{category}</span>
          </div>
          <CardTitle className="line-clamp-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <CardDescription className="line-clamp-3 text-muted-foreground">{description}</CardDescription>
          <div className="mt-4">
            <span className="text-sm font-medium text-pink-600 group-hover:underline">Ler Mais</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
