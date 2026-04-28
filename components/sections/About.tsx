"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Crafting digital experiences
            <br />
            <span className="gradient-text">with purpose</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Avatar + decoration */}
          <ScrollReveal direction="left">
            <div className="relative flex justify-center lg:justify-start">
              {/* Decorative ring */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-80 h-80 rounded-full border border-dashed border-indigo-300/30 dark:border-indigo-700/30"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 rounded-full border border-dashed border-purple-300/20 dark:border-purple-700/20"
                />
              </div>

              {/* Avatar */}
              <div className="relative z-10">
                <div className="w-64 h-64 rounded-3xl overflow-hidden border-2 border-indigo-200 dark:border-indigo-800/60 shadow-glow">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 via-purple-500 to-indigo-600 flex items-center justify-center">
                    <span className="text-7xl font-black text-white/90">AM</span>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 shadow-glass-dark"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Open to work</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 glass-card rounded-2xl px-4 py-3 shadow-glass-dark"
                >
                  <div className="text-center">
                    <div className="text-xl font-black gradient-text">5+</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Years Exp.</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Bio */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Hi there! I&apos;m {personalInfo.name} 👋
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {personalInfo.bio}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personalInfo.bio2}
                </p>
              </div>

              {/* Info chips */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300">
                  <MapPin size={14} className="text-indigo-500" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300">
                  <Mail size={14} className="text-indigo-500" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-sm text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
                  <CheckCircle size={14} />
                  Available for hire
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {personalInfo.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50"
                  >
                    <div className="text-2xl font-black gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex gap-3 pt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 hover:shadow-glow text-sm"
                >
                  Let&apos;s Talk
                </a>
                <a
                  href="/resume.pdf"
                  className="px-5 py-2.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 text-sm"
                >
                  Download CV
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
