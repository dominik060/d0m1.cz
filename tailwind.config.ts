import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      h1: "48px",
      h2: "30px",
      h3: "24px",
      h4: "20px",
      p: "16px",
      hero: "96px",
    },
    extend: {
      colors: {
        black: "#09090B",
        white: "#FAFAFA",
        "gradient-apple":
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-apple":
          "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        "gradient-hero-dark":
          "linear-gradient(90deg, #FAFAFA 0%, #EBEBEB 26%, #3AB6FF 79%, #226BB8 100%)",
        "gradient-hero-light":
          "linear-gradient(43deg, #09090B 0%, #202026 26%, #3AB6FF 79%, #226BB8 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
