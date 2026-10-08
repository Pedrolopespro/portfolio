"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef, useState, type FocusEvent } from "react";
import { Reveal, useMediaQuery, usePrefersReducedMotion } from "@/components/motion/primitives";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/site";
import { cn } from "@/lib/utils";

type Project = (typeof projects.items)[number];

function ProjectCard({ project, index, className }: { project: Project; index: number; className?: string }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-index={index}
      className={cn("group block", className)}
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-500 group-hover:border-cream/25">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
          </span>
          <span className="truncate rounded-full bg-cream/5 px-3 py-1 font-mono text-[11px] text-cream/50">
            {project.domain}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image}
            alt={`Página inicial do site ${project.name}`}
            fill
            sizes="(min-width: 1024px) 56vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow">
            {String(index + 1).padStart(2, "0")} · {project.category}
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-cream md:text-3xl">{project.name}</h3>
          <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>
        </div>
        <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-cream transition-all duration-500 group-hover:rotate-45 group-hover:bg-cream group-hover:text-black">
          <ArrowUpRight className="h-5 w-5" />
          <span className="sr-only">(abre o site em nova aba)</span>
        </span>
      </div>
    </a>
  );
}

function Intro() {
  return (
    <>
      <SectionHeading eyebrow={projects.eyebrow} title={projects.title} />
      <Reveal delay={0.15}>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">{projects.intro}</p>
      </Reveal>
    </>
  );
}

function StackedGallery() {
  return (
    <section id="projetos" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-36">
      <Intro />
      <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-x-8">
        {projects.items.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.1}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HorizontalGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const distanceMV = useMotionValue(0);
  const lenis = useLenis();

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      const d = Math.max(0, track.scrollWidth - window.innerWidth);
      setDistance(d);
      distanceMV.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [distanceMV]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(() => -scrollYProgress.get() * distanceMV.get());
  const counter = useTransform(scrollYProgress, (v) =>
    String(Math.min(projects.items.length, Math.floor(v * projects.items.length) + 1)).padStart(2, "0"),
  );

  // Keyboard users: bring a focused card into view by scrolling vertically.
  function onFocus(e: FocusEvent<HTMLDivElement>) {
    const card = (e.target as HTMLElement).closest<HTMLElement>("[data-index]");
    const section = sectionRef.current;
    if (!card || !section || distance === 0) return;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const target = Math.min(distance, Math.max(0, card.offsetLeft - window.innerWidth * 0.2));
    trackRef.current!.parentElement!.scrollLeft = 0;
    if (lenis) lenis.scrollTo(sectionTop + target, { immediate: true });
    else window.scrollTo({ top: sectionTop + target });
  }

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className="relative"
      style={{ height: `calc(100svh + ${distance}px)` }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden">
        <motion.div ref={trackRef} style={{ x }} onFocus={onFocus} className="flex w-max items-center gap-12 px-[6vw]">
          <div className="w-[34vw] max-w-[520px] shrink-0 pr-8">
            <Intro />
            <p className="mt-12 font-mono text-xs tracking-[0.18em] text-cream/40 uppercase">Role para ver →</p>
          </div>
          {projects.items.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} className="w-[54vw] max-w-[900px] shrink-0" />
          ))}
        </motion.div>

        <div className="absolute right-[6vw] bottom-8 left-[6vw] flex items-center gap-6">
          <span className="font-mono text-xs text-cream/50">
            <motion.span>{counter}</motion.span> / {String(projects.items.length).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-border">
            <motion.div style={{ scaleX: scrollYProgress }} className="h-full origin-left bg-cream" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const reduce = usePrefersReducedMotion();
  return isDesktop && !reduce ? <HorizontalGallery /> : <StackedGallery />;
}
