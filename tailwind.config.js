/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        basic: ['Montserrat', 'sans-serif'],
        secondary: ['Tilt Prism', 'cursive']
      }
    },
  },
  plugins: [],
}
