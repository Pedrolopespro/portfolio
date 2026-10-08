"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Copy, Download, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Magnetic, Reveal } from "@/components/motion/primitives";
import { WordsPullUp } from "@/components/ui/prisma-hero";
import { contact, profile } from "@/content/site";

const pill =
  "inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-cream/85 transition-colors hover:border-cream/40 hover:text-cream";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden px-5 pt-32 pb-24 md:px-10 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(60%_60%_at_50%_100%,rgb(225_224_204/0.09),transparent)]"
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <Reveal>
          <p className="eyebrow">{contact.eyebrow}</p>
        </Reveal>
        <h2 className="mt-6 text-[17vw] leading-[0.9] font-medium tracking-[-0.065em] text-cream lg:text-[11vw]">
          <WordsPullUp text={contact.title} className="justify-center" />
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">{contact.text}</p>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 flex flex-col items-center gap-6">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-primary py-1.5 pr-1.5 pl-7 text-lg font-medium text-black transition-all hover:gap-4"
            >
              Enviar e-mail
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110">
                <ArrowRight className="h-5 w-5 text-cream" />
              </span>
            </a>
          </Magnetic>

          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" onClick={copyEmail} className={pill} aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? "ok" : "copy"}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-2"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied ? "E-mail copiado" : profile.email}
                </motion.span>
              </AnimatePresence>
            </button>
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className={pill}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href={profile.resume} download className={pill}>
              <Download className="h-4 w-4" />
              Currículo (PDF)
            </a>
          </div>
          <a href={profile.phoneHref} className="font-mono text-sm text-cream/50 transition-colors hover:text-cream">
            {profile.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
