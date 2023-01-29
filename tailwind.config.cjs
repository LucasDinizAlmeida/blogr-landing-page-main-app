/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Overpass', 'Ubuntu', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'pattern-intro-desktop': "url('/images/bg-pattern-intro-desktop.svg')",
        'pattern-intro-mobile': "url('/images/bg-pattern-intro-mobile.svg')",
      },
      colors: {
        'white': '#ffffff',
        'neutral': {
          300: '#c8c8cb',
          400: '#4b5862',
          700: '#1f3f5b',
          800: '#25252d'
        },
        'redCustom': {
          300: '#ff7a85',
          400: '#ff525d'
        },
        'redCustomBg': {
          300: '#ff8f70',
          500: '#ff3d54'
        },
        'greyCustomBg': {
          600: '#3f4164',
          700: '#2c2d3f',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}