export const theme = {
  colors: {
    caption: '#8b95a1',
    ICChip: '#ddcd78',
    background: '#f9f9f9',
    cardBackground: '#333333',
    cardText: '#ffffff',
    border: '#ccc',
    error: '#ff0000',
  },
  fonts: {
    inter: 'Inter, sans-serif',
  },
  fontSizes: {
    caption: '9.5px',
    label: '12px',
    cardInfo: '14px',
    title: '18px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    extraBold: 800,
  },
};

export type AppTheme = typeof theme;
