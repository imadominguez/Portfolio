/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#000000",
        darkSecondary: "#b29962",
        darkTertiary: "#9b9b9b",
      },
      fontFamily: {
        robotoMono: ["Roboto Mono", "monospace"],
        roboto: ["Roboto", "sans-serif"],
        robotoSerif: ["Roboto Serif", "serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "920px",
      },
    },
  },
  plugins: [],
};
