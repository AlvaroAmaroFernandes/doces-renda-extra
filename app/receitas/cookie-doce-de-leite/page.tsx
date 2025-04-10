import Link from "next/link"
import type { Metadata } from "next"
import { getRecipeById } from "@/utils/recipe-data"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie de Doce de Leite | Confeitaria Lucrativa",
  description:
    "Aprenda a fazer cookie com generoso recheio de doce de leite que escorre ao partir, uma delícia irresistível.",
}

export default function CookieDoceDeLeite() {
  const recipe = getRecipeById("cookie-doce-de-leite")

  if (!recipe) {
    return <div>Receita não encontrada</div>
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <Link href="/receitas" className="flex items-center text-pink-600 mb-6 hover:text-pink-700">
        <ArrowLeft size={20} className="mr-2" />
        Voltar para receitas
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Cookie de Doce de Leite</h1>
        <p className="text-gray-600 mb-4">
          Cookie com generoso recheio de doce de leite que escorre ao partir, uma delícia irresistível.
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="mr-4">⏱️ Tempo de preparo: 35 min</span>
          <span className="mr-4">🔥 Dificuldade: Médio</span>
          <span>💰 Potencial de lucro: Alto</span>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0lPt9bUbHmKNaSlc7Qnsl3xxBN4wX2.png"
          alt="Cookie de Doce de Leite"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Ingredientes</h2>
          <ul className="space-y-2">
            <li>200g de manteiga sem sal, temperatura ambiente</li>
            <li>150g de açúcar mascavo</li>
            <li>100g de açúcar refinado</li>
            <li>2 ovos</li>
            <li>1 colher de chá de extrato de baunilha</li>
            <li>350g de farinha de trigo</li>
            <li>1 colher de chá de bicarbonato de sódio</li>
            <li>1/2 colher de chá de sal</li>
            <li>100g de chocolate ao leite picado</li>
            <li>300g de doce de leite consistente</li>
            <li>Flor de sal para finalizar (opcional)</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Modo de Preparo</h2>
          <ol className="space-y-4 list-decimal pl-4">
            <li>
              <strong>Prepare o recheio de doce de leite:</strong> Coloque o doce de leite em um saco de confeitar ou
              saco plástico. Faça discos de aproximadamente 2cm em um papel manteiga e leve ao congelador por pelo menos
              2 horas.
            </li>
            <li>Preaqueça o forno a 180°C e forre duas assadeiras grandes com papel manteiga.</li>
            <li>
              Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro, por
              cerca de 3 minutos.
            </li>
            <li>Adicione os ovos, um de cada vez, batendo bem após cada adição. Acrescente a baunilha e misture.</li>
            <li>Em outra tigela, misture a farinha, o bicarbonato e o sal.</li>
            <li>
              Adicione os ingredientes secos à mistura de manteiga em 2-3 partes, misturando delicadamente após cada
              adição.
            </li>
            <li>Incorpore o chocolate picado, misturando delicadamente com uma espátula.</li>
            <li>
              Pegue aproximadamente 30g de massa, achate na palma da mão, coloque um disco de doce de leite congelado no
              centro e cubra com mais 30g de massa, selando bem as bordas para formar uma bola.
            </li>
            <li>
              Coloque as bolas de massa nas assadeiras, deixando espaço de 5-6cm entre elas. Se desejar, polvilhe uma
              pitada de flor de sal sobre cada cookie.
            </li>
            <li>Asse por 12-14 minutos, até que as bordas estejam douradas mas o centro ainda pareça levemente cru.</li>
            <li>
              Deixe esfriar por 10 minutos nas assadeiras e depois transfira para uma grade para esfriar mais um pouco.
              Sirva ainda morno para que o recheio de doce de leite esteja fluido.
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-pink-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Dicas para Vendas</h2>
        <ul className="space-y-3">
          <li>
            <strong>Realce o diferencial:</strong> Enfatize o recheio de doce de leite que escorre ao partir o cookie,
            criando um efeito visual apetitoso.
          </li>
          <li>
            <strong>Vídeos em câmera lenta:</strong> Crie conteúdo mostrando o doce de leite escorrendo quando o cookie
            é partido ao meio.
          </li>
          <li>
            <strong>Destaque o produto nacional:</strong> Ressalte o uso de doce de leite de qualidade,
            preferencialmente artesanal.
          </li>
          <li>
            <strong>Sugestão de consumo:</strong> Indique que o produto pode ser levemente aquecido antes de consumir
            para intensificar a experiência do recheio fluido.
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Cálculo de Preço Sugerido</h2>
        <div className="space-y-3">
          <p>
            <strong>Custo aproximado por unidade (cookie de 60g):</strong> R$ 3,50
          </p>
          <p>
            <strong>Preço de venda sugerido:</strong> R$ 10,00 a R$ 12,00
          </p>
          <p>
            <strong>Margem de lucro:</strong> ~70-75%
          </p>
          <p className="text-sm text-gray-600 mt-4">
            * Os valores são aproximados e podem variar de acordo com o custo dos ingredientes em sua região e a escala
            de produção.
          </p>
        </div>
      </div>
    </div>
  )
}
