import Link from "next/link"
import Image from "next/image"
import { getRecipeById } from "@/utils/recipe-data"

export default function BrownieDoceDeLeite() {
  const recipe = getRecipeById("brownie-doce-de-leite")

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-6">
        <ul className="flex space-x-2">
          <li>
            <Link href="/" className="text-pink-500 hover:text-pink-700">
              Início
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <Link href="/receitas" className="text-pink-500 hover:text-pink-700">
              Receitas
            </Link>
          </li>
          <li className="flex items-center space-x-2">
            <span>/</span>
            <span>Brownie de Doce de Leite</span>
          </li>
        </ul>
      </div>

      {/* Título da Receita */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Brownie de Doce de Leite: Uma Explosão de Sabor Que Vai Conquistar Seus Clientes!
      </h1>

      {/* Descrição */}
      <p className="text-lg mb-8">
        Essa versão do brownie é ultra cremosa, combinando o sabor intenso do chocolate com a suavidade do doce de
        leite.
      </p>

      {/* Imagem Principal - Tamanho reduzido */}
      <div className="mb-12 mx-auto relative rounded-lg overflow-hidden h-[300px] md:h-[400px] max-w-3xl">
        <Image
          src="/images/brownie-doce-de-leite-1.png"
          alt="Brownie de Doce de Leite"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 800px"
          style={{ objectFit: "cover" }}
          className="rounded-lg"
        />
      </div>

      {/* Conteúdo Principal em 2 Colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna da Esquerda - Receita */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Receita Passo a Passo</h2>

          {/* Ingredientes */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Ingredientes:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>200g de chocolate meio amargo</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de essência de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
              <li>300g de doce de leite cremoso</li>
            </ul>
          </div>

          {/* Modo de Preparo */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Modo de Preparo:</h3>
            <ol className="list-decimal pl-5 space-y-4">
              <li>
                Preaqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga, deixando as bordas
                para cima para facilitar a remoção depois.
              </li>
              <li>
                Em banho-maria, derreta o chocolate meio amargo com a manteiga, mexendo ocasionalmente até obter uma
                mistura homogênea. Retire do fogo e deixe esfriar um pouco.
              </li>
              <li>
                Em uma tigela grande, bata os ovos com o açúcar até obter uma mistura clara e fofa. Adicione a essência
                de baunilha e misture.
              </li>
              <li>
                Incorpore a mistura de chocolate derretido aos ovos batidos, mexendo delicadamente com uma espátula.
              </li>
              <li>
                Peneire a farinha, o cacau em pó e o sal sobre a mistura e incorpore delicadamente até que não haja mais
                pontos secos. Cuidado para não bater demais.
              </li>
              <li>
                Despeje metade da massa na forma preparada. Espalhe o doce de leite por cima, deixando uma borda de 1cm
                nas extremidades. Cubra com o restante da massa de brownie.
              </li>
              <li>
                Asse por 25-30 minutos, ou até que um palito inserido no centro saia com algumas migalhas úmidas (não
                completamente limpo, pois o brownie deve ficar úmido).
              </li>
              <li>
                Deixe esfriar completamente na forma antes de cortar em quadrados. Para um corte mais limpo, refrigere
                por algumas horas antes de cortar.
              </li>
            </ol>
          </div>

          {/* Dicas de Venda */}
          <div className="mb-8 bg-pink-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-pink-600">Dicas de Venda:</h3>
            <ul className="space-y-3">
              <li>
                <strong>Apresentação:</strong> Corte os brownies em quadrados perfeitos e embale individualmente em
                papel celofane transparente com um laço elegante.
              </li>
              <li>
                <strong>Destaque o diferencial:</strong> Enfatize o recheio cremoso de doce de leite como um diferencial
                do seu produto.
              </li>
              <li>
                <strong>Fotos de qualidade:</strong> Tire fotos que mostrem o corte do brownie com o doce de leite
                escorrendo, isso desperta o desejo de compra.
              </li>
              <li>
                <strong>Kits especiais:</strong> Ofereça kits com diferentes sabores de brownies, incluindo este de doce
                de leite como destaque.
              </li>
              <li>
                <strong>Preço sugerido:</strong> Por ser um produto premium com recheio especial, você pode cobrar entre
                R$8 e R$12 por unidade, dependendo do tamanho e da sua região.
              </li>
            </ul>
          </div>

          {/* Conservação */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Conservação:</h3>
            <ul className="space-y-3">
              <li>
                <strong>Temperatura ambiente:</strong> Os brownies podem ser mantidos em recipiente hermético por até 3
                dias.
              </li>
              <li>
                <strong>Refrigeração:</strong> Conserve na geladeira por até 7 dias, em recipiente bem fechado para
                evitar ressecamento.
              </li>
              <li>
                <strong>Congelamento:</strong> Você pode congelar os brownies já cortados por até 3 meses. Embale-os
                individualmente em filme plástico e depois em papel alumínio ou saco próprio para congelamento.
              </li>
              <li>
                <strong>Descongelamento:</strong> Descongele na geladeira por algumas horas ou em temperatura ambiente
                por cerca de 1 hora antes de servir.
              </li>
            </ul>
          </div>
        </div>

        {/* Coluna da Direita - Receitas Relacionadas */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
            <h3 className="text-xl font-semibold mb-6">Receitas Relacionadas</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/receitas/brownie-tradicional" className="flex items-center space-x-3 group">
                  <span className="text-pink-500 group-hover:text-pink-700">→</span>
                  <span className="group-hover:text-pink-700">Brownie Tradicional</span>
                </Link>
              </li>
              <li>
                <Link href="/receitas/brownie-ninho-nutella" className="flex items-center space-x-3 group">
                  <span className="text-pink-500 group-hover:text-pink-700">→</span>
                  <span className="group-hover:text-pink-700">Brownie de Ninho com Nutella</span>
                </Link>
              </li>
              <li>
                <Link href="/receitas/cookie-doce-de-leite" className="flex items-center space-x-3 group">
                  <span className="text-pink-500 group-hover:text-pink-700">→</span>
                  <span className="group-hover:text-pink-700">Cookie de Doce de Leite</span>
                </Link>
              </li>
              <li>
                <Link href="/receitas/alfajor-argentino" className="flex items-center space-x-3 group">
                  <span className="text-pink-500 group-hover:text-pink-700">→</span>
                  <span className="group-hover:text-pink-700">Alfajor Argentino</span>
                </Link>
              </li>
              <li>
                <Link href="/receitas/brigadeiro-gourmet" className="flex items-center space-x-3 group">
                  <span className="text-pink-500 group-hover:text-pink-700">→</span>
                  <span className="group-hover:text-pink-700">Brigadeiro Gourmet</span>
                </Link>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-pink-100 rounded-lg">
              <h4 className="font-semibold mb-2">Dica Profissional:</h4>
              <p className="text-sm">
                Para um brownie de doce de leite perfeito, use um doce de leite de qualidade e consistência média. Se
                estiver muito líquido, cozinhe-o um pouco mais para engrossar. Isso evita que ele se misture demais com
                a massa durante o assamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
