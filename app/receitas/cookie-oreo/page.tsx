import type { Metadata } from "next"
import RecipeImage from "@/components/recipe-image"
import RecipeHeader from "@/components/recipe-header"

export const metadata: Metadata = {
  title: "Cookie de Oreo | Confeitaria Blog",
  description: "Aprenda a fazer um delicioso cookie com pedaços de Oreo, perfeito para vender e lucrar.",
}

export default function CookieOreoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <RecipeHeader
        title="Cookie de Oreo"
        description="Cookie macio com pedaços de Oreo, combinando a textura do cookie com o sabor inconfundível do biscoito."
        prepTime="45 min"
        difficulty="Médio"
        profitPotential="Alto"
        category="Biscoitos"
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden h-80">
          <RecipeImage
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800"
            alt="Cookie de Oreo"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Ingredientes</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>200g de manteiga sem sal, em temperatura ambiente</li>
            <li>150g de açúcar mascavo</li>
            <li>100g de açúcar refinado</li>
            <li>2 ovos</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>300g de farinha de trigo</li>
            <li>1 colher de chá de bicarbonato de sódio</li>
            <li>1/2 colher de chá de sal</li>
            <li>200g de chocolate meio amargo picado</li>
            <li>150g de biscoitos Oreo quebrados em pedaços médios</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Modo de Preparo</h2>
        <ol className="list-decimal pl-5 space-y-4">
          <li>Preaqueça o forno a 180°C e forre duas assadeiras grandes com papel manteiga.</li>
          <li>
            Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro, por cerca
            de 3-4 minutos.
          </li>
          <li>
            Adicione os ovos, um de cada vez, batendo bem após cada adição. Acrescente a essência de baunilha e misture.
          </li>
          <li>
            Em outra tigela, misture a farinha, o bicarbonato e o sal. Adicione aos poucos à mistura de manteiga,
            mexendo em velocidade baixa até incorporar.
          </li>
          <li>
            Adicione o chocolate picado e misture delicadamente. Por último, acrescente os pedaços de Oreo, misturando
            apenas o suficiente para distribuí-los na massa.
          </li>
          <li>
            Com uma colher de sorvete ou colher de sopa, faça porções da massa e coloque nas assadeiras preparadas,
            deixando espaço entre elas para que se espalhem durante o cozimento.
          </li>
          <li>Asse por 10-12 minutos, ou até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
          <li>
            Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade para esfriar completamente.
          </li>
        </ol>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Dicas de Venda</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Embale individualmente em sacos transparentes com um laço bonito para venda unitária.</li>
          <li>Ofereça pacotes com 6 ou 12 unidades para festas e eventos.</li>
          <li>Destaque o sabor único da combinação de cookie com Oreo nas suas redes sociais.</li>
          <li>Crie uma versão mini para degustação e atraia novos clientes.</li>
          <li>Combine com outros sabores de cookies para criar kits variados.</li>
        </ul>
      </div>
    </div>
  )
}
