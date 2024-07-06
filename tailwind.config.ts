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
    },
    extend: {
      colors: {
        black: "#09090B",
        white: "#FAFAFA",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
