/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#52CBB0",
        white: "#EEEEEC",
        "white-ascii": "#E0DFFE",
        yellow: "#FFC53D",
      },
    },
  },
  plugins: [],
};
