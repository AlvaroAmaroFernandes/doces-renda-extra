import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import NewsletterSignup from "@/components/newsletter-signup"
import AdSpace from "@/components/ad-space"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Transforme sua paixão por confeitaria em um negócio lucrativo
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Receitas testadas, dicas de precificação e estratégias de marketing para confeiteiros empreendedores.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700">
                <Link href="/receitas">Ver Receitas</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-pink-600 text-pink-600 hover:bg-pink-50">
                <Link href="/dicas-de-venda">Dicas de Negócio</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/confeitaria-banner.png"
              alt="Variedade de doces artesanais incluindo brownies, cookies e bolos"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Receitas em Destaque</h2>
            <Button variant="ghost" asChild>
              <Link href="/receitas">Ver todas</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/images/bolo-chocolate-morango-3.png"
                  alt="Bolo de Chocolate com Morango"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">Bolo de Chocolate com Morango</h3>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Bolos</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Bolo de chocolate fofinho recheado com morangos frescos.</p>
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>75 min</span>
                  <span>Dificuldade: Médio</span>
                  <span>Lucro: Médio</span>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href="/receitas/bolo-chocolate-com-morango">Ver Receita</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/images/brownies-recheados-2.png"
                  alt="Brownies Recheados"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">Brownies Recheados</h3>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Brownies</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Brownies super chocolatudos com recheio cremoso de diversos sabores.
                </p>
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>60 min</span>
                  <span>Dificuldade: Médio</span>
                  <span>Lucro: Alto</span>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href="/receitas/brownies-recheados">Ver Receita</Link>
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/images/cupcakes-decorados-2.png"
                  alt="Cupcakes Decorados"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">Cupcakes Decorados</h3>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Cupcakes</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Cupcakes macios com coberturas criativas e decorações personalizadas.
                </p>
                <div className="flex justify-between text-xs text-gray-500 mb-3">
                  <span>90 min</span>
                  <span>Dificuldade: Médio</span>
                  <span>Lucro: Alto</span>
                </div>
                <Button asChild size="sm" className="w-full">
                  <Link href="/receitas/cupcakes-decorados">Ver Receita</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Business Tips */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Dicas de Negócio</h2>
            <Button variant="ghost" asChild>
              <Link href="/dicas-de-venda">Ver todas</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/images/como-precificar-seus-doces.png"
                  alt="Como Precificar seus Doces"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">Como Precificar seus Doces</h3>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Finanças</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Aprenda a calcular o preço justo para suas criações e maximizar seus lucros.
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/dicas-de-venda/como-precificar-seus-doces">Ler Mais</Link>
                </Button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/images/estrategias-para-o-instagram.png"
                  alt="Estratégias para o Instagram"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">Estratégias para o Instagram</h3>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Marketing</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Dicas para criar um perfil atrativo e conquistar mais clientes nas redes sociais.
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/dicas-de-venda/estrategias-instagram">Ler Mais</Link>
                </Button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="relative h-48">
                <Image
                  src="/images/embalagens-que-valorizam-seu-produto.png"
                  alt="Embalagens que Valorizam seu Produto"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">Embalagens que Valorizam seu Produto</h3>
                  <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Apresentação</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Como escolher embalagens que protejam seus doces e encantem seus clientes.
                </p>
                <Button asChild size="sm" className="w-full">
                  <Link href="/dicas-de-venda/embalagens-que-valorizam">Ler Mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Histórias de Sucesso</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/images/confeiteira-de-sucesso.png"
                    alt="Confeiteira de sucesso"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">De hobby a negócio rentável</h3>
                  <p className="text-muted-foreground mb-4">
                    "Comecei fazendo bolos apenas nos fins de semana. Hoje tenho minha própria confeitaria com 5
                    funcionários."
                  </p>
                  <p className="font-medium mb-4">Ana Clara, São Paulo</p>
                  <Button variant="outline" asChild>
                    <Link href="/historias-de-sucesso">Ler história completa</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg overflow-hidden border">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/images/confeiteiro-de-sucesso.png"
                    alt="Confeiteiro de sucesso"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Conquistando o mercado gourmet</h3>
                  <p className="text-muted-foreground mb-4">
                    "Apostei em brownies gourmet quando ninguém acreditava. Hoje vendo mais de 500 unidades por semana."
                  </p>
                  <p className="font-medium mb-4">Rafael Mendes, Rio de Janeiro</p>
                  <Button variant="outline" asChild>
                    <Link href="/historias-de-sucesso">Ler história completa</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Space */}
      <section className="py-8 bg-muted/30">
        <div className="container">
          <AdSpace />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary/5">
        <div className="container max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Receba Nossas Novidades</h2>
            <p className="text-muted-foreground">
              Cadastre-se para receber receitas exclusivas e dicas de negócio diretamente no seu email.
            </p>
          </div>
          <NewsletterSignup />
        </div>
      </section>
    </main>
  )
}
