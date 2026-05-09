"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/sections/SectionHeading";

const projects = [
  {
    title: "AI Scheduler with Chatbot Interface",
    desc: "AI-powered chatbot using ML and NLP for personalized schedule planning.",
    tag: "NLP · Assistant",
    icon: "◈",
  },
  {
    title: "Smart Poultry Farming",
    desc: "IoT application using sensors and automation for farm monitoring and alerts.",
    tag: "IoT · Automation",
    icon: "◎",
  },
  {
    title: "Real-Time Traffic Sign Detection",
    desc: "Python, OpenCV, YOLOv5, CNN project with 95% accuracy.",
    tag: "CV · YOLOv5",
    icon: "▣",
  },
];

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Deployments"
          title="Featured builds."
          subtitle="Production-minded experiments bridging models, perception, and the real world."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.08}>
              <motion.article
                className="glass glow-border group relative flex h-full flex-col rounded-3xl p-8"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <span className="font-mono text-3xl text-cyan-neon/80 transition-transform duration-300 group-hover:scale-110">
                  {p.icon}
                </span>
                <span className="mt-6 inline-flex w-fit rounded-full border border-cyan-neon/25 bg-cyan-neon/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-neon">
                  {p.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white md:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-4 flex-1 leading-relaxed text-slate-400">
                  {p.desc}
                </p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-neon/35 to-transparent" />
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                  Core systems ready
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
