import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import NewsletterSignup from "@/components/newsletter-signup"
import AdSpace from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Cookie de Chocolate Branco Premium: Crocante por Fora, Cremoso por Dentro!",
  description:
    "O chocolate branco adiciona um sabor adocicado irresistível a essa receita de cookie. Uma opção excelente para diversificar o cardápio e aumentar suas vendas.",
  keywords:
    "cookie de chocolate branco, receita de cookie, chocolate branco, cookie gourmet, confeitaria, venda de cookies, cookie macio, cookie crocante, cookie recheado",
}

export default function CookieChocolateBrancoPremium() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6">
        <ol className="list-none p-0 flex flex-wrap">
          <li className="flex items-center">
            <Link href="/" className="text-pink-600 hover:text-pink-800">
              Início
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="flex items-center">
            <Link href="/receitas" className="text-pink-600 hover:text-pink-800">
              Receitas
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li className="text-gray-600">Cookie de Chocolate Branco Premium</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cookie de Chocolate Branco Premium: Crocante por Fora, Cremoso por Dentro!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          O chocolate branco adiciona um sabor adocicado irresistível a essa receita de cookie recheado. Uma opção
          excelente para diversificar o cardápio e aumentar suas vendas.
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DnexNczysVcZ3s2TgOzPqfGTj12927.png"
            alt="Cookie de Chocolate Branco Premium partido ao meio mostrando o recheio cremoso"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Recipe Content */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Receita Passo a Passo</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Ingredientes:</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>2 xícaras de farinha de trigo</li>
                <li>1 colher de chá de fermento</li>
                <li>1 pitada de sal</li>
                <li>1 xícara de açúcar mascavo</li>
                <li>½ xícara de açúcar refinado</li>
                <li>150g de manteiga derretida</li>
                <li>1 ovo</li>
                <li>1 colher de chá de essência de baunilha</li>
                <li>200g de chocolate branco picado (metade para a massa, metade para o recheio)</li>
                <li>100g de chocolate branco para o recheio cremoso</li>
                <li>50g de cream cheese</li>
                <li>2 colheres de sopa de leite condensado</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Modo de Preparo:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Misture os ingredientes secos: farinha, fermento e sal.</li>
                <li>Em outra tigela, bata a manteiga com os dois tipos de açúcar até obter um creme fofo.</li>
                <li>Adicione o ovo e a baunilha e misture bem.</li>
                <li>Incorpore os ingredientes secos aos poucos, misturando delicadamente.</li>
                <li>Adicione metade do chocolate branco picado à massa e misture.</li>
                <li>Para o recheio, derreta 100g de chocolate branco em banho-maria ou microondas.</li>
                <li>
                  Misture o chocolate branco derretido com o cream cheese e o leite condensado até obter um creme
                  homogêneo.
                </li>
                <li>Refrigere o recheio por 30 minutos para firmar um pouco.</li>
                <li>Divida a massa em porções e modele metade dos cookies.</li>
                <li>
                  Coloque uma colher do recheio no centro de cada cookie e cubra com outra porção de massa, selando bem
                  as bordas.
                </li>
                <li>Asse em forno preaquecido a 180°C por 12-15 minutos, até as bordas começarem a dourar.</li>
                <li>Deixe esfriar por 5 minutos na assadeira antes de transferir para uma grade.</li>
              </ol>
            </div>
          </section>

          {/* Professional Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas Profissionais</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Para um cookie mais macio, retire do forno quando as bordas estiverem douradas, mas o centro ainda
                  parecer um pouco cru. Ele terminará de assar com o calor residual.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Deixe a massa descansar na geladeira por pelo menos 2 horas antes de assar para intensificar o sabor e
                  evitar que o cookie se espalhe demais durante o assamento.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Use chocolate branco de boa qualidade para um sabor mais intenso e cremoso. Chocolates com maior teor
                  de manteiga de cacau resultam em um recheio mais sedoso.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Para um toque especial, adicione um pouco de raspas de limão à massa, criando um contraste
                  interessante com a doçura do chocolate branco.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Se quiser um visual mais elegante, polvilhe um pouco de sal de flor por cima dos cookies antes de
                  assar.
                </p>
              </li>
            </ul>
          </section>

          {/* Selling and Packaging Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas de Venda e Embalagem</h2>
            <div className="space-y-4">
              <p>
                Os cookies de chocolate branco premium são visualmente atraentes e podem ser vendidos individualmente ou
                em kits com outros sabores. Aqui estão algumas dicas para maximizar suas vendas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Embale em sacos transparentes com um laço elegante em tons de dourado ou pérola para destacar o
                    visual sofisticado do cookie.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Crie kits de degustação premium com diferentes sabores de cookies recheados, incluindo o de
                    chocolate branco como destaque.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Ofereça uma versão "cookie cake" para encomendas especiais e aniversários, decorada com ganache de
                    chocolate branco e frutas vermelhas.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Destaque nas redes sociais vídeos mostrando o momento em que o cookie é partido e o recheio cremoso
                    escorre, criando o efeito "food porn" que atrai muitos clientes.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Crie uma linha premium de cookies recheados e posicione-os com preço mais elevado que os cookies
                    tradicionais, destacando o valor agregado do recheio cremoso.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>

        <div className="lg:col-span-1">
          {/* Related Recipes */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Receitas Relacionadas</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/receitas/cookie-pistache" className="text-pink-600 hover:text-pink-800 flex items-center">
                  <span className="mr-2">→</span> Cookie de Pistache
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/cookie-caramelo-salgado"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookie de Caramelo Salgado
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/cookie-nutella-premium"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookie de Nutella Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/cookie-ninho-nutella-premium"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookie de Ninho com Nutella Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/cookies-americanos"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookies Americanos Tradicionais
                </Link>
              </li>
            </ul>
          </section>

          {/* Newsletter Signup */}
          <NewsletterSignup />

          {/* Ad Space */}
          <AdSpace />
        </div>
      </div>
    </main>
  )
}
