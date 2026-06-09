/**
 * Single source of truth for all site content.
 * Keeps section components presentational and easy to scan.
 */

export const profile = {
  name: "Sajjad Chaus",
  tagline: "AI/ML Engineer, 22",
  meta: "22 · Mumbai, India · Open to full-time & internships",
  photo: "/sajjad.jpg",
  resume: "/Sajjad_resume.pdf",
};

export const links = {
  github: "https://github.com/Sajjad01-chaus",
  githubUser: "Sajjad01-chaus",
  linkedin: "https://www.linkedin.com/in/sajjad-chaus-541b89258",
  email: "chaussajjad@gmail.com",
};

export const experience = [
  {
    role: "ML Engineer — Internship",
    company: "Matrice AI",
    location: "Remote, India",
    period: "Dec 2025 – Feb 2026",
    summary:
      "Built real-time computer-vision pipelines for customer analytics on live video streams.",
    bullets: [
      "Engineered core CV pipelines for customer analytics, cutting latency ~15% on real-time streams.",
      "Fine-tuned custom YOLO models (JointBDOE) and accelerated inference with TensorRT for real-time streaming.",
      "Prototyped a Smart People Counter with YOLOv11s, reaching 0.92 mAP on high-density mall datasets.",
    ],
    stack: ["YOLOv11", "TensorRT", "PyTorch", "Computer Vision", "Python"],
  },
  {
    role: "AI/ML Engineer — Internship",
    company: "EngageOS.ai",
    location: "Remote, India",
    period: "May – Sept 2025",
    summary:
      "Led end-to-end development of an AI Agent-as-a-Service platform for multi-channel, 24/7 autonomous customer engagement.",
    bullets: [
      "Architected a scalable backend with FastAPI + LangGraph handling 1,000+ concurrent agent requests at 99.9% uptime and <3s median response.",
      "Built high-performance RAG pipelines (Qdrant vector DB + Redis caching) cutting retrieval latency ~70%.",
      "Designed proactive + reactive agent logic to reduce operational cost.",
    ],
    stack: ["FastAPI", "LangGraph", "Qdrant", "Redis", "Python"],
  },
];

export type Project = {
  title: string;
  /** rendered as a "Next.js / TypeScript / …" line under the title */
  stack: string[];
  description: string;
  /** screenshot at /public/projects/<file>; falls back to a surface block */
  image?: string;
  repo?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "MediTranslate",
    stack: ["React", "FastAPI", "WebSockets", "Groq Whisper", "PostgreSQL"],
    description:
      "Real-time doctor–patient translation with a full voice pipeline — speak in one language, the other side hears it — plus AI medical summarization across 20 languages.",
    image: "/projects/meditranslate.png",
    repo: "https://github.com/Sajjad01-chaus/HealthCare_Assistant_System",
  },
  {
    title: "NovaML — Multi-Agent Data Science Platform",
    stack: ["LangGraph", "LangChain", "Python", "Groq", "Streamlit"],
    description:
      "A 6-agent LangGraph system that automates the full data-science pipeline — from ingestion to model selection — with a human-in-the-loop approval gate.",
    image: "/projects/novaml.png",
    repo: "https://github.com/Sajjad01-chaus/NovaML-Multi-Agent-Data-science-platform-",
  },
  {
    title: "Troopod — Ad-to-Landing Personalization",
    stack: ["Groq Vision", "Llama 4 Scout", "FastAPI", "SSE", "Jina AI"],
    description:
      "Turns an ad creative into a personalized landing page — vision analysis maps the ad, then an LLM rewrites the page copy for conversion, streamed live.",
    image: "/projects/troopod.png",
    repo: "https://github.com/Sajjad01-chaus/Magic_Page",
  },
  {
    title: "Claim Processing Pipeline",
    stack: ["FastAPI", "LangGraph", "Groq", "PyMuPDF", "Streamlit"],
    description:
      "A multi-agent pipeline that ingests medical-claim PDFs, classifies each page with a multimodal LLM, and extracts structured data into clean JSON.",
    image: "/projects/claim-pipeline.png",
    repo: "https://github.com/Sajjad01-chaus/Claim-Processing-Pipeline",
  },
];

/** `color` is the brand hex used to tint the icon. Dark/colorless brands fall
 *  back to a light gray at render time so they stay legible on the dark theme. */
export type StackItem = { name: string; slug?: string; color?: string };

export const techStack: { group: string; items: StackItem[] }[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", slug: "python", color: "#4B8BBE" },
      { name: "Java", slug: "openjdk", color: "#ED8B00" },
      { name: "SQL", slug: "mysql", color: "#00A8C6" },
    ],
  },
  {
    group: "AI / ML",
    items: [
      { name: "PyTorch", slug: "pytorch", color: "#EE4C2C" },
      { name: "TensorFlow", slug: "tensorflow", color: "#FF6F00" },
      { name: "Keras", slug: "keras", color: "#D00000" },
      { name: "LangGraph", slug: "langgraph" },
      { name: "LangChain", slug: "langchain" },
      { name: "scikit-learn", slug: "scikitlearn", color: "#F7931E" },
      { name: "Pandas", slug: "pandas", color: "#B36BE2" },
      { name: "NumPy", slug: "numpy", color: "#4DABCF" },
      { name: "Matplotlib", slug: "matplotlib" },
      { name: "Seaborn", slug: "seaborn" },
      { name: "Plotly", slug: "plotly", color: "#636EFA" },
      { name: "Streamlit", slug: "streamlit", color: "#FF4B4B" },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "FastAPI", slug: "fastapi", color: "#11A89B" },
      { name: "Flask", slug: "flask" },
      { name: "Celery", slug: "celery", color: "#5BB85B" },
      { name: "REST", slug: "rest" },
      { name: "WebSockets", slug: "websockets" },
    ],
  },
  {
    group: "Data & Infra",
    items: [
      { name: "PostgreSQL", slug: "postgresql", color: "#5A8FE6" },
      { name: "MySQL", slug: "mysql", color: "#00A8C6" },
      { name: "Redis", slug: "redis", color: "#FF4438" },
      { name: "Qdrant", slug: "qdrant", color: "#E0457B" },
      { name: "FAISS", slug: "faiss" },
      { name: "Docker", slug: "docker", color: "#2496ED" },
      { name: "Git / GitHub", slug: "github" },
    ],
  },
];
