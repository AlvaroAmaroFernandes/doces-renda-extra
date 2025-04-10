import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import AdSpace from "@/components/ad-space"
import NewsletterSignup from "@/components/newsletter-signup"

// Atualizar o título e a descrição
export const metadata = {
  title: "Bolo Red Velvet Fácil e Perfeito: Receita Profissional para Encantar Seus Clientes | Doces & Negócios",
  description:
    "Aprenda a fazer um bolo Red Velvet de qualidade profissional, perfeito para vender e impressionar clientes em festas e eventos especiais.",
  keywords:
    "bolo red velvet, receita de bolo red velvet, bolo red velvet profissional, bolo para vender, bolo sofisticado, bolo para festas",
}

export default function RedVelvetPage() {
  return (
    <div className="container py-8">
      <article className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-muted-foreground">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-primary">
                Início
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/receitas" className="hover:text-primary">
                Receitas
              </Link>
            </li>
            <li>/</li>
            <li>Bolo Red Velvet</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          {/* Atualizar o título e a descrição na página */}
          <h1 className="text-4xl font-bold mb-4">
            Bolo Red Velvet Fácil e Perfeito: Receita Profissional para Encantar Seus Clientes
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            O Red Velvet é um bolo sofisticado e super requisitado em festas. Neste post, você aprenderá a fazer um bolo
            Red Velvet de qualidade profissional, perfeito para vender e impressionar clientes.
          </p>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="/images/red-velvet-1.png"
              alt="Bolo Red Velvet com cobertura de cream cheese"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="mr-4">Tempo de preparo: 90 minutos</span>
            <span className="mr-4">Dificuldade: Médio</span>
            <span>Potencial de lucro: Alto</span>
          </div>
          <Separator />
        </header>

        {/* Conteúdo */}
        {/* Substituir o conteúdo da div com classe "prose prose-lg max-w-none" por: */}
        <div className="prose prose-lg max-w-none">
          <h2 id="o-que-e-red-velvet" className="scroll-mt-20">
            O Que é o Bolo Red Velvet?
          </h2>

          <h3>História e origem</h3>

          <p>
            O Red Velvet é um bolo que combina uma textura aveludada com um sabor sutil de chocolate e uma cor vermelha
            vibrante. Sua origem remonta aos Estados Unidos durante a Grande Depressão, quando a empresa Adams Extract
            começou a vender corante vermelho junto com a receita do bolo como estratégia de marketing.
          </p>

          <p>
            O bolo ganhou popularidade nos anos 1940 no hotel Waldorf Astoria em Nova York, onde era servido como um
            item de luxo. Durante décadas, permaneceu como um bolo regional do sul dos Estados Unidos, até que nos anos
            2000 ganhou fama internacional, impulsionado por sua aparição em filmes, séries e pela popularização de
            confeitarias gourmet.
          </p>

          <p>
            No Brasil, o Red Velvet começou a ganhar destaque a partir de 2010, quando confeitarias especializadas em
            cupcakes introduziram a versão miniatura do bolo no mercado. Hoje, é um dos bolos mais requisitados para
            festas, casamentos e eventos especiais.
          </p>

          <h3>Características do bolo perfeito (textura, sabor e cor vibrante)</h3>

          <p>Um Red Velvet perfeito possui características muito específicas:</p>

          <ul>
            <li>
              <strong>Textura:</strong> Deve ser macia, úmida e aveludada - daí o nome "velvet" (veludo).
            </li>
            <li>
              <strong>Sabor:</strong> Apresenta um sutil sabor de chocolate, com notas de baunilha e um leve toque de
              acidez.
            </li>
            <li>
              <strong>Cor:</strong> Vermelho vibrante, que contrasta com a cobertura branca de cream cheese.
            </li>
            <li>
              <strong>Cobertura:</strong> Tradicionalmente feita com cream cheese, deve ser cremosa mas firme o
              suficiente para não escorrer.
            </li>
            <li>
              <strong>Estrutura:</strong> O bolo deve ser firme o suficiente para ser montado em camadas, mas macio ao
              morder.
            </li>
          </ul>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/images/red-velvet-2.png"
              alt="Textura perfeita do bolo Red Velvet"
              fill
              className="object-cover"
            />
          </div>

          <div className="my-8">
            <AdSpace />
          </div>

          <h2 id="receita-passo-a-passo" className="scroll-mt-20">
            Receita Passo a Passo
          </h2>

          <p>
            <strong>Ingredientes:</strong>
          </p>

          <ul>
            <li>2 xícaras de farinha de trigo</li>
            <li>1 ½ xícara de açúcar</li>
            <li>1 colher de sopa de cacau em pó</li>
            <li>1 colher de chá de bicarbonato de sódio</li>
            <li>½ colher de chá de sal</li>
            <li>1 xícara de buttermilk (leite com gotas de limão)</li>
            <li>½ xícara de óleo vegetal</li>
            <li>2 ovos</li>
            <li>1 colher de chá de extrato de baunilha</li>
            <li>1 colher de sopa de corante vermelho em gel</li>
            <li>1 colher de chá de vinagre branco</li>
          </ul>

          <p>
            <strong>Modo de Preparo:</strong>
          </p>

          <ol>
            <li>
              <p>Pré-aqueça o forno a 180°C. Unte e enfarinhe duas formas redondas de 20cm.</p>
            </li>
            <li>
              <p>Em uma tigela grande, peneire a farinha, o açúcar, o cacau, o bicarbonato e o sal. Reserve.</p>
            </li>
            <li>
              <p>Em outra tigela, bata os ovos com o óleo, o buttermilk, a baunilha e o corante vermelho.</p>
            </li>
            <li>
              <p>Adicione os ingredientes líquidos aos secos e misture até obter uma massa homogênea.</p>
            </li>
            <li>
              <p>Por último, adicione o vinagre e misture rapidamente.</p>
            </li>
            <li>
              <p>
                Divida a massa entre as duas formas e asse por aproximadamente 30 minutos, ou até que um palito inserido
                no centro saia limpo.
              </p>
            </li>
            <li>
              <p>
                Deixe esfriar por 10 minutos nas formas, depois desenforme e deixe esfriar completamente em uma grade.
              </p>
            </li>
          </ol>

          <div className="bg-accent p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Dica de Profissional</h3>
            <p>
              Para um bolo ainda mais úmido, prepare uma calda simples com 100ml de água e 100g de açúcar. Ferva até
              dissolver o açúcar, adicione 1 colher de chá de extrato de baunilha e pincele sobre as camadas do bolo
              antes de rechear.
            </p>
          </div>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/images/red-velvet-3.png"
              alt="Processo de montagem do bolo Red Velvet"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="recheio-perfeito" className="scroll-mt-20">
            Como Fazer o Recheio Perfeito (Cream Cheese Frosting)
          </h2>

          <h3>Ingredientes e modo de preparo</h3>

          <p>
            <strong>Ingredientes para a cobertura:</strong>
          </p>

          <ul>
            <li>400g de cream cheese em temperatura ambiente</li>
            <li>100g de manteiga sem sal em temperatura ambiente</li>
            <li>400g de açúcar de confeiteiro peneirado</li>
            <li>1 colher de chá de extrato de baunilha</li>
            <li>Pitada de sal</li>
          </ul>

          <p>
            <strong>Modo de preparo:</strong>
          </p>

          <ol>
            <li>
              <p>
                Na batedeira, bata o cream cheese e a manteiga em velocidade média-alta por 3 minutos, até ficar um
                creme liso e fofo.
              </p>
            </li>
            <li>
              <p>Reduza a velocidade para baixa e adicione o açúcar de confeiteiro gradualmente.</p>
            </li>
            <li>
              <p>
                Adicione a baunilha e o sal, e bata em velocidade média por mais 2 minutos, até ficar cremoso e
                homogêneo.
              </p>
            </li>
            <li>
              <p>Se a cobertura estiver muito mole, refrigere por 20-30 minutos antes de usar.</p>
            </li>
          </ol>

          <div className="my-8">
            <AdSpace />
          </div>

          <h3>Dicas para um creme aveludado e estável</h3>

          <p>
            A cobertura de cream cheese é delicada e pode apresentar alguns desafios. Siga estas dicas para um resultado
            perfeito:
          </p>

          <ul>
            <li>
              <strong>Temperatura dos ingredientes:</strong> O cream cheese e a manteiga devem estar em temperatura
              ambiente, mas não moles demais.
            </li>
            <li>
              <strong>Não bata demais:</strong> Bater excessivamente pode deixar a cobertura muito mole. Pare assim que
              estiver homogênea.
            </li>
            <li>
              <strong>Açúcar peneirado:</strong> Sempre peneire o açúcar de confeiteiro para evitar grumos.
            </li>
            <li>
              <strong>Estabilidade:</strong> Para uma cobertura mais estável em dias quentes, adicione 2 colheres de
              sopa de creme de leite em pó.
            </li>
            <li>
              <strong>Refrigeração:</strong> Se a cobertura estiver muito mole, refrigere por alguns minutos antes de
              usar, mas não deixe endurecer demais.
            </li>
          </ul>

          <h2 id="montagem-decoracao" className="scroll-mt-20">
            Montagem e Decoração do Bolo
          </h2>

          <p>A montagem e decoração são etapas cruciais para um Red Velvet profissional:</p>

          <ol>
            <li>
              <p>
                <strong>Nivele os bolos:</strong> Corte o topo dos bolos se necessário para obter superfícies planas.
              </p>
            </li>
            <li>
              <p>
                <strong>Monte as camadas:</strong> Coloque a primeira camada de bolo, aplique uma camada generosa de
                cobertura, adicione a segunda camada.
              </p>
            </li>
            <li>
              <p>
                <strong>Crumb coat:</strong> Aplique uma fina camada de cobertura em todo o bolo e refrigere por 30
                minutos.
              </p>
            </li>
            <li>
              <p>
                <strong>Cobertura final:</strong> Aplique a cobertura restante, alisando com uma espátula.
              </p>
            </li>
            <li>
              <p>
                <strong>Decoração:</strong> Decore as bordas com um bico de confeitar ou mantenha um visual minimalista
                e elegante.
              </p>
            </li>
          </ol>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Faça essa receita e compartilhe seu bolo no Instagram!</h3>
            <p className="mb-4">Marque @seu_blog para aparecer em nossas postagens.</p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="https://instagram.com" target="_blank">
                  Seguir no Instagram
                </Link>
              </Button>
              <Button variant="outline">
                <Link href="/receitas">Ver mais receitas</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="my-12" id="newsletter">
          <NewsletterSignup />
        </div>

        {/* Artigos relacionados */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Receitas Relacionadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Brigadeiro Gourmet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  <Link href="/receitas/brigadeiro-gourmet" className="hover:text-primary">
                    Brigadeiro Gourmet: Como Fazer e Lucrar
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aprenda a fazer brigadeiros gourmet irresistíveis e transforme em negócio.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Brownie Tradicional"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  <Link href="/receitas/brownie-tradicional" className="hover:text-primary">
                    Brownie Perfeito: Receita Simples e Segredos
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aprenda a fazer brownies com casquinha crocante e interior cremoso.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Cupcakes Decorados"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  <Link href="/receitas/cupcakes-decorados" className="hover:text-primary">
                    Cupcakes Decorados: Como Fazer e Vender
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aprenda técnicas de decoração profissional para cupcakes irresistíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
