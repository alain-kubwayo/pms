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
      },
      colors: {
        primary: {
          100: '#907163',
          200: '#379683'
        },
        secondary: {
          100: '#8EE4AF',
          200: '#EDF5E1'
        },
        tertiary: '#5CDB95'
      }
    },
  },
  plugins: [],
}
