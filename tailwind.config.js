/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "hero-heading": "#99582a",
        "hero-desc": "#bb9457",
        shade: "rgba(4,4,4,0.35057773109243695)",
      },
      fontFamily: {
        custom: ["Merriweather Sans", "sans-serif"],
      },
      lineHeight: {
        heading: "1.15",
      },
      width: {
        95: "95%",
        100: "500px",
      },
    },
  },
  plugins: [],
};
