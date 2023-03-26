/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkPrimary: "#000000",
        darkSecondary: "#b29962",
        darkTertiary: "#9b9b9b",
        darkViteGradient: "#736440",
        html: "#F16529",
        css: "#264DE4",
        javascript: "#F7DF1E",
        react: "#61DAFB",
        redux: "#764ABC",
        node: "#8CC84B",
        postgre: "#336791",
        sql: "#00bcf2",
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
