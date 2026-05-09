export const easing = [0.25, 0.1, 0.25, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easing },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

export const staggerWord = {
  hidden: { opacity: 0, y: 20 },
  visible: (i?: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easing,
      delay: (typeof i === "number" ? i : 0) * 0.035,
    },
  }),
};

export const staggerChar = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: easing,
      delay: i * 0.02,
    },
  }),
};
