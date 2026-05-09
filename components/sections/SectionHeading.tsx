"use client";

import { ScrollReveal } from "@/components/ScrollReveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <ScrollReveal className="mb-12 md:mb-16">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-neon/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-slate-400 md:text-lg">{subtitle}</p>
      ) : null}
    </ScrollReveal>
  );
}
