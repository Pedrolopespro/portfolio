import Image from "next/image";
import { PrismaHero } from "@/components/ui/prisma-hero";
import { hero, nav, profile } from "@/content/site";
import heroPhoto from "@/public/images/pedro-hero.jpg";

export function Hero() {
  return (
    <PrismaHero
      title={profile.firstName}
      titleLabel={`${profile.fullName}, ${profile.role}`}
      navItems={nav}
      media={
        // The photo's own background is #050505 (= bg-ink), so the mask blends it into the card.
        // Desktop: fixed-ratio frame pinned top-right, so the face always sits above the text band.
        <div className="hero-mask absolute inset-x-0 top-0 h-[66%] lg:left-auto lg:aspect-[966/640] lg:h-[82%] lg:max-w-[80%] [@media(min-width:1024px)_and_(max-height:780px)]:h-[70%]">
          <Image
            src={heroPhoto}
            alt={`Retrato de ${profile.fullName}`}
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 70vw, 100vw"
            className="object-cover object-[50%_28%] [filter:sepia(0.14)_contrast(1.04)]"
          />
        </div>
      }
      topLeft={<span className="eyebrow">{profile.location}</span>}
      topRight={
        <span className="inline-flex items-center gap-2 rounded-full bg-background/70 px-3.5 py-1.5 text-xs text-cream/80 ring-1 ring-cream/10 backdrop-blur">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-green-300" />
          Disponível para novos desafios
        </span>
      }
      footnote={`* ${profile.fullName} — ${profile.role}`}
      headline={
        <>
          Transformo operação pesada em operação <span className="font-serif font-normal tracking-normal italic">que roda.</span>
        </>
      }
      description={hero.description}
      cta={{ label: hero.cta, href: "#contato" }}
      secondary={{ label: "Baixar currículo", href: profile.resume, download: true }}
    />
  );
}
