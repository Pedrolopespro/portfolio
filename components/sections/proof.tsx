"use client";

import { CountUp, Reveal } from "@/components/motion/primitives";
import { proof } from "@/content/site";

export function Proof() {
  return (
    <section id="prova" className="border-y border-border bg-ink/60">
      <div className="mx-auto grid max-w-[1400px] gap-16 px-5 py-28 md:px-10 md:py-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">{proof.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-2xl leading-snug font-medium tracking-[-0.025em] text-cream md:text-3xl">
              {proof.text}
            </p>
          </Reveal>
        </div>

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {proof.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="flex flex-col justify-between gap-10 bg-background p-7 md:p-9">
              <dt className="order-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{s.label}</dt>
              <dd className="order-1 text-6xl font-medium tracking-[-0.06em] text-cream md:text-7xl">
                {"value" in s && typeof s.value === "number" ? <CountUp value={s.value} suffix={s.suffix} /> : s.display}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
