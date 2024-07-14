/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'gradient-animation': 'gradient-animation 15s ease infinite',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'archivo-black': ['Archivo Black', 'sans-serif'],
        'bebas' : ['Bebas Neue', 'sans-serif']

            },
   
    },
  },
  plugins: [],
}

