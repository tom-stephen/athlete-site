/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        snow: "#F5F6F7",
        paper: "#FFFFFF",
        ink: {
          DEFAULT: "#13181C",
          soft: "#4A5259",
          faint: "#7C868C",
        },
        red: {
          DEFAULT: "#C41230",
          deep: "#8F0D24",
          tint: "#FBE9EC",
        },
        ice: {
          DEFAULT: "#E8EEF1",
          deep: "#D3DFE4",
        },
        line: "#DCE2E5",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        widest2: "0.2em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "draw-line": {
          "0%": { strokeDashoffset: "1400" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.9s ease forwards",
        "draw-line": "draw-line 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
