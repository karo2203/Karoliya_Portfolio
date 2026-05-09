"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const timeline = [
  {
    role: "Data Analytics Intern",
    org: "Zephyr Technologies Solutions Pvt. Ltd.",
    period: "Experience node",
    icon: "▸",
    details:
      "Analysis workflows, dashboards, and data storytelling in a dynamic product environment.",
  },
  {
    role: "AICTE Training",
    org: "Development of AI in Blockchain",
    period: "Certified training",
    icon: "◇",
    details:
      "Explored decentralized contexts for AI workloads and trustworthy model deployment patterns.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Timeline"
          title="Career transmissions."
          subtitle="Where circuits meet responsibility — disciplined delivery in high-signal environments."
        />

        <ScrollReveal>
          <div className="relative">
            <div className="absolute left-[19px] top-8 bottom-8 w-px bg-gradient-to-b from-cyan-neon via-violet-neon to-teal-accent md:left-[27px]" />
            <motion.div
              className="absolute left-[15px] top-12 h-3 w-3 rounded-full border-2 border-cyan-neon bg-abyss shadow-[0_0_12px_rgba(34,211,238,0.65)] md:left-[23px]"
              animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.1, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />

            <ul className="space-y-12">
              {timeline.map((item, index) => (
                <motion.li
                  key={item.role}
                  className="relative pl-14 md:pl-24"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <span className="absolute left-3 top-1 flex h-8 w-8 items-center justify-center rounded-xl border border-violet-neon/40 bg-violet-neon/10 font-mono text-sm text-violet-electric md:left-4 md:h-11 md:w-11">
                    {item.icon}
                  </span>

                  <div className="glass glow-border rounded-3xl p-6 md:p-8 md:grid md:grid-cols-[220px_1fr] md:gap-10">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-wider text-teal-accent">
                        {item.period}
                      </p>
                      <h3 className="mt-3 font-display text-xl font-semibold text-white md:text-2xl">
                        {item.role}
                      </h3>
                      <p className="mt-2 text-sm text-violet-electric">{item.org}</p>
                    </div>
                    <p className="mt-5 text-base leading-relaxed text-slate-400 md:mt-0 md:self-end">
                      {item.details}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
