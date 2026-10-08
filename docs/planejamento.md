# Planejamento de UI/UX: pedrolopes (portfólio para candidatura)

## 1. Objetivo e público

- **Quem lê:** recrutador ou gestor, geralmente no celular, com 30 a 60 segundos de atenção.
- **O que precisa entender em 5 segundos:** quem é, o que resolve e como falar com ele.
- **Posicionamento:** produto premium. É sóbrio, confiante e tem pouco texto, com espaço em branco generoso e tipografia grande.
- **Regra de ouro:** a animação serve à leitura e nunca a atrasa. Não há preloader, cursor customizado nem rolagem "sequestrada".

## 2. Identidade visual

| Item | Decisão |
|---|---|
| Fundo | Preto quente `#0B0B0A` |
| Texto principal | Creme `#E1E0CC` (o mesmo do hero de referência) |
| Texto secundário | Creme a 60% |
| Linhas e bordas | Creme a 10–12% |
| CTA | Pílula creme com texto preto e círculo preto com seta (padrão do hero) |
| Display | Inter Tight, peso 500, tracking -0.07em (títulos gigantes) |
| Destaque | Instrument Serif *itálico* em palavras-chave ("operação *que roda*") |
| Dados e datas | Geist Mono (anos, números e etiquetas "01 —") |
| Textura | Grão (noise) sutil sobre fotos e fundo |
| Tema | Escuro único, que reforça o premium e deixa as fotos em destaque |

## 3. Arquitetura da página (ordem = argumento de venda)

| # | Seção | Pergunta que responde |
|---|---|---|
| 1 | Hero | Quem é você? |
| 2 | Faixa de credibilidade | Por que eu deveria acreditar? |
| 3 | Onde eu atuo (dores) | Você entende o meu problema? |
| 4 | Como eu entrego (método) | Como você resolve? |
| 5 | Por que confiar (prova + retrato) | Já fez isso antes? |
| 6 | Resultado (manifesto) | O que eu ganho? |
| 7 | Trajetória | Onde trabalhou? |
| 8 | Competências e formação | O que sabe usar? |
| 9 | CTA final | Como falo com você? |

## 4. Seção por seção: layout + animação

### 1. Hero (baseado no `prisma-hero`)
- Card em tela cheia com cantos arredondados (2rem), **foto do Pedro** como fundo, com zoom lento (Ken Burns 1.0 → 1.06), grão e gradiente escuro embaixo.
- **Nav em "aba" preta** centralizada no topo com: Ganhos · Método · Trajetória · Contato.
- Canto superior esquerdo: "Brasília — DF". Canto direito: ponto verde pulsando com "Disponível".
- Embaixo à esquerda: **"Pedro\*"** gigante (≈20vw), em animação *WordsPullUp*.
- Embaixo à direita: "\*Operações & Automação com IA", depois a frase "Transformo operação pesada em operação que roda." e o CTA **Vamos conversar →** + link "Baixar currículo".
- Animação: letreiro sobe, depois texto (0.5s) e depois botão (0.7s).

### 2. Faixa de credibilidade
- Marquee infinito e lento com Ministério da Justiça · PRF · INFOSEG · SEPPIR · Rio 2016 · 10+ anos.
- Só texto, sem logotipos oficiais. Pausa no hover e respeita "reduzir movimento".

### 3. Onde eu atuo
- 2 colunas: à esquerda, título fixo (sticky) "Transformo operação pesada em operação *que roda*."
- À direita, lista de dores (demandas espalhadas, tarefas manuais, cadastros, sistemas desencontrados, retrabalho, falta de controle).
- **Animação-assinatura:** cada dor ganha um **risco** desenhado (scaleX 0→1) e esmaece ao entrar na tela, como se eu as "riscasse". Fecha com "É aqui que eu entro."

### 4. Como eu entrego
- 4 cartões: 01 Mapear gargalos · 02 Estruturar processos · 03 Automatizar com IA · 04 Criar controles.
- Uma linha conectora se **desenha conforme a rolagem** e cada cartão acende quando a linha chega nele.
- Hover com brilho que segue o cursor (spotlight) na borda.

### 5. Por que confiar
- À esquerda, **retrato vertical** com revelação por máscara (clip-path de baixo para cima) e leve parallax.
- À direita, números com **contagem animada** (10+ anos, N2, Rio 2016) e a frase de prova.

