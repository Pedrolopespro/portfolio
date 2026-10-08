import { WordsPullUpMultiStyle, type Segment } from "@/components/ui/prisma-hero";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  className,
  titleClassName,
}: {
  eyebrow: string;
  title: Segment[];
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-5", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "text-[2.6rem] leading-[0.95] font-medium tracking-[-0.045em] text-cream sm:text-6xl lg:text-7xl",
          titleClassName,
        )}
      >
        <WordsPullUpMultiStyle segments={title} className="justify-start" />
      </h2>
    </div>
  );
}
