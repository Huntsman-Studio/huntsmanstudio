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
        'work': "url('assets/img/work-page-background.webp')",
        'oliorama': "url(assets/img/oliorama.webp)",
        'oliorama-de': "url(assets/img/oliorama-de.webp)",
        'ferye': "url(assets/img/ferye.webp)",
        "orfeas": "url(assets/img/orfeascinema.webp)",
        "tokatiallo": "url(assets/img/tokatiallo.webp)",
        "tustore": "url(assets/img/tustore.webp)",
        "j2": "url(assets/img/j2.webp)",
        // Menu
        'menu-mb': "url('assets/img/huntsman-menu-mobile.webp')",
        // Main
        'main-mb': "url('assets/img/huntsman-main-mobile.webp')",
        'main': "url('assets/img/huntsman-main.webp')"
      },

      // backgroundColor
      backgroundColor: theme => ({
        ...theme('colors'),
        'ink':'#0C0C0C',
        'onyx':'#191919',
        'coal':'#333333',
        'grayDolphin':'#4C4C4C',
        'oldSilver':'#666666',
        'silverChalice':'#7F7F7F',
        'grayCloud':'#B2B2B2',
        'silver':'#CCCCCC',
        'brightGray':'#E5E5E5',
        'whiteSmoke':'#F3F3F3',
        'irishPurple':'#2E005B',
        'primary':'#4E008E',
        'indigoLike':'#6400B7',
        'amethyst':'#A73BFF',
        'mauve':'#CE9CFF',
        'ruby':'#FF3B70'
      }),

      // textColor
      textColor: theme => theme('colors'),
      textColor: {
        'ink': '#0C0C0C',
        'onyx': '#191919',
        'coal': '#333333',
        'grayDolphin': '#4C4C4C',
        'oldSilver': '#666666',
        'silverChalice': '#7F7F7F',
        'grayCloud': '#B2B2B2',
        'silver': '#CCCCCC',
        'brightGray': '#E5E5E5',
        'whiteSmoke': '#F3F3F3',
        'irishPurple': '#2E005B',
        'primary': '#4E008E',
        'indigoLike': '#6400B7',
        'amethyst': '#A73BFF',
        'mauve': '#CE9CFF',
        'ruby': '#FF3B70'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
