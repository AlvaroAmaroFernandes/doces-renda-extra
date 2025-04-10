import Link from "next/link"
import type { Metadata } from "next"
import { getRecipeById } from "@/utils/recipe-data"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Cookie de Ninho com Nutella | Confeitaria Lucrativa",
  description:
    "Aprenda a fazer cookie com massa de leite Ninho e generoso recheio de Nutella que escorre ao partir, uma combinação irresistível.",
}

export default function CookieNinhoNutellaPage() {
  const recipe = getRecipeById("cookie-ninho-nutella")

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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Cookie de Ninho com Nutella</h1>
        <p className="text-gray-600 mb-4">
          Cookie com massa de leite Ninho e generoso recheio de Nutella que escorre ao partir, uma combinação
          irresistível.
        </p>
        <div className="flex items-center text-sm text-gray-500 mb-6">
          <span className="mr-4">⏱️ Tempo de preparo: 40 min</span>
          <span className="mr-4">🔥 Dificuldade: Médio</span>
          <span>💰 Potencial de lucro: Alto</span>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden mb-8">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KORcaWyMQDQsoJaWqlgtCJyvWS3HYE.png"
          alt="Cookie de Ninho com Nutella"
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
            <li>300g de farinha de trigo</li>
            <li>50g de leite em pó (Ninho)</li>
            <li>1 colher de chá de bicarbonato de sódio</li>
            <li>1/2 colher de chá de sal</li>
            <li>100g de chocolate branco picado</li>
            <li>250g de Nutella</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Modo de Preparo</h2>
          <ol className="space-y-4 list-decimal pl-4">
            <li>
              <strong>Prepare o recheio de Nutella:</strong> Coloque a Nutella em um saco de confeitar ou saco plástico.
              Faça discos de aproximadamente 2cm em um papel manteiga e leve ao congelador por pelo menos 2 horas.
            </li>
            <li>Preaqueça o forno a 180°C e forre duas assadeiras grandes com papel manteiga.</li>
            <li>
              Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro, por
              cerca de 3 minutos.
            </li>
            <li>Adicione os ovos, um de cada vez, batendo bem após cada adição. Acrescente a baunilha e misture.</li>
            <li>Em outra tigela, misture a farinha, o leite em pó, o bicarbonato e o sal.</li>
            <li>
              Adicione os ingredientes secos à mistura de manteiga em 2-3 partes, misturando delicadamente após cada
              adição.
            </li>
            <li>Incorpore o chocolate branco picado, misturando delicadamente com uma espátula.</li>
            <li>
              Pegue aproximadamente 30g de massa, achate na palma da mão, coloque um disco de Nutella congelado no
              centro e cubra com mais 30g de massa, selando bem as bordas para formar uma bola.
            </li>
            <li>Coloque as bolas de massa nas assadeiras, deixando espaço de 5-6cm entre elas.</li>
            <li>
              Asse por 12-14 minutos, até que as bordas estejam levemente douradas mas o centro ainda pareça macio.
            </li>
            <li>
              Deixe esfriar por 10 minutos nas assadeiras e depois transfira para uma grade para esfriar mais um pouco.
              Sirva ainda morno para que o recheio de Nutella esteja fluido.
            </li>
          </ol>
        </div>
      </div>

      <div className="bg-pink-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold mb-4">Dicas para Vendas</h2>
        <ul className="space-y-3">
          <li>
            <strong>Destaque a combinação exclusiva:</strong> Ressalte a combinação de dois sabores muito amados: leite
            Ninho e Nutella.
          </li>
          <li>
            <strong>Marketing sensorial:</strong> Use termos como "recheio cremoso", "massa amanteigada" e "sabor
            nostálgico" em suas descrições.
          </li>
          <li>
            <strong>Conteúdo visual:</strong> Crie vídeos curtos mostrando o cookie sendo partido ao meio com a Nutella
            escorrendo.
          </li>
          <li>
            <strong>Edição limitada:</strong> Considere oferecer este cookie como edição especial ou sazonal para
            aumentar o desejo de compra.
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Cálculo de Preço Sugerido</h2>
        <div className="space-y-3">
          <p>
            <strong>Custo aproximado por unidade (cookie de 60g):</strong> R$ 4,00
          </p>
          <p>
            <strong>Preço de venda sugerido:</strong> R$ 12,00 a R$ 15,00
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
