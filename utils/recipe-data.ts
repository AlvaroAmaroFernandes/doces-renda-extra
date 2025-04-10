export interface Recipe {
  id: string
  title: string
  description: string
  image: string
  prepTime: string
  difficulty: "Fácil" | "Médio" | "Difícil" | "Médio-Avançado"
  profitPotential: "Baixo" | "Médio" | "Alto"
  category: string
  slug: string
}

// Atualizar as URLs das imagens para as receitas específicas no objeto imageUrls
const imageUrls: Record<string, string> = {
  "brigadeiro-gourmet": "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=800",
  "brownie-tradicional": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800",
  "cookies-americanos": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "torta-de-limao":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6c47b8fb5195c9c0ad642160a9b88e50-3zekMIUz9riPdmyAdJ1XIMrdZMYlij.png", // Nova imagem da torta de limão
  "pao-de-mel":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c8b6666abb1bb0f939155fbdae852ee7-e4328ZI5CTSwEZMGtsgudkGEPXF8uR.png", // Nova imagem do pão de mel
  "macarons-franceses": "https://images.unsplash.com/photo-1569864358642-9d1684040f43?q=80&w=800",
  "cupcakes-decorados": "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=800",
  "brownies-recheados":
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5aec7c9f4d368775a20b5fedab100968-WLzaES4PhIcFAoDICW3TkYuSRL5tFC.png", // Nova imagem dos brownies recheados
  "bolo-chocolate-com-morango": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
  "trufas-chocolate": "https://images.unsplash.com/photo-1548329408-0bcd6e68058d?q=80&w=800",
  "alfajor-argentino": "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=800",
  "bolo-cenoura-chocolate": "https://images.unsplash.com/photo-1562440499-64c9a111f713?q=80&w=800",
  "palha-italiana": "https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&w=800",
  "blondie-frutas-vermelhas": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800",
  "brownie-blondie-frutas": "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800",
  "cookie-oreo": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "cookie-brigadeiro": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "cookie-nutella": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "cookie-doce-de-leite": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "cookie-ninho-nutella": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "cookies-recheados": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "cookie-chocolate-branco": "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800",
  "ovo-pascoa-trufado-brigadeiro": "https://images.unsplash.com/photo-1521938248021-3d9184273636?q=80&w=800",
  "ovo-pascoa-colher-ninho-nutella": "https://images.unsplash.com/photo-1521938248021-3d9184273636?q=80&w=800",
  "ovo-pascoa-brownie-doce-leite": "https://images.unsplash.com/photo-1521938248021-3d9184273636?q=80&w=800",
  "ovo-pascoa-trufado-brownie-caramelo": "https://images.unsplash.com/photo-1521938248021-3d9184273636?q=80&w=800",
  "ovo-pascoa-pistache-chocolate-branco": "https://images.unsplash.com/photo-1521938248021-3d9184273636?q=80&w=800",
  "brownie-brigadeiro": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800",
  "brownie-oreo": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800",
  "brownie-pistache": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800",
  "brownie-pacoca": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800",
  "brownie-doce-de-leite": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800",
  "brownie-nutella": "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800",
}

// Imagem de fallback padrão
const defaultImage = "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800"

