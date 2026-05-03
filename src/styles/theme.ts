const colors = {
  black: '#000000',
  white: '#ffffff',
  description: '#8B95A1',
  label: '#0A0D13',
  inactiveBorder: '#ACACAC',
  error: '#FF3D3D',
  cardBackground: '#333333',
  chipBackground: '#DDCD78',
};

const typography = {
  title: {
    fontFamily: 'Noto Sans KR',
    fontWeight: '700',
    fontStyle: 'Bold',
    fontSize: '18px',
    leadingTrim: 'NONE',
    lineHeight: '100%',
    letterSpacing: '0%',
    verticalAlign: 'middle',
  },
  caption: {
    fontFamily: 'Noto Sans KR',
    fontWeight: '400',
    fontStyle: 'Regular',
    fontSize: '9.5px',
    leadingTrim: 'NONE',
    lineHeight: '100%',
    letterSpacing: '0%',
    verticalAlign: 'middle',
  },
  label: {
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    fontStyle: 'Display Medium',
    fontSize: '12px',
    leadingTrim: 'NONE',
    lineHeight: '15px',
    letterSpacing: '0%',
    verticalAlign: 'middle',
  },
  info: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontStyle: 'Medium',
    fontSize: '14px',
    leadingTrim: 'NONE',
    lineHeight: '20px',
    letterSpacing: '16%',
    verticalAlign: 'middle',
  },
};

export const theme = {
  colors,
  typography,
};

export type Theme = typeof theme;
