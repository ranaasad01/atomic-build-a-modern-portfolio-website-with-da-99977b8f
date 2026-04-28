"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, CheckCircle, Send, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { useState } from "react";
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

// ─── Contact + Footer ─────────────────────────────────────────────────────────

type FormState = { status: "idle" | "sending" | "success" | "error"; message: string };

export function ContactFooter() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, setState] = useState<FormState>({ status: "idle", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ status: "sending", message: "" });
    await new Promise((r) => setTimeout(r, 1200));
    setState({ status: "success", message: "Message sent! I'll get back to you within 24 hours." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm";

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 mb-4">Contact</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Let&apos;s work<span className="gradient-text"> together</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
              Have a project in mind or just want to chat? I&apos;m always open to new opportunities and interesting conversations.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left info */}
            <ScrollReveal direction="left" className="lg:col-span-2 space-y-6">
              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-4">Get in touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email", value: "alex@example.com", href: "mailto:alex@example.com" },
                    { icon: MapPin, label: "Location", value: "San Francisco, CA", href: "#" },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <a key={label} href={href} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/50 transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 dark:text-slate-500">{label}</p>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 dark:text-white text-base mb-4">Follow me</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Github, href: "https://github.com", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                    { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-200 hover:scale-110">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-200/50 dark:border-indigo-800/30">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Available for work</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Currently open to full-time roles and freelance projects. Response time: &lt;24h.</p>
              </div>
            </ScrollReveal>

            {/* Right form */}
            <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                {state.status === "success" ? (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/50 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                    <p className="text-slate-500 dark:text-slate-400 mb-6">{state.message}</p>
                    <button onClick={() => setState({ status: "idle", message: "" })} className="px-5 py-2.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors text-sm">Send Another</button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Name *</label>
                        <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className={inputClass} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@example.com" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                      <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="Project inquiry, collaboration, etc." className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Message *</label>
                      <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about your project or idea..." className={[inputClass, "resize-none"].join(" ")} />
                    </div>
                    <button type="submit" disabled={state.status === "sending"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98]">
                      {state.status === "sending" ? (
                        <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Sending...</>
                      ) : (
                        <><Send size={16} />Send Message</>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="font-black text-xl gradient-text">AM</span>
              <span className="text-slate-400 dark:text-slate-500">|</span>
              <span className="text-sm text-slate-500 dark:text-slate-400">Full-Stack Engineer</span>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              &copy; {new Date().getFullYear()} Alex Morgan. Built with Next.js &amp; Tailwind.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/50 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a key={item} href={"#" + item.toLowerCase()}
                onClick={(e) => { e.preventDefault(); document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); }}
                className="text-xs text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors flex items-center gap-1">
                <ArrowRight size={10} />{item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
