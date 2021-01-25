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
      gray: colors.trueGray,
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
        'lato': ['lato'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
