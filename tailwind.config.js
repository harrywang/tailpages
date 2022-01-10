const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    // if you want to purge unused styles according to all HTML files uncomment the following line
    //'./**/*.html'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}