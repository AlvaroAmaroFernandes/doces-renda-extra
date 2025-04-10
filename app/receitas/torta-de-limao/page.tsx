import Image from "next/image"

export default function TortaDeLimaoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Torta de Limão</h1>
        <p className="text-lg text-gray-600 mb-6">
          Torta de limão com base crocante, recheio cremoso e cobertura de merengue italiano.
        </p>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6c47b8fb5195c9c0ad642160a9b88e50-3zekMIUz9riPdmyAdJ1XIMrdZMYlij.png"
            alt="Torta de Limão"
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
            <span>Tempo: 60 min</span>
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
            <span>Categoria: Tortas</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Ingredientes</h2>
          <h3>Para a Base:</h3>
          <ul>
            <li>200g de biscoitos tipo maisena</li>
            <li>100g de manteiga sem sal, derretida</li>
            <li>2 colheres de sopa de açúcar</li>
          </ul>

          <h3>Para o Recheio:</h3>
          <ul>
            <li>1 lata de leite condensado (395g)</li>
            <li>4 gemas</li>
            <li>Suco de 4 limões</li>
            <li>Raspas de 2 limões</li>
          </ul>

          <h3>Para o Merengue:</h3>
          <ul>
            <li>4 claras</li>
            <li>200g de açúcar</li>
            <li>100ml de água</li>
          </ul>

          <h2>Modo de Preparo</h2>
          <h3>Base:</h3>
          <ol>
            <li>Triture os biscoitos no processador até obter uma farofa fina.</li>
            <li>Misture com a manteiga derretida e o açúcar até formar uma massa homogênea.</li>
            <li>Forre o fundo e as laterais de uma forma de fundo removível (23cm) com a massa, pressionando bem.</li>
            <li>Leve ao forno pré-aquecido a 180°C por 10 minutos. Retire e deixe esfriar.</li>
          </ol>

          <h3>Recheio:</h3>
          <ol>
            <li>Em uma panela, misture o leite condensado, as gemas e o suco de limão.</li>
            <li>Leve ao fogo baixo, mexendo sempre, até engrossar (cerca de 10 minutos).</li>
            <li>Retire do fogo, adicione as raspas de limão e misture bem.</li>
            <li>Despeje o recheio sobre a base já fria e leve à geladeira por 2 horas.</li>
          </ol>

          <h3>Merengue:</h3>
          <ol>
            <li>
              Em uma panela pequena, misture o açúcar e a água e leve ao fogo até atingir 118-120°C (ponto de bala
              mole).
            </li>
            <li>Enquanto isso, bata as claras em neve firme na batedeira.</li>
            <li>
              Com a batedeira ligada, despeje a calda quente em fio sobre as claras e continue batendo até esfriar
              (cerca de 10 minutos).
            </li>
            <li>Cubra o recheio com o merengue, fazendo picos decorativos.</li>
            <li>
              Caramelize a superfície com um maçarico culinário ou leve ao forno pré-aquecido a 200°C por 3-5 minutos
              (apenas para dourar).
            </li>
          </ol>

          <h2>Dicas para Venda</h2>
          <ul>
            <li>Venda em fatias individuais embaladas em caixinhas transparentes para destacar as camadas.</li>
            <li>Ofereça em tamanhos variados: individual, média (6 fatias) e grande (12 fatias).</li>
            <li>Crie uma versão em formato de tortinhas individuais para eventos.</li>
            <li>Decore com raspas de limão e folhinhas de hortelã para um visual mais sofisticado.</li>
            <li>Destaque o sabor refrescante e o equilíbrio entre doce e ácido.</li>
            <li>Ofereça variações com outros cítricos como limão siciliano ou maracujá.</li>
          </ul>

          <h2>Conservação</h2>
          <p>
            A torta deve ser mantida refrigerada e consumida em até 3 dias. O merengue é melhor quando fresco, por isso
            recomenda-se finalizar a torta apenas no dia da venda ou entrega.
          </p>
        </div>
      </div>
    </div>
  )
}
