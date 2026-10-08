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
public/               fotos, capturas dos projetos e currículo (.docx)
```

Deploy automático na Vercel a cada push (`vercel.json` define o framework Next.js).
