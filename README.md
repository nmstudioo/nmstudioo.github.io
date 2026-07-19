# Noushad Mostafa — Design-Engineered Portfolio

Welcome to the official repository of **Noushad Mostafa**, a highly polished, professional, and design-engineered Frontend Developer & UI/UX Designer portfolio.

This application is built with modern, ultra-performant standards, prioritizing typography, spatial harmony, micro-interactions, and comprehensive static site optimization for immediate loading and flawless SEO rankings.

Live Website: **[https://nmstudioo.github.io/](https://nmstudioo.github.io/)**

---

## 🎨 Design Philosophy & Concept

This portfolio is built as a pure manifestation of "design-to-code" alignment. Every container, font size, tracking detail, and transition has been carefully calibrated:

*   **Swiss-Modern Atmosphere:** The interface features a dark slate color scheme (`#020010` ink) paired with high-contrast text (`#f4f4f7` fog) and vibrant indigo-violet accents.
*   **System-Disciplined Layout:** Guided by precise typographic and spacing hierarchies using custom tailwind tokens, creating professional negative space and deliberate reading rhythms.
*   **Purposeful Micro-Interactions:** Custom fluid entrance animations powered by `motion` that respond to navigation without adding cognitive friction.
*   **No "AI Slop" or Over-Engineering:** A completely self-contained, offline-first client application. Features real-world architectural design, structural integrity, and native browser optimizations.

---

## 🛠️ Architecture & Core Stack

The application is built on top of a highly optimized modern single-page frontend:

*   **Vite + React 19:** Absolute leading edge for development compiling speed and lean static asset sizes.
*   **TypeScript:** Full compile-time static type safety ensuring no unexpected runtime exceptions.
*   **Tailwind CSS (v4):** Next-generation lightning-fast utility-first CSS processor.
*   **Motion (Framer Motion):** Smooth spring-physics-driven layout and entry animations.
*   **Lucide React:** Consistent, modern, responsive lightweight vector iconography.

---

## 🚀 Advanced GitHub Pages SEO & SPA Routing

Standard single-page applications (SPAs) hosted on static servers (like GitHub Pages) suffer from a critical flaw: **direct nested links or reload on sub-routes return a 404 error**, and **search engine spiders cannot index pages behind client-side hash routers.**

This repository resolves both problems beautifully with an automated **Static Page Pre-Generation System**:

### 1. Dual-Mode Client-Side Routing
The router in `src/App.tsx` reads both `window.location.pathname` (for clean, professional SEO URLs) and falls back to hash routing (`#/about`) for legacy links. It utilizes the browser's HTML5 History API (`window.history.pushState`) to change URLs instantly with no full-page reloads.

### 2. Automated Static Build Pipeline
During `npm run build`, a custom compilation script (`scripts/generate-static-pages.js`) automatically:
1.  Creates a fallback `dist/404.html` (which guarantees no direct link returns a blank GitHub Pages error).
2.  Creates dedicated subdirectories and copies of `index.html` for every routing page and publication article (e.g. `dist/work/index.html`, `dist/publications/manifesto/index.html`).
3.  Serves direct, crawlable static directories with a 200 HTTP success code, loading the SPA's entry point natively.

This enables search engines like Google to index individual routes natively as independent canonical URLs, and users can share clean links (e.g. `https://nmstudioo.github.io/publications/manifesto`) which load instantly.

---

## 📂 Project Structure

```bash
├── .github/workflows/   # Automated CI/CD deployment via GitHub Actions
├── public/              # Static files (Favicons, static images, robots.txt, sitemap.xml)
├── scripts/             # Build pipeline scripts (Static page SEO generator)
├── src/
│   ├── components/      # Modular, decoupled UI View Components
│   ├── data/            # Static portfolio content and publication articles
│   ├── types.ts         # Shared TypeScript interfaces and structures
│   ├── App.tsx          # Main React entry with HTML5 history router
│   ├── main.tsx         # React DOM renderer
│   └── index.css        # Tailwind CSS configuration and theme declaration
├── index.html           # Document head with OG tags & JSON-LD schema
├── package.json         # Dependency declarations and build definitions
├── tsconfig.json        # TypeScript compiler configurations
└── vite.config.ts       # Vite bundler options and path aliases
```

---

## 💻 Local Development

Get the project running on your computer in less than a minute:

### 1. Clone the repository:
```bash
git clone https://github.com/nmstudioo/nmstudioo.github.io.git
cd nmstudioo.github.io
```

### 2. Install dependencies:
```bash
npm install
```

### 3. Launch the local dev server:
```bash
npm run dev
```
Open your browser to `http://localhost:3000` to preview.

---

## 📦 Static Compilation & Production

To compile, build, and pre-render all static paths for GitHub Pages:

```bash
npm run build
```

The compiled assets, along with pre-rendered sitemaps, robots configurations, and static route folders, will be saved into the `dist/` directory.

---

## 🤖 GitHub Actions CI/CD Deployment

The repository includes a pre-configured GitHub Actions workflow in `.github/workflows/deploy.yml` that triggers on every push to the `main` or `master` branch. It sets up Node 22, installs dependencies, builds the production output, and automatically deploys the pre-rendered static files to **GitHub Pages**.
