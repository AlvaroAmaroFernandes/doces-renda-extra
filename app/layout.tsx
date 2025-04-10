import type React from "react"
import type { Metadata } from "next"
import ClientLayout from "./clientLayout"

export const metadata: Metadata = {
  title: "Doces & Negócios | Blog para Confeiteiros Empreendedores",
  description: "Receitas, dicas de negócios e inspiração para confeiteiros que querem empreender.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'