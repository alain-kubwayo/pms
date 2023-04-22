/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Open Sans', 'sans-serif'],
        secondary: ['Spectral', 'serif']
      },
      colors: {
        primary: {
          100: '#917164',
          200: '#AE8173'
        },
        secondary: {
          100: '#C6493A',
          200: '#A23327'
        },
        tertiary: '#679775'
      }
    },
  },
  plugins: [],
}

