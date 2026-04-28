"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/lib/data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const handleClick = (href: string) => {
    onClose();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-72 bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800">
              <span className="font-bold text-lg gradient-text">Menu</span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="p-6 space-y-2">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleClick(link.href)}
                    className={[
                      "w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200",
                      isActive
                        ? "bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
                    ].join(" ")}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </nav>
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-sm text-slate-400 dark:text-slate-500 text-center">
                alex@example.com
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
