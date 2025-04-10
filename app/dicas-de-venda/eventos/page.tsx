import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import AdSpace from "@/components/ad-space"
import NewsletterSignup from "@/components/newsletter-signup"

export default function EventosPage() {
  return (
    <div className="container py-8">
      <div className="mb-6">
        <Link href="/dicas-de-venda" className="text-primary hover:underline">
          ← Voltar para Dicas de Venda
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Participando de feiras e eventos gastronômicos</h1>

      <p className="text-lg mb-8">
        Feiras e eventos gastronômicos são excelentes oportunidades para confeitarias expandirem seu alcance e
        conquistarem novos clientes. Este guia completo ensina desde a inscrição até a montagem do stand e abordagem dos
        visitantes.
      </p>

      <div className="prose max-w-none mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-4">Vantagens de participar de feiras gastronômicas</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Exposição da marca</h3>
        <p>
          Participar de eventos gastronômicos coloca sua marca diante de centenas ou milhares de potenciais clientes em
          um único dia. É uma oportunidade única de apresentar seus produtos para um público interessado em gastronomia
          e disposto a experimentar novidades.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Captação de novos clientes</h3>
        <p>
          Feiras são ambientes perfeitos para conquistar novos clientes. Pessoas que talvez nunca entrassem em sua loja
          ou visitassem seu perfil nas redes sociais têm a chance de experimentar seus produtos e conhecer sua marca de
          perto.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Networking e parcerias</h3>
        <p>
          Além do contato com clientes, eventos gastronômicos permitem conhecer outros empreendedores, fornecedores e
          profissionais do setor. Essas conexões podem resultar em parcerias valiosas, como fornecimento para cafeterias
          ou colaborações com outros negócios.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Como escolher os eventos certos para sua confeitaria</h2>
        <p>
          Nem todos os eventos são adequados para qualquer tipo de confeitaria. Pesquise o perfil do público, o
          histórico do evento, os custos envolvidos e o retorno potencial. Comece com eventos menores e locais antes de
          investir em feiras maiores e mais caras.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Planejamento e preparativos para eventos</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Inscrição e burocracia</h3>
        <p>
          Fique atento aos prazos de inscrição, que geralmente abrem meses antes do evento. Verifique toda a
          documentação necessária, como licenças sanitárias temporárias, e os requisitos específicos do evento para
          manipulação de alimentos.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Escolha do cardápio ideal</h3>
        <p>
          Selecione produtos que sejam práticos para servir em um evento, resistentes às condições do local
          (temperatura, transporte) e que representem bem o que sua confeitaria oferece. Considere criar versões em
          miniatura ou amostras de seus produtos mais populares.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Montagem do stand e decoração</h3>
        <p>
          Invista em uma apresentação visual atraente que reflita a identidade da sua marca. Use elementos que chamem
          atenção, como iluminação adequada, displays criativos para os produtos e uma sinalização clara com o nome da
          sua confeitaria.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Ações promocionais no evento</h3>
        <p>
          Prepare materiais promocionais como cartões de visita, flyers com informações de contato e cupons de desconto
          para incentivar visitas futuras à sua loja ou site. Considere oferecer degustações gratuitas de produtos
          selecionados.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Como engajar e atrair visitantes para seu stand</h2>
        <p>
          Crie uma abordagem amigável e não-invasiva. Sorria, faça contato visual e inicie conversas genuínas.
          Demonstrações ao vivo, como decoração de cupcakes ou montagem de doces, podem atrair curiosos e criar uma
          experiência memorável.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Dicas para vender mais durante o evento</h2>
        <p>
          Ofereça promoções exclusivas para o evento, como "leve 3, pague 2" ou descontos progressivos para compras
          maiores. Aceite diversos meios de pagamento, incluindo cartões e PIX. Tenha embalagens práticas para consumo
          imediato e outras para presente ou transporte.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Como manter o relacionamento com os contatos após o evento</h2>
        <p>
          Colete contatos durante o evento através de sorteios, cadastros para newsletter ou cupons de desconto. Faça um
          follow-up nos dias seguintes, agradecendo a visita e oferecendo algum benefício para a primeira compra online
          ou na loja física.
        </p>
      </div>

      <Card className="p-6 mb-8 bg-primary/10 border-primary">
        <h3 className="text-xl font-bold mb-2">Quer fazer sua confeitaria se destacar em eventos?</h3>
        <Button className="mt-2">Confira nossas dicas essenciais!</Button>
      </Card>

      <AdSpace className="mb-8" />

      <div className="mb-8">
        <NewsletterSignup />
      </div>

      <h3 className="text-xl font-bold mb-4">Artigos Relacionados</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Card className="p-4">
          <h4 className="font-bold mb-2">Aproveitando datas comemorativas para aumentar vendas</h4>
          <p className="text-sm mb-2">Estratégias para maximizar seu faturamento em períodos sazonais.</p>
          <Link href="/dicas-de-venda/sazonalidade" className="text-primary hover:underline">
            Ler mais →
          </Link>
        </Card>
        <Card className="p-4">
          <h4 className="font-bold mb-2">Como fidelizar clientes no ramo de confeitaria</h4>
          <p className="text-sm mb-2">Transforme compradores ocasionais em clientes fiéis e recorrentes.</p>
          <Link href="/dicas-de-venda/fidelizacao" className="text-primary hover:underline">
            Ler mais →
          </Link>
        </Card>
      </div>
    </div>
  )
}
