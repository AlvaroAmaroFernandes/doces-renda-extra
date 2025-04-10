import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Doces & Negócios</h3>
            <p className="text-sm text-muted-foreground">
              Transformando paixão por confeitaria em oportunidades de negócio.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-pink-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-pink-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-pink-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-pink-600">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/receitas" className="text-sm text-muted-foreground hover:text-pink-600">
                  Receitas
                </Link>
              </li>
              <li>
                <Link href="/dicas-de-venda" className="text-sm text-muted-foreground hover:text-pink-600">
                  Dicas de Venda
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/historias-de-sucesso" className="text-sm text-muted-foreground hover:text-pink-600">
                  Histórias de Sucesso
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm text-muted-foreground hover:text-pink-600">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politica-de-privacidade" className="text-sm text-muted-foreground hover:text-pink-600">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-uso" className="text-sm text-muted-foreground hover:text-pink-600">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Doces & Negócios. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
