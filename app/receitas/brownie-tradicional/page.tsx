import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NewsletterSignup from "@/components/newsletter-signup"
import AdSpace from "@/components/ad-space"

export const metadata = {
  title: "Brownie Tradicional: Receita Perfeita para Vender | Doces & Negócios",
  description:
    "Aprenda a fazer brownies perfeitos com casquinha crocante e interior úmido. Descubra dicas de precificação e embalagem para vender e lucrar.",
  keywords:
    "brownie, receita de brownie, como fazer brownie para vender, brownie lucrativo, como ganhar dinheiro com brownies, doces caseiros",
}

export default function BrownieTradicionalPage() {
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
            <li>Brownie Tradicional</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Brownie Tradicional: Receita Perfeita para Vender e Lucrar</h1>
          <p className="text-xl text-muted-foreground mb-6">
            O brownie perfeito tem uma textura única: crocante por fora e úmido por dentro. Essa combinação é o que faz
            desse doce um dos mais vendidos em confeitarias e cafeterias.
          </p>
          <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="/images/brownie-tradicional-5.png"
              alt="Brownie tradicional com textura perfeita"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <span className="mr-4">Tempo de preparo: 45 minutos</span>
            <span className="mr-4">Dificuldade: Médio</span>
            <span>Potencial de lucro: Alto</span>
          </div>
          <Separator />
        </header>

        {/* Conteúdo */}
        <div className="prose prose-lg max-w-none">
          <h2 id="segredo-brownie-perfeito" className="scroll-mt-20">
            O Segredo do Brownie Perfeito
          </h2>

          <p>
            O brownie perfeito tem uma textura única: crocante por fora e úmido por dentro. Essa combinação é o que faz
            desse doce um dos mais vendidos em confeitarias e cafeterias. Vamos descobrir como alcançar essa textura
            ideal.
          </p>

          <h3>A importância dos ingredientes de qualidade</h3>

          <p>
            Para um brownie verdadeiramente especial, a qualidade dos ingredientes faz toda a diferença. Invista em:
          </p>

          <ul>
            <li>
              <strong>Chocolate:</strong> Use chocolate meio amargo de boa qualidade, com pelo menos 50% de cacau. O
              chocolate é o protagonista do brownie.
            </li>
            <li>
              <strong>Manteiga:</strong> Sempre use manteiga sem sal. A manteiga contribui para a riqueza e textura do
              brownie.
            </li>
            <li>
              <strong>Açúcar:</strong> A combinação de açúcar refinado e açúcar mascavo traz complexidade ao sabor.
            </li>
            <li>
              <strong>Ovos:</strong> Ovos em temperatura ambiente incorporam melhor na massa.
            </li>
            <li>
              <strong>Farinha:</strong> Use farinha de trigo de boa qualidade e peneire-a para evitar grumos.
            </li>
          </ul>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/images/brownie-tradicional-4.png"
              alt="Textura perfeita do brownie: crocante por fora e úmido por dentro"
              fill
              className="object-cover"
            />
          </div>

          <h3>O ponto certo de cozimento</h3>

          <p>
            O segredo para a textura perfeita está no tempo de forno. O brownie deve ser retirado quando a parte de cima
            estiver firme, mas o centro ainda estiver ligeiramente úmido. Um teste com palito deve sair com algumas
            migalhas úmidas, nunca completamente limpo ou completamente molhado.
          </p>

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
            <li>200g de chocolate meio amargo</li>
            <li>150g de manteiga sem sal</li>
            <li>1 xícara de açúcar (200g)</li>
            <li>1/2 xícara de açúcar mascavo (100g)</li>
            <li>3 ovos grandes</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>1 xícara de farinha de trigo (120g)</li>
            <li>1/4 xícara de cacau em pó (25g)</li>
            <li>1/2 colher de chá de sal</li>
            <li>100g de chocolate meio amargo picado (opcional, para textura)</li>
          </ul>

          <p>
            <strong>Modo de preparo:</strong>
          </p>

          <ol>
            <li>
              <p>Preaqueça o forno a 180°C e forre uma forma quadrada de 20x20cm com papel manteiga.</p>
            </li>
            <li>
              <p>
                Em banho-maria, derreta o chocolate meio amargo com a manteiga, mexendo ocasionalmente até obter uma
                mistura homogênea. Deixe esfriar por alguns minutos.
              </p>
            </li>
            <li>
              <p>
                Em uma tigela grande, bata os ovos com o açúcar e o açúcar mascavo até obter uma mistura clara e aerada.
              </p>
            </li>
            <li>
              <p>Adicione a mistura de chocolate derretido e a essência de baunilha, misturando bem.</p>
            </li>
            <li>
              <p>
                Em outra tigela, peneire a farinha, o cacau em pó e o sal. Adicione aos poucos à mistura úmida, mexendo
                delicadamente com uma espátula até incorporar.
              </p>
            </li>
            <li>
              <p>
                Se desejar, adicione o chocolate picado à massa e misture levemente. Isso dará textura extra ao seu
                brownie.
              </p>
            </li>
            <li>
              <p>
                Despeje a massa na forma preparada e alise a superfície com uma espátula. Bata levemente a forma na
                bancada para eliminar bolhas de ar.
              </p>
            </li>
            <li>
              <p>
                Asse por 25-30 minutos, ou até que a superfície esteja firme e um palito inserido no centro saia com
                algumas migalhas úmidas.
              </p>
            </li>
            <li>
              <p>
                Deixe esfriar completamente na forma antes de cortar em quadrados. Para um corte perfeito, use uma faca
                afiada e limpe-a entre os cortes.
              </p>
            </li>
          </ol>

          <div className="relative aspect-video w-full rounded-lg overflow-hidden my-6">
            <Image
              src="/images/brownie-tradicional-6.png"
              alt="Brownies prontos cortados em quadrados perfeitos"
              fill
              className="object-cover"
            />
          </div>

          <div className="bg-accent p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Dica de Profissional</h3>
            <p>
              Para brownies ainda mais especiais, adicione 1/2 colher de chá de café solúvel à mistura. O café realça o
              sabor do chocolate sem deixar gosto de café. Outra dica é deixar os brownies descansarem de um dia para o
              outro antes de servir - o sabor fica ainda melhor!
            </p>
          </div>

          <h2 id="como-vender" className="scroll-mt-20">
            Como Vender Brownies e Lucrar
          </h2>

          <h3>Precificação: quanto cobrar?</h3>

          <p>A precificação correta é fundamental para o sucesso do seu negócio de brownies:</p>

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
              <strong>Preço médio de mercado:</strong> Brownies individuais são vendidos entre R$5,00 e R$12,00,
              dependendo do tamanho e dos ingredientes.
            </li>
            <li>
              <strong>Caixas e kits:</strong> Caixas com 4 unidades: R$25-R$40; Caixas com 9 unidades: R$50-R$80.
            </li>
          </ul>

          <h3>Como embalar para valorizar seu produto</h3>

          <p>A embalagem é parte fundamental da experiência do brownie:</p>

          <ul>
            <li>
              <strong>Embalagem individual:</strong> Use papel antiaderente ou forminhas específicas para brownies.
            </li>
            <li>
              <strong>Caixas:</strong> Invista em caixas de papel rígido com janela transparente para mostrar o produto.
            </li>
            <li>
              <strong>Personalização:</strong> Adicione etiquetas com sua marca, ingredientes e data de validade.
            </li>
            <li>
              <strong>Fitas e laços:</strong> Finalize com fitas de cetim ou laços para um toque elegante.
            </li>
            <li>
              <strong>Cartões:</strong> Inclua um pequeno cartão agradecendo pela compra e com suas redes sociais.
            </li>
          </ul>

          <div className="my-8">
            <AdSpace />
          </div>

          <h3>Onde vender e como divulgar nas redes sociais</h3>

          <p>Existem diversos canais para vender seus brownies:</p>

          <ul>
            <li>
              <strong>Instagram:</strong> Crie um perfil profissional com fotos de alta qualidade dos seus produtos.
            </li>
            <li>
              <strong>WhatsApp Business:</strong> Configure um catálogo com seus produtos e preços.
            </li>
            <li>
              <strong>Marketplaces:</strong> Plataformas como iFood, Rappi e GetNinjas para confeiteiros.
            </li>
            <li>
              <strong>Feiras e eventos:</strong> Participe de feiras gastronômicas e eventos locais.
            </li>
            <li>
              <strong>Parcerias:</strong> Estabeleça parcerias com cafeterias, lojas de presentes e buffets.
            </li>
          </ul>

          <p>Para uma divulgação eficiente nas redes sociais:</p>

          <ul>
            <li>Poste regularmente fotos e vídeos dos seus brownies, especialmente mostrando o interior úmido.</li>
            <li>Mostre o processo de produção nos Stories para criar conexão com o público.</li>
            <li>Use hashtags relevantes como #brownie #confeitariaartesanal #docescaseiros.</li>
            <li>Faça promoções para primeiras compras ou indique e ganhe.</li>
            <li>Compartilhe depoimentos de clientes satisfeitos.</li>
          </ul>

          <div className="bg-primary/10 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Gostou dessa receita?</h3>
            <p className="mb-4">
              Deixe um comentário contando como ficou o seu brownie e compartilhe nas redes sociais!
            </p>
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
                  alt="Brigadeiro Gourmet"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  <Link href="/receitas/brigadeiro-gourmet" className="hover:text-primary">
                    Brigadeiro Gourmet: Receita Perfeita
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aprenda a fazer brigadeiros gourmet irresistíveis e lucrativos.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image src="/images/brownies-recheados-1.png" alt="Brownies Recheados" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  <Link href="/receitas/brownies-recheados" className="hover:text-primary">
                    Brownies Recheados: Variações Gourmet
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Descubra como fazer brownies recheados com diferentes sabores.
                </p>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <Image src="/images/cookies-americanos-4.png" alt="Cookies Americanos" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">
                  <Link href="/receitas/cookies-americanos" className="hover:text-primary">
                    Cookies Americanos: Receita Clássica
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Aprenda a fazer cookies crocantes por fora e macios por dentro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
