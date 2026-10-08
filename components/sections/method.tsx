"use client";

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Reveal, SpotlightCard } from "@/components/motion/primitives";
import { SectionHeading } from "@/components/section-heading";
import { method } from "@/content/site";

function Step({
  index,
  total,
  title,
  text,
  progress,
}: {
  index: number;
  total: number;
  title: string;
  text: string;
  progress: MotionValue<number>;
}) {
  // The step "lights up" when the drawn line reaches it.
  const at = index / total;
  const lit = useTransform(progress, [at, at + 0.12], [0, 1]);
  const dotScale = useTransform(lit, [0, 1], [0.6, 1]);
  const numberOpacity = useTransform(lit, [0, 1], [0.35, 1]);

  return (
    <Reveal delay={index * 0.08} className="relative h-full">
      <motion.span
        aria-hidden
        style={{ scale: dotScale, opacity: lit }}
        className="absolute top-0 -left-[5px] hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-cream shadow-[0_0_20px_4px_rgb(225_224_204/0.35)] lg:block"
      />
      <SpotlightCard className="mt-0 h-full p-7 md:p-8 lg:mt-10">
        <motion.span style={{ opacity: numberOpacity }} className="text-outline block text-7xl font-medium tracking-[-0.06em]">
          {String(index + 1).padStart(2, "0")}
        </motion.span>
        <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] text-cream">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
      </SpotlightCard>
    </Reveal>
  );
}

export function Method() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="metodo" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 py-28 md:px-10 md:py-40">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading eyebrow={method.eyebrow} title={method.title} />
        <Reveal>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 text-cream/80 transition-colors hover:text-cream"
          >
            {method.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <div ref={ref} className="relative mt-16 md:mt-20">
        {/* Line drawn by scroll (desktop) */}
        <div aria-hidden className="absolute top-0 right-0 left-0 hidden h-px bg-border lg:block">
          <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-cream" />
        </div>
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {method.steps.map((s, i) => (
            <li key={s.title}>
              <Step index={i} total={method.steps.length} title={s.title} text={s.text} progress={progress} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
