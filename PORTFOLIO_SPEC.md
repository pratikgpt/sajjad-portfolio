# Portfolio Website — Build Spec (Sajjad Chaus)

> Hand this file to Claude Code. It contains the full brief, content, and acceptance criteria.
> Style target: **clean & minimal**, dark, founder-energy — in the spirit of siddz.com,
> sekharendudey.com, and ayushworks.com, but positioned for an **AI/ML + backend-infra** engineer.

---

## 0. Tech stack (use exactly this)

- **Next.js 14+ (App Router) + TypeScript**
- **Tailwind CSS** + **shadcn/ui** for primitives
- **Framer Motion** for subtle scroll/reveal animations (keep it restrained)
- **lucide-react** for icons; tech-stack icons via local SVGs in `/public/icons`
- Single-page layout with anchor nav (`#work`, `#projects`, `#stack`, `#about`, `#contact`)
- Deploy target: **Vercel**. Optimize Lighthouse (aim 95+ on all four).
- **No blog in v1.** Do not scaffold a blog/MDX system.

---

## 1. Design system

- **Theme:** dark base. Background `#0A0A0B`–`#111113`, surfaces `#16161A`, text `#E5E5E5` / muted `#8A8A8A`.
- **Single accent:** cyan `#00D9FF` (matches my GitHub banner). Use sparingly — links, hover, active nav, key numbers.
- **Type:** sans for body (Inter or Geist Sans); **monospace** (Geist Mono / JetBrains Mono) for labels, section tags, metadata, stat numbers.
- **Section tags:** small uppercase mono labels above each section heading (e.g. `EXPERIENCE`, `PROJECTS`) — like sekharendudey.com.
- **Motion:** fade-up on scroll, ~0.4s, staggered. No parallax, no heavy effects. Respect `prefers-reduced-motion`.
- Fully responsive; mobile-first. Sticky condensed nav on scroll.

---

## 2. Page structure (single page, in order)

### 2.1 Hero
- Name: **Sajjad Chaus**
- One-liner: *"I build AI agents and the distributed systems they run on."*
- Rotating role titles (typewriter or cycle): `AI/ML Engineer` → `Agentic Systems` → `Backend Infrastructure` → `Problem Solver`
- Meta line: `22 · Mumbai, India · Open to Full-time & Internships (from May 2026)`
- **Photo:** use my uploaded image. Place it at `/public/sajjad.jpg`. Render as a contained, rounded frame on the right (desktop) / above text (mobile). Apply a subtle dark overlay + slight desaturation so it sits cleanly against the dark theme (the source is a dim night shot).
- Three stat badges (mono):
  - `Top 363 / 82,000+` — Amazon ML Hackathon
  - `4th place` — Fidlatica ML Competition
  - `AI/ML Intern` — EngageOS.ai
- CTAs: **View Work** (scrolls to projects), **Get in touch**; plus icon links: GitHub, LinkedIn, Email, Résumé (PDF download).

### 2.2 Experience  (tag: `EXPERIENCE`)
Timeline, one entry:
- **AI/ML Engineer — Internship · EngageOS.ai** · Remote, India · May–Sept 2025
  - Led end-to-end development of an AI Agent-as-a-Service platform for multi-channel, 24/7 autonomous customer engagement.
  - Architected a scalable backend with **FastAPI + LangGraph** handling **1,000+ concurrent agent requests** at **99.9% uptime**, **<3s** median response.
  - Built high-performance **RAG pipelines** (Qdrant vector DB + Redis caching) cutting retrieval latency **~70%**.
  - Designed proactive + reactive agent logic to reduce operational cost.
  - Stack chips: FastAPI · LangGraph · Qdrant · Redis · Python

### 2.3 Featured Projects  (tag: `PROJECTS`)
Card grid. **Each card:** title · stack chips · 1-line problem · 2–3 outcome bullets · **mini architecture diagram** (see §3) · Live button (if any) · GitHub button. Order:

1. **Distributed System Monitoring AI Platform**
   - Stack: FastAPI · Python · Docker · PostgreSQL · WebSockets · scikit-learn
   - Real-time distributed monitoring: Python agents stream OS metrics (CPU/memory/network) to a central FastAPI backend over WebSockets.
   - Isolation-Forest anomaly detection cut false-positive alerts **30–40%** vs static thresholds.
   - Fully containerized (API + PostgreSQL + Redis) via Docker Compose.
   - Repo: https://github.com/Sajjad01-chaus/Distributed-System-Monitoring-AI-platform

