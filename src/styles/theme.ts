import { DefaultTheme } from 'styled-components';

export const colors = {
  white: '#ffffff',
  gray: '#e5e5e5',
  darkGray: '#575757',
  inputGray: '#ecebf1',
  weakDarkGray: '#bababa',
  placeholder: '#737373',
  primaryText: '#383838',
  secondText: '#525252',
  magnet: '#cbba64',
  modalBlack: '#000000b2',
  primaryRed: '#ff0033',
  secondRed: '#ea5270',
  shadow: '#00000040',
};

export type ColorsType = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
