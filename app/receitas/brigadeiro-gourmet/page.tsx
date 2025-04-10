import Image from "next/image"

export default function BrigadeiroGourmetPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Brigadeiro Gourmet</h1>
        <p className="text-lg text-gray-600 mb-6">
          Brigadeiros artesanais com cacau premium e decoração sofisticada, perfeitos para eventos especiais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/brigadeiro-gourmet-1.png"
              alt="Brigadeiro Gourmet"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/brigadeiro-gourmet-2.png"
              alt="Brigadeiro Gourmet close-up"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Tempo: 30 min</span>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Dificuldade: Fácil</span>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Potencial de Lucro: Alto</span>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <span>Categoria: Chocolates</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Ingredientes</h2>
          <h3>Brigadeiro Tradicional Gourmet:</h3>
          <ul>
            <li>1 lata de leite condensado (395g)</li>
            <li>3 colheres de sopa de cacau em pó 70% (de boa qualidade)</li>
            <li>1 colher de sopa de manteiga sem sal</li>
            <li>1 pitada de sal</li>
            <li>Chocolate granulado belga para decorar</li>
            <li>Forminhas de papel especiais</li>
          </ul>

          <h3>Variações (escolha uma):</h3>
          <ul>
            <li>
              <strong>Brigadeiro de Pistache:</strong> Substitua o cacau por 3 colheres de pasta de pistache e decore
              com pistache picado
            </li>
            <li>
              <strong>Brigadeiro de Caramelo Salgado:</strong> Substitua o cacau por 3 colheres de doce de leite e
              adicione flor de sal na decoração
            </li>
            <li>
              <strong>Brigadeiro de Café:</strong> Adicione 1 colher de café solúvel forte ao brigadeiro tradicional
            </li>
            <li>
              <strong>Brigadeiro de Limão:</strong> Substitua o cacau por raspas e suco de 1 limão, decore com raspas de
              limão cristalizadas
            </li>
          </ul>

          <h2>Modo de Preparo</h2>
          <ol>
            <li>Em uma panela antiaderente, coloque o leite condensado, o cacau em pó, a manteiga e o sal.</li>
            <li>Leve ao fogo médio-baixo, mexendo constantemente com uma espátula de silicone.</li>
            <li>
              Cozinhe até que a mistura comece a desgrudar do fundo da panela quando você passa a espátula (cerca de
              10-12 minutos).
            </li>
            <li>Transfira para um prato untado com manteiga e deixe esfriar completamente.</li>
            <li>Com as mãos levemente untadas com manteiga, faça bolinhas de aproximadamente 20g cada.</li>
            <li>Passe as bolinhas na cobertura escolhida, pressionando levemente para aderir bem.</li>
            <li>Coloque cada brigadeiro em uma forminha de papel.</li>
            <li>
              Para um acabamento mais profissional, utilize um bico de confeitar para adicionar detalhes decorativos no
              topo.
            </li>
          </ol>

          <h2>Dicas para Venda</h2>
          <ul>
            <li>
              Apresente os brigadeiros em caixas elegantes com divisórias, preferencialmente transparentes para mostrar
              o produto.
            </li>
            <li>Ofereça caixas com mix de sabores em diferentes tamanhos (4, 9, 16 unidades).</li>
            <li>
              Crie uma linha premium com ingredientes especiais como chocolate belga, pistache importado ou flor de sal.
            </li>
            <li>Desenvolva embalagens personalizadas para eventos como casamentos, aniversários e corporativos.</li>
            <li>Ofereça degustação para clientes potenciais em feiras e eventos.</li>
            <li>Destaque o uso de ingredientes de alta qualidade e a ausência de conservantes.</li>
            <li>Crie uma identidade visual sofisticada com etiquetas, cartões e embalagens coordenadas.</li>
            <li>Considere opções para dietas específicas, como brigadeiros sem lactose ou com açúcar reduzido.</li>
          </ul>

          <h2>Conservação</h2>
          <p>
            Os brigadeiros gourmet podem ser conservados em temperatura ambiente por até 3 dias em recipiente hermético.
            Se refrigerados, duram até 7 dias. Não é recomendado congelar, pois pode alterar a textura.
          </p>
        </div>
      </div>
    </div>
  )
}
