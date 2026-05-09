import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#7dd3fc",
          "sky-deep": "#0ea5e9",
          ink: "#0a0a0a",
          muted: "#525252",
        },
        accent: {
          sun: "#fef9c3",
          apricot: "#ffedd5",
          mint: "#dcfce7",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -15px rgba(14, 165, 233, 0.25)",
        card: "0 8px 30px -12px rgba(0, 0, 0, 0.08)",
        glass: "0 8px 32px rgba(14, 165, 233, 0.12)",
      },
      backgroundImage: {
        "sky-gradient":
          "linear-gradient(135deg, #f0f9ff 0%, #ffffff 45%, #e0f2fe 100%)",
        blob: "radial-gradient(circle at 30% 20%, rgba(125, 211, 252, 0.45), transparent 55%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 7s ease-in-out infinite 1s",
        shimmer: "shimmer 14s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
