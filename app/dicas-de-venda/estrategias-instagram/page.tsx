import AdSpace from "@/components/ad-space"
import NewsletterSignup from "@/components/newsletter-signup"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EstrategiasInstagramPage() {
  return (
    <div className="container py-8">
      <div className="mb-4">
        <Link href="/dicas-de-venda" className="text-primary hover:underline">
          ← Voltar para Dicas de Venda
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Como Usar o Instagram para Vender Doces e Dobrar Seu Faturamento</h1>

      <p className="text-lg mb-8">
        O Instagram é uma das melhores plataformas para vender doces online. Neste guia, você aprenderá a criar um
        perfil atrativo, produzir conteúdo envolvente e converter seguidores em clientes fiéis.
      </p>

      <div className="prose max-w-none mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-4">Criando um Perfil Atraente e Profissional</h2>
        <p>
          Seu perfil no Instagram é sua vitrine digital. Ele precisa transmitir profissionalismo e despertar desejo nos
          potenciais clientes. Comece com estes elementos essenciais:
        </p>
        <ul>
          <li>
            <strong>Nome de usuário e bio otimizada:</strong> Escolha um nome fácil de lembrar, preferencialmente
            relacionado à sua marca. Na bio, inclua o que você vende, área de entrega e um call-to-action claro.
          </li>
          <li>
            <strong>Foto de perfil profissional:</strong> Use seu logo ou uma imagem de alta qualidade que represente
            sua marca.
          </li>
          <li>
            <strong>Destaques organizados:</strong> Crie destaques para cardápio, depoimentos, perguntas frequentes,
            processo de encomenda e informações sobre entrega.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Conteúdo que Converte em Vendas</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Tipos de Posts para Confeitaria</h3>
        <p>Diversifique seu conteúdo para manter seu feed interessante e engajador:</p>
        <ul>
          <li>
            <strong>Fotos de produtos:</strong> Invista em fotografia de qualidade, com boa iluminação e composição.
            Mostre detalhes, texturas e apresente os doces de forma apetitosa.
          </li>
          <li>
            <strong>Bastidores da produção:</strong> Compartilhe o processo de criação dos seus doces. Isso humaniza sua
            marca e cria conexão com o público.
          </li>
          <li>
            <strong>Depoimentos de clientes:</strong> Poste feedbacks positivos e fotos enviadas por clientes
            satisfeitos. O marketing de prova social é extremamente eficaz.
          </li>
          <li>
            <strong>Conteúdo educativo:</strong> Compartilhe dicas, curiosidades e pequenos tutoriais relacionados à
            confeitaria.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Como Usar Reels e Stories para Engajar</h3>
        <p>Os formatos de vídeo são os mais favorecidos pelo algoritmo do Instagram atualmente:</p>
        <ul>
          <li>
            <strong>Reels:</strong> Crie vídeos curtos mostrando a finalização de um doce, o momento de cortar um bolo
            ou uma montagem de produtos. Use músicas populares e tendências para aumentar o alcance.
          </li>
          <li>
            <strong>Stories:</strong> Utilize diariamente para mostrar o dia a dia da produção, novidades, promoções
            relâmpago e para interagir com seu público através de enquetes e caixas de perguntas.
          </li>
        </ul>
        <p>
          <strong>Dica:</strong> Grave vários conteúdos de uma vez e programe-os para manter uma presença constante sem
          precisar criar conteúdo todos os dias.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Técnicas de Copywriting para Legendas e CTAs Poderosos</h3>
        <p>Suas legendas devem despertar desejo e incentivar a ação:</p>
        <ul>
          <li>Use descrições sensoriais que ativem os sentidos (ex: "crocante por fora e macio por dentro")</li>
          <li>Conte uma pequena história sobre o produto ou sua inspiração</li>
          <li>Inclua sempre um call-to-action claro (ex: "Encomende pelo link na bio" ou "Chame no direct")</li>
          <li>Faça perguntas para estimular comentários e aumentar o engajamento</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Estratégias de Venda no Instagram</h2>
        <p>
          <strong>Uso do Instagram Shopping:</strong> Configure o Instagram Shopping para que os clientes possam ver
          preços e informações ao tocar nas fotos dos seus produtos. Isso facilita a jornada de compra.
        </p>
        <p>
          <strong>Como fechar vendas pelo direct:</strong> Tenha respostas prontas para as perguntas mais frequentes,
          seja ágil nas respostas e tenha um processo claro de como o cliente deve proceder para finalizar a compra.
        </p>
        <p>
          <strong>Promoções e sorteios:</strong> Crie promoções sazonais e sorteios para aumentar seu alcance e atrair
          novos seguidores. Peça que as pessoas marquem amigos e compartilhem seu conteúdo como requisito para
          participar.
        </p>
        <p>
          <strong>Parcerias com influenciadores:</strong> Identifique micro-influenciadores locais que possam
          experimentar e divulgar seus produtos. Muitas vezes, uma permuta pode ser suficiente para uma boa divulgação.
        </p>
      </div>

      {/* Ad Space */}
      <AdSpace className="mb-8" />

      {/* CTA */}
      <div className="bg-primary/10 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-2">Comece a faturar mais hoje mesmo!</h3>
        <p className="mb-4">
          Inscreva-se no nosso curso gratuito de vendas pelo Instagram e aprenda estratégias avançadas para alavancar
          seu negócio.
        </p>
        <Button size="lg">Inscrever-se no Curso Gratuito</Button>
      </div>

      {/* Newsletter */}
      <div className="mb-8">
        <NewsletterSignup />
      </div>

      {/* Artigos Relacionados */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4">Artigos Relacionados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Como Precificar Seus Doces e Garantir Lucro</h4>
            <p className="mb-2">
              Aprenda a calcular custos, definir margens de lucro e criar precificação estratégica para diferentes
              nichos de clientes.
            </p>
            <Link href="/dicas-de-venda/como-precificar-seus-doces" className="text-primary hover:underline">
              Ler artigo →
            </Link>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Como Escolher Embalagens para Doces que Atraem e Encantam Clientes</h4>
            <p className="mb-2">
              Descubra quais são as melhores opções de embalagens para confeitaria e como utilizá-las estrategicamente.
            </p>
            <Link href="/dicas-de-venda/embalagens-que-valorizam" className="text-primary hover:underline">
              Ler artigo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
