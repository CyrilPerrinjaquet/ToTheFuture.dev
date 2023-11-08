/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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
