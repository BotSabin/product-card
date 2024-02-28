/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        fraunces: ['Fraunces']      
      }
    },
    colors: {
      darkcyan: 'hsl(158, 36%, 37%)',
      darkcyangreen: 'hsl(158, 36%, 25%)',
      cream: 'hsl(30, 38%, 92%)',
      verydarkblue: 'hsl(212, 21%, 14%)',
      darkgrayish: 'hsl(228, 12%, 48%)',
      white: 'hsl(0, 0%, 100%)',
    }
  },
  plugins: [],
}