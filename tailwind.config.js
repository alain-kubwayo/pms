/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Open Sans', 'sans-serif'],
        secondary: ['Spectral', 'serif']
      }
    },
  },
  plugins: [],
}
