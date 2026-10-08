// Every piece of copy on the page lives here. Approved texts: docs/textos-aprovados.md

export const profile = {
  firstName: "Pedro",
  fullName: "Pedro Lopes",
  role: "Operações & Automação com IA",
  location: "Brasília — DF",
  email: "lopeshpl@gmail.com",
  phoneDisplay: "(61) 99218-0425",
  phoneHref: "tel:+5561992180425",
  whatsapp: "https://wa.me/5561992180425",
  resume: "/Curriculo_Pedro_Lopes.docx",
};

export const nav = [
  { label: "Ganhos", href: "#ganhos" },
  { label: "Método", href: "#metodo" },
  { label: "Projetos", href: "#projetos" },
  { label: "Trajetória", href: "#trajetoria" },
  { label: "Contato", href: "#contato" },
];

export const hero = {
  headline: "Transformo operação pesada em operação que roda.",
  description:
    "Processos, automação com IA e controle para a sua empresa crescer sem depender de improviso.",
  cta: "Vamos conversar",
};

// Logos are pre-rendered in cream on transparent (public/images/logos).
// `height` is the desktop display height in px, tuned so every mark has a similar optical weight.
export const credibility = {
  label: "Onde atuei e para quem entreguei",
  items: [
    { label: "Ministério da Justiça e Segurança Pública", logo: { src: "/images/logos/mjsp.png", width: 436, height: 236 }, height: 52 },
    { label: "Polícia Rodoviária Federal", logo: { src: "/images/logos/prf.png", width: 644, height: 300 }, height: 50 },
    { label: "INFOSEG" },
    { label: "SEPPIR" },
    { label: "Rio 2016", logo: { src: "/images/logos/rio2016.png", width: 813, height: 300 }, height: 50 },
    { label: "KMON VIP", logo: { src: "/images/logos/kmon.svg", width: 780, height: 200 }, height: 30 },
    { label: "Lima Ferreira Advogados", logo: { src: "/images/logos/lima-ferreira.png", width: 979, height: 239 }, height: 38 },
  ],
};

export const gains = {
  eyebrow: "01 — O que sua empresa ganha comigo",
  title: [
    { text: "Transformo operação pesada em operação" },
    { text: "que roda.", className: "font-serif italic font-normal tracking-normal" },
  ],
  subtitle:
    "Organização de processos, automação com IA e visão prática para converter rotinas manuais em fluxos mais rápidos, claros e fáceis de acompanhar.",
  painsLabel: "Onde eu atuo",
  painsIntro: "Entro onde a operação começa a pesar:",
  pains: [
    "Demandas espalhadas",
    "Tarefas manuais",
    "Cadastros sem padrão",
    "Sistemas desencontrados",
    "Retrabalho",
    "Falta de controle",
  ],
  closing: "É aqui que eu entro.",
};

export const method = {
  eyebrow: "02 — Como eu entrego",
  title: [{ text: "Como eu" }, { text: "entrego.", className: "font-serif italic font-normal tracking-normal" }],
  steps: [
    {
      title: "Mapear gargalos",
      text: "Levanto como o trabalho realmente acontece, onde trava e o que se repete sem necessidade.",
    },
    {
      title: "Estruturar processos",
      text: "Organizo demandas, prioridades e responsáveis, para a rotina deixar de depender de improviso e de memória.",
    },
    {
      title: "Automatizar com IA",
      text: "Uso IA para pesquisar, planejar, documentar e agilizar tarefas repetitivas, sempre com revisão humana e adaptação ao contexto da empresa.",
    },
    {
      title: "Criar controles e apoiar sistemas",
      text: "Acompanhamento de ocorrências, cadastros e suporte a usuários e sistemas, para a equipe saber o que está aberto, o que está atrasado e o que foi resolvido.",
    },
  ],
  cta: "Quero conversar sobre a minha operação",
};

export const proof = {
  eyebrow: "03 — Por que confiar",
  text: "Mais de 10 anos em suporte, supervisão N2 e projetos digitais, incluindo atendimento no Ministério da Justiça, PRF e INFOSEG. São ambientes em que prioridade, prazo e precisão não são opcionais.",
  stats: [
    { value: 10, suffix: "+", label: "anos em tecnologia, suporte e web" },
    { value: 3, suffix: "", label: "órgãos federais atendidos: MJ, PRF e SEPPIR" },
    { display: "N2", label: "supervisão de atendimento no INFOSEG" },
    { display: "Rio 2016", label: "atuação na PRF nos preparativos das Olimpíadas" },
  ],
};

export const result = {
  eyebrow: "Resultado que a empresa leva",
  text: "Uma operação mais organizada, menos dependente de improviso e preparada para crescer.",
};

