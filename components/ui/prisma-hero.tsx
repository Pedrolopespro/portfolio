"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ---------------- WordsPullUp ---------------- */
interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  style?: CSSProperties;
  delay?: number;
}

export const WordsPullUp = ({ text, className = "", showAsterisk = false, style, delay = 0 }: WordsPullUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap", className)} style={style}>
      <span className="sr-only">{text}</span>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            aria-hidden
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: delay + i * 0.08, ease: EASE }}
            className="relative inline-block"
            style={{ marginRight: isLast ? 0 : "0.25em" }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">*</span>
            )}
          </motion.span>
        );
      })}
    </span>
  );
};

/* ---------------- WordsPullUpMultiStyle ---------------- */
export interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
  style?: CSSProperties;
}

export const WordsPullUpMultiStyle = ({ segments, className = "", style }: WordsPullUpMultiStyleProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

  const words: { word: string; className?: string }[] = [];
  segments.forEach((seg) => {
    seg.text.split(" ").forEach((w) => {
      if (w) words.push({ word: w, className: seg.className });
    });
  });

  return (
    <span ref={ref} className={cn("inline-flex flex-wrap justify-center", className)} style={style}>
      <span className="sr-only">{segments.map((s) => s.text).join(" ")}</span>
      {words.map((w, i) => (
        <motion.span
          key={i}
          aria-hidden
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: i * 0.06, ease: EASE }}
          className={cn("inline-block", w.className)}
          style={{ marginRight: "0.25em" }}
        >
          {w.word}
        </motion.span>
      ))}
    </span>
  );
};

/* ---------------- Hero ---------------- */
interface NavItem {
  label: string;
  href: string;
}

interface PrismaHeroProps {
  /** Giant word at the bottom-left (gets the asterisk). */
  title: string;
  /** Full accessible name for the <h1>. */
  titleLabel?: string;
  navItems: NavItem[];
  /** Background layer (image or video). */
  media: ReactNode;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  footnote?: ReactNode;
  headline?: ReactNode;
  description: ReactNode;
  cta: NavItem;
  secondary?: NavItem & { download?: boolean };
}

const PrismaHero = ({
  title,
  titleLabel,
  navItems,
  media,
  topLeft,
  topRight,
  footnote,
  headline,
  description,
  cta,
  secondary,
}: PrismaHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} id="top" className="h-[100svh] min-h-[640px] w-full p-2 md:p-3">
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-ink ring-1 ring-cream/5 md:rounded-[2rem]">
        {/* Background media: slow settle on load + parallax on scroll */}
        <motion.div className="absolute inset-0" style={{ y: mediaY, scale: mediaScale }}>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: EASE }}
          >
            {media}
          </motion.div>
        </motion.div>

        {/* Noise overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-50 mix-blend-overlay" />

        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        {/* Extra shade behind the text column so it stays legible over the photo on short screens */}
        <div className="pointer-events-none absolute right-0 bottom-0 hidden h-[65%] w-[55%] bg-[radial-gradient(ellipse_at_85%_100%,rgb(5_5_5/0.9),transparent_65%)] lg:block" />

        {/* Corners */}
        {topLeft && <div className="absolute top-5 left-6 z-20 hidden md:block lg:left-10">{topLeft}</div>}
        {topRight && <div className="absolute top-4 right-5 z-20 hidden md:block lg:right-8">{topRight}</div>}

        {/* Navbar (notch) */}
        <nav aria-label="Seções" className="absolute top-0 left-1/2 z-20 -translate-x-1/2">
          <div className="flex items-center gap-3.5 rounded-b-2xl bg-background px-4 py-2.5 ring-1 ring-cream/10 sm:gap-6 md:gap-10 md:rounded-b-3xl md:px-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs whitespace-nowrap text-cream/75 transition-colors hover:text-cream md:text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero content */}
        <motion.div
          className="absolute right-0 bottom-0 left-0 px-4 pb-2 sm:px-6 md:px-10"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <div className="grid grid-cols-12 items-end gap-4">
            <div className="col-span-12 lg:col-span-8">
              <h1
                aria-label={titleLabel ?? title}
                className="text-[30vw] leading-[0.85] font-medium tracking-[-0.07em] text-cream sm:text-[26vw] lg:text-[19vw] 2xl:text-[18vw]"
              >
                <WordsPullUp text={title} showAsterisk />
              </h1>
            </div>

            <div className="col-span-12 flex flex-col gap-5 pb-6 lg:col-span-4 lg:pb-12">
              {footnote && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
                  className="eyebrow"
                >
                  {footnote}
                </motion.p>
              )}
              {headline && (
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                  className="text-2xl leading-[1.1] font-medium tracking-[-0.03em] text-cream md:text-3xl"
                >
                  {headline}
                </motion.p>
              )}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
                className="max-w-md text-sm text-cream/70 md:text-base"
                style={{ lineHeight: 1.35 }}
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.75, ease: EASE }}
                className="flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                <a
                  href={cta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary py-1 pr-1 pl-5 text-sm font-medium text-black transition-all hover:gap-3 sm:text-base"
                >
                  {cta.label}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight className="h-4 w-4 text-cream" />
                  </span>
                </a>
                {secondary && (
                  <a
                    href={secondary.href}
                    download={secondary.download || undefined}
                    className="text-sm text-cream/70 underline decoration-cream/30 underline-offset-4 transition-colors hover:text-cream hover:decoration-cream"
                  >
                    {secondary.label}
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { PrismaHero };
