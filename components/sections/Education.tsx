"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const rows = [
  {
    label: "B.Tech — AI & Data Science",
    place: "Mar Ephraem College of Engineering and Technology",
    meta: "CGPA 8.5 · 2022–2026",
  },
  { label: "Higher Secondary (HSC)", place: "Academic record", meta: "82.8%" },
  { label: "SSLC", place: "Academic record", meta: "91.4%" },
];

export function Education() {
  return (
    <section id="education" className="scroll-mt-28 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Knowledge base"
          title="Education · Calibrated depth."
          subtitle="Foundations that hold when models, data, and teams scale together."
        />

        <ScrollReveal>
          <div className="glass glow-border overflow-hidden rounded-3xl">
            {rows.map((r, i) => (
              <motion.div
                key={r.label}
                className="grid gap-4 border-b border-white/5 p-6 last:border-b-0 md:grid-cols-[1fr_auto] md:items-center md:p-8"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.02)" }}
              >
                <div>
                  <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                    {r.label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 md:text-base">
                    {r.place}
                  </p>
                </div>
                <p className="font-mono text-sm text-cyan-neon md:text-right">
                  {r.meta}
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
