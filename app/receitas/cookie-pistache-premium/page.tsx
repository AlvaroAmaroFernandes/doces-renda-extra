import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import NewsletterSignup from "@/components/newsletter-signup"
import AdSpace from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Cookie de Pistache Premium: Um Toque Sofisticado e Exclusivo!",
  description:
    "Descubra como fazer cookies de pistache com recheio de chocolate branco, uma opção gourmet para expandir seu cardápio de confeitaria.",
  keywords:
    "cookie de pistache, cookie recheado, pistache, chocolate branco, confeitaria gourmet, receita cookie premium, cookie verde, venda de cookies",
}

export default function CookiePistachePremium() {
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
          <li className="text-gray-600">Cookie de Pistache Premium</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cookie de Pistache Premium: Um Toque Sofisticado e Exclusivo!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Descubra como fazer cookies de pistache com recheio de chocolate branco, uma opção gourmet para expandir seu
          cardápio de confeitaria.
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c912a20f6c08001ef4d0e8ddbdda4542-PZVZchA7JENM3nuvJwVJL6RrjNFDWR.png"
            alt="Cookie de Pistache Premium recheado com chocolate branco"
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
                <li>200g de farinha de trigo</li>
                <li>1/2 colher de chá de fermento</li>
                <li>1/4 colher de chá de bicarbonato de sódio</li>
                <li>1 pitada de sal</li>
                <li>150g de manteiga em temperatura ambiente</li>
                <li>80g de açúcar refinado</li>
                <li>80g de açúcar mascavo</li>
                <li>1 ovo</li>
                <li>1 colher de chá de essência de baunilha</li>
                <li>2-3 colheres de sopa de pasta de pistache</li>
                <li>100g de pistaches picados</li>
                <li>Algumas gotas de corante alimentício verde (opcional)</li>
                <li>200g de chocolate branco para o recheio</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Modo de Preparo:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Em uma tigela, misture a farinha, o fermento, o bicarbonato e o sal. Reserve.</li>
                <li>Na batedeira, bata a manteiga com os dois tipos de açúcar até obter um creme fofo.</li>
                <li>Adicione o ovo, a essência de baunilha e a pasta de pistache. Bata até incorporar bem.</li>
                <li>Se desejar uma cor verde mais vibrante, adicione algumas gotas de corante alimentício verde.</li>
                <li>Incorpore a mistura de farinha aos poucos, batendo em velocidade baixa.</li>
                <li>Por último, adicione os pistaches picados e misture delicadamente com uma espátula.</li>
                <li>Cubra a massa e leve à geladeira por pelo menos 2 horas ou, idealmente, overnight.</li>
                <li>Preaqueça o forno a 180°C e forre uma assadeira com papel manteiga.</li>
                <li>Faça bolinhas com a massa (aprox. 40g cada) e coloque na assadeira, deixando espaço entre elas.</li>
                <li>Asse por 10-12 minutos, até as bordas começarem a dourar levemente.</li>
                <li>Deixe esfriar completamente.</li>
                <li>Para o recheio, derreta o chocolate branco em banho-maria ou no micro-ondas.</li>
                <li>
                  Espalhe o chocolate derretido na parte de baixo de um cookie e coloque outro por cima, pressionando
                  levemente.
                </li>
                <li>Deixe o chocolate solidificar antes de servir ou embalar.</li>
              </ol>
            </div>
          </section>

          {/* Professional Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas Profissionais</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>Para um sabor mais intenso, torre os pistaches levemente antes de incorporá-los à massa.</p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  A pasta de pistache pode ser substituída por creme de pistache, que geralmente é mais fácil de
                  encontrar.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Você pode variar o recheio, usando ganache de chocolate branco ou até mesmo cream cheese para um sabor
                  diferente.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Para cookies mais vistosos, reserve alguns pistaches picados para colocar por cima da massa antes de
                  assar.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  O tempo de refrigeração da massa é essencial para desenvolver sabor e evitar que os cookies se
                  espalhem demais durante o assamento.
                </p>
              </li>
            </ul>
          </section>

          {/* Selling and Packaging Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas de Venda e Embalagem</h2>
            <div className="space-y-4">
              <p>
                O cookie de pistache é um produto premium que pode ser vendido a um preço mais elevado devido ao custo
                do ingrediente principal. Confira algumas estratégias para maximizar suas vendas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Destaque a exclusividade do produto - pistache é um ingrediente nobre e menos comum em cookies
                    convencionais.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Crie embalagens elegantes com tons de verde que remetam ao pistache, usando materiais sustentáveis
                    para agregar ainda mais valor.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>Ofereça uma degustação em feiras gourmet ou eventos de gastronomia para atrair novos clientes.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Crie uma "linha premium" com este e outros cookies sofisticados, como o de chocolate branco com
                    macadâmia.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Fotografe o produto cortado ao meio, mostrando o recheio, para destacar nas redes sociais e atrair
                    mais clientes.
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
                <Link
                  href="/receitas/cookie-chocolate-branco-premium"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookie de Chocolate Branco Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/brownie-pistache-premium"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Brownie de Pistache Premium
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/ovo-pascoa-pistache-chocolate-branco"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Ovo de Páscoa de Pistache
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/cookies-recheados-premium"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookies Recheados Premium
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
