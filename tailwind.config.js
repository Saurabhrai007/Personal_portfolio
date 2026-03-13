/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#020204",
        "void-2": "#08080f",
        surface: "#0d0d1a",
        "surface-2": "#12121f",
        glass: "rgba(255,255,255,0.04)",
        "glass-border": "rgba(255,255,255,0.08)",
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          glow: "rgba(34,211,238,0.15)",
        },
        violet: {
          400: "#a78bfa",
          500: "#8b5cf6",
          glow: "rgba(167,139,250,0.15)",
        },
      },
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      backgroundSize: {
        "grid-size": "40px 40px",
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(34,211,238,0.2), 0 0 60px rgba(34,211,238,0.05)",
        "glow-violet": "0 0 30px rgba(167,139,250,0.2), 0 0 60px rgba(167,139,250,0.05)",
        "glow-sm-cyan": "0 0 15px rgba(34,211,238,0.3)",
        glass: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scan": "scan 8s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
