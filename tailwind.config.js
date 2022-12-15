/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7629b7",
        secondary: "#9098d8",
        third: "#242a4b",
        forth: "#ffaa58",
        background: "#1c213e",
        pageBackground: "#1f2543",
        niceGray: "#2b3253",
      },
    },
  },
  plugins: [],
};
