/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        almostWhite: "#f5f5f7",
        lightGray: "#a1a1a6",
        almostBlack: "#040405",
      },
      fontFamily: {
        sans: ["Noto Sans"],
        mono: ["JetBrains Mono"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
