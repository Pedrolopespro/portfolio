import Image from "next/image";
import { credibility } from "@/content/site";
import { cn } from "@/lib/utils";

function Row({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      aria-hidden={duplicate || undefined}
      className={cn(
        "flex shrink-0 items-center motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-8",
        duplicate && "motion-reduce:hidden",
      )}
    >
      {credibility.items.map((item) => (
        <li key={item.label} className="flex items-center px-7 md:px-12">
          {item.logo ? (
            <Image
              src={item.logo.src}
              alt={duplicate ? "" : item.label}
              width={item.logo.width}
              height={item.logo.height}
              unoptimized={item.logo.src.endsWith(".svg")}
              sizes="240px"
              className="w-auto opacity-55 transition-opacity duration-300 hover:opacity-100"
              style={{ height: `calc(${item.height}px * var(--logo-scale))` }}
            />
          ) : (
            // Marks without a logo file are set as typographic wordmarks with the same weight.
            <span
              className="font-semibold tracking-[-0.04em] whitespace-nowrap text-cream opacity-55 transition-opacity duration-300 hover:opacity-100"
              style={{ fontSize: "calc(30px * var(--logo-scale))" }}
            >
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export function Credibility() {
  return (
    <section
      aria-label={credibility.label}
      className="border-y border-border py-8 [--logo-scale:0.72] md:py-10 md:[--logo-scale:1]"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-0">
        <p className="eyebrow shrink-0 px-5 text-center md:w-56 md:px-10 md:text-left">{credibility.label}</p>
        <div className="group relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full">
            <Row />
            <Row duplicate />
          </div>
        </div>
      </div>
    </section>
  );
}
