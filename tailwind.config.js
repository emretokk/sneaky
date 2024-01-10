/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00CF2A",
        bg1: "#272727",
        bg2: "#262a33",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
