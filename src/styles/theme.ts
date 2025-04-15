const theme = {
  color: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#8B95A1',
  },
};

export type ColorType = typeof theme.color;

export interface ThemeType {
  color: ColorType;
}

export default theme;
