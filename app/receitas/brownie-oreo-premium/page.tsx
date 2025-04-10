import type { Metadata } from "next"
import { getRecipeById } from "@/utils/recipe-data"

export const metadata: Metadata = {
  title: "Brownie de Oreo Premium - Doces & Negócios",
  description: "Aprenda a fazer um delicioso brownie com pedaços de Oreo, uma combinação perfeita para vender.",
}

export default function BrownieOreoPage() {
  const recipe = getRecipeById("brownie-oreo")

  if (!recipe) {
    return <div>Receita não encontrada</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{recipe.title}</h1>

        <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e1a2fafb09f1f9dafd75235c88e3ef15-l2m2UXWtX8Q354EMCv0axHQUFmupde.png"
            alt="Brownie de Oreo Premium"
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
          <ul>
            <li>200g de chocolate meio amargo</li>
            <li>150g de manteiga sem sal</li>
            <li>200g de açúcar</li>
            <li>3 ovos</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>120g de farinha de trigo</li>
            <li>30g de cacau em pó</li>
            <li>1/2 colher de chá de sal</li>
            <li>1 pacote de biscoitos Oreo (aproximadamente 14 unidades)</li>
          </ul>

          <h2>Modo de Preparo</h2>
          <ol>
            <li>Preaqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
            <li>Derreta o chocolate meio amargo com a manteiga em banho-maria ou no micro-ondas.</li>
            <li>Em uma tigela grande, misture o chocolate derretido com o açúcar até ficar homogêneo.</li>
            <li>Adicione os ovos um a um, misturando bem após cada adição.</li>
            <li>Acrescente a essência de baunilha e misture.</li>
            <li>Peneire a farinha, o cacau e o sal sobre a mistura e incorpore delicadamente.</li>
            <li>Quebre metade dos biscoitos Oreo em pedaços grandes e adicione à massa.</li>
            <li>Despeje a massa na forma preparada e espalhe uniformemente.</li>
            <li>Quebre o restante dos biscoitos e espalhe por cima da massa.</li>
            <li>Asse por 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas.</li>
            <li>Deixe esfriar completamente antes de cortar em quadrados.</li>
          </ol>

          <h2>Dicas de Venda</h2>
          <p>
            O Brownie de Oreo é um produto com alto apelo visual e sabor irresistível, perfeito para atrair clientes.
            Aqui estão algumas dicas para maximizar suas vendas:
          </p>
          <ul>
            <li>
              Corte em porções generosas e embale individualmente com filme plástico e uma etiqueta personalizada.
            </li>
            <li>Ofereça uma versão premium com cobertura extra de ganache de chocolate e pedaços de Oreo por cima.</li>
            <li>Crie um combo com outros sabores de brownie para aumentar o ticket médio.</li>
            <li>
              Destaque nas redes sociais o interior do brownie mostrando os pedaços de Oreo, criando desejo nos
              clientes.
            </li>
            <li>Participe de feiras e eventos gastronômicos para aumentar a visibilidade do seu produto.</li>
          </ul>

          <h2>Conservação</h2>
          <p>Para manter a qualidade e frescor dos seus brownies de Oreo, siga estas recomendações:</p>
          <ul>
            <li>Armazene em recipiente hermético à temperatura ambiente por até 3 dias.</li>
            <li>Refrigere por até 7 dias, mas sirva em temperatura ambiente para melhor textura.</li>
            <li>Congele por até 3 meses, embalando individualmente em filme plástico e depois em papel alumínio.</li>
          </ul>

          <h2>Variações</h2>
          <p>Você pode criar diferentes versões deste brownie para diversificar seu cardápio:</p>
          <ul>
            <li>Brownie de Oreo com cream cheese: adicione uma camada de cream cheese no meio da massa.</li>
            <li>Brownie de Oreo com caramelo: adicione uma camada de caramelo entre a massa.</li>
            <li>Brownie de Oreo com menta: use Oreos de menta para um sabor refrescante.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
