import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, DollarSign, ChefHat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdSpace from "@/components/ad-space"
import NewsletterSignup from "@/components/newsletter-signup"

export const metadata: Metadata = {
  title: "Brownie de Pistache Premium - Doces & Negócios",
  description: "Aprenda a fazer um delicioso Brownie de Pistache Premium para vender e lucrar",
}

export default function BrowniePistachePremiumPage() {
  // URL da imagem externa
  const recipeImage = "https://i.imgur.com/JGZVXq4.jpg"

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/receitas" className="flex items-center text-muted-foreground hover:text-primary mb-2">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para receitas
        </Link>
        <h1 className="text-3xl font-bold mb-2">Brownie de Pistache Premium</h1>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm flex items-center">
            <Clock className="mr-1 h-4 w-4" /> 65 min
          </span>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm flex items-center">
            <ChefHat className="mr-1 h-4 w-4" /> Médio
          </span>
          <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-sm flex items-center">
            <DollarSign className="mr-1 h-4 w-4" /> Alto potencial de lucro
          </span>
          <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm">Bolos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-6 relative aspect-video">
            <img
              src={recipeImage || "/placeholder.svg"}
              alt="Brownie de Pistache Premium"
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
                <li>200g de chocolate branco de boa qualidade</li>
                <li>150g de manteiga sem sal</li>
                <li>150g de açúcar</li>
                <li>3 ovos</li>
                <li>1 colher de chá de essência de baunilha</li>
                <li>150g de farinha de trigo</li>
                <li>1/2 colher de chá de sal</li>
                <li>100g de pasta de pistache pura</li>
                <li>100g de pistaches sem casca, picados grosseiramente</li>
                <li>Algumas gotas de corante alimentício verde (opcional)</li>
                <li>Para a cobertura:</li>
                <li>100g de chocolate branco</li>
                <li>50g de pasta de pistache</li>
                <li>50g de pistaches picados para decoração</li>
              </ul>
            </TabsContent>

            <TabsContent value="preparo" className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Modo de Preparo</h2>
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  Pré-aqueça o forno a 180°C. Forre uma forma quadrada (20x20cm) com papel manteiga, deixando as bordas
                  sobressaírem para facilitar a remoção depois.
                </li>
                <li>
                  Em banho-maria, derreta o chocolate branco com a manteiga, mexendo ocasionalmente até obter uma
                  mistura homogênea. Retire do fogo e deixe esfriar um pouco.
                </li>
                <li>
                  Em uma tigela grande, bata os ovos com o açúcar até obter uma mistura clara e fofa. Adicione a
                  essência de baunilha e misture.
                </li>
                <li>Incorpore a mistura de chocolate branco derretido aos ovos batidos, mexendo delicadamente.</li>
                <li>
                  Adicione a pasta de pistache e misture bem. Se desejar uma cor verde mais intensa, adicione algumas
                  gotas de corante alimentício verde.
                </li>
                <li>
                  Peneire a farinha e o sal sobre a mistura e incorpore delicadamente até que não haja mais pontos
                  secos.
                </li>
                <li>Por último, adicione os pistaches picados e misture levemente.</li>
                <li>Despeje a massa na forma preparada e nivele a superfície.</li>
                <li>
                  Asse por 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas (não
                  completamente limpo, pois o brownie deve ficar úmido).
                </li>
                <li>Deixe esfriar completamente na forma.</li>
                <li>
                  Para a cobertura: derreta o chocolate branco em banho-maria ou no micro-ondas. Misture com a pasta de
                  pistache até obter uma mistura homogênea.
                </li>
                <li>Espalhe a cobertura sobre o brownie já frio e decore com os pistaches picados.</li>
                <li>Leve à geladeira por pelo menos 1 hora para firmar a cobertura antes de cortar em quadrados.</li>
              </ol>
            </TabsContent>

            <TabsContent value="dicas" className="space-y-4">
              <h2 className="text-xl font-semibold mb-2">Dicas de Venda</h2>
              <div className="space-y-4">
                <p>
                  O Brownie de Pistache Premium é um produto sofisticado com alto potencial de lucro. Aqui estão algumas
                  dicas para maximizar suas vendas:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Posicionamento premium:</strong> Destaque o uso de pistaches reais e pasta de pistache pura,
                    ingredientes considerados nobres na confeitaria.
                  </li>
                  <li>
                    <strong>Embalagem elegante:</strong> Invista em embalagens sofisticadas que reflitam o caráter
                    premium do produto. Caixas com janela transparente são ideais para mostrar a cor verde
                    característica.
                  </li>
                  <li>
                    <strong>Preço sugerido:</strong> Por ser um produto com ingredientes mais caros, o preço pode ser
                    30-40% superior ao de um brownie tradicional. Para um brownie de tamanho médio (7x7cm), o preço pode
                    variar entre R$12 e R$18.
                  </li>
                  <li>
                    <strong>Destaque o diferencial:</strong> Enfatize que é um produto exclusivo e diferenciado, ideal
                    para quem busca experiências gastronômicas sofisticadas.
                  </li>
                  <li>
                    <strong>Fotos de qualidade:</strong> Invista em boas fotos que mostrem a textura interna do brownie
                    e destaquem a cor verde e os pedaços de pistache.
                  </li>
                  <li>
                    <strong>Degustação:</strong> Ofereça pequenas amostras em eventos ou feiras gourmet, pois muitas
                    pessoas nunca experimentaram brownies de pistache.
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
                  <span className="font-medium">380 kcal</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Carboidratos</span>
                  <span className="font-medium">35g</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Proteínas</span>
                  <span className="font-medium">7g</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Gorduras</span>
                  <span className="font-medium">25g</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Fibras</span>
                  <span className="font-medium">2.5g</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">*Valores aproximados por porção de 80g</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Equipamentos Necessários</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Forma quadrada 20x20cm
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Papel manteiga
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Tigelas para mistura
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Batedeira ou batedor manual
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Espátula de silicone
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Peneira
                </li>
                <li className="flex items-center">
                  <span className="bg-primary/10 text-primary rounded-full p-1 mr-2">✓</span>
                  Faca afiada para cortar
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
          <Link href="/receitas/brownie-tradicional">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://i.imgur.com/JGZVXq4.jpg"
                  alt="Brownie Tradicional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Brownie Tradicional</h3>
                <p className="text-sm text-muted-foreground mt-1">Bolos</p>
              </div>
            </div>
          </Link>
          <Link href="/receitas/brownie-nutella">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://i.imgur.com/YHzSMOI.jpg"
                  alt="Brownie de Nutella"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Brownie de Nutella</h3>
                <p className="text-sm text-muted-foreground mt-1">Bolos</p>
              </div>
            </div>
          </Link>
          <Link href="/receitas/brownie-brigadeiro">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://i.imgur.com/8Lx5Rhy.jpg"
                  alt="Brownie de Brigadeiro"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Brownie de Brigadeiro</h3>
                <p className="text-sm text-muted-foreground mt-1">Bolos</p>
              </div>
            </div>
          </Link>
          <Link href="/receitas/brownie-oreo">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48">
                <img
                  src="https://i.imgur.com/YHzSMOI.jpg"
                  alt="Brownie de Oreo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Brownie de Oreo</h3>
                <p className="text-sm text-muted-foreground mt-1">Bolos</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <NewsletterSignup />
    </div>
  )
}
