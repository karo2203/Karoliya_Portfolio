import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        abyss: "#030712",
        void: "#0a0f1a",
        cyan: {
          neon: "#22d3ee",
          glow: "#06b6d4",
        },
        violet: {
          electric: "#a78bfa",
          neon: "#8b5cf6",
        },
        teal: {
          accent: "#2dd4bf",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
        display: ["var(--font-syne)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(at 40% 20%, rgba(34, 211, 238, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.2) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(45, 212, 191, 0.1) 0px, transparent 50%), radial-gradient(at 80% 50%, rgba(59, 130, 246, 0.12) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(139, 92, 246, 0.15) 0px, transparent 50%)",
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        "float-alt": "float-alt 22s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        "hero-orbit": "hero-orbit 18s linear infinite",
        "neon-flicker": "neon-flicker 5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -20px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 10px) scale(0.95)" },
        },
        "float-alt": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(-40px, 30px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "hero-orbit": {
          to: { rotate: "360deg" },
        },
        "neon-flicker": {
          "0%, 100%": { opacity: "0.85", filter: "brightness(1)" },
          "50%": { opacity: "1", filter: "brightness(1.08)" },
        },
      },
      boxShadow: {
        cyan: "0 0 40px rgba(34, 211, 238, 0.35)",
        violet: "0 0 40px rgba(139, 92, 246, 0.35)",
        card: "0 8px 32px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
