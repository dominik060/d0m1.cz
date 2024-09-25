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
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
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
        "after-light":
          "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y),   #09090B60, transparent 40%)",
        "before-light":
          "radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),   #09090B10, transparent 40%)",
        "radial-dark": "radial-gradient(ellipse, #3AB6FF40, transparent 50%)",
        "radial-light": "radial-gradient(ellipse, #226BB840, transparent 50%)",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "move-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "waving-tail": "wave 2s linear",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        appear: "appear 0.5s ease-in-out",
        "move-from-top": "move-from-top 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  darkMode: "class",
};
export default config;
