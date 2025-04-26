export const theme = {
  colors: {
    caption: '#8b95a1',
    ICChip: '#ddcd78',
    background: '#f9f9f9',
    cardText: '#ffffff',
    border: '#ccc',
    error: '#ff0000',
    cardBrandColors: {
      default: '#333333',
      BC: '#F04651',
      신한: '#0046FF',
      카카오: '#FFE600',
      현대: '#000000',
      우리: '#007BC8',
      롯데: '#ED1C24',
      하나: '#009490',
      국민: '#6A6056',
    },
  },
  fonts: {
    inter: 'Inter, sans-serif',
  },
  fontSizes: {
    caption: '9.5px',
    label: '12px',
    cardInfo: '14px',
    button: '16px',
    title: '18px',
    notice: '25px',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    extraBold: 800,
  },
};

export type AppTheme = typeof theme;
