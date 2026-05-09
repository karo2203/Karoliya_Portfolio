"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { easing } from "@/lib/motion";

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: easing }}
    >
      {children}
    </motion.div>
  );
}
