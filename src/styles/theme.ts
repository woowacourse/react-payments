export const theme = {
  fontSize: {
    '0': '10px',
    '1': '12px',
    '2': '14px',
    '3': '16px',
    '4': '18px',
    '5': '20px',
    '6': '22px',
    '7': '24px',

    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
    xxlarge: '24px',
  },

  fontWeight: {
    normal: 500,
    bold: 700,
  },

  fontColor: {
    primary: '#383838',
    secondary: '#525252',
    warning: '#ff0000',
  },

  color: {
    white: '#ffffff',
    grey1: '#ecebf1',
    grey2: '#e5e5e5',
  },
} as const;

export type Theme = typeof theme;
