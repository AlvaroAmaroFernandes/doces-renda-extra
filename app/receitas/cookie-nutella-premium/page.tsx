import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, DollarSign, ChefHat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdSpace from "@/components/ad-space"
import NewsletterSignup from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "Cookie de Nutella Premium - Doces & Negócios",
  description: "Aprenda a fazer um delicioso Cookie de Nutella Premium para vender e lucrar",
}

export default function CookieNutellaPremiumPage() {
  // URL da imagem externa
  const recipeImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bvC5cykEytESxFV08UAwsyCfK9PNRo.png"

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/receitas" className="flex items-center text-muted-foreground hover:text-primary mb-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para receitas
        </Link>
        <h1 className="text-3xl font-bold mb-2">Cookie de Nutella Premium</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm flex items-center">
            <Clock className="mr-1 h-4 w-4" /> 45 min
          </span>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm flex items-center">
            <ChefHat className="mr-1 h-4 w-4" /> Médio
          </span>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm flex items-center">
            <DollarSign className="mr-1 h-4 w-4" /> Alto potencial de lucro
          </span>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Biscoitos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-6 relative aspect-video">
            <img
              src={recipeImage || "/placeholder.svg"}
              alt="Cookie de Nutella Premium"
              className="w-full h-full object-cover"
            />
          </div>

          <Tabs defaultValue="ingredientes">
            <TabsList className="mb-4">
              <TabsTrigger value="ingredientes">Ingredientes</TabsTrigger>
              <TabsTrigger value="preparo">Modo de Preparo</TabsTrigger>
              <TabsTrigger value="dicas">Dicas de Venda</TabsTrigger>
            </TabsList>

            <TabsContent value="ingredientes" className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>200g de manteiga sem sal em temperatura ambiente</li>
                <li>1 xícara de açúcar mascavo</li>
                <li>1/2 xícara de açúcar refinado</li>
                <li>2 ovos</li>
                <li>1 colher de chá de essência de baunilha</li>
                <li>2 e 1/2 xícaras de farinha de trigo</li>
                <li>1 colher de chá de bicarbonato de sódio</li>
                <li>1/2 colher de chá de sal</li>
                <li>200g de chocolate meio amargo picado</li>
                <li>200g de Nutella para o recheio</li>
              </ul>
            </TabsContent>

            <TabsContent value="preparo" className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Modo de Preparo</h2>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme claro e fofo.
                </li>
                <li>
                  Adicione os ovos, um de cada vez, batendo bem após cada adição. Acrescente a essência de baunilha e
                  misture.
                </li>
                <li>
                  Em outra tigela, misture a farinha, o bicarbonato e o sal. Adicione aos poucos à mistura de manteiga,
                  mexendo delicadamente.
                </li>
                <li>Incorpore o chocolate picado à massa e misture.</li>
                <li>Refrigere a massa por pelo menos 1 hora.</li>
                <li>Pré-aqueça o forno a 180°C e forre uma assadeira com papel manteiga.</li>
                <li>
                  Para montar os cookies recheados: pegue uma porção de massa (aproximadamente 2 colheres de sopa),
                  achate na palma da mão, coloque 1 colher de chá de Nutella no centro e feche a massa ao redor do
                  recheio, formando uma bola.
                </li>
                <li>
                  Coloque as bolas de massa na assadeira, deixando espaço entre elas, pois os cookies vão crescer
                  durante o assamento.
                </li>
                <li>Asse por 12-15 minutos, ou até que as bordas estejam douradas. O centro deve permanecer macio.</li>
                <li>
                  Deixe esfriar na assadeira por 5 minutos antes de transferir para uma grade para esfriar
                  completamente.
                </li>
              </ol>
            </TabsContent>

            <TabsContent value="dicas" className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Dicas de Venda</h2>
              <div className="space-y-4">
                <p>
                  O Cookie de Nutella Premium é um produto com alto potencial de lucro e grande apelo comercial. Aqui
                  estão algumas dicas para maximizar suas vendas:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Embalagem premium:</strong> Invista em embalagens bonitas e que mantenham a crocância do
                    cookie. Embalagens transparentes que mostram o produto são ótimas opções.
                  </li>
                  <li>
                    <strong>Tamanho ideal:</strong> Ofereça diferentes tamanhos - cookies grandes individuais (80-100g)
                    e pacotes com cookies menores (30-40g cada).
                  </li>
                  <li>
                    <strong>Preço sugerido:</strong> Para cookies grandes individuais, entre R$8 e R$12. Para pacotes
                    com 4-6 cookies menores, entre R$15 e R$20.
                  </li>
                  <li>
                    <strong>Destaque o diferencial:</strong> Enfatize que são cookies artesanais com recheio generoso de
                    Nutella original.
                  </li>
                  <li>
                    <strong>Fotos de qualidade:</strong> Invista em boas fotos que mostrem o cookie partido ao meio,
                    revelando o recheio cremoso de Nutella.
                  </li>
                  <li>
                    <strong>Variações:</strong> Considere criar variações como cookie de Nutella com flor de sal ou com
                    pedaços de avelã.
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Informações Nutricionais</h3>
              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b">
                  <span>Calorias</span>
                  <span className="font-medium">320 kcal</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Carboidratos</span>
                  <span className="font-medium">42g</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Proteínas</span>
                  <span className="font-medium">4g</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Gorduras</span>
                  <span className="font-medium">16g</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Fibras</span>
                  <span className="font-medium">1.5g</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">*Valores aproximados por cookie de 80g</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Equipamentos Necessários</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Batedeira ou mixer
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Tigelas para mistura
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Assadeira
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Papel manteiga
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Colheres medidoras
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Grade para resfriar
                </li>
              </ul>
            </CardContent>
          </Card>

          <AdSpace />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Receitas Relacionadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/receitas/cookie-brigadeiro">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nKfG9iamdyFowIE9WcRFxLJUsPDhZM.png"
                  alt="Cookie de Brigadeiro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Cookie de Brigadeiro</h3>
                <p className="text-sm text-muted-foreground mt-1">Biscoitos</p>
              </div>
            </div>
          </Link>
          <Link href="/receitas/cookie-oreo">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-513gJzbaUr8Sghd1zkpZM9tGA1K86T.png"
                  alt="Cookie de Oreo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Cookie de Oreo</h3>
                <p className="text-sm text-muted-foreground mt-1">Biscoitos</p>
              </div>
            </div>
          </Link>
          <Link href="/receitas/cookie-doce-de-leite">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0lPt9bUbHmKNaSlc7Qnsl3xxBN4wX2.png"
                  alt="Cookie de Doce de Leite"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Cookie de Doce de Leite</h3>
                <p className="text-sm text-muted-foreground mt-1">Biscoitos</p>
              </div>
            </div>
          </Link>
          <Link href="/receitas/cookies-americanos">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4rWjX1e9G8a9u9y3G6a9u9y3G6a9u9.png"
                  alt="Cookies Americanos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Cookies Americanos</h3>
                <p className="text-sm text-muted-foreground mt-1">Biscoitos</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <NewsletterSignup />
    </div>
  )
}
