# Karoliya Agin Doli R G — AI & Data Science Portfolio

A polished, recruiter-friendly personal portfolio built with **Next.js**. The site presents an **AI-inspired, dark futurist** visual language—neon accents, glassmorphism, smooth motion, and a fully **responsive** layout—while showcasing profile, skills, projects, experience, certifications, achievements, education, and contact links.

---

## Features

- **Single-page experience** with anchored navigation and smooth scrolling  
- **Hero** with headline, value proposition, and primary actions (projects, contact, resume download)  
- **About**, **Skills**, **Projects**, **Experience**, **Certifications**, **Achievements**, **Education**, and **Contact** sections  
- **Framer Motion** for restrained, premium transitions and scroll reveals  
- **Tailwind CSS** for consistent spacing, typography, and responsive breakpoints  
- **Sticky glass-style navbar** with mobile-friendly navigation  
- **Animated mesh / particle-style background** and neon glow accents  
- **SEO-ready** metadata via the Next.js App Router  
- **Production-ready** for **Vercel** with the standard Next.js preset  

---

## Tech stack

| Layer        | Tools |
| ------------ | ----- |
| Framework    | [Next.js](https://nextjs.org/) (App Router) |
| Language     | TypeScript |
| UI & styling | [Tailwind CSS](https://tailwindcss.com/) |
| Motion       | [Framer Motion](https://www.framer.com/motion/) |
| Fonts        | Google Fonts (Syne, DM Sans) |
| Deployment   | [Vercel](https://vercel.com/) (recommended) |

---

## Folder structure

```text
├── app/
│   ├── globals.css          # Global styles, theme utilities
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Home page (composes all sections)
├── components/
│   ├── AnimatedBackground.tsx
│   ├── Navbar.tsx
│   ├── PageIntro.tsx
│   ├── ScrollReveal.tsx
│   └── sections/            # Feature sections (Hero, About, …)
├── lib/
│   └── motion.ts            # Shared animation presets
├── public/
│   └── resume.pdf           # Static résumé (served at /resume.pdf)
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## How to run locally

### Prerequisites

- **Node.js** 18+ (LTS recommended)  
- **npm** (ships with Node)

### Setup

```bash
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### npm scripts

| Script | Purpose |
| ------ | ------- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Run production server (after `build`) |
| `npm run lint` | ESLint |

Scripts call the Next.js CLI via Node (`node ./node_modules/next/dist/bin/next …`) so they remain reliable if `node_modules/.bin` symlinks are missing—common on Windows or interrupted installs.

---

## How to deploy on Vercel

1. Push this repository to **GitHub** (or GitLab / Bitbucket).  
2. Sign in to **[vercel.com](https://vercel.com)** and choose **Add New → Project**.  
3. **Import** your Git repository.  
4. Select the **Next.js** framework preset (usually auto-detected).  
5. Use the default **install** command (`npm install`) and **build** command (`npm run build`).  
6. Deploy. No extra environment variables are required for the baseline site.

After deployment, verify the live site and that **`/resume.pdf`** loads correctly on your production URL.

---

## Resume download note

The hero **Download Resume** button links to **`/resume.pdf`**.

In Next.js, files that must be available at a URL path belong in the **`public`** folder at the **project root**:

- Place (or replace) your CV at **`public/resume.pdf`**.  
- It is served statically at **`https://<your-domain>/resume.pdf`**—do **not** reference paths like `/public/resume.pdf` in code; use **`/resume.pdf`** only.

Keep the filename **`resume.pdf`** unless you update the hero link to match.

---

## Troubleshooting installs (OneDrive / sync folders)

If **`npm install`** fails with **`EPERM`**, **`ENOTEMPTY`**, or similar errors, synced folders (e.g. **OneDrive**) often lock files under `node_modules`.

**Fix:** Move or clone the project to a normal local directory **outside** sync (for example `C:\dev\portfolio`), delete `node_modules`, run **`npm install`** again, or temporarily pause sync during install.

---

## Contact / author

**Karoliya Agin Doli R G**  
AI & Data Science graduate — Python, SQL, Power BI, Machine Learning.

| | |
| --- | --- |
| **Email** | [karoliyaagindoli22@gmail.com](mailto:karoliyaagindoli22@gmail.com) |
| **LinkedIn** | [linkedin.com/in/karoliya-agin-doli-r-g](https://www.linkedin.com/in/karoliya-agin-doli-r-g) |
| **GitHub** | [github.com/karo2203](https://github.com/karo2203) |
| **LeetCode** | [leetcode.com/karoliya22](https://leetcode.com/karoliya22/) |

---

© Karoliya Agin Doli R G. Built with Next.js.
