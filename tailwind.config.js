/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        paleWhite: 'hsl(0, 0%, 98%)',
        lightGreenish: 'hsla(159, 62%, 89%)',
        lightGreen: 'hsla(169, 47%, 51%, 1)'
      },

      fontFamily: {
        eduSa: ['Edu SA Beginner', 'cursive'],
        titilum: ['Titillium Web', 'sans-serif']
      }
    },
  },
  plugins: [],
}
