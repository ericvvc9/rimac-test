const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: {
        default: '#A3ABCC',
        paragraph: '#676F8F',
        border: '#E4E8F7',
      },
      green: {
        500: '#83CC5E'
      },
      indigo: colors.indigo,
      red: colors.red,
      primary: '#EF3340',
      rimac: '#EF3340',
      yellow: colors.amber,
      // Configure your color palette here
    },
    extend: {
      
      fontFamily: {
        /* 'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'], */
        'lato': ['Lato'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
