/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'footer': ['Asap Condensed', 'sans-serif'],
        'nav': ['Bebas Neue', 'sans-serif'],
        'main' : ['Josefin Sans', 'sans-serif'],      }
    },
  },
  plugins: [],
}