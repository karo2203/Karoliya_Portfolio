"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

function Particles({ count = 48 }: { count?: number }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${(Math.sin(i * 1.37) * 0.5 + 0.5) * 100}%`,
    y: `${(Math.cos(i * 0.83) * 0.5 + 0.5) * 100}%`,
    s: 0.35 + (i % 5) * 0.35,
    d: i * 0.08,
    o: 0.15 + (i % 7) * 0.06,
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-70"
      aria-hidden
    >
      {dots.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-cyan-neon blur-[1px]"
          style={{
            left: p.x,
            top: p.y,
            width: p.s,
            height: p.s,
            opacity: p.o,
          }}
          animate={{ y: [0, -12, 0], opacity: [p.o * 0.7, p.o, p.o * 0.7] }}
          transition={{
            duration: 10 + (p.id % 5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.d,
          }}
        />
      ))}
    </div>
  );
}

export function AnimatedBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(mx, [-0.5, 0.5], [-18, 18]), {
    stiffness: 60,
    damping: 20,
  });
  const ry = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), {
    stiffness: 60,
    damping: 20,
  });
  const blob2x = useTransform(rx, (v) => -v * 0.85);
  const blob2y = useTransform(ry, (v) => -v * 0.9);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mx.set(e.clientX / w - 0.5);
      my.set(e.clientY / h - 0.5);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-gradient-to-b from-void via-abyss to-abyss" />
      <div className="absolute inset-0 bg-mesh-gradient opacity-70" />

      <motion.div
        className="absolute -left-[20%] top-[15%] h-[55vh] w-[55vh] rounded-full bg-cyan-glow/20 blur-[120px] animate-float"
        style={{ x: rx, y: ry }}
      />
      <motion.div
        className="absolute -right-[15%] top-[25%] h-[50vh] w-[50vh] rounded-full bg-violet-neon/25 blur-[130px] animate-float-alt"
        style={{ x: blob2x, y: blob2y }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[30%] h-[42vh] w-[42vh] rounded-full bg-teal-accent/15 blur-[100px]"
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <Particles />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.35) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}
