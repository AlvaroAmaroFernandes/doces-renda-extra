import Link from "next/link"
import type { Metadata } from "next"
import NewsletterSignup from "@/components/newsletter-signup"
import AdSpace from "@/components/ad-space"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Cookie Red Velvet com Cream Cheese: Uma Receita Sofisticada para Vender Muito!",
  description:
    "O sabor clássico do Red Velvet em formato de cookie, com um recheio cremoso de cream cheese, perfeito para encantar clientes e aumentar suas vendas.",
  keywords:
    "cookie red velvet, receita de cookie, red velvet, cream cheese, cookie gourmet, confeitaria, venda de cookies, cookie sofisticado",
}

export default function CookieRedVelvet() {
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
          <li className="text-gray-600">Cookie Red Velvet</li>
        </ol>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Cookie Red Velvet com Cream Cheese: Uma Receita Sofisticada para Vender Muito!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          O sabor clássico do Red Velvet em formato de cookie, com um recheio cremoso de cream cheese, perfeito para
          encantar clientes e aumentar suas vendas.
        </p>
        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-6">
          <ImageWithFallback
            src="/images/cookie-red-velvet-2.png"
            alt="Cookie Red Velvet com Cream Cheese"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            fallbackSrc="/placeholder.svg?height=600&width=800"
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
                <li>2 colheres de sopa de cacau em pó</li>
                <li>1 colher de chá de fermento</li>
                <li>1 pitada de sal</li>
                <li>1 xícara de açúcar mascavo</li>
                <li>½ xícara de açúcar refinado</li>
                <li>150g de manteiga derretida</li>
                <li>1 ovo</li>
                <li>1 colher de chá de essência de baunilha</li>
                <li>Corante vermelho em gel</li>
                <li>200g de chocolate branco em pedaços</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Modo de Preparo:</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Em uma tigela grande, misture a farinha, o cacau em pó, o fermento e o sal.</li>
                <li>Em outra tigela, bata a manteiga com os dois tipos de açúcar até obter um creme fofo.</li>
                <li>Adicione o ovo, a essência de baunilha e o corante vermelho em gel. Misture bem.</li>
                <li>Incorpore os ingredientes secos aos poucos, misturando delicadamente.</li>
                <li>Por último, adicione os pedaços de chocolate branco à massa.</li>
                <li>
                  Forme bolas com a massa e disponha em uma assadeira forrada com papel manteiga, deixando espaço entre
                  elas.
                </li>
                <li>
                  Asse em forno preaquecido a 180°C por 12-15 minutos, até que as bordas estejam firmes mas o centro
                  ainda macio.
                </li>
                <li>Deixe esfriar na assadeira por 5 minutos antes de transferir para uma grade.</li>
              </ol>
            </div>

            <div className="mt-8 mb-4">
              <div className="relative h-64 w-full rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="/images/cookie-red-velvet-2.png"
                  alt="Cookies Red Velvet prontos para vender"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  fallbackSrc="/placeholder.svg?height=400&width=600"
                />
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Cookies Red Velvet com pedaços de chocolate branco, prontos para vender
              </p>
            </div>
          </section>

          {/* Professional Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas Profissionais</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>Use corante em gel para obter uma cor vermelha mais intensa sem alterar a consistência da massa.</p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Adicione um pouco de vinagre branco à massa (1 colher de chá) para realçar a cor vermelha e reagir com
                  o cacau.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Para cookies mais macios, retire do forno quando as bordas estiverem firmes mas o centro ainda parecer
                  ligeiramente cru.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Use chocolate branco de boa qualidade, picado em pedaços irregulares, para um visual mais artesanal e
                  sabor superior.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-2">•</span>
                <p>
                  Para um visual mais atraente, reserve alguns pedaços de chocolate branco para colocar na superfície
                  dos cookies antes de assar.
                </p>
              </li>
            </ul>
          </section>

          {/* Selling and Packaging Tips */}
          <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Dicas de Venda e Embalagem</h2>
            <div className="space-y-4">
              <p>
                O cookie Red Velvet é um produto sofisticado que atrai clientes que buscam experiências gastronômicas
                diferenciadas. Aqui estão algumas dicas para maximizar suas vendas:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>Destaque a cor vermelha vibrante e os pedaços de chocolate branco em suas fotos de produto.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Crie embalagens elegantes com detalhes em vermelho e branco, usando papel celofane transparente para
                    mostrar o produto.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>Promova como um produto especial para datas comemorativas como Dia dos Namorados e Natal.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>Ofereça como parte de um kit com outros produtos gourmet, como brownies e trufas.</p>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">•</span>
                  <p>
                    Crie uma história para o produto, destacando o contraste entre a cor vermelha vibrante e os pedaços
                    de chocolate branco.
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
                <Link href="/receitas/bolo-red-velvet" className="text-pink-600 hover:text-pink-800 flex items-center">
                  <span className="mr-2">→</span> Bolo Red Velvet
                </Link>
              </li>
              <li>
                <Link href="/receitas/cookie-nutella" className="text-pink-600 hover:text-pink-800 flex items-center">
                  <span className="mr-2">→</span> Cookie de Nutella
                </Link>
              </li>
              <li>
                <Link
                  href="/receitas/cookie-chocolate-branco"
                  className="text-pink-600 hover:text-pink-800 flex items-center"
                >
                  <span className="mr-2">→</span> Cookie de Chocolate Branco
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
