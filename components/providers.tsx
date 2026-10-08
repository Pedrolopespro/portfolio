"use client";

import { MotionConfig } from "framer-motion";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { usePrefersReducedMotion } from "@/components/motion/primitives";

export function Providers({ children }: { children: ReactNode }) {
  const reduce = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion="user">
      {reduce ? (
        children
      ) : (
        <ReactLenis root options={{ lerp: 0.1, anchors: { offset: -24 }, autoRaf: true }}>
          {children}
        </ReactLenis>
      )}
    </MotionConfig>
  );
}
