# Pedro Lopes — portfólio

Página pessoal para candidaturas em **Operações & Automação com IA**.

- **Stack:** Next.js 16 · TypeScript · Tailwind CSS v4 · shadcn/ui · framer-motion · Lenis
- **Textos:** todos em `content/site.ts` (versões aprovadas em `docs/textos-aprovados.md`)
- **Planejamento de UI/UX:** `docs/planejamento.md`

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Estrutura

```
app/                  layout, página, estilos globais, ícone e imagem de compartilhamento
components/ui/        prisma-hero.tsx (hero + animações WordsPullUp)
components/sections/  uma seção por arquivo
components/motion/    Reveal, SpotlightCard, Magnetic, CountUp
content/site.ts       todo o conteúdo
public/               fotos, logos, capturas dos projetos e currículo (PDF)
resume/               fonte do currículo em PDF (curriculo.html + build.mjs)
```

Deploy automático na Vercel a cada push (`vercel.json` define o framework Next.js).

## Currículo em PDF

Fonte em `resume/curriculo.html` (A4, mesma identidade visual do site). Para gerar `public/Curriculo_Pedro_Lopes.pdf`:

```bash
node resume/build.mjs                      # sem link do portfólio
node resume/build.mjs https://seu-dominio  # com link do portfólio no cabeçalho
```

Precisa do Playwright (`npx playwright install chromium` se não estiver instalado) e acesso ao Google Fonts.
