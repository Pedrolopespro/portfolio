"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, useSyncExternalStore, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Fade + rise once when the element enters the viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number; className?: string } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Card with a soft light that follows the pointer. */
export function SpotlightCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className={cn(
        "group/spot relative overflow-hidden rounded-3xl border border-border bg-card/60 transition-colors duration-500 hover:border-cream/20",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgb(225 224 204 / 0.09), transparent 45%)",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Wrapper that drifts slightly toward the pointer. */
export function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

/** Number that counts up the first time it scrolls into view. */
export function CountUp({ value, suffix = "", duration = 1.6 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  // Server render shows the final value (good for no-JS and crawlers).
  const count = useMotionValue(value);
  const rounded = useTransform(count, (v) => Math.round(v));
  const started = useRef(false);

  useEffect(() => {
    if (reduce || started.current) return;
    if (!inView) {
      count.set(0);
      return;
    }
    started.current = true;
    const controls = animate(count, value, { duration, ease: EASE });
    return () => controls.stop();
  }, [inView, reduce, value, duration, count]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

/** Subscribes to a CSS media query. Returns false on the server. */
export function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/** Hydration-safe "prefers reduced motion": false on the server and during hydration, then the real value. */
export function usePrefersReducedMotion() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
