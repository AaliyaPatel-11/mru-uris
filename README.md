# MRU-URIS | Undergraduate Research & Innovation Society

Official website for the **Undergraduate Research & Innovation Society (MRU-URIS)** at **Malla Reddy University**, featuring the flagship roadmaps for the **IEEE Student Branch** and **ACM Student Chapter**.

🌐 **Live Production Site:** [https://mru-uris.vercel.app](https://mru-uris.vercel.app)  
📦 **GitHub Repository:** [https://github.com/Akbenhynn07/mru-uris](https://github.com/Akbenhynn07/mru-uris)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Prerequisites & System Requirements](#-prerequisites--system-requirements)
- [Installation & Local Setup](#-installation--local-setup)
- [Available Scripts](#-available-scripts)
- [Project Architecture](#-project-architecture)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)

---

## 🔭 Overview

MRU-URIS is an undergraduate platform designed to foster multidisciplinary research, product innovation, and software/hardware engineering at Malla Reddy University. This web application provides:

- An interactive, cinematic experience celebrating student-led initiatives.
- The dual **Flagship Roadmap 2026** for both the **IEEE Student Branch** (Robotics, Hardware, IoT, PCB design) and the **ACM Student Chapter** (AI, Software Engineering, Open Source, Cloud).
- Board role openings for the founding cohort.
- Embedded application workflows and partnership spotlights with IEEE and ACM.

---

## ✨ Key Features

- **Cinematic Netflix-Style Intro:** Custom letter-by-letter illuminated entrance with dramatic zoom-out reveal into the main interface.
- **Continuous Neon Title Wave:** Dynamic cascading glow sweeping across the *"Undergraduate Research & Innovation Society"* title in an infinite loop.
- **3D Particle Sphere (HeroSphere):** Real-time 3D projected point sphere rendered on an HTML5 canvas with mouse parallax interaction and orbit physics.
- **Interactive Constellation Canvas:** Background starry constellation field with dynamic connecting nodes.
- **Dual Chapter Roadmap Switcher (Apple Aesthetic):**
  - **⚡ IEEE Student Branch:** Electric Blue (`#2563EB`) and Cyan (`#06B6D4`) circuit aesthetics, robotics, PCB engineering, and smart systems showcase.
  - **💻 ACM Student Chapter:** Purple (`#7C3AED`) and Indigo software aesthetics, Project ORION computing frontiers, and open-source odyssey.
  - Interactive **"Learn More"** modals with multi-photo event galleries and highlight checklists.
- **Glassmorphic Application Modal:** Embedded Google Form inside a sandboxed iframe with backdrop blur and custom loading state.
- **Fully Responsive & Accessible:** Fluid clamp typography, mobile touch-friendly navigation drawer, and smooth scroll animations.

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://react.dev/)
- **Bundler & Dev Server:** [Vite 5](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Visuals & Physics:** Native HTML5 Canvas 2D API with 3D projection math
- **Animations:** Custom CSS3 Hardware-Accelerated Keyframes & Transitions
- **Hosting:** [Vercel](https://vercel.com/) (CI/CD integrated with GitHub)

---

## ⚙️ Prerequisites & System Requirements

Before you begin, ensure you have the following installed on your machine:

| Requirement | Recommended Version | Minimum Version |
| :--- | :--- | :--- |
| **Node.js** | `v20.x` or `v22.x` (LTS) | `v18.0.0` |
| **npm** | `v10.x` | `v9.0.0` |
| **OS** | macOS, Linux, or Windows 10/11 | Any POSIX or Windows |
| **Browser** | Chrome, Edge, Safari, Firefox | Modern evergreen browser with Canvas support |

> **Note:** To verify your current versions, run:
> ```bash
> node -v
> npm -v
> ```

---

## 🚀 Installation & Local Setup

Follow these steps to set up and run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/Akbenhynn07/mru-uris.git
cd mru-uris
```

### 2. Install Dependencies
Install all required npm packages:
```bash
npm install
```

### 3. Start the Development Server
Launch the local Vite server:
```bash
npm run dev
```

The terminal will display the local development URL:
```
  VITE v5.4.21  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot-module replacement (HMR).

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with hot-reload at `http://localhost:5173`. |
| `npm run build` | Compiles and optimizes assets into production bundles inside the `dist/` directory. |
| `npm run preview` | Locally serves the production `dist/` build to preview before deploying. |

---

## 📂 Project Architecture

```
mru-uris/
├── public/
│   ├── events/             # Flagship event imagery
│   │   ├── ieee/           # IEEE robotics, drones, PCB, and smart systems photos
│   │   ├── event1-*.jpg    # ACM Computing Frontiers images
│   │   ├── event2-*.jpg    # ACM Open Source Odyssey images
│   │   └── event3-*.jpg    # ACM Code to Impact images
│   ├── acm-partner.png     # Official ACM partner logo
│   ├── ieee-partner.png    # Official IEEE partner logo
│   ├── uris-logo.jpg       # Society identity branding
│   └── favicon.svg         # Browser favicon
├── src/
│   ├── components/
│   │   ├── About.jsx           # Society pillars & mission
│   │   ├── ApplyModal.jsx      # Glassmorphic modal embedding Google Form
│   │   ├── ConstellationBg.jsx # Canvas starry starfield animation
│   │   ├── Coordinators.jsx    # Student coordinator leadership cards
│   │   ├── FadeInSection.jsx   # IntersectionObserver scroll reveal wrapper
│   │   ├── Footer.jsx          # Footer links, social handles, and apply CTA
│   │   ├── Hero.jsx            # Main headline with continuous letter glow
│   │   ├── HeroSphere.jsx      # 3D particle rotating globe on Canvas
│   │   ├── Leadership.jsx      # Faculty and patrons showcase
│   │   ├── Navbar.jsx          # Glassmorphic header with navigation links
│   │   ├── OpenRoles.jsx       # Board positions recruitment cards
│   │   ├── Partners.jsx        # IEEE and ACM partner accreditation cards
│   │   ├── SplashScreen.jsx    # Cinematic Netflix-style zoom entrance
│   │   └── Timeline.jsx        # Dual Roadmap (IEEE Branch & ACM Chapter)
│   ├── App.jsx                 # Root component orchestrating page flow & state
│   ├── index.css               # Global Tailwind directives & custom utilities
│   └── main.jsx                # React DOM entry point
├── index.html                  # HTML template with Google Fonts & metadata
├── tailwind.config.js          # Tailwind theme extensions & custom color tokens
├── vite.config.js              # Vite configuration with React plugin
├── package.json                # Project dependencies and script definitions
└── README.md                   # Project documentation & setup guide
```

---

## 🚢 Deployment

The project is configured for continuous deployment with **Vercel**:

1. Any commit pushed to the `main` branch triggers an automated production build:
   ```bash
   git push origin main
   ```
2. Build outputs are validated through Vite (`npm run build`).
3. Outputs are served over Vercel's global CDN with asset caching.

To deploy manually or to another static provider (Netlify, GitHub Pages, Cloudflare Pages):
```bash
npm run build
```
Deploy the generated `dist/` directory as a Single Page Application (SPA).

---

## 🔧 Troubleshooting

### Port 5173 is already in use
If another process is using port 5173, Vite will automatically switch to the next available port (e.g., `5174`). You can also specify a custom port:
```bash
npm run dev -- --port 3000
```

### Module not found / stale cache
If you encounter caching or dependency resolution issues:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Node version mismatch
If you run into issues on older Node versions, consider using [nvm](https://github.com/nvm-sh/nvm):
```bash
nvm install 20
nvm use 20
```

---

## 👥 Society Leadership & Inquiries

- **Organization:** Malla Reddy University Undergraduate Research & Innovation Society (MRU-URIS)
- **Email:** `uris@mallareddyuniversity.ac.in`
- **Instagram:** [@mru.uris](https://www.instagram.com/mru.uris/)
- **LinkedIn:** [MRU-URIS on LinkedIn](https://www.linkedin.com/company/mru-undergraduate-research-and-innovation-society)
