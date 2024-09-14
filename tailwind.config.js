/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.jog-01': {
          'width':'3.5rem',
          'height':'3.5rem',
          'background-color': '#dc2626', // cor de fundo
          'border-radius': '50%',       // bordas arredondadas
          'margin': 'auto',             // padding
        },

        '.jog-02': {
          'width':'3.5rem',
          'height': '3.5rem',
          'background-color': '#2563eb',
          'border-radius': '50%',
          'margin': 'auto',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
}

