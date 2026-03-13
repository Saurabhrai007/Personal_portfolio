import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ChevronDown, Cpu, Workflow, Globe } from "lucide-react";
import RevealOnScroll, { StaggerContainer, StaggerChild } from "../components/RevealOnScroll";

const floatingStats = [
  { value: "10+", label: "AI Pipelines Built", icon: Workflow, color: "cyan" },
  { value: "RAG", label: "Knowledge Architectures", icon: Cpu, color: "violet" },
  { value: "n8n", label: "Automation Expert", icon: Globe, color: "cyan" },
];

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
     className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial Glow Center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[900px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(34,211,238,0.15) 0%, rgba(167,139,250,0.1) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Scan line */}
      <div
        className="absolute left-0 right-0 h-px opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, #22d3ee, transparent)",
          animation: "scan 10s linear infinite",
          top: 0,
        }}
      />

      {/* Top Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="relative z-10 mb-8"
      >
        <div className="flex items-center gap-2.5 glass-card px-4 py-2 border border-cyan-400/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
            Available for Contracts & Collab
          </span>
        </div>
      </motion.div>

      {/* Main Hero Text */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="section-label mb-6"
        >
          Agentic Workflow Architect | n8n & RAG Specialist | AI Automation Expert 
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="font-display font-800 leading-none mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
        >
          <span className="block text-white">Architecting</span>
          <span className="block gradient-text">Autonomous</span>
          <span className="block text-white">Futures.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="font-body text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building{" "}
          <span className="text-cyan-400/80">Agentic AI Workflows, RAG Architecture</span> and{" "}
          <span className="text-violet-400/80">Scalable Web Solutions</span> that
          operate at the intersection of intelligence and automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={() => scrollToSection("lab")}
            className="btn-primary text-sm px-8 py-4"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Explore The Lab</span>
            <ArrowRight size={16} className="relative z-10 text-violet-400" />
          </motion.button>

          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-display font-semibold text-sm tracking-wider text-white/40 hover:text-white/70 transition-colors duration-300 border border-white/[0.06] hover:border-white/[0.12]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            The Architect
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="relative z-10 mt-20 grid grid-cols-3 gap-4 max-w-lg mx-auto px-6"
      >
        {floatingStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className="glass-card p-4 flex flex-col items-center gap-2 text-center group hover:border-cyan-400/20 transition-all duration-300"
            whileHover={{ y: -4, scale: 1.02 }}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <stat.icon
              size={16}
              className={stat.color === "cyan" ? "text-cyan-400/60" : "text-violet-400/60"}
            />
            <span
              className={`font-display font-700 text-lg ${
                stat.color === "cyan" ? "text-cyan-400" : "text-violet-400"
              }`}
            >
              {stat.value}
            </span>
            <span className="font-mono text-[10px] text-white/30 leading-tight">{stat.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll Hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20 hover:text-white/40 transition-colors duration-300"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
