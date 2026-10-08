import { credibility } from "@/content/site";

export function Credibility() {
  const items = [...credibility, ...credibility];
  return (
    <section aria-label="Experiência em" className="group overflow-hidden border-y border-border py-7 md:py-9">
      <ul className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
        {items.map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= credibility.length || undefined}
            className="flex items-center font-serif text-2xl whitespace-nowrap text-cream/80 italic md:text-4xl"
          >
            <span className="px-6 md:px-10">{item}</span>
            <span aria-hidden className="text-sm text-cream/30 not-italic">
              ✦
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
