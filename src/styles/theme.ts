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
    dropDown: `
    font-family: 'Inter';
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1.488rem;
    `,
    cardNumber: `
      font-family: Inter;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0.16rem;
    `,
    cardExpirationDate: `
      font-family: Inter;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      letter-spacing: 0.08rem;
    `,
    cardUserName: `
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
  },
};

export default theme;
