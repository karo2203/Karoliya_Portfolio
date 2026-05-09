"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const bullets = [
  "Models that learn.",
  "Pipelines that scale.",
  "Interfaces that communicate.",
];

export function About() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Profile vector"
          title="Architect of intelligent systems."
          subtitle="Precision over noise. Signals over static."
        />

        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <ScrollReveal delay={0.05}>
            <motion.article
              className="glass glow-border rounded-3xl p-8 md:p-10"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
                B.Tech graduate in Artificial Intelligence & Data Science with
                expertise in Python, Java, SQL, Power BI, and Machine Learning.
                Skilled in data analysis, visualization, and software
                development with strong interest in AI and Cloud technologies.
                Eager to contribute in a dynamic IT workplace.
              </p>
            </motion.article>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="flex h-full flex-col justify-center gap-6">
              {bullets.map((b, i) => (
                <motion.div
                  key={b}
                  className="glass flex items-center gap-4 rounded-2xl border border-white/5 px-5 py-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 0 0 1px rgba(34,211,238,0.25), 0 20px 40px rgba(0,0,0,0.35)",
                  }}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-neon/30 to-violet-neon/30 font-mono text-xs text-cyan-neon">
                    {(i + 1).toString().padStart(2, "0")}
                  </span>
                  <p className="text-base font-medium text-white md:text-lg">
                    {b}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
