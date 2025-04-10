import Image from "next/image"

export default function PaoDeMelPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Pão de Mel</h1>
        <p className="text-lg text-gray-600 mb-6">
          Pão de mel macio e perfumado com especiarias, recheado com doce de leite e coberto com chocolate.
        </p>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c8b6666abb1bb0f939155fbdae852ee7-e4328ZI5CTSwEZMGtsgudkGEPXF8uR.png"
            alt="Pão de Mel"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
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
            <span>Tempo: 50 min</span>
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
            <span>Dificuldade: Médio</span>
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
            <span>Categoria: Doces</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Ingredientes</h2>
          <ul>
            <li>2 xícaras de farinha de trigo</li>
            <li>1 xícara de mel</li>
            <li>1/2 xícara de chocolate em pó</li>
            <li>1/2 xícara de açúcar mascavo</li>
            <li>1/2 xícara de leite</li>
            <li>2 ovos</li>
            <li>1 colher de sopa de manteiga</li>
            <li>1 colher de chá de canela em pó</li>
            <li>1/2 colher de chá de cravo em pó</li>
            <li>1/2 colher de chá de noz-moscada</li>
            <li>1 colher de chá de fermento em pó</li>
            <li>1 pitada de sal</li>
            <li>400g de doce de leite para o recheio</li>
            <li>500g de chocolate meio amargo para a cobertura</li>
          </ul>

          <h2>Modo de Preparo</h2>
          <ol>
            <li>Pré-aqueça o forno a 180°C e unte forminhas para pão de mel ou uma forma retangular.</li>
            <li>
              Em uma panela, aqueça o mel com o açúcar mascavo, o leite e a manteiga até dissolver completamente. Deixe
              esfriar.
            </li>
            <li>Em uma tigela grande, peneire a farinha, o chocolate em pó, as especiarias, o fermento e o sal.</li>
            <li>Adicione os ovos à mistura de mel já morna e mexa bem.</li>
            <li>Incorpore os ingredientes líquidos aos secos e misture até obter uma massa homogênea.</li>
            <li>Distribua a massa nas forminhas, preenchendo até 2/3 da capacidade.</li>
            <li>Asse por cerca de 15-20 minutos, ou até que um palito inserido no centro saia limpo.</li>
            <li>Deixe esfriar completamente antes de desenformar.</li>
            <li>Corte os pães de mel ao meio e recheie com doce de leite.</li>
            <li>Derreta o chocolate em banho-maria ou no micro-ondas.</li>
            <li>Mergulhe os pães de mel no chocolate, cobrindo completamente.</li>
            <li>Coloque sobre uma grade com papel manteiga por baixo para escorrer o excesso.</li>
            <li>Deixe secar completamente antes de embalar.</li>
          </ol>

          <h2>Dicas para Venda</h2>
          <ul>
            <li>Embale individualmente em papel celofane transparente com um laço ou adesivo personalizado.</li>
            <li>Ofereça em diferentes tamanhos: mini, médio e grande.</li>
            <li>Crie variações com diferentes recheios como brigadeiro, creme de avelã ou geleia.</li>
            <li>Para datas especiais, decore com detalhes temáticos na cobertura.</li>
            <li>Destaque as especiarias naturais e o mel na descrição do produto.</li>
            <li>Ofereça kits com diferentes sabores para presente.</li>
          </ul>

          <h2>Conservação</h2>
          <p>
            O pão de mel pode ser conservado em temperatura ambiente por até 7 dias em recipiente hermético. Se
            refrigerado, dura até 15 dias. Também pode ser congelado por até 3 meses.
          </p>
        </div>
      </div>
    </div>
  )
}
