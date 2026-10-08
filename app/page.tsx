import { FloatingNav } from "@/components/floating-nav";
import { Contact } from "@/components/sections/contact";
import { Credibility } from "@/components/sections/credibility";
import { Footer } from "@/components/sections/footer";
import { Gains } from "@/components/sections/gains";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { Manifesto } from "@/components/sections/manifesto";
import { Method } from "@/components/sections/method";
import { Projects } from "@/components/sections/projects";
import { Proof } from "@/components/sections/proof";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <>
      <FloatingNav />
      <main>
        <Hero />
        <Credibility />
        <Gains />
        <Method />
        <Proof />
        <Manifesto />
        <Projects />
        <Journey />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
