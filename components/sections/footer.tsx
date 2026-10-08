import { ArrowUp } from "lucide-react";
import { profile } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-8 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          {profile.fullName} · {profile.location}
        </p>
        <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-cream">
          Voltar ao topo <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}
