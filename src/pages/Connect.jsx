import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin, Github, Instagram, Download, Send, CheckCircle2,
  Mail, MessageSquare, User, Zap,
} from "lucide-react";
import RevealOnScroll from "../components/RevealOnScroll";

const socials = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/Saurabhrai",
    href: "https://www.linkedin.com/in/saurabh-rai-76523b32b",
    color: "cyan",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "github.com/Saurabhrai007",
    href: "https://github.com/Saurabhrai007",
    color: "violet",
  },
];

export default function Connect() {
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1800);
  };

  return (
    <section id="connect" className="relative py-32 px-6 min-h-screen flex items-center">
      {/* BG Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)" }}
        />
      </div>
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <p className="section-label mb-3">// connect.init()</p>
            <h2 className="font-display font-700 text-5xl md:text-6xl text-white leading-tight">
              Let's <span className="gradient-text">Build</span> Together
            </h2>
            <p className="mt-4 text-white/40 font-body text-lg max-w-xl mx-auto">
              Have an AI workflow to architect? A pipeline to automate? Or just want to
              explore what's possible — let's talk.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT — Contact Form */}
          <RevealOnScroll className="lg:col-span-7" variant="fadeLeft">
            <div
              className="glass-card p-8 relative overflow-hidden"
              style={{ border: "1px solid rgba(34,211,238,0.12)" }}
            >
              {/* Top Glow Line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.5), rgba(167,139,250,0.5), transparent)" }}
              />

              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.3)" }}>
                      <CheckCircle2 size={28} className="text-cyan-400" />
                    </div>
                    <h3 className="font-display font-700 text-2xl text-white">Message Sent!</h3>
                    <p className="text-white/40 text-sm">
                      I'll get back to you within 24 hours. Let's build something great.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", project: "", message: "" }); }}
                      className="mt-4 font-mono text-xs text-cyan-400/60 hover:text-cyan-400 transition-colors"
                    >
                      ↩ Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <InputField
                        icon={User}
                        label="Full Name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={(v) => setForm({ ...form, name: v })}
                        required
                      />
                      <InputField
                        icon={Mail}
                        label="Email"
                        type="email"
                        placeholder="raisaurabh@gmail.com"
                        value={form.email}
                        onChange={(v) => setForm({ ...form, email: v })}
                        required
                      />
                    </div>
                    <InputField
                      icon={Zap}
                      label="Project Type"
                      type="text"
                      placeholder="e.g. RAG pipeline, automation workflow, web app..."
                      value={form.project}
                      onChange={(v) => setForm({ ...form, project: v })}
                    />
                    <div className="space-y-1.5">
                      <label className="flex items-center gap-2 font-mono text-xs text-white/30 tracking-wider uppercase">
                        <MessageSquare size={11} className="text-cyan-400/50" />
                        Message
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell me about your vision, the problem you're solving, and what you need..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 font-body text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.05] transition-all duration-200 resize-none"
                        style={{ scrollbarWidth: "thin" }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={sending}
                      className="w-full btn-primary justify-center py-4 text-sm"
                      whileHover={!sending ? { scale: 1.02 } : {}}
                      whileTap={!sending ? { scale: 0.98 } : {}}
                    >
                      {sending ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border border-cyan-400/40 border-t-cyan-400 rounded-full relative z-10"
                          />
                          <span className="relative z-10">Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="relative z-10">Send Message</span>
                          <Send size={15} className="relative z-10 text-violet-400" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </RevealOnScroll>

          {/* RIGHT — Socials + Info */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Social Cards */}
            {socials.map((social, i) => (
              <RevealOnScroll key={social.label} variant="fadeRight" delay={i * 0.1}>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-5 flex items-center gap-4 group"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: social.color === "cyan"
                        ? "rgba(34,211,238,0.08)"
                        : "rgba(167,139,250,0.08)",
                      border: social.color === "cyan"
                        ? "1px solid rgba(34,211,238,0.2)"
                        : "1px solid rgba(167,139,250,0.2)",
                    }}
                  >
                    <social.icon
                      size={18}
                      className={social.color === "cyan" ? "text-cyan-400" : "text-violet-400"}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-600 text-sm text-white/80 group-hover:text-white transition-colors">
                      {social.label}
                    </p>
                    <p className="font-mono text-xs text-white/25 mt-0.5">{social.handle}</p>
                  </div>
                  <span className="font-mono text-xs text-white/20 group-hover:text-cyan-400/60 transition-colors">
                    ↗
                  </span>
                </motion.a>
              </RevealOnScroll>
            ))}

            {/* Availability Status */}
            <RevealOnScroll variant="fadeRight" delay={0.35}>
              <div
                className="glass-card p-6 relative overflow-hidden"
                style={{ border: "1px solid rgba(34,211,238,0.1)" }}
              >
                <div className="absolute inset-0 opacity-30"
                  style={{ background: "radial-gradient(ellipse at top right, rgba(34,211,238,0.08), transparent 70%)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                    </span>
                    <span className="font-mono text-xs text-cyan-400/70 tracking-wider uppercase">
                      Current Status
                    </span>
                  </div>
                  <p className="font-display font-600 text-lg text-white">
                    Available for New Projects
                  </p>
                  <p className="font-body text-xs text-white/30 mt-1">
                    AI automation, RAG systems, web development
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Footer */}
        <RevealOnScroll className="mt-20 pt-8 border-t border-white/[0.06]" variant="fadeIn" delay={0.2}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-white/20">
              © 2026 — Saurabh Rai
            </p>
            <p className="font-mono text-xs text-white/15">
              Architecting Autonomous Futures
              <span className="text-cyan-400/40">.</span>
            </p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Floating Download CV FAB */}
      <motion.a
        href="/cv.pdf"
        download
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-5 py-3 rounded-2xl font-display font-semibold text-xs tracking-wider"
        style={{
          background: "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))",
          border: "1px solid rgba(34,211,238,0.3)",
          color: "#22d3ee",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 20px rgba(34,211,238,0.15)",
        }}
        whileHover={{
          scale: 1.06,
          boxShadow: "0 8px 40px rgba(0,0,0,0.5), 0 0 30px rgba(34,211,238,0.25)",
        }}
        whileTap={{ scale: 0.96 }}
      >
        <Download size={14} />
        <span>Download CV</span>
      </motion.a>
    </section>
  );
}

function InputField({ icon: Icon, label, type, placeholder, value, onChange, required }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-2 font-mono text-xs text-white/30 tracking-wider uppercase">
        <Icon size={11} className="text-cyan-400/50" />
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 font-body text-sm text-white/70 placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.05] transition-all duration-200"
      />
    </div>
  );
}
