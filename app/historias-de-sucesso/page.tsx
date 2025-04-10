import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import AdSpace from "@/components/ad-space"

// Dados simulados para demonstração
const successStories = [
  {
    id: "maria-brigadeiros",
    name: "Maria Silva",
    business: "Maria Brigadeiros",
    location: "São Paulo, SP",
    image: "/placeholder.svg?height=400&width=400",
    summary: "De hobby de fim de semana a faturamento de R$5.000 por mês com brigadeiros gourmet.",
    story:
      "Maria começou fazendo brigadeiros para a família e hoje tem uma marca reconhecida que atende eventos corporativos.",
  },
  {
    id: "doces-da-ana",
    name: "Ana Oliveira",
    business: "Doces da Ana",
    location: "Rio de Janeiro, RJ",
    image: "/placeholder.svg?height=400&width=400",
    summary: "Como uma receita de família se transformou em um negócio que sustenta toda a casa.",
    story: "Ana resgatou as receitas da avó e hoje vende bolos caseiros por encomenda, com clientela fiel.",
  },
  {
    id: "carlos-confeitaria",
    name: "Carlos Mendes",
    business: "Carlos Confeitaria",
    location: "Belo Horizonte, MG",
    image: "/placeholder.svg?height=400&width=400",
    summary: "De desempregado a dono do próprio negócio com tortas e doces finos.",
    story: "Após perder o emprego, Carlos investiu em cursos de confeitaria e hoje tem sua própria loja física.",
  },
  {
    id: "julia-cupcakes",
    name: "Júlia Santos",
    business: "Júlia Cupcakes",
    location: "Curitiba, PR",
    image: "/placeholder.svg?height=400&width=400",
    summary: "Como os cupcakes ajudaram a pagar a faculdade e se tornaram um negócio de sucesso.",
    story: "Júlia começou vendendo para colegas da faculdade e hoje tem uma marca consolidada com vendas online.",
  },
]

export default function SuccessStoriesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Histórias de Sucesso</h1>

      <p className="text-lg text-muted-foreground mb-8">
        Conheça pessoas que transformaram sua paixão por confeitaria em negócios lucrativos e inspiradores.
      </p>

      {/* Histórias em destaque */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {successStories.map((story) => (
          <Card key={story.id} className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative h-64 md:h-full">
                <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col p-6">
                <CardHeader className="p-0 pb-4">
                  <h2 className="text-2xl font-bold">{story.name}</h2>
                  <p className="text-primary font-medium">{story.business}</p>
                  <p className="text-sm text-muted-foreground">{story.location}</p>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <p className="font-medium mb-2">{story.summary}</p>
                  <p className="text-muted-foreground">{story.story}</p>
                </CardContent>
                <div className="mt-4">
                  <Button asChild variant="outline">
                    <Link href={`/historias-de-sucesso/${story.id}`}>Ler história completa</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Ad Space */}
      <AdSpace className="mb-12" />

      {/* CTA para compartilhar história */}
      <div className="bg-accent p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Tem uma história de sucesso para compartilhar?</h2>
        <p className="text-lg mb-6">
          Se você transformou sua paixão por confeitaria em um negócio, queremos conhecer sua jornada!
        </p>
        <Button asChild size="lg">
          <Link href="/sobre">Saiba mais sobre nós</Link>
        </Button>
      </div>
    </div>
  )
}
