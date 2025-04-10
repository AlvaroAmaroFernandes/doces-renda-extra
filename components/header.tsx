"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Início", href: "/" },
  { title: "Receitas", href: "/receitas" },
  { title: "Dicas de Venda", href: "/dicas-de-venda" },
  { title: "Histórias de Sucesso", href: "/historias-de-sucesso" },
  { title: "Sobre", href: "/sobre" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-pink-600">Doces & Negócios</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-pink-600"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className={cn("container md:hidden overflow-hidden transition-all", isMenuOpen ? "max-h-96" : "max-h-0")}>
        <nav className="flex flex-col space-y-4 py-4">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