### 6. Resultado (manifesto)
- Frase grande ocupando a tela: "Uma operação mais organizada, menos dependente de improviso e preparada para crescer."
- **Revelação palavra a palavra ligada à rolagem** (opacidade 15% → 100%), no estilo Apple.

### 7. Trajetória
- Linha do tempo vertical cuja linha **cresce com a rolagem**. Cada cargo entra deslizando.
- Datas em fonte mono. Todo o conteúdo fica visível, sem nada escondido em acordeão.

### 8. Competências e formação
- **Bento grid** com 4 blocos: Operações · IA & Automação · Sistemas & Suporte · Web & UX.
- Chips entram em cascata e cada bloco tem spotlight no hover.
- Formação em uma linha compacta logo abaixo.

### 9. CTA final
- "Vamos conversar?" gigante (pull-up), com botão **magnético** (segue levemente o cursor).
- E-mail com **copiar ao clicar** (aviso "E-mail copiado"), WhatsApp e download do currículo.
- Foto de fundo bem esmaecida (opcional).

### Global
- **Nav compacta em pílula** aparece flutuando quando o hero sai da tela, com o CTA sempre à mão.
- Rolagem suave (Lenis) desligada automaticamente com "reduzir movimento".
- `MotionConfig reducedMotion="user"`: quem pede menos movimento recebe só fades.

## 5. Fotos necessárias

| # | Uso | Formato | Orientação |
|---|---|---|---|
| 1 | Hero (obrigatória) | Horizontal 16:9, ≥ 2400px de largura | Você no **terço superior/centro-direita**, com espaço livre embaixo para o nome gigante. Fundo limpo. |
| 2 | Por que confiar | Vertical 4:5, ≥ 1200px | Retrato meio corpo, olhando para a câmera |
| 3 | CTA final (opcional) | Qualquer | Trabalhando (notebook/mesa), mais descontraída |
| — | Vídeo (opcional) | 5–10s, sem som | Substitui a foto 1 no hero, em loop |

Dicas: luz natural, roupa escura ou neutra (combina com preto e creme), sem filtros. O tratamento de cor e grão é feito no site.

> O vídeo do prompt de referência está num CDN de terceiros. Não vamos usá-lo em produção porque pode sair do ar e não é seu.

## 6. Stack técnica

- **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + shadcn/ui**
- `framer-motion` (animações), `lucide-react` (ícones), `lenis` (rolagem suave)
- `next/image` (fotos otimizadas), `next/font` (fontes sem pular layout), `next/og` (imagem de compartilhamento no WhatsApp/LinkedIn)

Estrutura:
```
app/            layout.tsx · page.tsx · globals.css · opengraph-image.tsx
components/ui/  prisma-hero.tsx (WordsPullUp, WordsPullUpMultiStyle) + componentes shadcn
components/sections/  hero · credibility · pains · method · proof · manifesto · journey · skills · contact
content/site.ts       todos os textos num só lugar
public/images/        fotos · public/Curriculo_Pedro_Lopes.docx
```
`components/ui` é o caminho padrão do shadcn (alias `@/components/ui` no `components.json`). Sem ele, o CLI do shadcn instala componentes no lugar errado e os imports quebram.

## 7. Qualidade (critérios de pronto)

- Lighthouse ≥ 90 em Performance, Acessibilidade e SEO no celular. LCP < 2.5s.
- Testado em 375px, 768px, 1280px e 1920px. Nenhum texto do nav com menos de 12px.
- Título animado com `aria-label` (leitor de tela lê "Pedro", não palavra por palavra).
- `npm run build` sem erros antes de cada push.
- **Vercel:** em *Settings → Build & Deployment → Framework Preset* selecionar **Next.js** (hoje provavelmente está como "Other", por causa do HTML estático).

## 8. Etapas de execução

1. Migrar o projeto para Next.js + TS + Tailwind + shadcn e instalar as dependências.
2. Centralizar os textos em `content/site.ts`.
3. Adaptar o hero com placeholder até as fotos chegarem.
4. Construir as seções 2 a 9.
5. Tratar e otimizar as fotos recebidas.
6. QA (celular, reduzir movimento, Lighthouse, build) e push.
