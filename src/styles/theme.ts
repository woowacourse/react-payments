import { DefaultTheme } from 'styled-components';

const color = {
  grey100: '#ECEBF1',
  grey200: '#E5E5E5',
  grey300: '#525252',
  grey400: '#575757',
  black: '#000',
};

const font = {
  title: 'normal 400 20px/24px Roboto',
  header: 'normal 500 16px/24px Roboto',
  subtitle: 'normal 600 14px/24px Roboto',
  body: 'normal 500 12px/24px Roboto',
};

const theme: DefaultTheme = {
  color,
  font,
};

export default theme;