export const projects = {
  eyebrow: "04 — Projetos",
  title: [{ text: "Trabalhos que já estão" }, { text: "no ar.", className: "font-serif italic font-normal tracking-normal" }],
  intro:
    "Sites e páginas que levantei, estruturei e publiquei, do pedido do cliente à entrega.",
  items: [
    {
      name: "KMON VIP",
      category: "Institucional · Cotações",
      description:
        "Site de transporte executivo, blindado e diplomático para empresas, autoridades e grandes eventos, com pedido de cotação.",
      url: "https://www.kmonvip.com/",
      domain: "kmonvip.com",
      image: "/images/projects/kmonvip.jpg",
    },
    {
      name: "Lima Ferreira Advogados",
      category: "Landing page · Jurídico",
      description:
        "Página do “Raio-X da Dívida Empresarial”: diagnóstico jurídico para empresas com dívidas bancárias, trabalhistas e com fornecedores.",
      url: "https://limaferreiraadvogados.com.br/empresarial/",
      domain: "limaferreiraadvogados.com.br",
      image: "/images/projects/limaferreira.jpg",
    },
    {
      name: "SMC Turismo e Locadora",
      category: "Institucional · Mobilidade",
      description:
        "Transporte executivo em Brasília: transfer, corporativo, atendimento diplomático, blindados e escolta, com solicitação de cotação.",
      url: "https://www.smclocadora.com.br/",
      domain: "smclocadora.com.br",
      image: "/images/projects/smclocadora.jpg",
    },
    {
      name: "AlergYa",
      category: "Saúde · Agendamento",
      description:
        "Site da clínica de alergologia e imunologia da Dra. Valéria Botan, em Brasília, com agendamento de consulta pelo WhatsApp.",
      url: "https://alergya.vercel.app/",
      domain: "alergya.vercel.app",
      image: "/images/projects/alergya.jpg",
    },
    {
      name: "Eixo Esportes",
      category: "Catálogo · Moda fitness",
      description:
        "Catálogo de moda fitness feminina com filtro por categoria e pedido direto pelo WhatsApp.",
      url: "https://eixoesportes.vercel.app/",
      domain: "eixoesportes.vercel.app",
      image: "/images/projects/eixoesportes.jpg",
    },
  ],
};

export const journey = {
  eyebrow: "05 — Trajetória",
  title: "Trajetória",
  intro: "Da operação crítica em órgãos federais a projetos digitais com IA.",
  jobs: [
    {
      role: "Profissional autônomo de tecnologia e marketing digital",
      org: "Projetos próprios e clientes",
      period: "set. 2023 — atual",
      bullets: [
        "Levantamento de necessidades, organização de demandas e acompanhamento de entregas de sites, páginas de vendas e campanhas digitais.",
        "Criação, publicação e manutenção de sites em WordPress, com configuração de ferramentas digitais conforme a necessidade do cliente.",
        "Uso de ChatGPT para estruturar pesquisas, planos de trabalho e conteúdos, revisando e adaptando ao contexto de cada projeto.",
      ],
    },
    {
      role: "Designer Gráfico",
      org: "Evo Coaching",
      period: "set. 2021 — set. 2023",
      bullets: [
        "Atendimento às demandas de equipes internas.",
        "Criação de sites e páginas de vendas e produção de materiais para produtos, campanhas e eventos.",
      ],
    },
    {
      role: "Web Designer",
      org: "Almatech",
      period: "jul. 2019 — dez. 2020",
      bullets: [
        "Desenvolvimento de sites para empresas nacionais e internacionais, com foco em usabilidade e adequação às necessidades do negócio.",
      ],
    },
    {
      role: "Suporte Técnico e Supervisão de Atendimento N2",
      org: "Ministério da Justiça e unidades atendidas",
      period: "2013 — 2016",
      bullets: [
        "Supervisão do atendimento de segundo nível no INFOSEG, com acompanhamento de ocorrências, demandas complexas e apoio aos usuários.",
        "Cadastro de novos usuários e suporte a sistemas, Windows, Office, e-mails, softwares, hardware e periféricos.",
        "Técnico responsável pelo atendimento da antiga SEPPIR e atuação na PRF durante os preparativos das Olimpíadas Rio 2016.",
      ],
    },
  ],
};

export const skills = {
  eyebrow: "06 — Competências",
  title: [{ text: "Ferramentas a serviço da" }, { text: "operação.", className: "font-serif italic font-normal tracking-normal" }],
  groups: [
    {
      title: "Operações",
      items: [
        "Organização de rotinas e demandas",
        "Acompanhamento de ocorrências e prioridades",
        "Levantamento de necessidades",
      ],
      wide: true,
    },
    {
      title: "IA & Automação",
      items: ["IA aplicada ao trabalho", "ChatGPT para pesquisa, planejamento e documentação"],
    },
    {
      title: "Sistemas & Suporte",
      items: ["Suporte a sistemas", "Cadastro e orientação de usuários", "Windows e pacote Office"],
    },
    {
      title: "Web & UX",
      items: ["WordPress e Elementor", "HTML, PHP e SQL", "UX/UI"],
      wide: true,
    },
  ],
  education: [
    { title: "Desenvolvimento Web", detail: "EIBNETI · técnico, concluído em 2016" },
    { title: "Ciência da Computação", detail: "IESB · superior incompleto" },
    { title: "Publicidade e Propaganda", detail: "IESB · curso trancado" },
    { title: "Inglês", detail: "leitura técnica, em aperfeiçoamento" },
  ],
};

export const contact = {
  eyebrow: "07 — Contato",
  title: "Vamos conversar?",
  text: "Aberto a oportunidades em Operações e Automação com IA.",
};
