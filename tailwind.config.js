/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hero-cream": "#fdf0d5",
        "hero-heading": "#780000",
        "hero-desc": "#C1121F",
      },
      fontFamily: {
        custom: ["Merriweather Sans", "sans-serif"],
      },
      lineHeight: {
        heading: "1.15",
      },
      width: {
        card: "600px",
      },
    },
  },
  plugins: [],
};
