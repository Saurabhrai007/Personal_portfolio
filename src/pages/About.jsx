import { motion } from "framer-motion";
import {
  GraduationCap, Briefcase, Code2, Brain, Wrench, Globe, Star, Terminal
} from "lucide-react";
import RevealOnScroll, { StaggerContainer, StaggerChild } from "../components/RevealOnScroll";

const techStack = {
  automation: {
    label: "Automation",
    icon: Wrench,
    color: "cyan",
    items: ["n8n", "Zapier", "Python", "Webhooks", "Cron Jobs"],
  },
  ai: {
    label: "AI / LLMs",
    icon: Brain,
    color: "violet",
    items: ["Gemini API", "Claude", "OpenAI GPT", "Pinecone (RAG)", "LangChain"],
  },
  web: {
    label: "Web Dev",
    icon: Globe,
    color: "cyan",
    items: ["React", "Angular", "Tailwind CSS", ".NET", "Node.js"],
  },
};

const timeline = [
  {
    year: "2026–Present",
    title: "AI Automation Engineer",
    org: "Freelance & Contract",
    desc: "Designing Agentic Workflows, RAG pipelines, and AI-driven automation systems for clients across real estate, e-commerce, and SaaS sectors.",
    icon: Brain,
  },
  {
    year: "2025–2026",
    title: "Technical Operations Analyst",
    org: "KGC Infotech Pvt Ltd | Noida, India",
    desc: "Streamlined technical operations by automating support functions to reduce handling time by 40% and standardizing 100% of repeatable workflows through robust SOP design. Proven expertise in enhancing data accuracy by 25% via AI agent integration and driving a 15% increase in lead generation through strategic outreach.",
    icon: Brain,
  },
  {
    year: "2024–2025",
    title: "Technical Recruiter",
    org: "Esolutions Pvt Ltd | Noida, India",
    desc: "Managed end-to-end technical recruitments, built internal database of candidates in pipeline, and spearheaded recruitment initiatives to get better rresults and more selections.",
    icon: Briefcase,
  },
  {
    year: "2020–2024",
    title: "B.Tech — Computer Science & Engineering",
    org: "Abdul Kalam Technical University | CGPA: 7.2",
    desc: "Specialized in Databases and Full-Stack Development. Final project : Build a full-stack web app for grocery orders using React, Node.js, and MongoDB.",
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* BG Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,1) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <RevealOnScroll>
          <div className="mb-16">
            <p className="section-label mb-3">// about.sys</p>
            <h2 className="font-display font-700 text-5xl md:text-6xl text-white leading-tight">
              The <span className="gradient-text">Architect</span>
            </h2>
            <p className="mt-4 text-white/40 font-body text-lg max-w-xl">
              Where systems thinking meets machine intelligence — building pipelines that work while you sleep.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Identity Card */}
          <RevealOnScroll className="lg:col-span-4" variant="fadeLeft">
            <div className="glass-card p-8 h-full border border-white/[0.06] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,1) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
              />
              <div className="relative z-10">
                {/* Avatar Placeholder */}
                <div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center relative"
                  style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))", border: "1px solid rgba(34,211,238,0.25)" }}
                >
                  <Terminal size={32} className="text-cyan-400" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-void" />
                </div>

                <h3 className="font-display font-700 text-2xl text-white mb-1">
                  AI Automation Engineer
                </h3>
                <p className="font-mono text-xs text-cyan-400/70 mb-6 tracking-wider">
                  &gt; Building Agentic Futures
                </p>

                <div className="space-y-3">
                  {[
                    { label: "Specialty", value: "Agentic Workflows & RAG" },
                    { label: "Education", value: "B.Tech CSE — 7.2 CGPA" },
                    { label: "Focus", value: "AI × Automation × Web" },
                    { label: "Mode", value: "Remote / Contract / Full-time" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/[0.05]">
                      <span className="font-mono text-xs text-white/30 uppercase tracking-wider">{item.label}</span>
                      <span className="font-body text-sm text-white/70">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Tech Stack Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(techStack).map(([key, category], i) => (
              <RevealOnScroll key={key} variant="fadeUp" delay={i * 0.12}>
                <div className="glass-card-hover p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      category.color === "cyan"
                        ? "bg-cyan-400/10 border border-cyan-400/20"
                        : "bg-violet-400/10 border border-violet-400/20"
                    }`}>
                      <category.icon size={15} className={
                        category.color === "cyan" ? "text-cyan-400" : "text-violet-400"
                      } />
                    </div>
                    <span className="font-display font-600 text-sm text-white/80 tracking-wide">
                      {category.label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <span
                        key={tech}
                        className={`tech-badge text-[11px] ${
                          category.color === "violet" ? "tech-badge-violet" : ""
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}

            {/* Philosophy Card — spans full width of right col bottom */}
            <RevealOnScroll className="md:col-span-3" variant="fadeUp" delay={0.4}>
              <div className="glass-card p-6 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.04), rgba(167,139,250,0.04))", border: "1px solid rgba(167,139,250,0.12)" }}
              >
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-5">
                  <Star size={100} className="text-violet-400" />
                </div>
                <p className="font-mono text-xs text-violet-400/70 mb-2 tracking-wider">// philosophy.md</p>
                <p className="font-display font-600 text-xl text-white/90 leading-snug relative z-10">
                  "Every workflow should{" "}
                  <span className="text-cyan-400">self-improve.</span>{" "}
                  Every pipeline should{" "}
                  <span className="text-violet-400">self-heal.</span>"
                </p>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Timeline */}
        <RevealOnScroll className="mt-16">
          <p className="section-label mb-8">// experience.log</p>
        </RevealOnScroll>

        <StaggerContainer className="relative" staggerDelay={0.15} delayStart={0.1}>
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 via-violet-400/20 to-transparent hidden md:block" />

          <div className="space-y-4">
            {timeline.map((item, i) => (
              <StaggerChild key={i}>
                <div className="relative flex gap-6 group">
                  {/* Dot */}
                  <div className="hidden md:flex flex-shrink-0 items-start pt-5 pl-1">
                    <div className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center glass-card border-cyan-400/20 group-hover:border-cyan-400/40 transition-all duration-300">
                      <item.icon size={14} className="text-cyan-400/70" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="glass-card-hover p-6 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div>
                        <h4 className="font-display font-600 text-lg text-white">{item.title}</h4>
                        <p className="font-body text-sm text-violet-400/70">{item.org}</p>
                      </div>
                      <span className="font-mono text-xs text-white/25 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.06]">
                        {item.year}
                      </span>
                    </div>
                    <p className="font-body text-sm text-white/45 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </StaggerChild>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
