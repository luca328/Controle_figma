const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xxl: '1410px',
      },
      colors: {
        "dark_grey": "#2E3034",
        "dcs_blue": "#2E82DB",
        "dcs_light_orange": "#FCB941",
        "dcs_light_grey": "#CACCCE",
        "dcs_social_grey": "#76777C",
        "dcs_sponsor_grey": "#545559",
        "dcs_link_black": "#242529",
        "dcs_dark_grey": "#ADAEB2"
      },
      backgroundImage:{
        'main_header': "url('../static/attic-back-2022-2.jpg')",
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