2. **NovaML — Multi-Agent Data Science Platform**
   - Stack: LangGraph · LangChain · Python · Groq · FastAPI · Streamlit
   - 6-agent LangGraph system automating the full DS pipeline (ingestion → evaluation).
   - Conditional routing + LLM reasoning agents for model selection.
   - Human-in-the-Loop approval gate in a Streamlit UI before execution resumes.

3. **Conditional UNet — Polygon Coloring**
   - Stack: PyTorch · CNNs · OpenCV · Weights & Biases
   - UNet predicting polygon fill from shape + color metadata.
   - 14.7M params, **Val Loss 0.0171** in 30 epochs; experiments tracked in W&B.

4. **Energy Demand Forecasting — BiLSTM + Attention**
   - Stack: Python · TensorFlow/Keras · Jupyter
   - 24-hour-ahead energy forecasting with a BiLSTM + attention architecture.
   - Repo: https://github.com/Sajjad01-chaus/Energy-Demand-Forcasting-using-BiLSTM-with-attention

> NOTE: GitHub links open in new tab. Show a "Code" button only where a repo exists.

### 2.4 Tech Stack  (tag: `STACK`)
Icon grid, grouped:
- **Languages:** Python · Java · SQL
- **AI/ML:** PyTorch · TensorFlow · Keras · LangGraph · LangChain · scikit-learn · Pandas · NumPy · Matplotlib · Seaborn · Plotly · Streamlit
- **Backend:** FastAPI · Flask · Celery · REST · WebSockets
- **Data & Infra:** PostgreSQL · MySQL · Redis · Qdrant · FAISS · Docker · Git/GitHub

### 2.5 GitHub Activity  (tag: `ACTIVITY`)
- Embed contribution heatmap for `Sajjad01-chaus` (use `react-github-calendar` or the GitHub contributions API). Caption with total repos: 41.

### 2.6 About  (tag: `ABOUT`)
- Short bio: final-year B.Tech CS (IoT), Minor in AI, Thakur College of Engineering & Technology, Mumbai (CGPA 8.0, grad May 2026). Focused on scalable AI systems and distributed architectures; currently going deeper on **ML System Design & MLOps**.
- Keep it one tight paragraph + a one-line human touch. No filler.

### 2.7 Contact  (tag: `CONTACT`)
- Heading: *"Let's build something."*
- Email: chaussajjad@gmail.com · LinkedIn: https://www.linkedin.com/in/sajjad-chaus-541b89258 · GitHub: https://github.com/Sajjad01-chaus
- A direct **"Email me"** mailto: button (no form backend) alongside the email/LinkedIn/GitHub channels.
- Footer: `© 2026 Sajjad Chaus` + repeated social icons.

---

## 3. The differentiator — mini architecture diagrams

This is what sets the site apart from the references (they don't have it). For each project card, render a small inline **SVG flow diagram** of the system (e.g. for project 1: `Agents → WebSocket → FastAPI → [Isolation Forest] → PostgreSQL/Redis`). Build a reusable `<ArchDiagram nodes edges />` component with mono labels and the cyan accent on data-flow arrows. Keep them ~3–6 nodes, legible on mobile, no animation by default.

---

## 4. Acceptance criteria
- [ ] Single page, anchor nav, sticky condensed header on scroll.
- [ ] Dark + single cyan accent; mono for labels/numbers; consistent section tags.
- [ ] Hero uses the uploaded photo, dark-overlaid, with rotating titles + 3 stat badges.
- [ ] All 4 projects rendered as cards with stack chips, metrics, arch diagram, working links.
- [ ] GitHub heatmap renders for `Sajjad01-chaus`.
- [ ] Résumé PDF downloadable from hero (place at `/public/Sajjad_resume.pdf`).
- [ ] Lighthouse ≥95 across the board; `prefers-reduced-motion` respected; passes axe a11y.
- [ ] No blog, no dummy lorem text — only the content in this spec.

## 5. Assets to drop in before building
- `/public/sajjad.jpg` — my photo
- `/public/Sajjad_resume.pdf` — my résumé
- `/public/icons/*.svg` — tech stack icons (grab from devicon or simple-icons)
