"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const links = [
  {
    label: "Email",
    value: "karoliyaagindoli22@gmail.com",
    href: "mailto:karoliyaagindoli22@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/karoliya-agin-doli-r-g",
    href: "https://www.linkedin.com/in/karoliya-agin-doli-r-g",
  },
  {
    label: "GitHub",
    value: "github.com/karo2203",
    href: "https://github.com/karo2203",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/karoliya22",
    href: "https://leetcode.com/karoliya22/",
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-4 py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Handshake"
          title="Open channel."
          subtitle="Share a problem worth solving — I’ll meet you with architecture, data, and intent."
        />

        <ScrollReveal>
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              className="glass glow-border rounded-3xl p-8 md:p-10"
              whileHover={{ y: -4 }}
            >
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                Prefer direct lines. Drop a note, a dataset, or a bold idea — I
                respond fast and ship thoughtfully.
              </p>
              <a
                href="mailto:karoliyaagindoli22@gmail.com"
                className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-cyan-glow via-cyan-neon to-teal-accent px-8 py-4 text-sm font-bold text-abyss shadow-cyan transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]"
              >
                Compose email
              </a>
            </motion.div>

            <div className="flex flex-col gap-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    l.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="glass group flex items-center justify-between gap-4 rounded-2xl border border-white/5 px-5 py-4 transition-colors hover:border-cyan-neon/30"
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ x: 4 }}
                >
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-slate-500">
                      {l.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-white group-hover:text-cyan-neon md:text-base">
                      {l.value}
                    </p>
                  </div>
                  <span className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-cyan-neon">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <footer className="mt-20 border-t border-white/5 pt-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">
              © {new Date().getFullYear()} Karoliya Agin Doli R G · Crafted for
              the intelligent web
            </p>
          </footer>
        </ScrollReveal>
      </div>
    </section>
  );
}
