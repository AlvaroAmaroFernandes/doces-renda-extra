import { BusinessTipCard } from "@/components/business-tip-card"

export default function DicasDeVenda() {
  const dicas = [
    {
      id: "como-precificar-seus-doces",
      title: "Como Precificar Seus Doces",
      description:
        "Aprenda a calcular o preço justo para seus produtos, considerando ingredientes, tempo e valor do seu trabalho.",
      category: "Gestão",
    },
    {
      id: "embalagens-que-valorizam",
      title: "Embalagens que Valorizam",
      description: "Descubra como escolher embalagens que protegem seus produtos e ainda encantam seus clientes.",
      category: "Marketing",
    },
    {
      id: "estrategias-instagram",
      title: "Estratégias para Instagram",
      description: "Dicas práticas para usar o Instagram para promover seus doces e aumentar suas vendas.",
      category: "Marketing Digital",
    },
    {
      id: "fidelizacao",
      title: "Fidelização de Clientes",
      description: "Estratégias para transformar clientes ocasionais em fãs fiéis da sua confeitaria.",
      category: "Marketing",
    },
    {
      id: "eventos",
      title: "Como Vender em Eventos",
      description: "Guia completo para aproveitar feiras e eventos para divulgar e vender seus produtos.",
      category: "Vendas",
    },
    {
      id: "sazonalidade",
      title: "Aproveitando a Sazonalidade",
      description: "Como criar produtos especiais para datas comemorativas e aumentar seu faturamento.",
      category: "Estratégia",
    },
    {
      id: "delivery",
      title: "Montando seu Delivery",
      description: "Dicas para estruturar um serviço de entrega eficiente e que preserve a qualidade dos seus doces.",
      category: "Logística",
    },
    {
      id: "formalizacao",
      title: "Formalização do Negócio",
      description: "Passo a passo para formalizar sua confeitaria e trabalhar dentro das normas legais.",
      category: "Legal",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Dicas de Venda para Confeiteiros</h1>

      <p className="text-lg text-center max-w-3xl mx-auto mb-12">
        Transforme sua paixão por confeitaria em um negócio lucrativo com nossas dicas exclusivas para empreendedores do
        mundo dos doces.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dicas.map((dica) => (
          <BusinessTipCard
            key={dica.id}
            id={dica.id}
            title={dica.title}
            description={dica.description}
            category={dica.category}
          />
        ))}
      </div>
    </div>
  )
}
