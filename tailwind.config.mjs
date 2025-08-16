/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3cacadE5", //verde COM Opacidade
          100 : '#3b2f2f' //fonts
        },
        secondary: {
          DEFAULT: "#f8f7f4", // Branco UI/UX
          100: "#f8d6de80", // Mari via canva
        },
        accent: {
          DEFAULT: "#da9dab", // Mari via canva
          100: "#3cacad", // Verde
        },
      },
      fontFamily: {
        primary: ["var(--font-marcellus)", "serif"],
        secondary: ["var(--font-montserrat)", "sans-serif"],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      container: {
        center: true,
        padding: '15px',
      },
    },
  },
  plugins: [],
}