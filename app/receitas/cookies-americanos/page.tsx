import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NewsletterSignup from "@/components/newsletter-signup"
import AdSpace from "@/components/ad-space"

export const metadata = {
  title: "Cookies Americanos: A Receita Perfeita | Doces & Negócios",
  description:
    "Aprenda a fazer cookies americanos perfeitos: crocantes por fora e macios por dentro. Receita completa com dicas de venda e precificação.",
  keywords:
    "cookies americanos, receita de cookies, como fazer cookies para vender, cookies lucrativos, gotas de chocolate, confeitaria",
}

export default function CookiesAmericanosPage() {
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
            <li>Cookies Americanos</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Cookies Americanos: A Receita Perfeita para Vender e Lucrar</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Cookies estilo americano com gotas de chocolate e textura perfeita: crocante por fora e macio por dentro.
            Uma receita clássica que todos amam!
          </p>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="/images/cookies-americanos-4.png"
              alt="Cookies americanos com gotas de chocolate"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="mr-4">Tempo de preparo: 40 minutos</span>
            <span className="mr-4">Dificuldade: Médio</span>
            <span>Potencial de lucro: Alto</span>
          </div>
          <Separator />
        </header>

        {/* Conteúdo */}
        <div className="prose prose-lg max-w-none">
          <h2 id="segredo-cookies" className="scroll-mt-20">
            O Segredo dos Cookies Perfeitos
          </h2>

          <p>
            Os cookies americanos perfeitos têm uma característica única: são crocantes nas bordas e macios no centro.
            Essa combinação de texturas é o que torna esse doce tão irresistível e um dos mais vendidos em cafeterias ao
            redor do mundo.
          </p>

          <h3>A importância dos ingredientes e técnicas</h3>

          <p>Para conseguir cookies perfeitos, alguns detalhes fazem toda a diferença:</p>

          <ul>
            <li>
              <strong>Manteiga em temperatura ambiente:</strong> A manteiga deve estar macia, mas não derretida. Isso
              garante a aeração correta da massa.
            </li>
            <li>
              <strong>Combinação de açúcares:</strong> O açúcar mascavo traz umidade e sabor caramelizado, enquanto o
              açúcar refinado ajuda na crocância.
            </li>
            <li>
              <strong>Descanso da massa:</strong> Deixar a massa descansar na geladeira por pelo menos 30 minutos (ou
              idealmente 24 horas) intensifica o sabor e melhora a textura.
            </li>
            <li>
              <strong>Gotas de chocolate de qualidade:</strong> Use chocolate meio amargo de boa qualidade, com pelo
              menos 50% de cacau.
            </li>
            <li>
              <strong>Ponto de forno:</strong> Os cookies devem ser retirados quando as bordas estiverem douradas, mas o
              centro ainda parecer um pouco cru - eles continuarão a assar fora do forno.
            </li>
          </ul>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/images/cookies-americanos-5.png"
              alt="Textura perfeita dos cookies: crocante por fora e macio por dentro"
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
            <li>225g de manteiga sem sal, em temperatura ambiente</li>
            <li>200g de açúcar mascavo</li>
            <li>100g de açúcar refinado</li>
            <li>2 ovos grandes</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>300g de farinha de trigo</li>
            <li>1 colher de chá de bicarbonato de sódio</li>
            <li>1/2 colher de chá de sal</li>
            <li>300g de gotas de chocolate meio amargo</li>
            <li>100g de nozes picadas (opcional)</li>
          </ul>

          <p>
            <strong>Modo de preparo:</strong>
          </p>

          <ol>
            <li>
              <p>Pré-aqueça o forno a 180°C e forre duas assadeiras grandes com papel manteiga.</p>
            </li>
            <li>
              <p>
                Em uma tigela grande, bata a manteiga, o açúcar mascavo e o açúcar refinado até obter um creme fofo e
                claro, por cerca de 3-4 minutos.
              </p>
            </li>
            <li>
              <p>
                Adicione os ovos, um de cada vez, batendo bem após cada adição. Acrescente a essência de baunilha e
                misture.
              </p>
            </li>
            <li>
              <p>
                Em outra tigela, misture a farinha, o bicarbonato e o sal. Adicione aos poucos à mistura de manteiga,
                mexendo em velocidade baixa até incorporar.
              </p>
            </li>
            <li>
              <p>
                Adicione as gotas de chocolate e as nozes (se estiver usando) e misture delicadamente com uma espátula.
              </p>
            </li>
            <li>
              <p>
                Faça bolas de massa com aproximadamente 2 colheres de sopa cada e coloque nas assadeiras preparadas,
                deixando espaço suficiente entre elas (cerca de 5cm).
              </p>
            </li>
            <li>
              <p>
                Asse por 10-12 minutos, ou até que as bordas estejam douradas e o centro ainda esteja um pouco mole.
              </p>
            </li>
            <li>
              <p>
                Retire do forno e deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade para
                esfriar completamente.
              </p>
            </li>
          </ol>

          <div className="bg-accent p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Dica de Profissional</h3>
            <p>
              Para cookies com visual perfeito, reserve algumas gotas de chocolate e pressione-as levemente na parte
              superior das bolas de massa antes de assar. Isso garante que os cookies fiquem com aquele visual
              característico de "gotas de chocolate à mostra".
            </p>
          </div>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/images/cookies-americanos-6.png"
              alt="Cookies americanos servidos com leite"
              fill
              className="object-cover"
            />
          </div>

          <h2 id="variacoes" className="scroll-mt-20">
            Variações Lucrativas
          </h2>

          <p>A partir da receita base, você pode criar diversas variações para ampliar seu cardápio:</p>

          <ul>
            <li>
              <strong>Cookies com chocolate branco e cranberry:</strong> Substitua metade das gotas de chocolate por
              chocolate branco picado e adicione 100g de cranberries secas.
            </li>
            <li>
              <strong>Cookies com gotas de caramelo salgado:</strong> Adicione 100g de caramelos macios picados e
              finalize com uma pitada de flor de sal sobre cada cookie antes de assar.
            </li>
            <li>
              <strong>Cookies com pedaços de Oreo:</strong> Adicione 150g de biscoitos Oreo quebrados em pedaços grandes
              à massa.
            </li>
            <li>
              <strong>Cookies de chocolate duplo:</strong> Substitua 50g de farinha por 50g de cacau em pó e use gotas
              de chocolate branco.
            </li>
            <li>
              <strong>Cookies com M&M's:</strong> Substitua as gotas de chocolate por confeitos de chocolate coloridos.
            </li>
          </ul>

          <div className="my-8">
            <AdSpace />
          </div>

          <h2 id="como-vender" className="scroll-mt-20">
            Como Vender Cookies e Lucrar
          </h2>

          <h3>Precificação: quanto cobrar?</h3>

          <p>A precificação correta é fundamental para o sucesso do seu negócio de cookies:</p>

          <ul>
            <li>
              <strong>Calcule todos os custos:</strong> Ingredientes, embalagens, energia, transporte e seu tempo de
              trabalho.
            </li>
            <li>
              <strong>Aplique a fórmula:</strong> Preço = Custo total + (Custo total × Margem de lucro)
            </li>
            <li>
              <strong>Margem de lucro recomendada:</strong> Entre 100% e 200% sobre o custo total.
            </li>
            <li>
              <strong>Preço médio de mercado:</strong> Cookies individuais grandes (70-80g) são vendidos entre R$7,00 e
              R$15,00, dependendo do tamanho e dos ingredientes.
            </li>
            <li>
              <strong>Pacotes e kits:</strong> Pacotes com 4 unidades: R$25-R$40; Pacotes com 8 unidades: R$45-R$70.
            </li>
          </ul>

          <h3>Embalagem e apresentação</h3>

          <p>A embalagem é parte fundamental da experiência do cookie:</p>

          <ul>
            <li>
              <strong>Embalagem individual:</strong> Embale os cookies individualmente em sacos celofane transparentes
              amarrados com fita decorativa.
            </li>
            <li>
              <strong>Caixas:</strong> Invista em caixas de papel kraft com janela transparente para mostrar o produto.
            </li>
            <li>
              <strong>Personalização:</strong> Adicione etiquetas com sua marca, ingredientes e data de validade.
            </li>
            <li>
              <strong>Cookie gigante:</strong> Ofereça a opção de "cookie cake" - um cookie gigante que pode ser
              personalizado com mensagens escritas em chocolate.
            </li>
            <li>
              <strong>Kits especiais:</strong> Crie kits "faça seu cookie em casa" com a massa congelada em porções
              individuais.
            </li>
          </ul>

          <h3>Conservação e validade</h3>

          <p>Os cookies têm uma boa durabilidade quando armazenados corretamente:</p>

          <ul>
            <li>
              <strong>Temperatura ambiente:</strong> Em recipiente hermético, os cookies mantêm a textura ideal por até
              5 dias.
            </li>
            <li>
              <strong>Refrigeração:</strong> Não é recomendada, pois altera a textura dos cookies, deixando-os mais
              duros.
            </li>
            <li>
              <strong>Congelamento da massa:</strong> A massa crua pode ser congelada em formato de bolinhas por até 3
              meses. Asse diretamente do congelador, adicionando 2-3 minutos ao tempo de forno.
            </li>
            <li>
              <strong>Congelamento dos cookies assados:</strong> Os cookies assados podem ser congelados por até 1 mês.
              Descongele em temperatura ambiente por 1-2 horas antes de consumir.
            </li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Gostou dessa receita?</h3>
            <p className="mb-4">Experimente fazer em casa e compartilhe os resultados nas redes sociais!</p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="#comentarios">Deixar Comentário</Link>
              </Button>
              <Button variant="outline">
                <Link href="/receitas">Ver mais receitas</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="my-12">
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
                  alt="Cookies Recheados"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  <Link href="/receitas/cookies-recheados" className="hover:text-primary">
                    Cookies Recheados: Os Sabores Mais Populares
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Descubra as receitas dos cookies recheados mais vendidos no Brasil.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="/images/brownie-tradicional-4.png"
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
          </div>
        </div>
      </article>
    </div>
  )
}
