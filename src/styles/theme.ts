import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  typography: {
    title: `
      font-family: 'Noto Sans KR';
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 2.606rem;
    `,
    caption: `
      font-family: 'Noto Sans KR';
      font-weight: 400;
      font-size: 0.95rem;
      line-height: 1.376rem;
    `,
    label: `
      font-family: 'Noto Sans KR';
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
    cardNumber: `
      font-family: 'Inter';
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 16%;
    `,
    cardDate: `
      font-family: 'Inter';
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 8%;
    `,
    cardUserName: `
      font-family: 'Inter';
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2ren;
      letter-spacing: 8%;
    `,
  },
  color: {
    black: '#000000',
    red: '#FF3D3D',
    gray: '#8B95A1',
    lightGray: '#ACACAC',
  },
};

export default theme;
