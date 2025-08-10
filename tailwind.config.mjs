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
          DEFAULT: "#473936",
        },
        secondary: {
          DEFAULT: "#fff", 
          100: "#cea39c",
        },
        accent: {
          DEFAULT: "#f19687",
          100: "#40aaab",
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