# 🚀 AI Automation Engineer Portfolio

> **"Architecting Autonomous Futures"** — A futuristic, immersive 4-page personal portfolio built for AI Automation Engineers and Web Developers.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?style=flat&logo=framer)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📸 Live Demo

🌐 **[View Live Portfolio →](https://your-portfolio.vercel.app)**

> Replace the link above with your actual Vercel URL after deployment.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Pages Overview](#pages-overview)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Customization Guide](#customization-guide)
- [Deployment](#deployment)
- [Features](#features)
- [License](#license)

---

## 🧠 About the Project

This is a **fully custom, production-grade personal portfolio** designed for AI Automation Engineers and Web Developers. It is built with a **futuristic dark aesthetic** inspired by tools like Linear, Vercel, and Apple — featuring glassmorphism UI cards, neon cyan/violet accent glow effects, animated scroll reveals, and a responsive bento grid layout.

The portfolio is designed to make a strong first impression on potential clients, recruiters, and collaborators by showcasing technical expertise in a visually immersive way.

---

## 📄 Pages Overview

### 1. 🏠 Home — The Hook
- Magnetic hero headline: **"Architecting Autonomous Futures"**
- Animated status badge showing availability
- Gradient text animation (cyan → violet)
- 3 floating stat cards highlighting key strengths
- CTA buttons with neon glow hover effects
- Animated scroll hint

### 2. 👤 About — The Architect
- Personal identity card with specialty, education, and work mode
- Tech Stack bento grid organized into 3 categories:
  - **Automation** — n8n, Zapier, Python
  - **AI / LLMs** — Gemini, Claude, OpenAI, Pinecone
  - **Web Dev** — React, Angular, Tailwind CSS, .NET
- Professional timeline with experience and education history
- Personal philosophy quote card

### 3. 🧪 The Lab — Projects
- Filterable project grid (All / AI & Automation / Development)
- Each project card includes:
  - Title and subtitle
  - Technical description
  - Tech stack badges
  - Performance metrics
  - View Case Study button
- Animated card transitions using Framer Motion

### 4. 📬 Connect — Contact
- Glassmorphism contact form with fields for name, email, project type, and message
- Success state animation after form submission
- Floating social links (LinkedIn, GitHub, Instagram)
- Live availability status indicator
- **Floating Download CV button (FAB)** fixed to the bottom right

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| React | UI Framework | 18.3 |
| Vite | Build Tool & Dev Server | 5.2 |
| Tailwind CSS | Utility-First Styling | 3.4 |
| Framer Motion | Animations & Transitions | 11.0 |
| Lucide React | Icon Library | 0.383 |
| Google Fonts | Typography (Syne, DM Sans, JetBrains Mono) | — |

---

## 📁 Folder Structure

```
portfolio/
│
├── public/                     # Static files (put your cv.pdf here)
│   └── cv.pdf                  # Your downloadable CV/Resume
│
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Fixed top navigation with active pill
│   │   ├── CustomCursor.jsx    # Magnetic custom cursor (desktop only)
│   │   └── RevealOnScroll.jsx  # Framer Motion scroll animation wrapper
│   │
│   ├── pages/                  # The 4 main portfolio pages
│   │   ├── Home.jsx            # Hero section
│   │   ├── About.jsx           # About, tech stack, timeline
│   │   ├── Lab.jsx             # Filterable project showcase
│   │   └── Connect.jsx         # Contact form + social links
│   │
│   ├── App.jsx                 # Root component, mounts all pages
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles, fonts, custom classes
│
├── index.html                  # Root HTML with SEO meta tags
├── tailwind.config.js          # Custom Tailwind theme (colors, fonts, animations)
├── vite.config.js              # Vite configuration
├── postcss.config.js           # PostCSS (required for Tailwind)
└── package.json                # All project dependencies
```

---

## ⚡ Getting Started

### Prerequisites

Make sure you have **Node.js v18 or higher** installed.

```bash
# Check your Node version
node -v

# Should output v18.x.x or higher
# Download from https://nodejs.org if not installed
```

### Installation

```bash
# Step 1 — Clone the repository
git clone https://github.com/yourusername/portfolio.git

# Step 2 — Enter the project folder
cd portfolio

# Step 3 — Install all dependencies
npm install

# Step 4 — Start the development server
npm run dev
```

The site will open at **http://localhost:5173** with hot-reload enabled.

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

---

## ✏️ Customization Guide

Here are all the places you need to update to make this portfolio your own:

### 🔤 Your Name
**File:** `src/components/Navbar.jsx` — Line ~30
```jsx
// Change AARAV to your name
AARAV<span className="text-cyan-400">.</span>DEV
```

### 🏠 Hero Section
**File:** `src/pages/Home.jsx`
- Line ~47 → Update your job title
- Line ~68 → Update the sub-headline description
- Lines ~6–9 → Update the 3 stat cards with your real numbers

### 👤 About Section
**File:** `src/pages/About.jsx`
- Lines ~14–30 → Update tech stack items in all 3 categories
- Lines ~35–65 → Update the timeline with your real experience and education
- Lines ~95–102 → Update the identity card details (specialty, CGPA, etc.)

### 🧪 Projects
**File:** `src/pages/Lab.jsx`
- Update each project in the `projects` array with your real work
- Each project needs: `title`, `subtitle`, `description`, `stack`, `icon`, `accent`, `size`, `metrics`

### 📬 Contact & Socials
**File:** `src/pages/Connect.jsx`
- Lines ~8–24 → Update LinkedIn, GitHub, Instagram links

### 📄 CV Download
- Create a `public/` folder in the project root
- Add your CV renamed as `cv.pdf`
- The Download CV button is already connected to it

### 🌐 SEO Meta Tags
**File:** `index.html`
- Line 8 → Update the meta description
- Line 11 → Update the page title

---

## 🚀 Deployment

### Deploy to Vercel (Free — Recommended)

**Option A — Via GitHub (Recommended)**

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project**
4. Import your portfolio repository
5. Vercel auto-detects Vite — click **Deploy**
6. Your site is live in ~60 seconds ✅

**Option B — Via Vercel CLI**

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from your project folder
vercel

# Follow the prompts — press Enter to accept all defaults
```

### Deploy to Netlify (Alternative)

1. Go to [netlify.com](https://netlify.com) and sign up
2. Click **Add New Site → Import from Git**
3. Connect your GitHub and select the portfolio repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Click **Deploy Site** ✅

---

## ✨ Features

- 🌑 **Ultra Dark Mode** — Pitch black `#020204` background with deep glass cards
- 💎 **Glassmorphism UI** — `backdrop-blur` cards with subtle border glow
- 🎨 **Neon Accents** — Cyan and violet glow system throughout
- 🔤 **Custom Typography** — Syne (display) + DM Sans (body) + JetBrains Mono (code)
- 🎭 **Framer Motion Animations** — Scroll reveals, stagger children, layout transitions
- 🖱️ **Custom Cursor** — Magnetic dot + ring cursor on desktop
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized
- ⚡ **Vite Powered** — Lightning fast dev server and build
- 🔍 **SEO Ready** — Meta tags and page title configured
- 📥 **CV Download FAB** — Floating action button fixed to screen
- 🔗 **Smooth Scroll Navigation** — Navbar links scroll to sections instantly
- 🎛️ **Project Filter** — Filter projects by category with animated transitions

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

You are free to use, modify, and distribute this project for personal and commercial use.

---

## 🙋 Author

**Your Name Here**
- Portfolio: [your-portfolio.vercel.app](https://your-portfolio.vercel.app)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [github.com/yourusername](https://github.com/yourusername)

---

> Built with ❤️ using React, Tailwind CSS, and Framer Motion
