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
        'oliorama': "url(assets/img/oliorama.webp)",
        'ferye': "url(assets/img/ferye.webp)",
        "orfeas": "url(assets/img/orfeascinema.webp)",
        "tokatiallo": "url(assets/img/tokatiallo.webp)",
        "tustore": "url(assets/img/tustore.webp)",
        "j2": "url(assets/img/j2.webp)",
        // Menu
        'menu-mb': "url('assets/img/huntsman-menu-mobile.svg')",
        // Main
        'main-mb': "url('assets/img/huntsman-main-mobile.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
