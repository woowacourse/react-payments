const theme = {
  color: {
    black: '#000000',
    white: '#FFFFFF',
    gray: '#8B95A1',
    cardBlack: '#333333',
    gold: '#DDCD78',
  },
  font: {
    card: {
      number: {
        fontFamily: 'Inter',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '20px',
        letterSpacing: '2.24px',
      },
    },
  },
};

export type ColorType = typeof theme.color;

export interface ThemeType {
  color: ColorType;
}

export default theme;
