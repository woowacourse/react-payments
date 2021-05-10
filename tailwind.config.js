const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    options: {
      safelist: ['bg-poco', 'bg-june', 'bg-park', 'bg-roid', 'bg-tyche', 'bg-eunhyun', 'bg-yujo', 'bg-yunho'],
    },
  },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      width: {
        '1.5/12': '12.5%',
        208: '208px',
        213: '213px',
        293: '293px',
      },
      height: {
        '2/12': '8.333333%',
        130: '130px',
        133: '133px',
        183: '183px',
        227: '227px',
      },
      minHeight: {
        '1/20': '5%',
      },
      maxWidth: {
        375: '375px',
      },
      maxHeight: {
        701: '701px',
      },
      backgroundColor: {
        poco: '#E24141',
        june: '#547CE4',
        park: '#73BC6D',
        roid: '#04C09E',
        tyche: '#FBCD58',
        eunhyun: '#E76E9A',
        yujo: '#F37D3B',
        yunho: '#DE59B9',
      },
      colors: {
        gray: {
          150: '#e5e5e5',
          250: '#ECEBF1',
          350: '#d3d3d3',
        },
        yellow: {
          450: '#cbba64',
        },
        black: {
          700: '#525252',
          500: '#383838',
        },
        green: {
          350: '#04C09E',
        },
      },
      fontSize: {
        xxs: '0.6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
