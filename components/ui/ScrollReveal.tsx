"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ArrowRight, Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import { skills, projects } from "@/lib/data";

// ─── ScrollReveal ─────────────────────────────────────────────────────────────

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };
  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = isInView ? { opacity: 1, y: 0, x: 0 } : initial;
  return (
    <motion.div ref={ref} initial={initial} animate={animate} transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── Skills Section ───────────────────────────────────────────────────────────

type SkillCategory = "Frontend" | "Backend" | "Tools & DevOps" | "Design";

const catColors: Record<SkillCategory, { bg: string; text: string; border: string; dot: string }> = {
  Frontend: { bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-700 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800/50", dot: "bg-blue-500" },
  Backend: { bg: "bg-emerald-50 dark:bg-emerald-950/30", text: "text-emerald-700 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800/50", dot: "bg-emerald-500" },
  "Tools & DevOps": { bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-700 dark:text-orange-300", border: "border-orange-200 dark:border-orange-800/50", dot: "bg-orange-500" },
  Design: { bg: "bg-pink-50 dark:bg-pink-950/30", text: "text-pink-700 dark:text-pink-300", border: "border-pink-200 dark:border-pink-800/50", dot: "bg-pink-500" },
};

const catIcons: Record<SkillCategory, string> = { Frontend: "⚡", Backend: "🔧", "Tools & DevOps": "🚀", Design: "🎨" };
const skillCategories: SkillCategory[] = ["Frontend", "Backend", "Tools & DevOps", "Design"];

function SkillBadge({ name, level, category }: { name: string; level: number; category: SkillCategory }) {
  const c = catColors[category];
  return (
    <motion.div whileHover={{ scale: 1.05, y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={[c.bg, c.text, c.border, "group flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium border transition-all duration-200 hover:shadow-md cursor-default"].join(" ")}>
      <span className={[c.dot, "w-1.5 h-1.5 rounded-full flex-shrink-0"].join(" ")} />
      <span>{name}</span>
      <div className="flex gap-0.5 ml-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={["w-1 h-1 rounded-full", i < level ? c.dot : "bg-slate-300 dark:bg-slate-600"].join(" ")} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 mb-4">Skills &amp; Expertise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">My technical<span className="gradient-text"> toolkit</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">A curated set of technologies I use to build robust, scalable, and beautiful applications.</p>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const catSkills = skills.filter((s) => s.category === category);
            const c = catColors[category];
            return (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={[c.bg, c.border, "w-10 h-10 rounded-xl flex items-center justify-center text-xl border"].join(" ")}>{catIcons[category]}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{category}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{catSkills.length} technologies</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill, i) => (
                      <motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: catIndex * 0.1 + i * 0.04, duration: 0.3 }}>
                        <SkillBadge name={skill.name} level={skill.level} category={skill.category} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal delay={0.4} className="text-center mt-10">
          <p className="text-sm text-slate-400 dark:text-slate-500">Skill level: Familiar to Expert (1-5 dots)</p>
        </ScrollReveal>
      </div>
    </section>
  );
}

// ─── Projects Section ─────────────────────────────────────────────────────────

const projectFilters = ["All", "Featured", "2024", "2023", "2022"];

function TechChip({ name }: { name: string }) {
  return <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600/50">{name}</span>;
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const gradients = ["from-indigo-500 via-purple-500 to-pink-500", "from-blue-500 via-cyan-500 to-teal-500", "from-orange-500 via-red-500 to-pink-500", "from-emerald-500 via-teal-500 to-cyan-500", "from-violet-500 via-purple-500 to-indigo-500", "from-amber-500 via-orange-500 to-red-500"];
  const gradient = gradients[index % gradients.length];
  return (
    <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group glass-card rounded-2xl overflow-hidden hover:border-indigo-500/30 dark:hover:border-indigo-500/20 transition-all duration-300 hover:shadow-glow flex flex-col">
      <div className={["relative h-44 bg-gradient-to-br overflow-hidden", gradient].join(" ")}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-black text-white/20 select-none">{project.title.charAt(0)}</span>
        </div>
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors" aria-label="GitHub"><Github size={18} /></a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors" aria-label="Live"><ExternalLink size={18} /></a>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">
            <Star size={10} className="fill-amber-400 text-amber-400" />Featured
          </div>
        )}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-medium">{project.year}</div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map((tech) => <TechChip key={tech} name={tech} />)}
          {project.techStack.length > 4 && <span className="px-2 py-0.5 rounded-md text-xs font-medium text-slate-400 dark:text-slate-500">+{project.techStack.length - 4} more</span>}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700/50">
          <div className="flex items-center gap-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" aria-label="GitHub"><Github size={16} /></a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors" aria-label="Live"><ExternalLink size={16} /></a>
          </div>
          <Link href={"/projects/" + project.slug} className="flex items-center gap-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all duration-200">Details<ArrowRight size={14} /></Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.year.toString() === activeFilter;
  });
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 mb-4">Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Things I&apos;ve<span className="gradient-text"> built</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">A selection of projects showcasing my skills across the full stack.</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-10">
          {projectFilters.map((filter) => (
            <button key={filter} onClick={() => setActiveFilter(filter)} className={["px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200", activeFilter === filter ? "bg-indigo-600 text-white shadow-glow" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"].join(" ")}>{filter}</button>
          ))}
        </ScrollReveal>
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}
          </AnimatePresence>
        </motion.div>
        <ScrollReveal delay={0.2} className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all duration-200 hover:scale-105">
            <Github size={18} />View All on GitHub<ArrowRight size={16} />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
