/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hero-cream": "#fdf0d5",
        "hero-heading": "#99582a",
        "hero-desc": "#bb9457",
      },
      fontFamily: {
        custom: ["Merriweather Sans", "sans-serif"],
      },
      lineHeight: {
        heading: "1.15",
      },
      width: {
        95: "95%",
      },
    },
  },
  plugins: [],
};
