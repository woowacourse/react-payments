const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
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
      colors: {
        포코: '#E24141',
        준: '#547CE4',
        공원: '#73BC6D',
        로이드: '#04C09E',
        티케: '#FBCD58',
        은현: '#E76E9A',
        유조: '#F37D3B',
        윤호: '#DE59B9',

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
