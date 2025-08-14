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
          DEFAULT: "#3cacadE5",
          100 : '#3b2f2f'
        },
        secondary: {
          DEFAULT: "#f8f7f4", //ok
          100: "#fce8f1", //Barra posts instagram
          200: "#fddffb", //Artes Instagram
          300: "#bf7083" //Logo
        },
        accent: {
          DEFAULT: "#c06dbd", //ok 
          100: "#3cacad", //ok
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