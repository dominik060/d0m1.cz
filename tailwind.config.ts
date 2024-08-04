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
      fontSize: {
        h1: "48px",
        h2: "30px",
        h3: "24px",
        h4: "20px",
        p: "16px",
        hero: "72px",
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
          "linear-gradient(90deg, #09090B 0%, #09090B 19%, #226BB8 59%, #3AB6FF 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
