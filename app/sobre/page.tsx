import Image from "next/image"
import NewsletterSignup from "@/components/newsletter-signup"

export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-6">Sobre Nós</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
          <p className="text-lg mb-4">
            O Doces & Negócios nasceu com a missão de ajudar pessoas apaixonadas por confeitaria a transformarem essa
            paixão em uma fonte de renda.
          </p>
          <p className="text-lg mb-4">
            Acreditamos que compartilhar conhecimento é a melhor forma de fortalecer a comunidade de confeiteiros e
            empreendedores do Brasil.
          </p>
          <p className="text-lg">
            Nosso objetivo é fornecer receitas testadas, dicas práticas de negócios e inspiração para que você possa
            iniciar ou expandir seu empreendimento na área de confeitaria.
          </p>
        </div>
        <div className="relative h-[300px] md:h-auto rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Equipe Doces & Negócios"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Nossa História</h2>
        <p className="text-lg mb-4">
          O Doces & Negócios foi fundado em 2023 por um grupo de confeiteiros profissionais e empreendedores que
          perceberam a falta de conteúdo específico para quem deseja empreender na área de confeitaria.
        </p>
        <p className="text-lg mb-4">
          Após anos trabalhando no mercado e enfrentando os desafios de iniciar um negócio neste setor, decidimos
          compartilhar nosso conhecimento e experiência para ajudar outras pessoas a evitarem os erros que cometemos e a
          alcançarem o sucesso mais rapidamente.
        </p>
        <p className="text-lg">
          Hoje, contamos com uma equipe de especialistas em diversas áreas da confeitaria e do empreendedorismo, todos
          comprometidos em fornecer o melhor conteúdo para nossa comunidade.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="text-center">
          <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold">50+</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Receitas Testadas</h3>
          <p className="text-muted-foreground">
            Todas as nossas receitas são testadas múltiplas vezes para garantir resultados perfeitos.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold">30+</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Dicas de Negócios</h3>
          <p className="text-muted-foreground">
            Conteúdo prático sobre empreendedorismo focado no mercado de confeitaria.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-accent rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl font-bold">10k+</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Leitores Mensais</h3>
          <p className="text-muted-foreground">Uma comunidade crescente de confeiteiros e empreendedores.</p>
        </div>
      </div>

      <div className="bg-muted p-8 rounded-lg mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Nossa Equipe</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="Foto de perfil" fill className="object-cover" />
            </div>
            <h3 className="font-bold">Ana Martins</h3>
            <p className="text-sm text-muted-foreground">Confeiteira Chefe</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="Foto de perfil" fill className="object-cover" />
            </div>
            <h3 className="font-bold">Pedro Santos</h3>
            <p className="text-sm text-muted-foreground">Especialista em Marketing</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="Foto de perfil" fill className="object-cover" />
            </div>
            <h3 className="font-bold">Carla Oliveira</h3>
            <p className="text-sm text-muted-foreground">Consultora de Negócios</p>
          </div>
          <div className="text-center">
            <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden">
              <Image src="/placeholder.svg?height=200&width=200" alt="Foto de perfil" fill className="object-cover" />
            </div>
            <h3 className="font-bold">Lucas Ferreira</h3>
            <p className="text-sm text-muted-foreground">Chef Pâtissier</p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Junte-se à Nossa Comunidade</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Receba nossas receitas, dicas de negócios e histórias inspiradoras diretamente no seu email.
        </p>
        <NewsletterSignup />
      </div>
    </div>
  )
}
