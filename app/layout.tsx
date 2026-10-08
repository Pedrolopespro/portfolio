import type { Metadata, Viewport } from "next";
import { Geist_Mono, Instrument_Serif, Inter_Tight } from "next/font/google";
import { Providers } from "@/components/providers";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Pedro Lopes — Operações & Automação com IA";
const description =
  "Transformo operação pesada em operação que roda: processos, automação com IA e controle. Mais de 10 anos em suporte, supervisão N2 e projetos digitais. Brasília — DF.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "profile", locale: "pt_BR", siteName: "Pedro Lopes" },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${interTight.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
