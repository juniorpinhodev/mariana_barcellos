/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: ["var(--font-marcellus)", ...fontFamily.sans],
      secondary: ["var(--font-montserrat)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#473936",
        },
        secondary: {
          DEFAULT: "#f2dfce",
        },
        accent: {
          DEFAULT: "#f19687",
          100: "#f2d5c5",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};