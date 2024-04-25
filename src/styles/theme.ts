import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  typography: {
    title: `
      font-family: Noto Sans KR;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.606rem;
    `,
    caption: `
      font-family: Noto Sans KR;
      font-weight: 400;
      font-size: 0.95rem;
      line-height: 1.376rem;
    `,
    label: `
      font-family: Noto Sans KR;
      font-weight: 500;
      font-size: 1.2rem;
      line-height: 1.5rem;
    `,
    input: `
      font-family: 'Inter';
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.488rem;
    `,
    button: `
      font-family: Noto Sans KR;
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 2.172rem;
    `,
    paragraph1: `
      font-family: Inter;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0.16rem;
    `,
    paragraph2: `
      font-family: Inter;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0.08rem;
    `,
  },
  color: {
    white: '#ffffff',
    black: '#000000',
    red: '#FF3D3D',
    gray: '#8B95A1',
    lightGray: '#ACACAC',
    darkGray: '#333333',
    magnetic: '#DDCD78',
    dropShadow: '#00000040',
    brand: {
      bc: '#F04651',
      shinhan: '#0046FF',
      kakao: '#FFE600',
      hyundai: '#000000',
      woori: '#007BC8',
      lotte: '#ED1C24',
      hana: '#009490',
      kookmin: '#6A6056',
    },
  },
};

export default theme;
