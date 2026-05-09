"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const groups = [
  {
    title: "Programming",
    accent: "from-cyan-neon/40 to-cyan-glow/10",
    items: ["Python", "Java (Basic)", "SQL"],
  },
  {
    title: "Data Tools",
    accent: "from-violet-electric/40 to-violet-neon/10",
    items: ["Power BI", "Excel", "Tableau (Basics)"],
  },
  {
    title: "Tools & Platforms",
    accent: "from-teal-accent/40 to-cyan-glow/10",
    items: ["Flutter", "VS Code", "Git & GitHub"],
  },
  {
    title: "Core Areas",
    accent: "from-blue-400/35 to-violet-neon/10",
    items: [
      "Data Analysis",
      "Machine Learning",
      "Visualization",
      "Problem Solving",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capability matrix"
          title="Technical stack · Optimized layers."
          subtitle="Composable skills for building data-rich products end to end."
        />

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {groups.map((g, gi) => (
            <ScrollReveal key={g.title} delay={gi * 0.06}>
              <motion.div
                className="glass glow-border relative h-full overflow-hidden rounded-3xl p-6"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${g.accent} blur-3xl`}
                />
                <h3 className="relative font-display text-lg font-semibold text-white">
                  {g.title}
                </h3>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {g.items.map((skill) => (
                    <li key={skill}>
                      <motion.span
                        className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200"
                        whileHover={{
                          scale: 1.05,
                          borderColor: "rgba(34,211,238,0.35)",
                          color: "#e2e8f0",
                          boxShadow:
                            "0 0 20px rgba(34,211,238,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
                        }}
                      >
                        {skill}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
