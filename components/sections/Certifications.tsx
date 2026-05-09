"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const certs = [
  "Cloud Computing Virtual Training Program with Microsoft",
  "Power BI Workshop",
  "Web Design and Development",
  "Data Analytics",
  "Internshala Data Science Training",
  "MS Excel Essentials",
  "Generative AI Learnathon",
  "AI Accelerator Program on Power BI and Flask",
];

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-28 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certified trajectories."
          subtitle="Continuous calibration with industry-grade programs and platforms."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certs.map((c, i) => (
            <ScrollReveal key={c} delay={(i % 4) * 0.04}>
              <motion.div
                className="glass flex items-start gap-4 rounded-2xl border border-white/5 p-5"
                whileHover={{
                  y: -3,
                  borderColor: "rgba(167, 139, 250, 0.35)",
                  boxShadow:
                    "0 0 32px rgba(139, 92, 246, 0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
              >
                <span className="mt-1 font-mono text-sm text-violet-electric">
                  ✓
                </span>
                <p className="text-sm font-medium leading-snug text-slate-200 md:text-base">
                  {c}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
