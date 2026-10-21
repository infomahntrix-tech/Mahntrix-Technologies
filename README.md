<div align="center">
  <img src="public/images/mahntrix-full-logo.png" alt="Mahntrix Technologies Logo" width="340" />

  # Mahntrix Technologies
  **Digital Engineering, Software Systems & Autonomous Digital Experiences**

  [![Website](https://img.shields.io/badge/Website-mahntrixtechnologies.com-38bdf8?style=for-the-badge&logo=google-chrome&logoColor=white)](https://mahntrixtechnologies.com)
  [![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
  [![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)
  [![License](https://img.shields.io/badge/License-Proprietary-yellow.svg?style=for-the-badge)](#)

  <p align="center">
    Official production repository for <b>Mahntrix Technologies</b> — engineering next-generation web applications, high-concurrency real-time media engines, mobile apps, enterprise ERP/CRM platforms, and AI-driven growth systems.
  </p>
</div>

---

## ⚡ Highlights & Key Capabilities

- **🚀 Modern Next.js App Router Architecture:** Built with Server Components, optimized font streaming (`Bricolage Grotesque`, `Hanken Grotesk`, `JetBrains Mono`), and minimal client bundle overhead.
- **📱 ViCatch Product Simulator:** Complete interactive product showcase and mobile simulator for ViCatch — Mahntrix's flagship 1-on-1 live video discovery, community lounge, and creator economy platform built with WebRTC and Socket.io.
- **💼 Enterprise Case Studies:** Detailed architectural case studies across Custom CRMs, Multi-branch School ERPs, International Export/Import Systems, Insurance platforms, and Guest House PMS.
- **📊 Insights & Thought Leadership:** Deep-dive technical articles covering micro-frontends, high-concurrency WebSockets, real-time messaging, and multi-tenant database scaling.
- **✉️ Direct SMTP Communication Engine:** Robust server-side contact API (`/api/contact`) powered by Nodemailer with dual delivery: instant internal notification to `infomahntrix@gmail.com` and branded HTML confirmation to prospective clients.
- **📈 Comprehensive Analytics & GTM/GA4:** Integrated Google Tag Manager (`GTM-TRZVZ99Q`) container with custom event dispatchers for contact submissions, simulator engagements, and outbound click tracking.
- **🔍 100% Technical SEO & Social Cards:** Dynamic XML Sitemap (`/sitemap.xml`), robots policy (`/robots.txt`), OpenGraph metadata, Twitter cards, and branded 1200x630 preview card (`/images/og-image.png`).
- **💬 Floating HUD Actions:** Accessible quick-action HUD for instant WhatsApp inquiries, direct phone dialing, and email correspondence.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js](https://nextjs.org/) (App Router, React Server Components) |
| **Language & Runtime** | JavaScript (ESNext), Node.js (v18+) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/), CSS Custom Properties, Bespoke Glassmorphism & Ticker Marquees |
| **Animations & UI** | [Framer Motion](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/), Canvas Particle Mesh |
| **Server Actions & API** | Next.js API Routes, [Nodemailer](https://nodemailer.com/) (Gmail SMTP / Secure SSL) |
| **Telemetry & Tracking** | Google Tag Manager (GTM), Google Analytics 4 (GA4) |
| **Notifications** | [React Hot Toast](https://react-hot-toast.com/) |

---

## 📂 Repository Structure

```text
Mahntrix-Technologies/
├── public/
│   ├── favicon.ico                   # Multi-resolution browser favicon
│   ├── icon.svg & icon.png           # Modern scalable site icons
│   ├── apple-icon.png                # iOS home screen web-clip icon
│   └── images/
│       ├── og-image.png              # 1200x630 branded OpenGraph social card
│       ├── mahntrix-full-logo.png    # Primary high-res brand identity
│       ├── mahntrix-logo.png         # Icon emblem + wordmark
│       ├── projects/                 # Real project showcases & thumbnails
│       └── vicatch/                  # High-res ViCatch app interface captures
├── scripts/
│   ├── generate-favicons.ps1         # Native .NET icon generator script
│   └── generate-og-image.ps1         # 1200x630 OpenGraph card generator
├── src/
│   ├── app/                          # Next.js App Router pages & metadata
│   │   ├── layout.js                 # Global RootLayout (GTM, Fonts, Header, Footer)
│   │   ├── page.js                   # Homepage (Hero canvas, services, metrics, CTA)
│   │   ├── services/page.js          # Core service catalog & engineering tiers
│   │   ├── product/page.js           # ViCatch product suite & tech architecture
│   │   ├── products/page.js          # Canonical alias for /product/
│   │   ├── work/                     # Portfolio catalog & dynamic [slug] pages
│   │   ├── insights/                 # Engineering publications & [slug] articles
│   │   ├── contact/page.js           # Dedicated contact & consultation form
│   │   ├── api/contact/route.js      # Server-side SMTP dispatch & confirmation
│   │   ├── sitemap.js                # Search engine XML sitemap
│   │   └── robots.js                 # Crawler indexing policy
│   ├── components/
│   │   ├── Header.js                 # Dynamic sticky blur navigation
│   │   ├── Footer.js                 # Marquee ticker & categorized footer navigation
│   │   ├── BrandLogo.js              # Scalable SVG/PNG brand identity component
│   │   ├── ContactForm.js            # Interactive contact interface with toast states
│   │   ├── FloatingActions.js        # WhatsApp, Phone, and Email quick-connect HUD
│   │   ├── HeroCanvas.js             # Canvas particle web animation
│   │   └── product/
│   │       └── ViCatchInteractiveDemo.js # Real-time ViCatch interactive simulator
│   ├── lib/
│   │   ├── analytics.js              # GTM and GA4 event tracking utilities
│   │   ├── projectsData.js           # Case studies database and project metadata
│   │   └── insightsData.js           # Technical articles and thought leadership
│   └── utils/
│       └── emailService.js           # Nodemailer transport & HTML email templates
├── .env.example                      # Environment variables template
├── components.json                   # UI component registry configuration
├── next.config.js                    # Next.js configuration (images, redirects)
├── package.json                      # Project dependencies and script definitions
└── tailwind.config.js                # Tailwind theme extensions and color tokens
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: `v18.17.0` or later (`v20.x` recommended)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### 2. Clone Repository
```bash
git clone https://github.com/infomahntrix-tech/Mahntrix-Technologies.git
cd Mahntrix-Technologies
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy the example environment template into a local file:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
# SMTP Configuration for Contact Form
EMAIL_USER=infomahntrix@gmail.com
EMAIL_PASS=your_gmail_app_password_here
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true

# Google Tag Manager (Optional override, defaults to GTM-TRZVZ99Q)
NEXT_PUBLIC_GTM_ID=GTM-TRZVZ99Q
```

> **Note on Gmail SMTP**: Generate a dedicated 16-character App Password at [Google Account App Passwords](https://myaccount.google.com/apppasswords) with 2FA enabled.

### 5. Launch Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

---

## 📦 Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `npm run build` | Compiles optimized production bundle and pre-renders static pages |
| `npm run start` | Boots Next.js production HTTP server |
| `npm run lint` | Runs ESLint analysis across the repository |
| `pwsh scripts/generate-favicons.ps1` | Generates high-res icons and favicons using native .NET |
| `pwsh scripts/generate-og-image.ps1` | Regenerates 1200x630 OpenGraph social preview image |

---

## 🚢 Deployment

The repository is configured for zero-configuration continuous deployment on **Vercel** or any cloud runtime supporting Next.js App Router (AWS Amplify, Docker, DigitalOcean App Platform):

1. **Connect Repository**: Link `infomahntrix-tech/Mahntrix-Technologies` to Vercel.
2. **Environment Variables**: Add `EMAIL_USER`, `EMAIL_PASS`, and `NEXT_PUBLIC_GTM_ID` under Project Settings → Environment Variables.
3. **Deploy**: Every push to `main` automatically triggers an optimized edge build and atomic deployment.

---

## 📬 Contact & Corporate Information

- **Company**: Mahntrix Technologies
- **Official Website**: [mahntrixtechnologies.com](https://mahntrixtechnologies.com)
- **Direct Email**: [infomahntrix@gmail.com](mailto:infomahntrix@gmail.com)
- **Sales & Inquiries**: [Contact Form](https://mahntrixtechnologies.com/contact/)
- **LinkedIn**: [Aman Qureshi on LinkedIn](https://www.linkedin.com/in/aman-qureshi-86bb15197/)
- **Instagram**: [@amanwebsolutions](https://www.instagram.com/amanwebsolutions/)

---

<div align="center">
  <sub>© 2026 Mahntrix Technologies. All Rights Reserved. Engineered with precision and passion.</sub>
</div>