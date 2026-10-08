"use client";

import { motion } from "framer-motion";
import { EASE, Reveal, SpotlightCard } from "@/components/motion/primitives";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/content/site";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="competencias" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-36">
      <SectionHeading eyebrow={skills.eyebrow} title={skills.title} />

      <div className="mt-16 grid gap-4 md:grid-cols-3 md:gap-5">
        {skills.groups.map((g, gi) => (
          <Reveal key={g.title} delay={gi * 0.08} className={cn(g.wide && "md:col-span-2")}>
            <SpotlightCard className="h-full p-7 md:p-9">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-medium tracking-[-0.02em] text-cream">{g.title}</h3>
                <span className="font-mono text-xs text-cream/40">{String(gi + 1).padStart(2, "0")}</span>
              </div>
              <ul className="mt-10 flex flex-wrap gap-2.5">
                {g.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: EASE }}
                    className="rounded-full border border-border bg-background/60 px-4 py-2 text-sm text-cream/85"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-20">
        <Reveal>
          <p className="eyebrow">Formação e idiomas</p>
        </Reveal>
        <dl className="mt-6 grid border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {skills.education.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06} className="border-b border-border py-6 sm:pr-6">
              <dt className="text-lg font-medium text-cream">{e.title}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{e.detail}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
