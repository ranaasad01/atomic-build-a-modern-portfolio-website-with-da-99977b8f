import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SkillsAndProjects } from "@/components/sections/SkillsAndProjects";
import { ContactAndFooter } from "@/components/sections/ContactAndFooter";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      <Hero />
      <About />
      <SkillsAndProjects />
      <ContactAndFooter />
    </main>
  );
}
