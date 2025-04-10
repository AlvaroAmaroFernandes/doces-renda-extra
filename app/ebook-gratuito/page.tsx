import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export default function EbookGratuitoPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            E-book GRÁTIS: 10 Receitas Exclusivas para Alavancar seu Negócio!
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Baixe agora mesmo nosso e-book gratuito com 10 receitas premium que farão toda a diferença no seu negócio de
            confeitaria!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">O que você vai encontrar neste e-book:</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-2">✓</span>
                <span>10 receitas exclusivas testadas e aprovadas por confeiteiros profissionais</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-2">✓</span>
                <span>Dicas de precificação para cada receita</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-2">✓</span>
                <span>Sugestões de embalagens e apresentação</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-2">✓</span>
                <span>Estratégias de marketing para vender mais</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 font-bold mr-2">✓</span>
                <span>Fotos de alta qualidade para inspirar suas criações</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 shadow-xl rounded-lg overflow-hidden transform rotate-3">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-200 to-pink-600 opacity-20"></div>
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Capa do e-book de receitas exclusivas"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white px-4 py-2 rounded-full font-bold rotate-12">
                GRÁTIS!
              </div>
            </div>
          </div>
        </div>

        <Card className="max-w-xl mx-auto border-pink-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-pink-600">Baixe Agora Mesmo!</CardTitle>
            <CardDescription className="text-center">
              Preencha o formulário abaixo para receber o e-book gratuitamente no seu email.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Seu nome completo" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="seu@email.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefone (opcional)</Label>
                  <Input id="phone" placeholder="(00) 00000-0000" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-pink-600 hover:bg-pink-700">Receber Meu E-book Grátis</Button>
          </CardFooter>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Ao se inscrever, você concorda em receber emails com dicas, promoções e conteúdos exclusivos do Doces &
            Negócios.
            <br />
            <Link href="/politica-de-privacidade" className="text-pink-600 hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
