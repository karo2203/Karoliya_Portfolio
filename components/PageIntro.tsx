"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageIntro({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setRevealed(true), 120);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!revealed && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-[70] bg-abyss"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
            <motion.div
              className="absolute inset-x-[20%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-neon to-transparent shadow-[0_0_24px_rgba(34,211,238,0.6)]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            />
            <motion.p
              className="absolute bottom-24 left-0 right-0 text-center font-mono text-[10px] uppercase tracking-[0.5em] text-cyan-neon/80"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Initializing neural surface
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.06 }}
      >
        {children}
      </motion.div>
    </>
  );
}
