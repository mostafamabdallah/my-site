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
        third: "#2b335b",
        background: "#1c213e",
        pageBackground: "#242a4b",
        niceGray: "#2b3253",
      },
    },
  },
  plugins: [],
};
