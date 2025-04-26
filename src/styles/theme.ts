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
      bc: '#F04651',
      shinhan: '#0046FF',
      kakao: '#FFE600',
      hyundai: '#000000',
      woori: '#007BC8',
      lotte: '#ED1C24',
      hana: '#009490',
      kb: '#6A6056',
    },
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
