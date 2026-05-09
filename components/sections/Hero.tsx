"use client";

import { motion } from "framer-motion";
import { easing, staggerContainer, staggerWord } from "@/lib/motion";

const nameWords = ["Karoliya", "Agin", "Doli", "R", "G"];

const fadeUpSimple = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

export function Hero() {
  const headline =
    "AI & Data Science Graduate | Python | SQL | Power BI | Machine Learning";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pb-24 pt-32 md:px-8"
    >
      {/* Soft vignette + corner accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.14),transparent_55%)]" />
      <div className="pointer-events-none absolute left-[8%] top-[22%] h-40 w-40 rounded-full bg-cyan-neon/10 blur-3xl md:h-56 md:w-56" />
      <div className="pointer-events-none absolute bottom-[18%] right-[12%] h-48 w-48 rounded-full bg-violet-neon/15 blur-3xl" />

      <div className="pointer-events-none absolute left-8 top-[38%] h-72 w-72 rounded-full border border-cyan-neon/25 blur-[2px] md:block" />
      <div className="pointer-events-none absolute right-[10%] top-28 hidden h-32 w-32 rounded-full border border-violet-neon/40 animate-pulseGlow md:block" />

      {/* Slow rotating neon halo */}
      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.14] animate-hero-orbit md:opacity-[0.18]"
        aria-hidden
      >
        <div className="h-full w-full rounded-full bg-[conic-gradient(from_200deg,transparent,rgba(34,211,238,0.55),transparent_28%,rgba(167,139,250,0.5),transparent_62%,rgba(45,212,191,0.45),transparent)] blur-3xl" />
      </div>

      <motion.div
        className="hero-neon-frame relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-[1.75rem] px-1 py-2 md:px-4 md:py-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="hero-scan-line mb-1 max-w-xs rounded-full md:max-w-sm" />

        <motion.p
          variants={staggerWord}
          custom={0}
          className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-neon/95 animate-neon-flicker md:text-sm"
        >
          Neural portfolio · Signal online
        </motion.p>

        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight drop-shadow-[0_0_40px_rgba(34,211,238,0.08)] sm:text-5xl md:text-6xl lg:text-7xl">
          <motion.span
            variants={fadeUpSimple}
            className="block text-slate-300 transition-colors duration-500 md:text-slate-200"
          >
            I&apos;m
          </motion.span>
          <span className="mt-2 flex flex-wrap gap-x-3 gap-y-2 md:mt-3">
            {nameWords.map((w, i) => (
              <motion.span
                key={w}
                custom={i}
                variants={staggerWord}
                className={`transition-[text-shadow,filter] duration-500 ${
                  i >= 2
                    ? "gradient-text drop-shadow-[0_0_36px_rgba(139,92,246,0.35)]"
                    : "text-white [text-shadow:0_0_42px_rgba(34,211,238,0.18)]"
                }`}
              >
                {w}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          variants={fadeUpSimple}
          className="max-w-3xl text-lg font-medium leading-snug text-slate-200 sm:text-xl md:text-2xl"
        >
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            {headline}
          </span>
        </motion.p>

        <motion.p
          variants={fadeUpSimple}
          className="max-w-2xl text-base leading-relaxed text-slate-400 transition-colors duration-300 hover:text-slate-300 md:text-lg"
        >
          Building intelligent, data-driven, and future-ready digital solutions
          — engineered for inference, tuned for clarity.
        </motion.p>

        <motion.div
          variants={fadeUpSimple}
          className="flex flex-wrap gap-4 pt-2"
        >
          <GlowButton href="#projects" variant="primary">
            View Projects
          </GlowButton>
          <GlowButton href="#contact" variant="secondary">
            Contact Me
          </GlowButton>
          <GlowButton href="/resume.pdf" variant="ghost" download="resume.pdf">
            Download Resume
          </GlowButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function GlowButton({
  href,
  children,
  variant,
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "secondary" | "ghost";
  /** When set, passes native `download` filename (e.g. resume.pdf). */
  download?: string;
}) {
  const base =
    "relative inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-neon focus-visible:ring-offset-2 focus-visible:ring-offset-abyss";
  const styles = {
    primary: `${base} bg-gradient-to-r from-cyan-glow via-cyan-neon to-teal-accent text-abyss shadow-cyan hover:shadow-[0_0_36px_rgba(34,211,238,0.55)] hover:brightness-[1.03]`,
    secondary: `${base} glass glow-border text-white hover:border-cyan-neon/45 hover:shadow-[0_0_28px_rgba(139,92,246,0.18)]`,
    ghost: `${base} border border-slate-600/80 bg-white/[0.03] text-slate-200 backdrop-blur-sm hover:border-teal-accent/55 hover:bg-white/[0.06] hover:text-cyan-neon hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]`,
  };

  return (
    <motion.a
      href={href}
      className={styles[variant]}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 28 }}
      {...(download ? { download } : {})}
    >
      {children}
    </motion.a>
  );
}
