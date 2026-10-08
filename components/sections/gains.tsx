"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { EASE, Reveal } from "@/components/motion/primitives";
import { SectionHeading } from "@/components/section-heading";
import { gains } from "@/content/site";

function Pain({ text, index }: { text: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  // Strike when the line crosses the middle band of the viewport.
  const struck = useInView(ref, { once: true, margin: "-35% 0px -45% 0px" });

  return (
    <li ref={ref} className="flex items-baseline gap-4 border-b border-border py-5 md:gap-6 md:py-7">
      <span className="font-mono text-xs text-muted-foreground">/{String(index + 1).padStart(2, "0")}</span>
      <span className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">
        {/* Strike drawn as a background line; box-decoration-break repeats it on every wrapped line. */}
        <motion.span
          className="[box-decoration-break:clone] bg-[linear-gradient(var(--cream),var(--cream))] bg-no-repeat [-webkit-box-decoration-break:clone]"
          style={{ backgroundPosition: "0 58%" }}
          initial={{ backgroundSize: "0% 3px" }}
          animate={{
            backgroundSize: struck ? "100% 3px" : "0% 3px",
            color: struck ? "rgb(225 224 204 / 0.32)" : "rgb(225 224 204 / 1)",
          }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {text}
        </motion.span>
      </span>
    </li>
  );
}

export function Gains() {
  return (
    <section id="ganhos" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-40">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow={gains.eyebrow} title={gains.title} />
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">{gains.subtitle}</p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow">{gains.painsLabel}</p>
            <p className="mt-3 text-lg text-cream/80">{gains.painsIntro}</p>
          </Reveal>
          <ul className="mt-6 border-t border-border">
            {gains.pains.map((p, i) => (
              <Pain key={p} text={p} index={i} />
            ))}
          </ul>
          <Reveal className="mt-12">
            <p className="font-serif text-4xl text-cream italic md:text-6xl">{gains.closing}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
