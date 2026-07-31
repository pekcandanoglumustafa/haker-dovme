import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // HAK-ER brand navy/steel palette
        void: "#071620",       // page bg (deep navy)
        graphite: "#0d2432",    // panels
        panel: "#123249",       // hover panels
        steel: "#173347",
        line: "#1e3d52",        // borders
        ash: "#8ea6b4",         // muted cool grey-blue
        "ash-dim": "#4f6675",
        pearl: "#eef4f7",
        "pearl-dim": "#c4d4dd",
        // "heat" tokens repurposed as brand BLUE accents (used across chrome)
        heat: {
          deep: "#0c3d59",      // brand deep navy (their overlay)
          core: "#2f88c4",      // primary brand blue
          mid: "#4a9bcf",       // bright accent (links, eyebrows)
          yellow: "#6bb2dd",    // light steel blue
        },
        // real forge orange, ONLY for hot-metal illustrations
        ember: {
          core: "#ff6a1a",
          mid: "#ff8a2a",
          yellow: "#ffc531",
        },
      },
      fontFamily: {
        display: ["var(--font-saira)", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { shell: "1180px" },
      backgroundImage: {
        "heat-grad":
          "linear-gradient(100deg,#5aa6d0 0%,#3f93c8 45%,#2f88c4 72%,#0c3d59 100%)",
      },
      keyframes: {
        emberPulse: { "0%,100%": { opacity: "0.85" }, "50%": { opacity: "1" } },
        sparkFloat: {
          "0%": { transform: "translate(0,0) scale(1)", opacity: "0" },
          "15%": { opacity: "1" },
          "100%": { transform: "translate(var(--dx),var(--dy)) scale(0.2)", opacity: "0" },
        },
      },
      animation: {
        ember: "emberPulse 2.4s ease-in-out infinite",
        spark: "sparkFloat 2.6s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
