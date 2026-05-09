"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const items = [
  "Best Outgoing Student",
  "Research paper presentation at ICAEMS-2026",
  "Second Rank in Anna University Examination",
  "Runner-Up in District-Level Kho Kho Championships",
  "Bronze Medal in Anna University Inter-Zone Kho Kho Tournament",
  "First Prize in cultural events",
  "Proficiency Award in school",
];

export function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-28 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="High signal"
          title="Wins that compound."
          subtitle="Discipline in sport, stage, and scholarship — the same focus powers my engineering."
        />

        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((a, i) => (
            <ScrollReveal key={a} delay={(i % 4) * 0.05}>
              <motion.li
                className="glass glow-border flex items-center gap-4 rounded-2xl px-5 py-4"
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 24 }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-neon/25 to-teal-accent/20 text-lg">
                  ★
                </span>
                <span className="text-sm font-medium text-slate-200 md:text-base">
                  {a}
                </span>
              </motion.li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
