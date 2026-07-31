import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0b0d11",
        graphite: "#14171d",
        panel: "#171b22",
        steel: "#262b34",
        line: "#2f3540",
        ash: "#8a909c",
        "ash-dim": "#5c626d",
        pearl: "#edeef1",
        "pearl-dim": "#c7cad0",
        heat: {
          deep: "#b8260a",
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
      maxWidth: {
        shell: "1180px",
      },
      backgroundImage: {
        "heat-grad":
          "linear-gradient(100deg,#ffce3b 0%,#ff8a2a 42%,#ff5a10 72%,#c42d0e 100%)",
      },
      keyframes: {
        emberPulse: {
          "0%,100%": { opacity: "0.85" },
          "50%": { opacity: "1" },
        },
        sparkFloat: {
          "0%": { transform: "translate(0,0) scale(1)", opacity: "0" },
          "15%": { opacity: "1" },
          "100%": {
            transform: "translate(var(--dx),var(--dy)) scale(0.2)",
            opacity: "0",
          },
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
