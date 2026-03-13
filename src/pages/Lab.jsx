import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Code2,
  ArrowUpRight,
  Video,
  Database,
  LayoutDashboard,
  Globe2,
  Cpu,
} from "lucide-react";
import RevealOnScroll, {
  StaggerContainer,
  StaggerChild,
} from "../components/RevealOnScroll";

const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI & Automation" },
  { id: "dev", label: "Development" },
];

const projects = [
  {
    id: 1,
    category: "ai",
    title: "RAG-based Knowledge Base System",
    subtitle: "Agentic Retrieval Pipeline",
    description:
      "Built an end-to-end RAG system that automates document ingestion from Google Drive into a Pinecone vector database. It uses recursive splitting logic to provide context-aware, hallucination-free AI responses.",
    stack: ["n8n", "OpenAI/Claude", "Pinecone", "JavaScript", "Vector Embeddings"],
    icon: Database,
    accent: "cyan",
    size: "large",
    metrics: ["100% Data Accuracy", "< 1.5s Response Latency", "Zero-Hallucination Logic"],
  },
  {
    id: 2,
    category: "ai",
    title: "Real Estate AI Video Engine",
    subtitle: "Automated Cinematic Property Tours",
    description:
      "A high-frequency pipeline that transforms static property photos into cinematic 9:16 vertical videos using Multimodal Vision for focal point detection and SVD-XT for motion generation.",
    stack: ["n8n", "Gemini 1.5 Pro", "Stable Video Diffusion (SVD)", "Docker", "Python"],
    icon: Video,
    accent: "violet",
    size: "normal",
    metrics: ["Scalable to 60,000+ Videos", "100% Autonomous Workflow", "Multi-Angle Generation"],
  },
  {
    id: 3,
    category: "ai",
    title: "Smart AI Code Auditor",
    subtitle: "Autonomous Technical Review Agent",
    description:
      "Integrated a GitHub-triggered agent that automatically audits code pushes for logic errors and security flaws using Claude 3 API, providing instant feedback before human PR reviews.",
    stack: ["n8n", "Claude 3.5 Sonnet", "GitHub Webhooks", "Node.js", "System Prompts"],
    icon: Brain,
    accent: "cyan",
    size: "normal",
    metrics: ["40% Faster Review Cycles", "Automated Security Linting", "24/7 Deployment Guard"],
  },
  {
    id: 4,
    category: "ai",
    title: "Multi-Modal Invoice Agent",
    subtitle: "Intelligent Document Processing (IDP)",
    description:
      "Developed a vision-based automation that extracts structured data from complex, non-standard invoices and automatically normalizes it into ERP-ready formats using LLM reasoning.",
    stack: ["n8n", "GPT-4o Vision", "Google Sheets API", "RegEx", "Data Transformation"],
    icon: Cpu,
    accent: "violet",
    size: "normal",
    metrics: ["98% Extraction Accuracy", "Automated Error Handling", "Zero Manual Data Entry"],
  },
  {
    id: 5,
    category: "dev",
    title: "Next-Gen AI Portfolio Site",
    subtitle: "Immersive Developer Showcase",
    description:
      "A high-performance personal brand site featuring dark mode, glassmorphism, and Framer Motion animations to showcase AI projects with a futuristic, tech-forward aesthetic.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Vercel"],
    icon: Globe2,
    accent: "cyan",
    size: "large",
    metrics: ["95+ Lighthouse Score", "Full Responsive Design", "Interactive Bento Layout"],
  },
  {
    id: 6,
    category: "dev",
    title: "Jai Ma Bhawani Digital Presence",
    subtitle: "Business Growth Landing Page",
    description:
      "Developed a modern, SEO-optimized landing page for a family-owned business, focusing on high conversion rates and mobile-first user experience.",
    stack: ["React", "Tailwind CSS", "Lucide Icons", "Mobile-First UI"],
    icon: LayoutDashboard,
    accent: "violet",
    size: "normal",
    metrics: ["Enhanced Digital Visibility", "100% Mobile Responsive", "Fast Loading Assets"],
  },
];
function ProjectCard({ project, index }) {
  const isCyan = project.accent === "cyan";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.96 }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`glass-card group relative overflow-hidden flex flex-col transition-all duration-300 
        hover:border-opacity-30 hover:-translate-y-1
        ${isCyan ? "hover:border-cyan-400/25" : "hover:border-violet-400/25"}
        ${project.size === "large" ? "md:col-span-2" : ""}`}
      style={{
        borderColor: isCyan ? "rgba(34,211,238,0.1)" : "rgba(167,139,250,0.1)",
      }}
      whileHover={{
        boxShadow: isCyan
          ? "0 20px 60px rgba(34,211,238,0.08), 0 0 0 1px rgba(34,211,238,0.15)"
          : "0 20px 60px rgba(167,139,250,0.08), 0 0 0 1px rgba(167,139,250,0.15)",
      }}
    >
      {/* Top Accent Strip */}
      <div
        className="h-px w-full"
        style={{
          background: isCyan
            ? "linear-gradient(90deg, transparent, rgba(34,211,238,0.4), transparent)"
            : "linear-gradient(90deg, transparent, rgba(167,139,250,0.4), transparent)",
        }}
      />

      {/* BG Glow */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: isCyan
            ? "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="p-7 flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}
              style={{
                background: isCyan
                  ? "rgba(34,211,238,0.08)"
                  : "rgba(167,139,250,0.08)",
                border: isCyan
                  ? "1px solid rgba(34,211,238,0.2)"
                  : "1px solid rgba(167,139,250,0.2)",
              }}
            >
              <project.icon
                size={18}
                className={isCyan ? "text-cyan-400" : "text-violet-400"}
              />
            </div>
            <div>
              <p
                className={`font-mono text-[10px] tracking-widest uppercase mb-0.5 ${
                  isCyan ? "text-cyan-400/60" : "text-violet-400/60"
                }`}
              >
                {project.subtitle}
              </p>
              <h3 className="font-display font-700 text-lg text-white leading-tight">
                {project.title}
              </h3>
            </div>
          </div>
          <motion.button
            className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isCyan
                ? "bg-cyan-400/10 border border-cyan-400/20 text-cyan-400"
                : "bg-violet-400/10 border border-violet-400/20 text-violet-400"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUpRight size={14} />
          </motion.button>
        </div>

        {/* Description */}
        <p className="font-body text-sm text-white/45 leading-relaxed mb-5 flex-1">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="font-mono text-[10px] text-white/30 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]"
            >
              {metric}
            </span>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={`tech-badge text-[11px] ${
                isCyan ? "" : "tech-badge-violet"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Case Study Button */}
        <motion.button
          className={`mt-5 w-full py-3 rounded-xl font-display font-semibold text-sm tracking-wider transition-all duration-300 ${
            isCyan
              ? "bg-cyan-400/5 border border-cyan-400/15 text-cyan-400/70 hover:bg-cyan-400/10 hover:border-cyan-400/30 hover:text-cyan-400"
              : "bg-violet-400/5 border border-violet-400/15 text-violet-400/70 hover:bg-violet-400/10 hover:border-violet-400/30 hover:text-violet-400"
          }`}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
        >
          View Case Study →
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Lab() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter,
  );

  return (
    <section id="lab" className="relative py-32 px-6">
      {/* BG Accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <RevealOnScroll>
          <div className="mb-12">
            <p className="section-label mb-3">// projects.lab</p>
            <h2 className="font-display font-700 text-5xl md:text-6xl text-white leading-tight">
              The <span className="gradient-text">Lab</span>
            </h2>
            <p className="mt-4 text-white/40 font-body text-lg max-w-xl">
              Experiments, productions, and pipelines — shipping intelligence at
              every level.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Pills */}
        <RevealOnScroll delay={0.1}>
          <div className="flex items-center gap-3 mb-10 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 rounded-xl font-display font-semibold text-sm tracking-wider transition-all duration-300 ${
                  activeFilter === cat.id
                    ? "bg-gradient-to-r from-cyan-400/15 to-violet-400/15 border border-cyan-400/30 text-cyan-400"
                    : "glass-card text-white/40 hover:text-white/70 hover:border-white/[0.12]"
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat.label}
                <span
                  className={`ml-2 font-mono text-xs ${
                    activeFilter === cat.id
                      ? "text-violet-400"
                      : "text-white/20"
                  }`}
                >
                  {cat.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length}
                </span>
              </motion.button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <RevealOnScroll
          className="mt-16 text-center"
          variant="fadeUp"
          delay={0.2}
        >
          <div className="glass-card p-8 inline-flex flex-col items-center gap-4 mx-auto">
            <Cpu size={28} className="text-violet-400/60" />
            <p className="font-body text-white/40 text-sm">
              More pipelines and experiments living on GitHub
            </p>
            <motion.a
              href="https://github.com/Saurabhrai007"
              className="btn-primary text-sm"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">View All on GitHub</span>
              <ArrowUpRight
                size={15}
                className="relative z-10 text-violet-400"
              />
            </motion.a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
