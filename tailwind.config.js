/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1408px',
    },
    container: {
      center: true,
    },
    colors: {
      'blue': '#1fb6ff',
      'white': '#ffffff',
      'black': '#000000',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'pink-btn':'#f1bce8',
      'pink-btn1':'#ac93d4',
      'orange': '#ff7849',
      'green': '#39e484',
      'green-btn': '#22c068',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'transparent': '#ff000000',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
