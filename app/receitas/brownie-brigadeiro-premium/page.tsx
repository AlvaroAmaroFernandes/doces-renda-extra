import type { Metadata } from "next"
import { getRecipeById } from "@/utils/recipe-data"

export const metadata: Metadata = {
  title: "Brownie com Brigadeiro Premium - Doces & Negócios",
  description:
    "Aprenda a fazer um delicioso brownie coberto com brigadeiro cremoso, uma combinação irresistível para vender.",
}

export default function BrownieBrigadeiroPage() {
  const recipe = getRecipeById("brownie-brigadeiro")

  if (!recipe) {
    return <div>Receita não encontrada</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-P9o483WUPd4gopowaLnkZXIALElYmg.png"
            alt="Brownie com Brigadeiro Premium"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tempo de Preparo</h3>
            <p>{recipe.prepTime}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Dificuldade</h3>
            <p>{recipe.difficulty}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Potencial de Lucro</h3>
            <p>{recipe.profitPotential}</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>Ingredientes</h2>
          <h3>Para o brownie:</h3>
          <ul>
            <li>200g de chocolate meio amargo</li>
            <li>150g de manteiga sem sal</li>
            <li>200g de açúcar</li>
            <li>3 ovos</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>120g de farinha de trigo</li>
            <li>30g de cacau em pó</li>
            <li>1/2 colher de chá de sal</li>
          </ul>

          <h3>Para o brigadeiro:</h3>
          <ul>
            <li>1 lata de leite condensado</li>
            <li>3 colheres de sopa de cacau em pó</li>
            <li>1 colher de sopa de manteiga</li>
            <li>Chocolate granulado para decorar</li>
          </ul>

          <h2>Modo de Preparo</h2>
          <h3>Brownie:</h3>
          <ol>
            <li>Preaqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
            <li>Derreta o chocolate meio amargo com a manteiga em banho-maria ou no micro-ondas.</li>
            <li>Em uma tigela grande, misture o chocolate derretido com o açúcar até ficar homogêneo.</li>
            <li>Adicione os ovos um a um, misturando bem após cada adição.</li>
            <li>Acrescente a essência de baunilha e misture.</li>
            <li>Peneire a farinha, o cacau e o sal sobre a mistura e incorpore delicadamente.</li>
            <li>Despeje a massa na forma preparada e espalhe uniformemente.</li>
            <li>Asse por 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas.</li>
            <li>Deixe esfriar completamente.</li>
          </ol>

          <h3>Brigadeiro:</h3>
          <ol>
            <li>Em uma panela, misture o leite condensado, o cacau em pó e a manteiga.</li>
            <li>
              Leve ao fogo médio, mexendo sempre, até começar a desgrudar do fundo da panela (cerca de 10 minutos).
            </li>
            <li>Desligue o fogo e deixe esfriar um pouco.</li>
            <li>Espalhe o brigadeiro ainda morno sobre o brownie já frio.</li>
            <li>Decore com chocolate granulado.</li>
            <li>Leve à geladeira por pelo menos 1 hora antes de cortar.</li>
          </ol>

          <h2>Dicas de Venda</h2>
          <p>
            O Brownie com Brigadeiro combina dois dos doces mais amados pelos brasileiros, sendo um produto com alto
            potencial de vendas. Aqui estão algumas dicas para maximizar seus lucros:
          </p>
          <ul>
            <li>
              Corte em quadrados de tamanho médio e embale individualmente com filme plástico e uma etiqueta
              personalizada.
            </li>
            <li>Ofereça uma versão premium com brigadeiro gourmet (com chocolate belga) por um preço diferenciado.</li>
            <li>Crie kits com diferentes sabores de brownie, incluindo o de brigadeiro como carro-chefe.</li>
            <li>Faça promoções como "leve 3, pague 2" para aumentar o volume de vendas.</li>
            <li>
              Destaque nas redes sociais o brigadeiro escorrendo ao cortar o brownie, criando desejo nos clientes.
            </li>
          </ul>

          <h2>Conservação</h2>
          <p>Para manter a qualidade e frescor dos seus brownies com brigadeiro, siga estas recomendações:</p>
          <ul>
            <li>Armazene em recipiente hermético na geladeira por até 5 dias.</li>
            <li>Retire da geladeira 15-20 minutos antes de servir para melhor textura e sabor.</li>
            <li>Congele por até 2 meses, embalando individualmente em filme plástico e depois em papel alumínio.</li>
          </ul>

          <h2>Variações</h2>
          <p>Você pode criar diferentes versões deste brownie para diversificar seu cardápio:</p>
          <ul>
            <li>Brownie com brigadeiro branco: substitua o cacau do brigadeiro por chocolate branco.</li>
            <li>Brownie com brigadeiro de café: adicione 1 colher de café solúvel ao brigadeiro.</li>
            <li>Brownie com brigadeiro de Nutella: adicione 2 colheres de Nutella ao brigadeiro tradicional.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
