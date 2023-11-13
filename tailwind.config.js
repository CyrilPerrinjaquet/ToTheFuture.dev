/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        smartphones: { max: "767px" },
        "small-smartphones": { max: "300px" },
        desktop: { min: "1024px" },
        laptop: { min: "768px", max: "1023px" },
      },
      fontFamily: {
        "fira-mono": "'Fira Mono', monospace;",
      },
      colors: {
        green: "#00C895",
        blue: "#00C6CD",
        white: "#EEEEEC",
        "white-ascii": "#9E5B6D",
        yellow: "#F49431",
        "color-terminal": "#25242D",
        "hover-color": "#8585F0",
      },
    },
  },
  plugins: [],
};
