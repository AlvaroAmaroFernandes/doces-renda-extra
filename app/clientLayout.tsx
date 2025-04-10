"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

// Adicione este script para pré-carregar imagens críticas
import { preloadCriticalImages } from "@/utils/image-preloader"

// No componente RootLayout, adicione um useEffect para pré-carregar imagens
import { useEffect } from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Pré-carrega imagens críticas
    preloadCriticalImages()
  }, [])

  // Adicione este script para inicializar as imagens e verificar se elas existem
  const scriptContent = `
    try {
      // Inicializar imagens das receitas
      if (typeof window !== "undefined") {
        // Função para inicializar imagens
        const initImages = () => {
          try {
            // Importar funções dinamicamente
            import('/utils/recipe-images.js').then(module => {
              if (module.initializeRecipeImages) {
                module.initializeRecipeImages();
              }
              
              if (module.preloadCriticalImages) {
                module.preloadCriticalImages();
              }
            });
            
            // Pré-carregar imagens críticas diretamente
            const criticalImages = [
              "/images/macarons-franceses-6.png",
              "/images/macarons-franceses-5.png",
              "/images/macarons-franceses-4.png",
              "/images/brownies-recheados-3.png",
              "/images/cupcakes-decorados-2.png",
              "/images/bolo-chocolate-morango-3.png",
              "/images/torta-de-limao-6.png",
              "/images/pao-de-mel-5.png",
              "/images/cookies-americanos-4.png",
              "/images/brownie-tradicional-5.png",
            ];
            
            criticalImages.forEach(src => {
              const img = new Image();
              img.src = src;
            });
            
            // Verificar e corrigir imagens que não carregam
            document.addEventListener('error', function(e) {
              const target = e.target;
              if (target.tagName === 'IMG') {
                const src = target.getAttribute('src');
                if (src && !src.includes('placeholder.svg')) {
                  // Extrair o ID da receita do caminho da imagem ou do contexto
                  let recipeId = '';
                  
                  // Tentar extrair do caminho da URL
                  if (src.includes('/images/')) {
                    const pathParts = src.split('/');
                    const filename = pathParts[pathParts.length - 1];
                    const nameParts = filename.split('-');
                    if (nameParts.length >= 2) {
                      recipeId = nameParts[0] + '-' + nameParts[1];
                    }
                  }
                  
                  // Tentar extrair do contexto da página
                  if (!recipeId) {
                    const currentPath = window.location.pathname;
                    if (currentPath.includes('/receitas/')) {
                      const pathParts = currentPath.split('/');
                      recipeId = pathParts[pathParts.length - 1];
                    }
                  }
                  
                  // Tentar usar o mapeamento direto
                  const recipeImageMap = {
                    "brownies-recheados": "/images/brownies-recheados-3.png",
                    "cupcakes-decorados": "/images/cupcakes-decorados-2.png",
                    "macarons-franceses": "/images/macarons-franceses-6.png",
                    "bolo-chocolate-com-morango": "/images/bolo-chocolate-morango-3.png",
                    "torta-de-limao": "/images/torta-de-limao-6.png",
                    "pao-de-mel": "/images/pao-de-mel-5.png",
                    "cookies-americanos": "/images/cookies-americanos-4.png",
                    "brownie-tradicional": "/images/brownie-tradicional-5.png",
                  };
                  
                  if (recipeId && recipeImageMap[recipeId]) {
                    console.log('Corrigindo imagem para: ' + recipeImageMap[recipeId]);
                    target.src = recipeImageMap[recipeId];
                  } else {
                    // Se ainda falhar, use um placeholder
                    target.src = "/placeholder.svg?height=400&width=600";
                  }
                }
              }
            }, true);
          } catch (error) {
            console.error("Erro ao inicializar imagens:", error);
          }
        };
        
        // Executar após o carregamento da página
        if (document.readyState === 'complete') {
          initImages();
        } else {
          window.addEventListener('load', initImages);
        }
      }
    } catch (error) {
      console.error("Erro no script de inicialização de imagens:", error);
    }
  `

  return (
    <html lang="pt-BR">
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
