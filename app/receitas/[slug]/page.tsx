import { notFound } from "next/navigation"
import Image from "next/image"
import { getRecipeBySlug } from "@/utils/recipe-data"

export default function RecipePage({ params }: { params: { slug: string } }) {
  // Redirect from old URL to new URL
  if (params.slug === "brownie-ninho-nutella") {
    return Response.redirect(new URL("/receitas/brownie-nutella", "https://confeitariablog.vercel.app"))
  }

  const recipe = getRecipeBySlug(`/receitas/${params.slug}`)

  if (!recipe) {
    return notFound()
  }

  // Função para renderizar o conteúdo específico de cada receita
  const renderRecipeContent = () => {
    switch (params.slug) {
      // BRIGADEIROS
      case "brigadeiro-gourmet":
        return (
          <>
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
                <strong>Brigadeiro de Limão:</strong> Substitua o cacau por raspas e suco de 1 limão, decore com raspas
                de limão cristalizadas
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
                Para um acabamento mais profissional, utilize um bico de confeitar para adicionar detalhes decorativos
                no topo.
              </li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>
                Apresente os brigadeiros em caixas elegantes com divisórias, preferencialmente transparentes para
                mostrar o produto.
              </li>
              <li>Ofereça caixas com mix de sabores em diferentes tamanhos (4, 9, 16 unidades).</li>
              <li>
                Crie uma linha premium com ingredientes especiais como chocolate belga, pistache importado ou flor de
                sal.
              </li>
              <li>Desenvolva embalagens personalizadas para eventos como casamentos, aniversários e corporativos.</li>
              <li>Ofereça degustação para clientes potenciais em feiras e eventos.</li>
              <li>Destaque o uso de ingredientes de alta qualidade e a ausência de conservantes.</li>
              <li>Crie uma identidade visual sofisticada com etiquetas, cartões e embalagens coordenadas.</li>
              <li>Considere opções para dietas específicas, como brigadeiros sem lactose ou com açúcar reduzido.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os brigadeiros gourmet podem ser conservados em temperatura ambiente por até 3 dias em recipiente
              hermético. Se refrigerados, duram até 7 dias. Não é recomendado congelar, pois pode alterar a textura.
            </p>
          </>
        )

      // BROWNIES
      case "brownie-tradicional":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>200g de chocolate meio amargo de boa qualidade</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
              <li>100g de nozes picadas (opcional)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Derreta o chocolate e a manteiga em banho-maria ou no micro-ondas, mexendo a cada 30 segundos.</li>
              <li>Em uma tigela grande, misture o açúcar com o chocolate derretido.</li>
              <li>Adicione os ovos um a um, mexendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Peneire a farinha, o cacau e o sal sobre a mistura e incorpore delicadamente.</li>
              <li>Se estiver usando nozes, adicione-as agora e misture levemente.</li>
              <li>Despeje a massa na forma preparada e alise a superfície.</li>
              <li>Asse por 25-30 minutos. O brownie deve estar firme nas bordas, mas ainda úmido no centro.</li>
              <li>Deixe esfriar completamente antes de cortar em quadrados.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Corte em tamanhos padronizados para manter a consistência do produto.</li>
              <li>Embale individualmente em papel celofane transparente com um adesivo da sua marca.</li>
              <li>Ofereça em caixas de diferentes quantidades (4, 9, 16 unidades).</li>
              <li>Crie uma versão premium com chocolate importado e nozes selecionadas.</li>
              <li>Desenvolva variações como brownie com cobertura de ganache, caramelo salgado ou frutas vermelhas.</li>
              <li>
                Ofereça opções de tamanho: mini brownies para degustação, tamanho padrão e brownies grandes para
                compartilhar.
              </li>
              <li>Destaque a textura única: crocante por fora e úmido por dentro.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os brownies podem ser conservados em temperatura ambiente por até 3 dias em recipiente hermético. Se
              refrigerados, duram até 5 dias. Também podem ser congelados por até 3 meses, embalados individualmente.
            </p>
          </>
        )

      case "brownie-brigadeiro":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o brownie:</h3>
            <ul>
              <li>200g de chocolate meio amargo</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
            </ul>

            <h3>Para o brigadeiro:</h3>
            <ul>
              <li>1 lata de leite condensado</li>
              <li>3 colheres de sopa de chocolate em pó</li>
              <li>1 colher de sopa de manteiga</li>
              <li>Chocolate granulado para decorar</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Prepare o brownie seguindo a receita tradicional e asse por 25 minutos a 180°C.</li>
              <li>
                Enquanto o brownie assa, prepare o brigadeiro: misture o leite condensado, chocolate em pó e manteiga em
                uma panela.
              </li>
              <li>Cozinhe em fogo médio, mexendo sempre, até desgrudar do fundo da panela.</li>
              <li>Quando o brownie estiver pronto, espalhe o brigadeiro ainda quente por cima.</li>
              <li>Decore com chocolate granulado.</li>
              <li>Deixe esfriar completamente antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque a combinação de duas sobremesas brasileiras favoritas em um só produto.</li>
              <li>Corte em quadrados pequenos, pois é um doce muito rico.</li>
              <li>Ofereça em embalagens transparentes para mostrar as camadas.</li>
              <li>Crie uma versão premium com chocolate belga e brigadeiro gourmet.</li>
            </ul>

            <h2>Conservação</h2>
            <p>Conserve em geladeira por até 5 dias. Sirva em temperatura ambiente para melhor sabor e textura.</p>
          </>
        )

      case "brownie-oreo":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>200g de chocolate meio amargo</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
              <li>200g de biscoitos Oreo (1 pacote e meio)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Separe 6 biscoitos Oreo para decoração e quebre o restante em pedaços médios.</li>
              <li>Prepare a massa do brownie seguindo a receita tradicional.</li>
              <li>Adicione 3/4 dos pedaços de Oreo à massa e misture delicadamente.</li>
              <li>Despeje a massa na forma e espalhe o restante dos pedaços de Oreo por cima.</li>
              <li>Coloque os 6 biscoitos inteiros sobre a massa, pressionando levemente.</li>
              <li>Asse por 25-30 minutos.</li>
              <li>Deixe esfriar completamente antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque a combinação de texturas: o brownie úmido com os pedaços crocantes de Oreo.</li>
              <li>Embale individualmente com um adesivo da sua marca.</li>
              <li>Ofereça em caixas de diferentes quantidades.</li>
              <li>Crie uma versão com Oreo de sabores especiais (como menta ou morango) para edições limitadas.</li>
            </ul>

            <h2>Conservação</h2>
            <p>Conserve em recipiente hermético por até 4 dias em temperatura ambiente ou até 7 dias na geladeira.</p>
          </>
        )

      case "brownie-pistache":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>200g de chocolate branco</li>
              <li>150g de manteiga sem sal</li>
              <li>180g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>120g de farinha de trigo</li>
              <li>1 pitada de sal</li>
              <li>100g de pasta de pistache</li>
              <li>80g de pistaches sem casca, picados grosseiramente</li>
              <li>Algumas gotas de corante alimentício verde (opcional)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 170°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Derreta o chocolate branco com a manteiga em banho-maria ou no micro-ondas.</li>
              <li>Adicione a pasta de pistache ao chocolate derretido e misture bem.</li>
              <li>Em uma tigela, bata os ovos com o açúcar até ficar esbranquiçado.</li>
              <li>Adicione a mistura de chocolate e pistache, a baunilha e o corante (se estiver usando).</li>
              <li>Incorpore a farinha e o sal peneirados.</li>
              <li>Por último, adicione 3/4 dos pistaches picados.</li>
              <li>Despeje a massa na forma e espalhe o restante dos pistaches por cima.</li>
              <li>Asse por 25-30 minutos, até que as bordas estejam firmes mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar completamente antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Posicione como um produto premium devido ao custo do pistache.</li>
              <li>Destaque a cor verde natural e o sabor sofisticado.</li>
              <li>Embale em caixas elegantes com o logo da sua marca.</li>
              <li>Ofereça em tamanhos menores como opção de degustação.</li>
              <li>Combine com outros produtos premium em cestas de presente.</li>
            </ul>

            <h2>Conservação</h2>
            <p>Conserve em recipiente hermético por até 4 dias em temperatura ambiente ou até 7 dias na geladeira.</p>
          </>
        )

      case "brownie-pacoca":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>200g de chocolate meio amargo</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
              <li>150g de paçoca rolha (aproximadamente 10 unidades)</li>
              <li>100g de amendoim torrado e sem pele, picado grosseiramente</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Esmague 8 paçocas e reserve 2 para decoração.</li>
              <li>Prepare a massa do brownie seguindo a receita tradicional.</li>
              <li>Adicione 3/4 da paçoca esmagada e metade do amendoim picado à massa e misture delicadamente.</li>
              <li>Despeje a massa na forma e espalhe o restante da paçoca esmagada e o amendoim por cima.</li>
              <li>Asse por 25-30 minutos.</li>
              <li>Quando estiver quase frio, esmague as 2 paçocas restantes e espalhe por cima do brownie.</li>
              <li>Deixe esfriar completamente antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque como uma opção tipicamente brasileira, combinando o brownie americano com a paçoca.</li>
              <li>Promova especialmente durante as festas juninas.</li>
              <li>Embale individualmente com elementos visuais que remetam à cultura brasileira.</li>
              <li>Ofereça em caixas temáticas para festas juninas e julinas.</li>
            </ul>

            <h2>Conservação</h2>
            <p>Conserve em recipiente hermético por até 4 dias em temperatura ambiente ou até 7 dias na geladeira.</p>
          </>
        )

      case "brownie-doce-de-leite":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o brownie:</h3>
            <ul>
              <li>200g de chocolate meio amargo</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
            </ul>

            <h3>Para o recheio e cobertura:</h3>
            <ul>
              <li>400g de doce de leite cremoso de boa qualidade</li>
              <li>100g de chocolate meio amargo para cobertura (opcional)</li>
              <li>Flor de sal para finalizar (opcional)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Prepare a massa do brownie seguindo a receita tradicional.</li>
              <li>Despeje metade da massa na forma.</li>
              <li>Espalhe metade do doce de leite sobre a massa, deixando uma borda de 1cm.</li>
              <li>Cubra com o restante da massa de brownie.</li>
              <li>Asse por 25-30 minutos.</li>
              <li>Deixe esfriar por 15 minutos e espalhe o restante do doce de leite por cima.</li>
              <li>Se desejar, derreta o chocolate e faça um drizzle por cima do doce de leite.</li>
              <li>Finalize com uma pitada de flor de sal, se estiver usando.</li>
              <li>Refrigere por pelo menos 2 horas antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque a combinação do chocolate amargo com o doce de leite cremoso.</li>
              <li>Embale em recipientes que mantenham a integridade das camadas.</li>
              <li>Ofereça em diferentes tamanhos, incluindo versões individuais para cafeterias.</li>
              <li>Crie uma versão premium com doce de leite argentino e chocolate belga.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Conserve em recipiente hermético na geladeira por até 5 dias. Sirva em temperatura ambiente para melhor
              textura.
            </p>
          </>
        )

      case "brownie-leite-ninho-nutella":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o brownie:</h3>
            <ul>
              <li>200g de chocolate meio amargo</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
            </ul>

            <h3>Para o recheio e cobertura:</h3>
            <ul>
              <li>200g de Nutella</li>
              <li>200g de creme de leite Ninho (100g de leite em pó Ninho + 100g de creme de leite)</li>
              <li>50g de chocolate branco ralado para decoração</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Prepare a massa do brownie seguindo a receita tradicional.</li>
              <li>Despeje a massa na forma e asse por 25-30 minutos.</li>
              <li>
                Enquanto isso, prepare o creme de Ninho: misture o leite em pó com o creme de leite até ficar homogêneo.
              </li>
              <li>Quando o brownie estiver frio, espalhe o creme de Ninho por cima.</li>
              <li>Leve à geladeira por 30 minutos para firmar.</li>
              <li>Aqueça a Nutella por 30 segundos no micro-ondas para ficar mais fluida.</li>
              <li>Espalhe a Nutella sobre o creme de Ninho.</li>
              <li>Finalize com o chocolate branco ralado.</li>
              <li>Refrigere por pelo menos 2 horas antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque a combinação de sabores que agrada a todos os públicos.</li>
              <li>Embale em recipientes que mantenham a integridade das camadas.</li>
              <li>Ofereça em diferentes tamanhos, incluindo versões individuais para festas.</li>
              <li>Crie uma versão em formato de copinho para facilitar o consumo.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Conserve em recipiente hermético na geladeira por até 5 dias. Sirva em temperatura ambiente para melhor
              textura.
            </p>
          </>
        )

      case "blondie-frutas-vermelhas":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>200g de chocolate branco</li>
              <li>150g de manteiga sem sal</li>
              <li>150g de açúcar</li>
              <li>2 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>150g de farinha de trigo</li>
              <li>1 pitada de sal</li>
              <li>200g de mix de frutas vermelhas (framboesa, mirtilo, morango) frescas ou congeladas</li>
              <li>50g de chocolate branco em pedaços</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 170°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Derreta o chocolate branco com a manteiga em banho-maria ou no micro-ondas.</li>
              <li>Em uma tigela, bata os ovos com o açúcar até ficar esbranquiçado.</li>
              <li>Adicione a mistura de chocolate e manteiga e a baunilha.</li>
              <li>Incorpore a farinha e o sal peneirados.</li>
              <li>
                Se estiver usando frutas congeladas, passe-as por um pouco de farinha para evitar que soltem muito
                líquido.
              </li>
              <li>Adicione delicadamente 3/4 das frutas vermelhas e os pedaços de chocolate branco à massa.</li>
              <li>Despeje a massa na forma e espalhe o restante das frutas por cima.</li>
              <li>Asse por 25-30 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar completamente antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque o contraste visual entre o blondie claro e as frutas vermelhas.</li>
              <li>Embale em recipientes transparentes para mostrar as frutas.</li>
              <li>Ofereça como opção mais leve e frutada em comparação aos brownies tradicionais.</li>
              <li>Promova especialmente durante a temporada de frutas vermelhas.</li>
              <li>Crie uma versão com cobertura de chocolate branco para maior indulgência.</li>
            </ul>

            <h2>Conservação</h2>
            <p>Conserve em recipiente hermético na geladeira por até 4 dias devido às frutas.</p>
          </>
        )

      case "brownie-ninho-nutella":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o brownie:</h3>
            <ul>
              <li>200g de chocolate meio amargo</li>
              <li>150g de manteiga sem sal</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>30g de cacau em pó</li>
              <li>1 pitada de sal</li>
            </ul>

            <h3>Para a cobertura:</h3>
            <ul>
              <li>200g de Nutella</li>
              <li>200g de creme de leite Ninho (100g de leite em pó Ninho + 100g de creme de leite)</li>
              <li>50g de chocolate branco ralado para decoração</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Prepare a massa do brownie seguindo a receita tradicional.</li>
              <li>Despeje a massa na forma e asse por 25-30 minutos.</li>
              <li>
                Enquanto isso, prepare o creme de Ninho: misture o leite em pó com o creme de leite até ficar homogêneo.
              </li>
              <li>Quando o brownie estiver frio, espalhe o creme de Ninho por cima.</li>
              <li>Leve à geladeira por 30 minutos para firmar.</li>
              <li>Aqueça a Nutella por 30 segundos no micro-ondas para ficar mais fluida.</li>
              <li>Espalhe a Nutella sobre o creme de Ninho.</li>
              <li>Finalize com o chocolate branco ralado.</li>
              <li>Refrigere por pelo menos 2 horas antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque a combinação de sabores que agrada a todos os públicos.</li>
              <li>Embale em recipientes que mantenham a integridade das camadas.</li>
              <li>Ofereça em diferentes tamanhos, incluindo versões individuais para festas.</li>
              <li>Crie uma versão em formato de copinho para facilitar o consumo.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Conserve em recipiente hermético na geladeira por até 5 dias. Sirva em temperatura ambiente para melhor
              textura.
            </p>
          </>
        )

      case "brownie-blondie-frutas":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o brownie:</h3>
            <ul>
              <li>150g de chocolate meio amargo</li>
              <li>100g de manteiga sem sal</li>
              <li>150g de açúcar</li>
              <li>2 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>80g de farinha de trigo</li>
              <li>20g de cacau em pó</li>
              <li>1 pitada de sal</li>
            </ul>

            <h3>Para o blondie:</h3>
            <ul>
              <li>150g de chocolate branco</li>
              <li>100g de manteiga sem sal</li>
              <li>150g de açúcar</li>
              <li>2 ovos</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>100g de farinha de trigo</li>
              <li>1 pitada de sal</li>
            </ul>

            <h3>Para o recheio e decoração:</h3>
            <ul>
              <li>200g de mix de frutas vermelhas (framboesa, mirtilo, morango) frescas ou congeladas</li>
              <li>50g de chocolate branco em pedaços</li>
              <li>50g de chocolate meio amargo em pedaços</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 170°C e forre uma forma quadrada (20x20cm) com papel manteiga.</li>
              <li>Prepare a massa do brownie seguindo a receita tradicional.</li>
              <li>Prepare a massa do blondie seguindo a receita tradicional.</li>
              <li>Despeje a massa do brownie em metade da forma e a massa do blondie na outra metade.</li>
              <li>Com uma espátula ou faca, faça movimentos em forma de "S" para criar um efeito mesclado.</li>
              <li>Espalhe as frutas vermelhas e os pedaços de chocolate por cima.</li>
              <li>Asse por 25-30 minutos, até que as bordas estejam firmes mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar completamente antes de cortar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque o visual único com o contraste entre o brownie escuro e o blondie claro.</li>
              <li>Embale em recipientes transparentes para mostrar o efeito mesclado.</li>
              <li>Ofereça como opção premium e diferenciada.</li>
              <li>Crie uma versão com cobertura de ganache mesclada (chocolate branco e meio amargo).</li>
              <li>Promova como "o melhor dos dois mundos" para quem não consegue escolher entre brownie e blondie.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Conserve em recipiente hermético na geladeira por até 4 dias devido às frutas. Sirva em temperatura
              ambiente para melhor textura.
            </p>
          </>
        )

      // COOKIES
      case "cookies-americanos":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>200g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>300g de farinha de trigo</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>300g de gotas de chocolate meio amargo</li>
              <li>100g de nozes picadas (opcional)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore as gotas de chocolate e as nozes (se estiver usando).</li>
              <li>Cubra a massa e leve à geladeira por pelo menos 2 horas (idealmente overnight).</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Faça bolas de massa de aproximadamente 50g cada e disponha nas assadeiras, deixando espaço entre elas.
              </li>
              <li>Asse por 10-12 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>
                Embale os cookies individualmente em sacos de celofane transparente com um laço ou adesivo da sua marca.
              </li>
              <li>Ofereça pacotes com diferentes quantidades (3, 6, 12 unidades).</li>
              <li>Crie uma linha de cookies gigantes (100g cada) como produto premium.</li>
              <li>
                Desenvolva variações como cookies com chocolate branco e cranberry, chocolate triplo, ou caramelo
                salgado.
              </li>
              <li>Ofereça a massa de cookie congelada em porções, para que os clientes possam assar em casa.</li>
              <li>Destaque o fato de que seus cookies são feitos no dia, sem conservantes.</li>
              <li>
                Crie kits de presente com cookies e outros produtos complementares, como café gourmet ou chocolate
                quente.
              </li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 5 dias em recipiente hermético. A massa
              crua pode ser congelada por até 3 meses, permitindo assar cookies frescos quando necessário.
            </p>
          </>
        )

      case "cookies-recheados":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para a massa:</h3>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>200g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>300g de farinha de trigo</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>200g de gotas de chocolate meio amargo</li>
            </ul>

            <h3>Opções de recheio (escolha um):</h3>
            <ul>
              <li>
                <strong>Chocolate:</strong> 200g de chocolate meio amargo derretido + 2 colheres de sopa de creme de
                leite
              </li>
              <li>
                <strong>Doce de leite:</strong> 200g de doce de leite cremoso
              </li>
              <li>
                <strong>Nutella:</strong> 200g de Nutella
              </li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Prepare a massa de cookie seguindo a receita tradicional.</li>
              <li>Faça bolinhas de aproximadamente 25g cada.</li>
              <li>Asse por 10-12 minutos a 180°C, até que as bordas estejam douradas.</li>
              <li>Deixe esfriar completamente.</li>
              <li>Espalhe o recheio escolhido na parte plana de um cookie.</li>
              <li>Cubra com outro cookie, formando um sanduíche.</li>
              <li>Pressione levemente para espalhar o recheio até as bordas.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Ofereça uma variedade de recheios para atender diferentes preferências.</li>
              <li>Embale individualmente em papel celofane transparente com um laço colorido.</li>
              <li>Crie um "kit presente" com cookies recheados de diferentes sabores.</li>
              <li>Destaque o generoso recheio em suas fotos e descrições.</li>
              <li>Ofereça opções sazonais, como cookies com recheio de menta para o Natal.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies recheados devem ser conservados em recipiente hermético na geladeira por até 5 dias. Deixe
              atingir a temperatura ambiente antes de servir para melhor textura.
            </p>
          </>
        )

      case "cookie-doce-de-leite":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>300g de farinha de trigo</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>150g de gotas de chocolate meio amargo</li>
              <li>150g de doce de leite firme cortado em cubinhos (congelado por 2 horas)</li>
              <li>Flor de sal para finalizar (opcional)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Corte o doce de leite em cubos de aproximadamente 1cm e leve ao congelador por pelo menos 2 horas.
              </li>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore as gotas de chocolate.</li>
              <li>Retire o doce de leite do congelador e incorpore delicadamente à massa.</li>
              <li>Cubra a massa e leve à geladeira por pelo menos 2 horas.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Faça bolas de massa de aproximadamente 50g cada e disponha nas assadeiras, deixando espaço entre elas.
              </li>
              <li>Se desejar, polvilhe um pouco de flor de sal sobre cada cookie.</li>
              <li>Asse por 10-12 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque os "bolsões de doce de leite" que se formam dentro do cookie.</li>
              <li>Embale individualmente com um adesivo que indique o sabor.</li>
              <li>Ofereça como uma opção premium com um toque brasileiro.</li>
              <li>Crie uma versão com doce de leite argentino para um produto super premium.</li>
              <li>Combine com outros produtos de doce de leite em kits temáticos.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 4 dias em recipiente hermético. A massa
              crua pode ser congelada por até 3 meses.
            </p>
          </>
        )

      case "cookie-brigadeiro":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o brigadeiro:</h3>
            <ul>
              <li>1 lata de leite condensado (395g)</li>
              <li>3 colheres de sopa de cacau em pó</li>
              <li>1 colher de sopa de manteiga</li>
            </ul>

            <h3>Para a massa do cookie:</h3>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>300g de farinha de trigo</li>
              <li>50g de cacau em pó</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>150g de gotas de chocolate meio amargo</li>
              <li>Chocolate granulado para decorar</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <h3>Brigadeiro:</h3>
            <ol>
              <li>Em uma panela, misture o leite condensado, o cacau em pó e a manteiga.</li>
              <li>Cozinhe em fogo médio, mexendo sempre, até desgrudar do fundo da panela.</li>
              <li>Transfira para um prato untado com manteiga e deixe esfriar.</li>
              <li>Quando estiver frio, leve à geladeira por 2 horas.</li>
              <li>Faça bolinhas pequenas (aproximadamente 5g cada) e leve ao congelador por pelo menos 1 hora.</li>
            </ol>

            <h3>Cookie:</h3>
            <ol>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o cacau em pó, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore as gotas de chocolate.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Pegue aproximadamente 40g de massa de cookie, achate na palma da mão, coloque uma bolinha de brigadeiro
                congelada no centro e feche a massa ao redor do brigadeiro.
              </li>
              <li>Disponha os cookies nas assadeiras, deixando espaço entre eles.</li>
              <li>Asse por 10-12 minutos, até que as bordas estejam firmes mas o centro ainda esteja macio.</li>
              <li>Assim que sair do forno, polvilhe com chocolate granulado.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque a combinação de duas sobremesas brasileiras favoritas em um só produto.</li>
              <li>Corte um cookie ao meio em suas fotos para mostrar o centro de brigadeiro.</li>
              <li>Embale individualmente com um adesivo que indique o sabor.</li>
              <li>Ofereça como uma opção exclusivamente brasileira para se diferenciar.</li>
              <li>Crie uma versão com brigadeiro gourmet para um produto premium.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 4 dias em recipiente hermético. Aqueça
              por 10-15 segundos no micro-ondas antes de servir para um centro de brigadeiro derretido.
            </p>
          </>
        )

      case "cookie-oreo":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>300g de farinha de trigo</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>150g de gotas de chocolate branco</li>
              <li>200g de biscoitos Oreo (aproximadamente 20 unidades), quebrados em pedaços médios</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Quebre os biscoitos Oreo em pedaços médios (cada biscoito em 4-6 pedaços).</li>
              <li>Incorpore as gotas de chocolate branco e os pedaços de Oreo à massa.</li>
              <li>Cubra a massa e leve à geladeira por pelo menos 2 horas.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Faça bolas de massa de aproximadamente 50g cada e disponha nas assadeiras, deixando espaço entre elas.
              </li>
              <li>Asse por 10-12 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque o contraste visual entre o cookie claro, o chocolate branco e os pedaços de Oreo.</li>
              <li>Embale individualmente com um adesivo que indique o sabor.</li>
              <li>Ofereça como uma opção divertida que agrada a todas as idades.</li>
              <li>Crie variações com Oreo de sabores especiais (como menta ou morango) para edições limitadas.</li>
              <li>Combine com milkshake de Oreo em promoções especiais.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 5 dias em recipiente hermético. A massa
              crua pode ser congelada por até 3 meses.
            </p>
          </>
        )

      case "cookie-ninho-nutella":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>250g de farinha de trigo</li>
              <li>50g de leite em pó Ninho</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>150g de chocolate branco em pedaços</li>
              <li>200g de Nutella</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Coloque a Nutella em um saco plástico e corte a ponta para formar um bico.</li>
              <li>Faça pequenos discos de Nutella (aproximadamente 10g cada) sobre papel manteiga.</li>
              <li>Leve ao congelador por pelo menos 2 horas.</li>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o leite em pó Ninho, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore os pedaços de chocolate branco.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Pegue aproximadamente 40g de massa de cookie, achate na palma da mão, coloque um disco de Nutella
                congelado no centro e feche a massa ao redor da Nutella.
              </li>
              <li>Disponha os cookies nas assadeiras, deixando espaço entre eles.</li>
              <li>Asse por 10-12 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque o centro de Nutella derretido quando o cookie está quente.</li>
              <li>Corte um cookie ao meio em suas fotos para mostrar o recheio.</li>
              <li>Embale individualmente com um adesivo que indique o sabor.</li>
              <li>Ofereça como uma opção premium que combina dois sabores muito populares.</li>
              <li>Sugira aquecer por 10-15 segundos no micro-ondas antes de consumir.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 4 dias em recipiente hermético. Aqueça
              por 10-15 segundos no micro-ondas antes de servir para um centro de Nutella derretido.
            </p>
          </>
        )

      case "cookie-nutella":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>250g de farinha de trigo</li>
              <li>50g de cacau em pó</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>150g de gotas de chocolate ao leite</li>
              <li>200g de Nutella</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Coloque a Nutella em um saco plástico e corte a ponta para formar um bico.</li>
              <li>Faça pequenos discos de Nutella (aproximadamente 10g cada) sobre papel manteiga.</li>
              <li>Leve ao congelador por pelo menos 2 horas.</li>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o cacau em pó, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore as gotas de chocolate.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Pegue aproximadamente 40g de massa de cookie, achate na palma da mão, coloque um disco de Nutella
                congelado no centro e feche a massa ao redor da Nutella.
              </li>
              <li>Disponha os cookies nas assadeiras, deixando espaço entre eles.</li>
              <li>Asse por 10-12 minutos, até que as bordas estejam firmes mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque o contraste entre o cookie de chocolate escuro e o centro de Nutella.</li>
              <li>Corte um cookie ao meio em suas fotos para mostrar o recheio.</li>
              <li>Embale individualmente com um adesivo que indique o sabor.</li>
              <li>Ofereça como uma opção indulgente para os amantes de chocolate.</li>
              <li>Sugira aquecer por 10-15 segundos no micro-ondas antes de consumir.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 4 dias em recipiente hermético. Aqueça
              por 10-15 segundos no micro-ondas antes de servir para um centro de Nutella derretido.
            </p>
          </>
        )

      case "cookie-red-velvet":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>250g de farinha de trigo</li>
              <li>20g de cacau em pó</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>1 colher de sopa de corante alimentício vermelho em gel</li>
              <li>1 colher de chá de vinagre branco</li>
              <li>200g de gotas de chocolate branco</li>
              <li>100g de cream cheese (opcional, para cobertura)</li>
              <li>50g de açúcar de confeiteiro (opcional, para cobertura)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e o corante vermelho, misturando bem para distribuir a cor uniformemente.</li>
              <li>Em outra tigela, misture a farinha, o cacau em pó, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Adicione o vinagre e misture rapidamente.</li>
              <li>Incorpore as gotas de chocolate branco.</li>
              <li>Cubra a massa e leve à geladeira por pelo menos 2 horas.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Faça bolas de massa de aproximadamente 50g cada e disponha nas assadeiras, deixando espaço entre elas.
              </li>
              <li>Asse por 10-12 minutos, até que as bordas estejam firmes mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
              <li>
                Se desejar fazer a cobertura de cream cheese, bata o cream cheese com o açúcar de confeiteiro até ficar
                cremoso e espalhe sobre os cookies já frios.
              </li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque a cor vermelha vibrante e o contraste com as gotas de chocolate branco.</li>
              <li>Embale individualmente com um adesivo que indique o sabor.</li>
              <li>Ofereça como uma opção especial para o Dia dos Namorados e outras datas comemorativas.</li>
              <li>Crie uma versão com cobertura de cream cheese para um produto premium.</li>
              <li>Combine com outros produtos de temática Red Velvet em kits especiais.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 4 dias em recipiente hermético. Se
              tiverem cobertura de cream cheese, devem ser refrigerados e consumidos em até 3 dias.
            </p>
          </>
        )

      case "cookie-caramelo-salgado":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o caramelo salgado:</h3>
            <ul>
              <li>200g de açúcar</li>
              <li>100g de manteiga sem sal</li>
              <li>120ml de creme de leite fresco</li>
              <li>1 colher de chá de flor de sal</li>
            </ul>

            <h3>Para a massa do cookie:</h3>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>300g de farinha de trigo</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>200g de chocolate meio amargo em pedaços</li>
              <li>Flor de sal para finalizar</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <h3>Caramelo salgado:</h3>
            <ol>
              <li>
                Em uma panela, derreta o açúcar em fogo médio sem mexer, apenas balançando a panela ocasionalmente.
              </li>
              <li>
                Quando o açúcar estiver completamente derretido e âmbar, adicione a manteiga e misture até incorporar
                (cuidado com respingos).
              </li>
              <li>Retire do fogo e adicione o creme de leite, mexendo vigorosamente (a mistura vai borbulhar).</li>
              <li>Volte ao fogo baixo e cozinhe por mais 1 minuto, mexendo sempre.</li>
              <li>Adicione a flor de sal e misture.</li>
              <li>Transfira para um recipiente e deixe esfriar completamente.</li>
              <li>Leve à geladeira por pelo menos 2 horas para firmar.</li>
            </ol>

            <h3>Cookie:</h3>
            <ol>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore os pedaços de chocolate.</li>
              <li>Cubra a massa e leve à geladeira por pelo menos 2 horas.</li>
              <li>
                Pegue aproximadamente 40g de massa de cookie, achate na palma da mão, coloque uma colher de chá de
                caramelo salgado no centro e feche a massa ao redor do caramelo.
              </li>
              <li>Disponha os cookies nas assadeiras, deixando espaço entre eles.</li>
              <li>Polvilhe um pouco de flor de sal sobre cada cookie.</li>
              <li>Asse por 10-12 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque o contraste entre o doce do caramelo e o toque de sal.</li>
              <li>Corte um cookie ao meio em suas fotos para mostrar o centro de caramelo.</li>
              <li>Embale individualmente com um adesivo que indique o sabor.</li>
              <li>Posicione como um produto gourmet para um público mais sofisticado.</li>
              <li>Sugira aquecer por 10-15 segundos no micro-ondas antes de consumir.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 4 dias em recipiente hermético. Aqueça
              por 10-15 segundos no micro-ondas antes de servir para um centro de caramelo derretido.
            </p>
          </>
        )

      case "cookie-pistache":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>1 colher de chá de extrato de amêndoa (opcional)</li>
              <li>300g de farinha de trigo</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>100g de pasta de pistache</li>
              <li>150g de chocolate branco em pedaços</li>
              <li>100g de pistaches sem casca, picados grosseiramente</li>
              <li>Algumas gotas de corante alimentício verde (opcional)</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha, o extrato de amêndoa (se estiver usando) e a pasta de pistache.</li>
              <li>Se desejar uma cor verde mais intensa, adicione algumas gotas de corante.</li>
              <li>Em outra tigela, misture a farinha, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore os pedaços de chocolate branco e 3/4 dos pistaches picados.</li>
              <li>Cubra a massa e leve à geladeira por pelo menos 2 horas.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Faça bolas de massa de aproximadamente 50g cada e disponha nas assadeiras, deixando espaço entre elas.
              </li>
              <li>Pressione alguns pistaches picados na superfície de cada cookie.</li>
              <li>Asse por 10-12 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Posicione como um produto premium devido ao custo do pistache.</li>
              <li>Destaque a cor verde natural e o sabor sofisticado.</li>
              <li>Embale em caixas elegantes com o logo da sua marca.</li>
              <li>Ofereça em tamanhos menores como opção de degustação.</li>
              <li>Combine com outros produtos premium em cestas de presente.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 5 dias em recipiente hermético. A massa
              crua pode ser congelada por até 3 meses.
            </p>
          </>
        )

      case "cookie-chocolate-branco":
        return (
          <>
            <h2>Ingredientes</h2>
            <ul>
              <li>225g de manteiga sem sal, em temperatura ambiente</li>
              <li>150g de açúcar mascavo</li>
              <li>100g de açúcar refinado</li>
              <li>2 ovos grandes</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>300g de farinha de trigo</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>250g de chocolate branco em pedaços</li>
              <li>100g de macadâmias, picadas grosseiramente</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Em uma tigela grande, bata a manteiga com os dois tipos de açúcar até obter um creme fofo e claro.
              </li>
              <li>Adicione os ovos, um de cada vez, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em outra tigela, misture a farinha, o bicarbonato e o sal.</li>
              <li>Adicione os ingredientes secos à mistura de manteiga e açúcar, mexendo delicadamente.</li>
              <li>Incorpore os pedaços de chocolate branco e as macadâmias picadas.</li>
              <li>Cubra a massa e leve à geladeira por pelo menos 2 horas.</li>
              <li>Pré-aqueça o forno a 180°C e forre assadeiras com papel manteiga.</li>
              <li>
                Faça bolas de massa de aproximadamente 50g cada e disponha nas assadeiras, deixando espaço entre elas.
              </li>
              <li>Asse por 10-12 minutos, até que as bordas estejam douradas mas o centro ainda esteja macio.</li>
              <li>Deixe esfriar nas assadeiras por 5 minutos antes de transferir para uma grade.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>
                Posicione como um produto premium devido ao custo do chocolate branco de qualidade e das macadâmias.
              </li>
              <li>Destaque a aparência elegante e o sabor sofisticado.</li>
              <li>Embale em caixas elegantes com o logo da sua marca.</li>
              <li>Ofereça como opção para eventos sofisticados como casamentos e festas corporativas.</li>
              <li>Combine com outros produtos premium em cestas de presente.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cookies podem ser conservados em temperatura ambiente por até 5 dias em recipiente hermético. A massa
              crua pode ser congelada por até 3 meses.
            </p>
          </>
        )

      // TORTAS
      case "torta-de-limao":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para a Base:</h3>
            <ul>
              <li>200g de biscoitos tipo maisena</li>
              <li>100g de manteiga sem sal, derretida</li>
              <li>1 colher de sopa de açúcar refinado</li>
            </ul>

            <h3>Para o Recheio:</h3>
            <ul>
              <li>1 lata de leite condensado (395g)</li>
              <li>Suco de 4 limões</li>
              <li>Raspas de 2 limões</li>
              <li>3 gemas</li>
              <li>1 colher de sopa de amido de milho</li>
            </ul>

            <h3>Para o Merengue:</h3>
            <ul>
              <li>3 claras</li>
              <li>150g de açúcar</li>
              <li>1 colher de chá de suco de limão</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <h3>Base:</h3>
            <ol>
              <li>Triture os biscoitos no processador até obter uma farinha fina.</li>
              <li>Misture com a manteiga derretida e o açúcar até formar uma massa homogênea.</li>
              <li>Forre o fundo e as laterais de uma forma de fundo removível (23cm) com a massa, pressionando bem.</li>
              <li>Leve ao forno pré-aquecido a 180°C por 10 minutos. Retire e deixe esfriar.</li>
            </ol>

            <h3>Recheio:</h3>
            <ol>
              <li>
                Em uma panela, misture o leite condensado, as gemas, o suco de limão, as raspas e o amido de milho.
              </li>
              <li>Leve ao fogo médio, mexendo constantemente até engrossar (cerca de 8-10 minutos).</li>
              <li>Despeje o recheio sobre a base de biscoito e alise a superfície.</li>
              <li>Deixe esfriar completamente e leve à geladeira por pelo menos 2 horas.</li>
            </ol>

            <h3>Merengue:</h3>
            <ol>
              <li>
                Em uma panela, misture o açúcar com 50ml de água e leve ao fogo até atingir 118°C (ponto de bala mole).
              </li>
              <li>Enquanto isso, bata as claras em neve firme com o suco de limão.</li>
              <li>
                Com a batedeira ligada, despeje a calda quente em fio sobre as claras e continue batendo até esfriar.
              </li>
              <li>Coloque o merengue em um saco de confeitar com bico pitanga e decore a torta.</li>
              <li>
                Finalize com um maçarico culinário para dourar o merengue ou leve ao forno a 200°C por 3-5 minutos.
              </li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Ofereça a torta em diferentes tamanhos: individual, média (6 fatias) e grande (12 fatias).</li>
              <li>Crie uma embalagem especial que proteja o merengue durante o transporte.</li>
              <li>
                Desenvolva variações como torta de limão siciliano, torta de maracujá ou torta de frutas vermelhas.
              </li>
              <li>Ofereça a opção de personalização com decorações especiais para ocasiões como aniversários.</li>
              <li>Destaque o equilíbrio perfeito entre o azedinho do limão e a doçura do merengue.</li>
              <li>Inclua instruções de conservação e consumo junto com o produto.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              A torta de limão deve ser refrigerada e consumida em até 3 dias. Não é recomendado congelar devido ao
              merengue.
            </p>
          </>
        )

      case "cheesecake-frutas-vermelhas":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para a base:</h3>
            <ul>
              <li>200g de biscoito tipo digestivo</li>
              <li>100g de manteiga sem sal, derretida</li>
            </ul>

            <h3>Para o recheio:</h3>
            <ul>
              <li>600g de cream cheese, em temperatura ambiente</li>
              <li>200g de açúcar</li>
              <li>3 ovos grandes</li>
              <li>200ml de creme de leite fresco</li>
              <li>1 colher de sopa de extrato de baunilha</li>
              <li>1 colher de sopa de suco de limão</li>
              <li>2 colheres de sopa de amido de milho</li>
            </ul>

            <h3>Para a cobertura:</h3>
            <ul>
              <li>300g de frutas vermelhas mistas (morango, framboesa, mirtilo, amora)</li>
              <li>100g de açúcar</li>
              <li>2 colheres de sopa de suco de limão</li>
              <li>1 colher de sopa de amido de milho dissolvido em 2 colheres de sopa de água</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Triture os biscoitos e misture com a manteiga derretida. Forre o fundo de uma forma de fundo removível
                (23cm).
              </li>
              <li>Leve ao forno a 180°C por 10 minutos e deixe esfriar.</li>
              <li>Para o recheio, bata o cream cheese com o açúcar até ficar cremoso.</li>
              <li>Adicione os ovos um a um, batendo bem após cada adição.</li>
              <li>Incorpore o creme de leite, a baunilha, o suco de limão e o amido de milho.</li>
              <li>Despeje sobre a base de biscoito e asse em banho-maria a 160°C por 50-60 minutos.</li>
              <li>Desligue o forno e deixe o cheesecake esfriar dentro do forno por 1 hora.</li>
              <li>Refrigere por pelo menos 4 horas ou, de preferência, durante a noite.</li>
              <li>Para a cobertura, cozinhe as frutas vermelhas com o açúcar e o suco de limão por 5 minutos.</li>
              <li>Adicione o amido dissolvido e cozinhe até engrossar.</li>
              <li>Deixe esfriar e despeje sobre o cheesecake antes de servir.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Ofereça em diferentes tamanhos, incluindo versões individuais em potes de vidro.</li>
              <li>Utilize embalagens que mantenham a integridade do produto durante o transporte.</li>
              <li>Crie uma linha de cheesecakes com diferentes coberturas sazonais.</li>
              <li>Destaque a textura cremosa e a cobertura de frutas frescas em suas fotos.</li>
              <li>Ofereça a opção de personalizar a cobertura de acordo com a preferência do cliente.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              O cheesecake deve ser conservado na geladeira e consumido em até 5 dias. A cobertura de frutas pode ser
              adicionada no momento do consumo para manter a frescura.
            </p>
          </>
        )

      // BOLOS
      case "bolo-red-velvet":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o bolo:</h3>
            <ul>
              <li>350g de farinha de trigo</li>
              <li>20g de cacau em pó</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1 colher de chá de sal</li>
              <li>230g de manteiga sem sal, em temperatura ambiente</li>
              <li>400g de açúcar</li>
              <li>4 ovos</li>
              <li>1 colher de sopa de extrato de baunilha</li>
              <li>240ml de buttermilk (ou 240ml de leite + 1 colher de sopa de vinagre)</li>
              <li>2 colheres de sopa de corante alimentício vermelho em gel</li>
              <li>1 colher de sopa de vinagre de maçã</li>
            </ul>

            <h3>Para a cobertura de cream cheese:</h3>
            <ul>
              <li>500g de cream cheese, em temperatura ambiente</li>
              <li>200g de manteiga sem sal, em temperatura ambiente</li>
              <li>500g de açúcar de confeiteiro</li>
              <li>2 colheres de chá de extrato de baunilha</li>
              <li>Pitada de sal</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C. Unte e enfarinhe duas formas redondas de 20cm.</li>
              <li>Em uma tigela, peneire a farinha, o cacau, o bicarbonato e o sal.</li>
              <li>Na batedeira, bata a manteiga com o açúcar até ficar cremoso.</li>
              <li>Adicione os ovos um a um, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e o corante vermelho.</li>
              <li>Adicione os ingredientes secos alternando com o buttermilk, começando e terminando com os secos.</li>
              <li>Por último, misture o vinagre de maçã.</li>
              <li>Divida a massa entre as formas e asse por 30-35 minutos.</li>
              <li>Deixe esfriar completamente antes de desenformar.</li>
              <li>Para a cobertura, bata o cream cheese com a manteiga até ficar cremoso.</li>
              <li>Adicione o açúcar de confeiteiro aos poucos, a baunilha e o sal.</li>
              <li>Bata até obter uma cobertura lisa e cremosa.</li>
              <li>Monte o bolo, colocando uma camada de cobertura entre as duas camadas de bolo.</li>
              <li>Cubra todo o bolo com o restante da cobertura.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>
                Destaque a cor vermelha vibrante e a cobertura branca de cream cheese, criando um contraste visual
                atraente.
              </li>
              <li>Ofereça em diferentes tamanhos, desde fatias individuais até bolos inteiros para eventos.</li>
              <li>Decore com raspas de chocolate branco ou migalhas de bolo vermelho para um acabamento elegante.</li>
              <li>Crie uma versão em formato de cupcakes para eventos e festas.</li>
              <li>Destaque a textura úmida e o sabor único, diferente dos bolos tradicionais.</li>
              <li>Ofereça como opção especial para o Dia dos Namorados e outras datas comemorativas.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              O bolo Red Velvet deve ser conservado na geladeira por até 5 dias. Retire da geladeira 30 minutos antes de
              servir para melhor sabor e textura.
            </p>
          </>
        )

      case "bolo-chocolate-com-morango":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para o bolo:</h3>
            <ul>
              <li>300g de farinha de trigo</li>
              <li>80g de cacau em pó</li>
              <li>2 colheres de chá de fermento em pó</li>
              <li>1 colher de chá de bicarbonato de sódio</li>
              <li>1/2 colher de chá de sal</li>
              <li>250g de açúcar</li>
              <li>3 ovos grandes</li>
              <li>180ml de óleo vegetal</li>
              <li>180ml de leite</li>
              <li>180ml de água quente</li>
              <li>1 colher de sopa de extrato de baunilha</li>
            </ul>

            <h3>Para o recheio e cobertura:</h3>
            <ul>
              <li>500ml de creme de leite fresco gelado</li>
              <li>50g de açúcar de confeiteiro</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>400g de morangos frescos</li>
              <li>200g de chocolate meio amargo</li>
              <li>100ml de creme de leite</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C. Unte e enfarinhe duas formas redondas de 20cm.</li>
              <li>Em uma tigela, peneire a farinha, o cacau, o fermento, o bicarbonato e o sal.</li>
              <li>Em outra tigela, bata os ovos com o açúcar até ficar esbranquiçado.</li>
              <li>Adicione o óleo, o leite e a baunilha, misturando bem.</li>
              <li>Incorpore os ingredientes secos aos líquidos, misturando delicadamente.</li>
              <li>Por último, adicione a água quente e misture até obter uma massa homogênea (ficará líquida).</li>
              <li>Divida a massa entre as formas e asse por 30-35 minutos.</li>
              <li>Deixe esfriar completamente antes de desenformar.</li>
              <li>Para o chantilly, bata o creme de leite gelado com o açúcar e a baunilha até obter picos firmes.</li>
              <li>Lave e seque os morangos. Corte alguns em fatias e reserve outros inteiros para decoração.</li>
              <li>Para a ganache, derreta o chocolate com o creme de leite em banho-maria ou no micro-ondas.</li>
              <li>Monte o bolo: corte cada disco de bolo ao meio horizontalmente, obtendo 4 discos.</li>
              <li>Coloque o primeiro disco, espalhe chantilly e fatias de morango.</li>
              <li>Repita o processo com os outros discos.</li>
              <li>Cubra o bolo com chantilly e decore com morangos inteiros.</li>
              <li>Finalize com a ganache de chocolate, deixando escorrer pelas laterais.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Destaque o contraste entre o chocolate escuro, o chantilly branco e os morangos vermelhos.</li>
              <li>Ofereça em diferentes tamanhos, desde mini bolos individuais até bolos para eventos.</li>
              <li>Utilize embalagens transparentes para mostrar as camadas e a decoração.</li>
              <li>Crie uma versão em formato de cupcakes para festas e eventos.</li>
              <li>Destaque a sazonalidade dos morangos frescos e a qualidade dos ingredientes.</li>
              <li>Ofereça como opção especial para aniversários e outras celebrações.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              O bolo deve ser conservado na geladeira e consumido em até 3 dias. Por conter frutas frescas, é
              recomendável não deixar em temperatura ambiente por mais de 2 horas.
            </p>
          </>
        )

      // DOCES DIVERSOS
      case "pao-de-mel":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para a massa:</h3>
            <ul>
              <li>300g de farinha de trigo</li>
              <li>100g de açúcar mascavo</li>
              <li>50g de mel</li>
              <li>50g de chocolate em pó</li>
              <li>1 colher de sopa de canela em pó</li>
              <li>1/2 colher de chá de cravo em pó</li>
              <li>1/2 colher de chá de noz-moscada</li>
              <li>1 colher de chá de fermento em pó</li>
              <li>1 pitada de sal</li>
              <li>2 ovos</li>
              <li>100ml de leite</li>
              <li>50g de manteiga derretida</li>
            </ul>

            <h3>Para o recheio:</h3>
            <ul>
              <li>300g de doce de leite cremoso</li>
            </ul>

            <h3>Para a cobertura:</h3>
            <ul>
              <li>400g de chocolate meio amargo</li>
              <li>2 colheres de sopa de óleo de coco</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Pré-aqueça o forno a 180°C. Unte uma forma retangular (30x20cm) com manteiga e forre com papel manteiga.
              </li>
              <li>
                Em uma tigela grande, misture todos os ingredientes secos: farinha, açúcar mascavo, chocolate em pó,
                especiarias, fermento e sal.
              </li>
              <li>Em outra tigela, bata os ovos e adicione o leite, o mel e a manteiga derretida.</li>
              <li>Incorpore os ingredientes líquidos aos secos, misturando até obter uma massa homogênea.</li>
              <li>Despeje a massa na forma preparada e alise a superfície.</li>
              <li>Asse por 20-25 minutos, até que um palito inserido no centro saia limpo.</li>
              <li>Deixe esfriar completamente antes de desenformar.</li>
              <li>Corte o bolo em quadrados ou retângulos do tamanho desejado.</li>
              <li>Corte cada pedaço ao meio horizontalmente e recheie com doce de leite.</li>
              <li>Leve à geladeira por 30 minutos para firmar.</li>
              <li>Derreta o chocolate com o óleo de coco em banho-maria ou no micro-ondas.</li>
              <li>Com a ajuda de um garfo, mergulhe cada pão de mel no chocolate, cobrindo completamente.</li>
              <li>Coloque sobre uma grade para escorrer o excesso e deixe secar.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Embale individualmente em papel celofane transparente com um laço ou adesivo da sua marca.</li>
              <li>Ofereça em diferentes tamanhos: mini, médio e grande.</li>
              <li>Crie versões com diferentes recheios, como brigadeiro, creme de avelã ou geleia de frutas.</li>
              <li>Decore com detalhes em chocolate branco para um visual mais elaborado.</li>
              <li>Destaque o aroma de especiarias e a textura úmida e macia.</li>
              <li>Ofereça como opção especial para o inverno e festas juninas.</li>
              <li>Crie kits com diferentes sabores para presente.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              O pão de mel pode ser conservado em temperatura ambiente por até 5 dias ou na geladeira por até 10 dias.
              Também pode ser congelado por até 3 meses, embalado individualmente.
            </p>
          </>
        )

      case "macarons-franceses":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para as cascas:</h3>
            <ul>
              <li>100g de farinha de amêndoas</li>
              <li>100g de açúcar de confeiteiro</li>
              <li>75g de claras (aproximadamente 2 claras grandes)</li>
              <li>50g de açúcar refinado</li>
              <li>Corante em gel (opcional, da cor desejada)</li>
            </ul>

            <h3>Para o recheio de ganache de chocolate:</h3>
            <ul>
              <li>100g de chocolate meio amargo</li>
              <li>100ml de creme de leite fresco</li>
              <li>10g de manteiga sem sal</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>
                Peneire a farinha de amêndoas e o açúcar de confeiteiro juntos 2-3 vezes para garantir que não haja
                grumos.
              </li>
              <li>Em uma tigela limpa e seca, bata as claras até começarem a formar espuma.</li>
              <li>
                Adicione o açúcar refinado aos poucos, continuando a bater até obter um merengue firme e brilhante.
              </li>
              <li>Se desejar colorir, adicione o corante em gel neste momento e bata por mais alguns segundos.</li>
              <li>Adicione a mistura de farinha de amêndoas e açúcar de confeiteiro ao merengue.</li>
              <li>
                Com uma espátula, misture delicadamente com movimentos de baixo para cima (macaronage), até que a massa
                escorra da espátula como uma fita.
              </li>
              <li>Transfira a massa para um saco de confeitar com bico liso.</li>
              <li>Forre assadeiras com papel manteiga ou tapete de silicone específico para macarons.</li>
              <li>Faça círculos de aproximadamente 3-4cm de diâmetro, deixando espaço entre eles.</li>
              <li>Bata as assadeiras contra a bancada algumas vezes para eliminar bolhas de ar.</li>
              <li>
                Deixe descansar em temperatura ambiente por 30-60 minutos, até que se forme uma película seca na
                superfície.
              </li>
              <li>Pré-aqueça o forno a 150°C e asse por 12-15 minutos.</li>
              <li>Deixe esfriar completamente antes de remover do papel.</li>
              <li>Para o recheio, aqueça o creme de leite até quase ferver e despeje sobre o chocolate picado.</li>
              <li>Deixe repousar por 1 minuto e misture até o chocolate derreter completamente.</li>
              <li>Adicione a manteiga e misture até incorporar.</li>
              <li>Deixe a ganache esfriar e firmar antes de usar.</li>
              <li>Recheie os macarons, unindo duas cascas com o recheio no meio.</li>
              <li>
                Deixe os macarons na geladeira por pelo menos 24 horas antes de servir, para que desenvolvam a textura
                ideal.
              </li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Apresente em caixas elegantes com divisórias para proteger os delicados macarons.</li>
              <li>Ofereça em diferentes cores e sabores, criando uma apresentação visual atraente.</li>
              <li>Crie sabores sazonais e edições limitadas para gerar interesse.</li>
              <li>Destaque a técnica francesa e a textura única: crocante por fora e macio por dentro.</li>
              <li>Ofereça em diferentes quantidades: 6, 12 ou 24 unidades.</li>
              <li>Desenvolva sabores exclusivos que se tornem sua assinatura.</li>
              <li>Considere embalagens especiais para datas comemorativas como Dia dos Namorados e Natal.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os macarons devem ser conservados na geladeira por até 5 dias. Deixe atingir a temperatura ambiente por
              15-20 minutos antes de servir para melhor sabor e textura. Também podem ser congelados por até 3 meses em
              recipiente hermético.
            </p>
          </>
        )

      case "cupcakes-decorados":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para a massa básica de baunilha:</h3>
            <ul>
              <li>150g de manteiga sem sal, em temperatura ambiente</li>
              <li>200g de açúcar</li>
              <li>3 ovos</li>
              <li>1 colher de sopa de extrato de baunilha</li>
              <li>200g de farinha de trigo</li>
              <li>1 colher de chá de fermento em pó</li>
              <li>1/2 colher de chá de sal</li>
              <li>120ml de leite</li>
            </ul>

            <h3>Para o buttercream:</h3>
            <ul>
              <li>250g de manteiga sem sal, em temperatura ambiente</li>
              <li>500g de açúcar de confeiteiro</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>2-3 colheres de sopa de leite ou creme de leite</li>
              <li>Corantes alimentícios em gel (cores variadas)</li>
            </ul>

            <h3>Para decoração:</h3>
            <ul>
              <li>Confeitos coloridos</li>
              <li>Granulados</li>
              <li>Flores de açúcar</li>
              <li>Pérolas comestíveis</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pré-aqueça o forno a 180°C. Coloque forminhas de papel em uma forma para cupcakes.</li>
              <li>Na batedeira, bata a manteiga com o açúcar até ficar cremoso e claro.</li>
              <li>Adicione os ovos um a um, batendo bem após cada adição.</li>
              <li>Acrescente a baunilha e misture.</li>
              <li>Em uma tigela separada, peneire a farinha, o fermento e o sal.</li>
              <li>
                Adicione os ingredientes secos à mistura de manteiga alternando com o leite, começando e terminando com
                os secos.
              </li>
              <li>Distribua a massa nas forminhas, preenchendo 2/3 da capacidade.</li>
              <li>Asse por 18-20 minutos, até que um palito inserido no centro saia limpo.</li>
              <li>Deixe esfriar completamente antes de decorar.</li>
              <li>Para o buttercream, bata a manteiga na batedeira até ficar cremosa.</li>
              <li>Adicione o açúcar de confeiteiro aos poucos, batendo em velocidade baixa.</li>
              <li>Acrescente a baunilha e o leite, batendo até obter uma consistência leve e fofa.</li>
              <li>Divida o buttercream em porções e adicione os corantes desejados.</li>
              <li>Coloque o buttercream em sacos de confeitar com bicos decorativos variados.</li>
              <li>Decore os cupcakes com diferentes técnicas: rosetas, redemoinhos, pétalas, etc.</li>
              <li>Finalize com os confeitos escolhidos.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>
                Crie uma linha de cupcakes com decorações temáticas para diferentes ocasiões: aniversários, casamentos,
                chás de bebê, etc.
              </li>
              <li>Ofereça em caixas especiais que protejam a decoração durante o transporte.</li>
              <li>Desenvolva sabores sazonais e edições limitadas para gerar interesse.</li>
              <li>Ofereça a opção de personalização com cores e temas específicos para eventos.</li>
              <li>Crie cupcakes em miniatura para degustação e eventos corporativos.</li>
              <li>Destaque a qualidade dos ingredientes e o fato de serem feitos artesanalmente.</li>
              <li>Ofereça opções para dietas específicas, como sem glúten ou veganos.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              Os cupcakes podem ser conservados em temperatura ambiente por até 2 dias em recipiente fechado. Se
              refrigerados, duram até 5 dias, mas devem ser consumidos em temperatura ambiente para melhor sabor e
              textura. O buttercream com manteiga não deve ficar exposto a temperaturas altas.
            </p>
          </>
        )

      // PÁSCOA
      case "ovo-pascoa-trufado-brigadeiro":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para a casca do ovo:</h3>
            <ul>
              <li>500g de chocolate ao leite de boa qualidade</li>
              <li>1 colher de sopa de óleo de coco</li>
            </ul>

            <h3>Para o recheio de brigadeiro:</h3>
            <ul>
              <li>2 latas de leite condensado (790g)</li>
              <li>6 colheres de sopa de cacau em pó</li>
              <li>2 colheres de sopa de manteiga sem sal</li>
              <li>1 pitada de sal</li>
            </ul>

            <h3>Para a decoração:</h3>
            <ul>
              <li>100g de chocolate ao leite derretido</li>
              <li>Chocolate granulado</li>
              <li>Confeitos coloridos</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Derreta o chocolate ao leite com o óleo de coco em banho-maria ou no micro-ondas.</li>
              <li>
                Tempere o chocolate: aqueça 2/3 do chocolate até 45°C, adicione o 1/3 restante e mexa até atingir 31°C.
              </li>
              <li>Com um pincel, aplique uma primeira camada de chocolate nas formas de ovo de Páscoa.</li>
              <li>Leve à geladeira por 5 minutos.</li>
              <li>Aplique uma segunda camada de chocolate e leve à geladeira por mais 5 minutos.</li>
              <li>Aplique uma terceira camada e leve à geladeira por 10 minutos.</li>
              <li>
                Enquanto isso, prepare o brigadeiro: em uma panela, misture o leite condensado, o cacau em pó, a
                manteiga e o sal.
              </li>
              <li>Cozinhe em fogo médio, mexendo sempre, até desgrudar do fundo da panela.</li>
              <li>Transfira para um prato e deixe esfriar até ficar morno.</li>
              <li>Retire as cascas de chocolate das formas, batendo levemente.</li>
              <li>Preencha uma metade da casca com o brigadeiro ainda morno.</li>
              <li>Aqueça uma assadeira e passe levemente a borda da outra metade da casca para derreter um pouco.</li>
              <li>Una as duas metades, pressionando levemente para selar.</li>
              <li>Decore com o chocolate derretido, chocolate granulado e confeitos.</li>
            </ol>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Ofereça em diferentes tamanhos: pequeno (250g), médio (500g) e grande (1kg).</li>
              <li>Embale em papel celofane colorido com fitas decorativas.</li>
              <li>
                Crie uma linha de ovos com diferentes recheios: brigadeiro tradicional, brigadeiro branco, brigadeiro de
                café, etc.
              </li>
              <li>Personalize com o nome do cliente na embalagem ou no próprio ovo.</li>
              <li>Destaque o fato de ser artesanal e feito com chocolate de qualidade.</li>
              <li>Ofereça degustação em pequenas porções para atrair clientes.</li>
              <li>Comece a divulgar e aceitar encomendas com pelo menos um mês de antecedência.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              O ovo de Páscoa trufado deve ser conservado em local fresco e seco, longe do calor e da umidade. Pode ser
              refrigerado, mas deve ser consumido em temperatura ambiente para melhor sabor e textura. Conserva-se por
              até 15 dias se bem armazenado.
            </p>
          </>
        )

      // OUTROS DOCES
      case "trufas-chocolate":
        return (
          <>
            <h2>Ingredientes</h2>
            <h3>Para a ganache:</h3>
            <ul>
              <li>400g de chocolate meio amargo de boa qualidade</li>
              <li>200ml de creme de leite fresco</li>
              <li>30g de manteiga sem sal</li>
              <li>1 colher de chá de extrato de baunilha</li>
              <li>1 colher de sopa de licor (opcional: Grand Marnier, Cointreau, Amaretto, etc.)</li>
            </ul>

            <h3>Para a cobertura (escolha uma ou mais):</h3>
            <ul>
              <li>200g de chocolate meio amargo para banhar</li>
              <li>Cacau em pó</li>
              <li>Coco ralado</li>
              <li>Pistache picado</li>
              <li>Amêndoas picadas</li>
              <li>Confeitos coloridos</li>
            </ul>

            <h2>Modo de Preparo</h2>
            <ol>
              <li>Pique o chocolate em pedaços pequenos e coloque em uma tigela.</li>
              <li>Aqueça o creme de leite até quase ferver e despeje sobre o chocolate.</li>
              <li>Deixe repousar por 1 minuto e depois misture até o chocolate derreter completamente.</li>
              <li>Adicione a manteiga, a baunilha e o licor (se estiver usando) e misture até incorporar.</li>
              <li>
                Cubra com filme plástico em contato com a superfície e leve à geladeira por pelo menos 4 horas ou até
                firmar.
              </li>
              <li>
                Com uma colher de chá ou um boleador de sorvete pequeno, retire porções da ganache e forme bolinhas.
              </li>
              <li>
                Trabalhe rapidamente para evitar que a ganache derreta. Se necessário, volte à geladeira por alguns
                minutos.
              </li>
              <li>
                Coloque as trufas em uma assadeira forrada com papel manteiga e leve ao congelador por 30 minutos.
              </li>
              <li>Para banhar em chocolate: derreta o chocolate para cobertura e tempere-o.</li>
              <li>
                Com a ajuda de um garfo, mergulhe cada trufa no chocolate, deixe escorrer o excesso e coloque sobre
                papel manteiga.
              </li>
              <li>
                Para outras coberturas: role as trufas no cacau em pó, coco ralado, pistache picado ou outros
                ingredientes de sua escolha.
              </li>
              <li>Deixe as trufas secarem completamente antes de embalar.</li>
            </ol>

            <h2>Variações</h2>
            <ul>
              <li>
                <strong>Trufa de Café:</strong> Adicione 1 colher de sopa de café solúvel à ganache.
              </li>
              <li>
                <strong>Trufa de Laranja:</strong> Adicione raspas de 1 laranja e 1 colher de sopa de licor de laranja à
                ganache.
              </li>
              <li>
                <strong>Trufa de Menta:</strong> Adicione algumas gotas de essência de menta à ganache.
              </li>
              <li>
                <strong>Trufa de Avelã:</strong> Adicione 2 colheres de sopa de pasta de avelã à ganache.
              </li>
              <li>
                <strong>Trufa de Caramelo Salgado:</strong> Adicione 2 colheres de sopa de caramelo e uma pitada de flor
                de sal à ganache.
              </li>
            </ul>

            <h2>Dicas para Venda</h2>
            <ul>
              <li>Ofereça caixas com mix de sabores em diferentes quantidades (6, 12, 24 unidades).</li>
              <li>Crie embalagens elegantes com divisórias para proteger as trufas.</li>
              <li>
                Desenvolva uma linha premium com ingredientes especiais como chocolate belga e licores importados.
              </li>
              <li>Ofereça a opção de personalização para eventos como casamentos e corporativos.</li>
              <li>Destaque o fato de serem artesanais e feitas com chocolate de qualidade.</li>
              <li>Crie edições sazonais com sabores específicos para datas comemorativas.</li>
              <li>Ofereça degustação em eventos e feiras para atrair clientes.</li>
            </ul>

            <h2>Conservação</h2>
            <p>
              As trufas devem ser conservadas em recipiente hermético na geladeira por até 2 semanas. Retire da
              geladeira 15-20 minutos antes de servir para melhor sabor e textura.
            </p>
          </>
        )

      default:
        return (
          <>
            <h2>Informações da Receita</h2>
            <p>
              Esta é a página para a receita de {recipe.title}. O conteúdo detalhado está sendo desenvolvido e estará
              disponível em breve.
            </p>
            <p>Enquanto isso, você pode explorar outras receitas disponíveis em nosso site.</p>

            <h2>Conteúdo em Desenvolvimento</h2>
            <ul>
              <li>Lista completa de ingredientes</li>
              <li>Instruções passo a passo</li>
              <li>Dicas profissionais</li>
              <li>Estratégias de venda</li>
              <li>Informações de conservação</li>
            </ul>

            <p>Volte em breve para conferir a receita completa!</p>
          </>
        )
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{recipe.description}</p>

        <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={recipe.image || "/placeholder.svg?height=400&width=600"}
            alt={recipe.title}
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
            <span>Tempo: {recipe.prepTime}</span>
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
            <span>Dificuldade: {recipe.difficulty}</span>
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
            <span>Potencial de Lucro: {recipe.profitPotential}</span>
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
            <span>Categoria: {recipe.category}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">{renderRecipeContent()}</div>
      </div>
    </div>
  )
}
