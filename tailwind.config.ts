import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: { min: "640px" },
      md: { min: "760px" },
      lg: { min: "976px" },
      xl: { min: "1660px" },
      "hr-line": "80rem",
    },

    extend: {
      colors: {
        black: "#09090B",
        white: "#FAFAFA",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      backgroundImage: {
        "gradient-blue-dark":
          "linear-gradient(90deg, #FAFAFA 0%, #EBEBEB 26%, #3AB6FF 79%, #226BB8 100%)",
        "gradient-blue-light":
          "linear-gradient(90deg, #09090B 0%, #09090B 19%, #226BB8 59%, #3AB6FF 100%)",
        "after-dark":
          "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),   #fafafa60, transparent 40%)",
        "before-dark":
          "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),   #fafafa10, transparent 40%)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(2deg)" },
          "20%": { transform: "rotate(-1deg)" },
          "30%": { transform: "rotate(2deg)" },
          "40%": { transform: "rotate(-1deg)" },
          "50%": { transform: "rotate(1deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "waving-tail": "wave 2s linear",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
