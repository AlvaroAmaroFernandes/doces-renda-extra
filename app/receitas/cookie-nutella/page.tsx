import type { Metadata } from "next"
import RecipeImage from "@/components/recipe-image"
import RecipeHeader from "@/components/recipe-header"

export const metadata: Metadata = {
  title: "Cookie de Nutella | Confeitaria Blog",
  description: "Aprenda a fazer um delicioso cookie com recheio de Nutella, perfeito para vender e lucrar.",
}

export default function CookieNutellaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <RecipeHeader
        title="Cookie de Nutella"
        description="Cookie macio com recheio generoso de Nutella, perfeito para os amantes de chocolate com avelã."
        prepTime="45 min"
        difficulty="Médio"
        profitPotential="Alto"
        category="Biscoitos"
      />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg overflow-hidden h-80">
          <RecipeImage
            src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800"
            alt="Cookie de Nutella"
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
            <li>150g de chocolate meio amargo picado</li>
            <li>200g de Nutella</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Modo de Preparo</h2>
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            Coloque a Nutella em um saco de confeitar ou saco plástico e leve ao congelador por pelo menos 1 hora.
          </li>
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
          <li>Adicione o chocolate picado e misture delicadamente.</li>
          <li>
            Retire a Nutella do congelador. Com uma colher, pegue uma porção da massa de cookie, achate-a na palma da
            mão, coloque uma colher de chá da Nutella congelada no centro e feche a massa ao redor do recheio, formando
            uma bola.
          </li>
          <li>
            Coloque as bolas de massa nas assadeiras preparadas, deixando espaço entre elas para que se espalhem durante
            o cozimento.
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
          <li>Destaque o recheio cremoso de Nutella como diferencial do seu produto.</li>
          <li>Embale individualmente em embalagens transparentes que mostrem o cookie.</li>
          <li>Crie uma versão mini para caixas de presente e eventos.</li>
          <li>Ofereça degustação em eventos e feiras para atrair clientes.</li>
          <li>Combine com outros sabores de cookies para criar kits variados.</li>
          <li>Aproveite a popularidade da marca Nutella em suas estratégias de marketing.</li>
        </ul>
      </div>
    </div>
  )
}
