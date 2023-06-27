/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bkg: "rgb(var(--color-bkg) / <alpha-value>)",
      accent1: "rgb(var(--color-accent1) / <alpha-value>)",
      accent2: "rgb(var(--color-accent2) / <alpha-value>)",
      text1: "rgb(var(--color-text1) / <alpha-value>)",
      text2: "rgb(var(--color-text2) / <alpha-value>)",
      textOnDark: "rgb(var(--color-text-on-dark) / <alpha-value>)",
      secondary: "rgb(var(--color-secondary) / <alpha-value>)",
    },
    extend: {},
  },
  plugins: [],
};
