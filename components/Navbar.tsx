"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certs" },
  { href: "#achievements", label: "Wins" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 32);
  });

  return (
    <>
      <motion.header
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-8"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <nav
          className={`glass mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-5 py-3 transition-shadow duration-300 ${
            scrolled
              ? "shadow-[0_0_0_1px_rgba(34,211,238,0.22),0_12px_40px_rgba(0,0,0,0.45)]"
              : "shadow-card"
          }`}
        >
          <a href="#hero" className="group flex shrink-0 items-center gap-2">
            <span className="font-display text-lg font-bold tracking-tight text-white md:text-xl">
              KADR
              <span className="ml-1 text-cyan-neon group-hover:text-violet-electric transition-colors">
                .
              </span>
            </span>
          </a>

          <ul className="hidden max-w-[calc(100%-12rem)] flex-nowrap items-center gap-0.5 overflow-x-auto scrollbar-none md:flex lg:gap-1 xl:gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-cyan-neon lg:px-3.5"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-neon to-teal-accent px-4 py-2.5 text-sm font-semibold text-abyss shadow-cyan transition-all hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] md:inline-block"
          >
            Let&apos;s talk
          </a>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-200 md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="text-lg">{open ? "×" : "≡"}</span>
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-xl px-3 py-3 text-slate-200 hover:bg-white/5 hover:text-cyan-neon"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-2 block rounded-xl bg-gradient-to-r from-cyan-glow to-teal-accent py-3 text-center font-semibold text-abyss"
                  onClick={() => setOpen(false)}
                >
                  Let&apos;s talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
