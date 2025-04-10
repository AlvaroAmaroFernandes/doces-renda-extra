import Image from "next/image"

export default function BoloChocolateMorangoPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Bolo de Chocolate com Morango</h1>
        <p className="text-lg text-gray-600 mb-6">
          Bolo de chocolate fofinho com camadas de chantilly e morangos frescos, finalizado com ganache.
        </p>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/bolo-chocolate-morango-1.png"
            alt="Bolo de Chocolate com Morango"
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
            <span>Categoria: Bolos</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2>Ingredientes</h2>
          <h3>Para a Massa:</h3>
          <ul>
            <li>250g de farinha de trigo</li>
            <li>300g de açúcar</li>
            <li>100g de cacau em pó</li>
            <li>1 colher de chá de fermento em pó</li>
            <li>1 colher de chá de bicarbonato de sódio</li>
            <li>1/2 colher de chá de sal</li>
            <li>2 ovos</li>
            <li>240ml de leite</li>
            <li>120ml de óleo vegetal</li>
            <li>2 colheres de chá de essência de baunilha</li>
            <li>240ml de água quente</li>
          </ul>

          <h3>Para o Recheio:</h3>
          <ul>
            <li>500ml de creme de leite fresco (para bater)</li>
            <li>50g de açúcar de confeiteiro</li>
            <li>1 colher de chá de essência de baunilha</li>
            <li>400g de morangos frescos</li>
          </ul>

          <h3>Para a Ganache:</h3>
          <ul>
            <li>200g de chocolate meio amargo</li>
            <li>200ml de creme de leite</li>
          </ul>

          <h3>Para Decoração:</h3>
          <ul>
            <li>Morangos frescos inteiros</li>
            <li>Raspas de chocolate</li>
          </ul>

          <h2>Modo de Preparo</h2>
          <h3>Massa:</h3>
          <ol>
            <li>Pré-aqueça o forno a 180°C e unte duas formas redondas de 20cm de diâmetro.</li>
            <li>Em uma tigela grande, peneire a farinha, o açúcar, o cacau, o fermento, o bicarbonato e o sal.</li>
            <li>
              Adicione os ovos, o leite, o óleo e a essência de baunilha. Bata em velocidade média por cerca de 2
              minutos.
            </li>
            <li>Adicione a água quente e misture delicadamente até incorporar (a massa ficará líquida).</li>
            <li>
              Divida a massa entre as duas formas e asse por 30-35 minutos, ou até que um palito inserido no centro saia
              limpo.
            </li>
            <li>
              Deixe esfriar por 10 minutos nas formas, depois desenforme e deixe esfriar completamente em uma grade.
            </li>
          </ol>

          <h3>Chantilly:</h3>
          <ol>
            <li>Em uma tigela gelada, bata o creme de leite fresco até começar a firmar.</li>
            <li>
              Adicione o açúcar de confeiteiro e a essência de baunilha, e continue batendo até obter picos firmes.
            </li>
            <li>Reserve na geladeira até o momento de montar o bolo.</li>
          </ol>

          <h3>Ganache:</h3>
          <ol>
            <li>Pique o chocolate e coloque em uma tigela.</li>
            <li>Aqueça o creme de leite até quase ferver e despeje sobre o chocolate.</li>
            <li>Deixe repousar por 1 minuto e depois misture até ficar homogêneo e brilhante.</li>
            <li>Deixe esfriar até atingir a consistência de cobertura (nem muito líquida, nem muito firme).</li>
          </ol>

          <h3>Montagem:</h3>
          <ol>
            <li>Corte cada disco de bolo ao meio horizontalmente, obtendo 4 camadas.</li>
            <li>Coloque a primeira camada em um prato de servir e espalhe uma camada generosa de chantilly.</li>
            <li>Distribua morangos fatiados sobre o chantilly.</li>
            <li>Repita o processo com as camadas restantes, terminando com a última camada de bolo.</li>
            <li>Cubra todo o bolo com uma fina camada de chantilly (crumb coat) e leve à geladeira por 30 minutos.</li>
            <li>Despeje a ganache sobre o topo do bolo, deixando escorrer pelas laterais.</li>
            <li>Decore com morangos inteiros e raspas de chocolate.</li>
            <li>Refrigere por pelo menos 2 horas antes de servir.</li>
          </ol>

          <h2>Dicas para Venda</h2>
          <ul>
            <li>Ofereça em diferentes tamanhos: mini (10cm), médio (20cm) e grande (26cm).</li>
            <li>Crie uma versão em formato de fatias individuais para venda unitária.</li>
            <li>Destaque a combinação clássica de chocolate e morango, que agrada a maioria dos paladares.</li>
            <li>Utilize morangos de qualidade e de tamanho uniforme para a decoração.</li>
            <li>Fotografe o bolo cortado para mostrar as camadas internas nas suas redes sociais.</li>
            <li>Ofereça opções de personalização com mensagens escritas em chocolate.</li>
            <li>Destaque a sazonalidade dos morangos frescos para criar senso de urgência.</li>
          </ul>

          <h2>Conservação</h2>
          <p>
            O bolo deve ser mantido refrigerado e consumido em até 3 dias. Não é recomendado congelar devido aos
            morangos frescos, que podem liberar água ao descongelar e comprometer a textura do bolo.
          </p>
        </div>
      </div>
    </div>
  )
}
