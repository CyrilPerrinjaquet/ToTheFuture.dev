/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
        "green-light-mode": "#46A758",
        "green-dark-mode": "#00C895",
        "blue-light-mode": "#207D76",
        "blue-dark-mode": "#00C6CD",
        "banner-ascii-light-mode": "#BC5A41",
        "banner-ascii-dark-mode": "#9E5B6D",
        "color-terminal-light-mode": "#FAF3D2",
        "color-terminal-dark-mode": "#25242D",
        "hover-color": "#8585F0",
        pink: "#CA337C",
        orange: "#F49431",
        white: "#EEEEEC",
      },
    },
  },
  plugins: [],
};
