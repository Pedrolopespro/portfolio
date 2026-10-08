"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { EASE } from "@/components/motion/primitives";
import { nav, profile } from "@/content/site";

/** Compact pill nav that appears once the hero has scrolled away. */
export function FloatingNav() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setVisible(y > window.innerHeight * 0.85);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Navegação"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed top-3 left-1/2 z-50 w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2"
        >
          <div className="flex items-center justify-between gap-4 rounded-full border border-cream/10 bg-background/75 py-1.5 pr-1.5 pl-5 shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)] backdrop-blur-xl">
            <a href="#top" className="text-sm font-medium tracking-[-0.02em] whitespace-nowrap text-cream">
              {profile.fullName}
              <span className="text-cream/40">*</span>
            </a>
            <div className="hidden items-center gap-7 md:flex">
              {nav
                .filter((n) => n.href !== "#contato")
                .map((n) => (
                  <a key={n.href} href={n.href} className="text-sm text-cream/65 transition-colors hover:text-cream">
                    {n.label}
                  </a>
                ))}
            </div>
            <a
              href="#contato"
              className="rounded-full bg-primary px-4 py-2 text-sm font-medium whitespace-nowrap text-black transition-opacity hover:opacity-90"
            >
              Vamos conversar
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
