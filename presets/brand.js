module.exports = {
  presets: [require('tailwindcss/defaultConfig')],
  theme: {
    colors: {
      red: {
        clarito: 'brown',
        oscuro: 'green',
      },
    },
    extend: {
      colors: {
        cris: 'blue',
        red: {
          100: 'cyan',
        },
      },
    },
  },
}