export const recipes: Recipe[] = [
  // Receitas existentes
  {
    id: "brigadeiro-gourmet",
    title: "Brigadeiro Gourmet",
    description: "Brigadeiros artesanais com cacau premium e decoração sofisticada, perfeitos para eventos especiais.",
    image: imageUrls["brigadeiro-gourmet"] || defaultImage,
    prepTime: "30 min",
    difficulty: "Fácil",
    profitPotential: "Alto",
    category: "Chocolates",
    slug: "/receitas/brigadeiro-gourmet",
  },
  {
    id: "brownie-tradicional",
    title: "Brownie Tradicional",
    description:
      "Brownie denso e úmido com chocolate meio amargo e nozes, perfeito para vender em pedaços individuais.",
    image: imageUrls["brownie-tradicional"] || defaultImage,
    prepTime: "45 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownie-tradicional",
  },
  {
    id: "cookies-americanos",
    title: "Cookies Americanos",
    description:
      "Cookies estilo americano com gotas de chocolate e textura perfeita: crocante por fora e macio por dentro.",
    image: imageUrls["cookies-americanos"] || defaultImage,
    prepTime: "40 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookies-americanos",
  },
  {
    id: "torta-de-limao",
    title: "Torta de Limão",
    description: "Torta de limão com base crocante, recheio cremoso e cobertura de merengue italiano.",
    image: imageUrls["torta-de-limao"] || defaultImage,
    prepTime: "60 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Tortas",
    slug: "/receitas/torta-de-limao",
  },
  {
    id: "pao-de-mel",
    title: "Pão de Mel",
    description: "Pão de mel macio e perfumado com especiarias, recheado com doce de leite e coberto com chocolate.",
    image: imageUrls["pao-de-mel"] || defaultImage,
    prepTime: "50 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Doces",
    slug: "/receitas/pao-de-mel",
  },
  {
    id: "macarons-franceses",
    title: "Macarons Franceses",
    description: "Delicados macarons franceses com casquinha crocante e recheio cremoso em diversos sabores.",
    image: imageUrls["macarons-franceses"] || defaultImage,
    prepTime: "90 min",
    difficulty: "Difícil",
    profitPotential: "Alto",
    category: "Confeitaria",
    slug: "/receitas/macarons-franceses",
  },
  {
    id: "cupcakes-decorados",
    title: "Cupcakes Decorados",
    description: "Cupcakes macios com coberturas elaboradas, perfeitos para festas e eventos especiais.",
    image: imageUrls["cupcakes-decorados"] || defaultImage,
    prepTime: "60 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/cupcakes-decorados",
  },
  {
    id: "brownies-recheados",
    title: "Brownies Recheados",
    description: "Brownies indulgentes com recheios cremosos como doce de leite, Nutella e cream cheese.",
    image: imageUrls["brownies-recheados"] || defaultImage,
    prepTime: "55 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownies-recheados",
  },
  {
    id: "bolo-chocolate-com-morango",
    title: "Bolo de Chocolate com Morango",
    description: "Bolo de chocolate fofinho com camadas de chantilly e morangos frescos, finalizado com ganache.",
    image: imageUrls["bolo-chocolate-com-morango"] || defaultImage,
    prepTime: "90 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/bolo-chocolate-com-morango",
  },
  {
    id: "trufas-chocolate",
    title: "Trufas de Chocolate",
    description: "Trufas de chocolate belga com diversos sabores e coberturas, perfeitas para presentes.",
    image: imageUrls["trufas-chocolate"] || defaultImage,
    prepTime: "60 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Chocolates",
    slug: "/receitas/trufas-chocolate",
  },
  {
    id: "alfajor-argentino",
    title: "Alfajor Argentino",
    description: "Alfajor tradicional com biscoito macio, doce de leite e cobertura de chocolate.",
    image: imageUrls["alfajor-argentino"] || defaultImage,
    prepTime: "70 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Doces",
    slug: "/receitas/alfajor-argentino",
  },
  {
    id: "bolo-cenoura-chocolate",
    title: "Bolo de Cenoura com Chocolate",
    description: "Bolo de cenoura úmido com cobertura de ganache de chocolate meio amargo.",
    image: imageUrls["bolo-cenoura-chocolate"] || defaultImage,
    prepTime: "60 min",
    difficulty: "Fácil",
    profitPotential: "Médio",
    category: "Bolos",
    slug: "/receitas/bolo-cenoura-chocolate",
  },
  {
    id: "palha-italiana",
    title: "Palha Italiana",
    description: "Doce brasileiro feito com chocolate e biscoito, cortado em quadradinhos.",
    image: imageUrls["palha-italiana"] || defaultImage,
    prepTime: "40 min",
    difficulty: "Fácil",
    profitPotential: "Médio",
    category: "Doces",
    slug: "/receitas/palha-italiana",
  },
  {
    id: "blondie-frutas-vermelhas",
    title: "Blondie com Frutas Vermelhas",
    description:
      "O blondie é a versão branquinha do brownie, e aqui ele ganha um toque especial com frutas vermelhas para equilibrar o sabor doce.",
    image: imageUrls["blondie-frutas-vermelhas"] || defaultImage,
    prepTime: "50 minutos",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Sobremesas",
    slug: "/receitas/blondie-frutas-vermelhas",
  },
  {
    id: "brownie-blondie-frutas",
    title: "Brownie-Blondie com Frutas Vermelhas",
    description:
      "Uma combinação perfeita entre o brownie tradicional de chocolate e o blondie com frutas vermelhas, criando uma sobremesa única.",
    image: imageUrls["brownie-blondie-frutas"] || defaultImage,
    prepTime: "60 minutos",
    difficulty: "Médio-Avançado",
    profitPotential: "Alto",
    category: "Sobremesas",
    slug: "/receitas/brownie-blondie-frutas",
  },
  {
    id: "cookie-oreo",
    title: "Cookie de Oreo",
    description:
      "Cookie macio com pedaços de Oreo, combinando a textura do cookie com o sabor inconfundível do biscoito.",
    image: imageUrls["cookie-oreo"] || defaultImage,
    prepTime: "45 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookie-oreo",
  },
  {
    id: "cookie-brigadeiro",
    title: "Cookie de Brigadeiro",
    description: "Cookie com gotas de chocolate e recheio cremoso de brigadeiro, uma combinação irresistível.",
    image: imageUrls["cookie-brigadeiro"] || defaultImage,
    prepTime: "50 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookie-brigadeiro",
  },
  {
    id: "cookie-nutella",
    title: "Cookie de Nutella",
    description: "Cookie macio com recheio generoso de Nutella, perfeito para os amantes de chocolate com avelã.",
    image: imageUrls["cookie-nutella"] || defaultImage,
    prepTime: "45 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookie-nutella",
  },
  {
    id: "cookie-doce-de-leite",
    title: "Cookie de Doce de Leite",
    description: "Cookie amanteigado com recheio cremoso de doce de leite, uma combinação perfeita de sabores.",
    image: imageUrls["cookie-doce-de-leite"] || defaultImage,
    prepTime: "45 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookie-doce-de-leite",
  },
  {
    id: "cookie-ninho-nutella",
    title: "Cookie de Ninho com Nutella",
    description: "Cookie com sabor de leite Ninho e recheio de Nutella, uma combinação irresistível que todos amam.",
    image: imageUrls["cookie-ninho-nutella"] || defaultImage,
    prepTime: "50 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookie-ninho-nutella",
  },
  {
    id: "cookies-recheados",
    title: "Cookies Recheados",
    description: "Cookies recheados com diversos sabores, desde chocolate até caramelo, perfeitos para venda.",
    image: imageUrls["cookies-recheados"] || defaultImage,
    prepTime: "60 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookies-recheados",
  },
  {
    id: "cookie-chocolate-branco",
    title: "Cookie de Chocolate Branco",
    description: "Cookie com gotas de chocolate branco e textura perfeita, uma opção diferente e deliciosa.",
    image: imageUrls["cookie-chocolate-branco"] || defaultImage,
    prepTime: "45 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Biscoitos",
    slug: "/receitas/cookie-chocolate-branco",
  },
  // Adicionando as receitas que estavam faltando
  {
    id: "ovo-pascoa-trufado-brigadeiro",
    title: "Ovo de Páscoa Trufado de Brigadeiro",
    description: "Ovo de Páscoa com casca de chocolate ao leite e recheio cremoso de brigadeiro gourmet.",
    image: imageUrls["ovo-pascoa-trufado-brigadeiro"] || defaultImage,
    prepTime: "120 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Páscoa",
    slug: "/receitas/ovo-pascoa-trufado-brigadeiro",
  },
  {
    id: "ovo-pascoa-colher-ninho-nutella",
    title: "Ovo de Páscoa de Colher Ninho com Nutella",
    description: "Ovo de Páscoa para comer de colher com camadas de chocolate, creme de Ninho e Nutella.",
    image: imageUrls["ovo-pascoa-colher-ninho-nutella"] || defaultImage,
    prepTime: "150 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Páscoa",
    slug: "/receitas/ovo-pascoa-colher-ninho-nutella",
  },
  {
    id: "ovo-pascoa-brownie-doce-leite",
    title: "Ovo de Páscoa com Brownie e Doce de Leite",
    description: "Ovo de Páscoa com pedaços de brownie e doce de leite cremoso, uma combinação irresistível.",
    image: imageUrls["ovo-pascoa-brownie-doce-leite"] || defaultImage,
    prepTime: "180 min",
    difficulty: "Difícil",
    profitPotential: "Alto",
    category: "Páscoa",
    slug: "/receitas/ovo-pascoa-brownie-doce-leite",
  },
  {
    id: "ovo-pascoa-trufado-brownie-caramelo",
    title: "Ovo de Páscoa Trufado com Brownie e Caramelo",
    description: "Ovo de Páscoa com casca de chocolate meio amargo, recheado com brownie e caramelo salgado.",
    image: imageUrls["ovo-pascoa-trufado-brownie-caramelo"] || defaultImage,
    prepTime: "180 min",
    difficulty: "Difícil",
    profitPotential: "Alto",
    category: "Páscoa",
    slug: "/receitas/ovo-pascoa-trufado-brownie-caramelo",
  },
  {
    id: "ovo-pascoa-pistache-chocolate-branco",
    title: "Ovo de Páscoa de Pistache com Chocolate Branco",
    description: "Ovo de Páscoa sofisticado com chocolate branco e pistache, uma combinação elegante e saborosa.",
    image: imageUrls["ovo-pascoa-pistache-chocolate-branco"] || defaultImage,
    prepTime: "150 min",
    difficulty: "Difícil",
    profitPotential: "Alto",
    category: "Páscoa",
    slug: "/receitas/ovo-pascoa-pistache-chocolate-branco",
  },
  {
    id: "brownie-brigadeiro",
    title: "Brownie de Brigadeiro",
    description: "Brownie úmido com camada generosa de brigadeiro cremoso, uma combinação perfeita de texturas.",
    image: imageUrls["brownie-brigadeiro"] || defaultImage,
    prepTime: "60 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownie-brigadeiro",
  },
  {
    id: "brownie-oreo",
    title: "Brownie de Oreo",
    description:
      "Brownie com pedaços de Oreo na massa e cobertura, uma combinação irresistível para os amantes de chocolate.",
    image: imageUrls["brownie-oreo"] || defaultImage,
    prepTime: "55 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownie-oreo",
  },
  {
    id: "brownie-pistache",
    title: "Brownie de Pistache",
    description: "Brownie sofisticado com pistache, uma opção diferente e elegante para sua confeitaria.",
    image: imageUrls["brownie-pistache"] || defaultImage,
    prepTime: "65 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownie-pistache",
  },
  {
    id: "brownie-pacoca",
    title: "Brownie de Paçoca",
    description: "Brownie com paçoca na massa e na cobertura, uma combinação brasileira deliciosa.",
    image: imageUrls["brownie-pacoca"] || defaultImage,
    prepTime: "50 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownie-pacoca",
  },
  {
    id: "brownie-doce-de-leite",
    title: "Brownie de Doce de Leite",
    description: "Brownie com camada generosa de doce de leite, uma sobremesa irresistível.",
    image: imageUrls["brownie-doce-de-leite"] || defaultImage,
    prepTime: "60 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownie-doce-de-leite",
  },
  {
    id: "brownie-nutella",
    title: "Brownie de Nutella",
    description: "Brownie com Nutella na massa e no recheio, perfeito para os amantes de chocolate com avelã.",
    image: imageUrls["brownie-nutella"] || defaultImage,
    prepTime: "55 min",
    difficulty: "Médio",
    profitPotential: "Alto",
    category: "Bolos",
    slug: "/receitas/brownie-nutella",
  },
]

export function getRecipeById(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id)
}

export function getRecipeBySlug(slug: string): Recipe | undefined {
  const path = slug.startsWith("/") ? slug : `/${slug}`
  return recipes.find((recipe) => recipe.slug === path)
}

export function getAllRecipes(): Recipe[] {
  return recipes
}

export function getRecipesByCategory(category: string): Recipe[] {
  return recipes.filter((recipe) => recipe.category.toLowerCase() === category.toLowerCase())
}

export const getRecipeImage = (recipeId: string): string => {
  return imageUrls[recipeId] || defaultImage
}

export const getRecipeImages = (recipeId: string): string[] => {
  return [imageUrls[recipeId] || defaultImage]
}

export const initializeRecipeImages = async () => {
  // Retorna um objeto vazio pois agora estamos usando URLs diretas
  return {}
}
