import AdSpace from "@/components/ad-space"
import NewsletterSignup from "@/components/newsletter-signup"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PrecificacaoPage() {
  return (
    <div className="container py-8">
      <div className="mb-4">
        <Link href="/dicas-de-venda" className="text-primary hover:underline">
          ← Voltar para Dicas de Venda
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">
        Como Precificar Seus Doces e Garantir Lucro: Guia Completo para Confeiteiros
      </h1>

      <p className="text-lg mb-8">
        Definir corretamente o preço dos seus doces é essencial para manter um negócio lucrativo e competitivo. Neste
        guia completo, você aprenderá a calcular custos, definir margens de lucro e criar precificação estratégica para
        diferentes nichos de clientes.
      </p>

      <div className="prose max-w-none mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-4">A Importância de uma Precificação Inteligente</h2>
        <p>
          A precificação é um dos pilares mais importantes do seu negócio de confeitaria. Ela não apenas determina sua
          margem de lucro, mas também posiciona seu produto no mercado e influencia diretamente a percepção de valor que
          seus clientes têm sobre seus doces.
        </p>
        <p>
          Muitos confeiteiros iniciantes cometem o erro de precificar seus produtos baseando-se apenas no custo dos
          ingredientes, esquecendo de fatores cruciais como tempo de trabalho, energia elétrica, depreciação de
          equipamentos e até mesmo o valor do seu conhecimento e habilidade.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Cálculo Passo a Passo do Preço Ideal</h2>

        <h3 className="text-xl font-semibold mt-6 mb-3">Identifique Todos os Custos</h3>
        <ul>
          <li>
            <strong>Ingredientes:</strong> Anote o valor de cada ingrediente utilizado na receita, considerando a
            quantidade exata. Use uma balança de precisão para medições mais acuradas.
          </li>
          <li>
            <strong>Embalagens:</strong> Inclua caixas, forminhas, fitas, tags e qualquer material usado para
            apresentação do produto.
          </li>
          <li>
            <strong>Tempo de trabalho:</strong> Defina um valor para sua hora de trabalho e multiplique pelo tempo gasto
            na produção. Não subestime este valor!
          </li>
          <li>
            <strong>Energia e outros custos fixos:</strong> Calcule uma porcentagem dos gastos com luz, gás, água,
            aluguel (se aplicável) e internet para marketing.
          </li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Defina a Margem de Lucro</h3>
        <p>
          Após somar todos os custos, você terá o custo total de produção. A partir daí, é necessário aplicar uma margem
          de lucro, que geralmente varia entre 30% e 100%, dependendo do tipo de produto e do mercado em que você atua.
        </p>
        <p>
          <strong>Fórmula básica:</strong> Preço de venda = Custo total ÷ (1 - Margem de lucro desejada em decimal)
        </p>
        <p>
          Por exemplo, se seu custo total é R$20 e você deseja uma margem de 40%:
          <br />
          Preço de venda = R$20 ÷ (1 - 0,4) = R$20 ÷ 0,6 = R$33,33
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Precificação Baseada no Mercado</h3>
        <p>
          Além do cálculo baseado em custos, é importante analisar o que o mercado está praticando. Pesquise os preços
          da concorrência, mas lembre-se de comparar produtos de qualidade similar.
        </p>
        <p>
          Se seus produtos oferecem diferenciais como ingredientes premium, decoração elaborada ou atendimento
          personalizado, você pode justificar um preço mais elevado através do valor percebido.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Dicas Avançadas para Maximizar o Lucro</h2>
        <p>
          <strong>Precificação psicológica:</strong> Preços como R$19,90 em vez de R$20,00 podem parecer
          significativamente mais baratos aos olhos do consumidor. Utilize essa estratégia para produtos com maior
          sensibilidade a preço.
        </p>
        <p>
          <strong>Criando pacotes e promoções:</strong> Ofereça descontos em compras maiores ou crie kits que combinem
          diferentes produtos. Isso aumenta o ticket médio sem necessariamente reduzir sua margem de lucro.
        </p>
        <p>
          <strong>Produtos premium:</strong> Tenha em seu cardápio opções mais elaboradas e exclusivas com margens de
          lucro maiores. Esses produtos não apenas aumentam seu faturamento, mas também elevam o status da sua marca.
        </p>
      </div>

      {/* Ad Space */}
      <AdSpace className="mb-8" />

      {/* CTA */}
      <div className="bg-primary/10 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-2">Simplifique seus cálculos de precificação!</h3>
        <p className="mb-4">
          Baixe nossa planilha gratuita de precificação e nunca mais tenha dúvidas sobre quanto cobrar pelos seus doces.
        </p>
        <Button size="lg">Baixar Planilha Gratuita</Button>
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
            <h4 className="font-bold mb-2">Como Escolher Embalagens para Doces que Atraem e Encantam Clientes</h4>
            <p className="mb-2">
              Descubra quais são as melhores opções de embalagens para confeitaria e como utilizá-las estrategicamente.
            </p>
            <Link href="/dicas-de-venda/embalagens-que-valorizam" className="text-primary hover:underline">
              Ler artigo →
            </Link>
          </div>
          <div className="border p-4 rounded-lg">
            <h4 className="font-bold mb-2">Como Usar o Instagram para Vender Doces e Dobrar Seu Faturamento</h4>
            <p className="mb-2">
              Aprenda a criar um perfil atrativo, produzir conteúdo envolvente e converter seguidores em clientes fiéis.
            </p>
            <Link href="/dicas-de-venda/estrategias-instagram" className="text-primary hover:underline">
              Ler artigo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
