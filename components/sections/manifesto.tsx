"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import { usePrefersReducedMotion } from "@/components/motion/primitives";
import { result } from "@/content/site";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span aria-hidden style={{ opacity }} className="mr-[0.25em] inline-block">
      {children}
    </motion.span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const words = result.text.split(" ");

  const text = (
    <p className="max-w-6xl text-[2.6rem] leading-[1.02] font-medium tracking-[-0.045em] text-cream sm:text-6xl lg:text-8xl">
      <span className="sr-only">{result.text}</span>
      {reduce
        ? result.text
        : words.map((w, i) => {
            const start = 0.08 + (i / words.length) * 0.72;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, start + 0.72 / words.length]}>
                {w}
              </Word>
            );
          })}
    </p>
  );

  return (
    <section ref={ref} aria-label={result.eyebrow} className={reduce ? "py-32" : "relative h-[240vh]"}>
      <div className={reduce ? undefined : "sticky top-0 flex h-[100svh] items-center"}>
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <p className="eyebrow mb-8">{result.eyebrow}</p>
          {text}
        </div>
      </div>
    </section>
  );
}
