"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulando envio para API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Inscrição realizada com sucesso!",
      description: "Você receberá nossas novidades no email informado.",
    })

    setEmail("")
    setIsLoading(false)
  }

  return (
    <Card className="w-full bg-accent">
      <CardHeader>
        <CardTitle className="text-2xl">Receba nossas receitas</CardTitle>
        <CardDescription>
          Inscreva-se para receber receitas exclusivas e dicas de empreendedorismo em confeitaria.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Seu melhor email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Inscrevendo..." : "Inscrever-se"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
