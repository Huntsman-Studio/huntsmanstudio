module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // Work Page
        'work-mb': "url('assets/img/work-page-background-mobile.webp')",
        'oliorama': "",
        'ferye': "",
        'j2': "",
        "orfeas": "",
        "coffee": "",
        // Menu
        'menu-mb': "url('assets/img/huntsman-menu-mobile.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
