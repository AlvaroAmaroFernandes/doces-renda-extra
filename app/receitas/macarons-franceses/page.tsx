import Image from "next/image"

export default function MacaronsFrancesesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Macarons Franceses</h1>
        <p className="text-lg text-gray-600 mb-6">
          Delicados macarons franceses com casquinha crocante e recheio cremoso em diversos sabores.
        </p>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/macarons-franceses-4.png"
            alt="Macarons Franceses"
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
            <span>Tempo: 90 min</span>
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
            <span>Dificuldade: Difícil</span>
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
            <span>Categoria: Confeitaria</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Ingredientes</h2>
          <h3>Para as Cascas:</h3>
          <ul>
            <li>100g de farinha de amêndoas (peneirada)</li>
            <li>100g de açúcar de confeiteiro (peneirado)</li>
            <li>75g de claras (aproximadamente 2 claras grandes) em temperatura ambiente</li>
            <li>50g de açúcar refinado</li>
            <li>Corante em gel da cor desejada (opcional)</li>
            <li>Pitada de sal</li>
          </ul>

          <h3>Para o Recheio Básico (Ganache):</h3>
          <ul>
            <li>200g de chocolate (branco, ao leite ou meio amargo)</li>
            <li>100ml de creme de leite fresco</li>
            <li>30g de manteiga sem sal</li>
            <li>Essências ou extratos para sabor (opcional)</li>
          </ul>

          <h2>Modo de Preparo</h2>
          <h3>Cascas:</h3>
          <ol>
            <li>
              Peneire a farinha de amêndoas e o açúcar de confeiteiro juntos 2-3 vezes para garantir que não haja
              grumos.
            </li>
            <li>Em uma tigela limpa e seca, bata as claras com o sal até começarem a formar espuma.</li>
            <li>
              Adicione o açúcar refinado aos poucos enquanto continua batendo até obter um merengue firme e brilhante.
            </li>
            <li>Se desejar colorir, adicione o corante em gel e bata apenas o suficiente para incorporar.</li>
            <li>Adicione a mistura de farinha de amêndoas e açúcar de confeiteiro ao merengue.</li>
            <li>
              Com uma espátula, incorpore delicadamente com movimentos de baixo para cima (técnica de macaronage) até
              que a massa escorra da espátula como uma fita.
            </li>
            <li>Transfira a massa para um saco de confeitar com bico liso.</li>
            <li>Forre assadeiras com papel manteiga ou tapete de silicone específico para macarons.</li>
            <li>Faça círculos de aproximadamente 3-4cm de diâmetro, deixando espaço entre eles.</li>
            <li>Bata as assadeiras contra a superfície da bancada algumas vezes para eliminar bolhas de ar.</li>
            <li>
              Deixe descansar em temperatura ambiente por 30-60 minutos, até que se forme uma película seca na
              superfície.
            </li>
            <li>Pré-aqueça o forno a 150°C e asse por 12-15 minutos.</li>
            <li>Deixe esfriar completamente antes de remover do papel.</li>
          </ol>

          <h3>Recheio:</h3>
          <ol>
            <li>Pique o chocolate e coloque em uma tigela.</li>
            <li>Aqueça o creme de leite até quase ferver e despeje sobre o chocolate.</li>
            <li>Deixe repousar por 1 minuto e depois misture até ficar homogêneo.</li>
            <li>Adicione a manteiga em temperatura ambiente e misture bem.</li>
            <li>Se desejar, adicione essências ou extratos para sabor.</li>
            <li>Deixe esfriar até ficar firme o suficiente para rechear (pode refrigerar por 30 minutos).</li>
          </ol>

          <h3>Montagem:</h3>
          <ol>
            <li>Combine as cascas em pares de tamanho similar.</li>
            <li>Coloque o recheio em um saco de confeitar com bico liso.</li>
            <li>Aplique o recheio no centro de uma casca e cubra com a outra, pressionando levemente.</li>
            <li>Refrigere os macarons montados por pelo menos 24 horas antes de servir (maturação).</li>
            <li>Retire da geladeira 30 minutos antes de consumir para melhor sabor e textura.</li>
          </ol>

          <h2>Dicas para Venda</h2>
          <ul>
            <li>Apresente em caixas elegantes com divisórias para proteger cada macaron.</li>
            <li>Ofereça em conjuntos de 6, 12 ou 24 unidades com sabores variados.</li>
            <li>Crie sabores sazonais e edições limitadas para manter o interesse dos clientes.</li>
            <li>Desenvolva uma paleta de cores que combine com sua marca.</li>
            <li>Ofereça macarons personalizados para eventos como casamentos e festas corporativas.</li>
            <li>Destaque o fato de serem feitos artesanalmente e sem conservantes.</li>
            <li>Crie macarons temáticos para datas especiais como Natal, Páscoa e Dia dos Namorados.</li>
          </ul>

          <h2>Conservação</h2>
          <p>
            Os macarons podem ser refrigerados por até 7 dias em recipiente hermético. Também podem ser congelados por
            até 3 meses. Para consumo, deixe descongelar na geladeira e depois em temperatura ambiente por 30 minutos.
          </p>
        </div>
      </div>
    </div>
  )
}
