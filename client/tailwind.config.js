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
        "coffee": ""
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
