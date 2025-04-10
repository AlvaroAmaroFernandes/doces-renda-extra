import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import NewsletterSignup from "@/components/newsletter-signup"
import AdSpace from "@/components/ad-space"

export const metadata: Metadata = {
  title: "Cookie de Caramelo Salgado: O Equilíbrio Perfeito Entre Doce e Salgado!",
  description:
    "O contraste perfeito do caramelo doce com um toque de sal transforma esse cookie em uma experiência gourmet e irresistível.",
  keywords:
    "cookie de caramelo salgado, receita de cookie, caramelo salgado, cookie gourmet, confeitaria, venda de cookies, doce e salgado, cookie premium",
}

export default function CookieCarameloSalgado() {
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
          <li className="text-gray-600">Cookie de Caramelo Salgado</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cookie de Caramelo Salgado: O Equilíbrio Perfeito Entre Doce e Salgado!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          O contraste perfeito do caramelo doce com um toque de sal transforma esse cookie em uma experiência gourmet e
          irresistível.
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-6">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Cookie de Caramelo Salgado"
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
                <li>200g de caramelo pronto</li>
                <li>Flor de sal para finalizar</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Modo de Preparo:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Misture os ingredientes secos.</li>
                <li>Adicione a manteiga, o ovo e a baunilha.</li>
                <li>Modele os cookies e insira pedaços de caramelo na massa.</li>
                <li>Asse a 180°C por 12-15 minutos e finalize com flor de sal.</li>
              </ol>
            </div>
          </section>

          {/* Professional Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas Profissionais</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>Use flor de sal de boa qualidade para garantir o contraste perfeito com o doce do caramelo.</p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>Você pode fazer seu próprio caramelo e cortá-lo em pedaços para um sabor mais autêntico.</p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>Adicione um pouco de chocolate meio amargo picado para um contraste adicional de sabores.</p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>Aplique a flor de sal apenas no momento de servir para manter a textura crocante do sal.</p>
              </li>
            </ul>
          </section>

          {/* Selling and Packaging Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas de Venda e Embalagem</h2>
            <div className="space-y-4">
              <p>
                O cookie de caramelo salgado é uma opção gourmet que atrai clientes que buscam experiências
                gastronômicas diferenciadas. Aqui estão algumas dicas para maximizar suas vendas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>Destaque o contraste entre doce e salgado em suas descrições de produto.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>Crie embalagens elegantes com tons dourados que remetam ao caramelo.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>Ofereça degustações em eventos gourmet para atrair novos clientes.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Inclua uma pequena explicação sobre a origem do caramelo salgado e sua popularidade na gastronomia
                    mundial.
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
                  href="/receitas/cookie-chocolate-branco"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookie de Chocolate Branco
                </Link>
              </li>
              <li>
                <Link href="/receitas/cookie-pistache" className="text-pink-600 hover:text-pink-800 flex items-center">
                  <span className="mr-2">→</span> Cookie de Pistache
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/brownie-doce-leite"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Brownie de Doce de Leite
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/cookies-recheados"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookies Recheados
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
