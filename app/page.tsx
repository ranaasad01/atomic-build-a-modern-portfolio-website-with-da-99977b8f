import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsSection, ProjectsSection } from "@/components/ui/ScrollReveal";
import { ContactFooter } from "@/components/sections/About";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <Hero />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}
