"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/primitives";
import { journey } from "@/content/site";

export function Journey() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="trajetoria" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <p className="eyebrow">{journey.eyebrow}</p>
              <h2 className="mt-5 text-[2.6rem] leading-[0.95] font-medium tracking-[-0.045em] text-cream sm:text-6xl lg:text-7xl">
                {journey.title}
              </h2>
              <p className="mt-8 max-w-sm text-lg leading-relaxed text-muted-foreground">{journey.intro}</p>
            </Reveal>
          </div>
        </div>

        <ol ref={listRef} className="relative lg:col-span-7 lg:col-start-6">
          <div aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-border">
            <motion.div style={{ scaleY }} className="h-full w-full origin-top bg-cream" />
          </div>
          {journey.jobs.map((job, i) => (
            <li key={job.role} className="relative pb-16 pl-10 last:pb-0 md:pl-14">
              <span
                aria-hidden
                className="absolute top-2 left-0 h-[11px] w-[11px] rounded-full border border-cream/60 bg-background"
              />
              <Reveal delay={0.05} y={0} initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}>
                <p className="font-mono text-xs tracking-[0.12em] text-cream/50 uppercase">{job.period}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-cream md:text-3xl">{job.role}</h3>
                <p className="mt-1 font-serif text-xl text-cream/70 italic">{job.org}</p>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-cream/30" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              {i === 0 && <span className="sr-only">Cargo atual</span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
