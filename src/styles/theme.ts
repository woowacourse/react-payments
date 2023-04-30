import { DefaultTheme } from "styled-components";

interface StyleType {
  [key: string]: string;
}

const colors: StyleType = {
  white: "#F5F5F5",
  gray100: "#FDFDFD",
  gray200: "#ECEBF1",
  gray300: "#E5E5E5",
  gray400: "#525252",
  card_main: "#333333",
  card_sub: "#CBBA64",
  black: "#000000",
  error: "#F04651",
};

interface FontType {
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: FontType): string {
  return `
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight};
    `;
}

const fonts: StyleType = {
  title: FONT({ weight: 400, size: 2.4, lineHeight: 1.8 }),
  h1: FONT({ weight: 400, size: 1.6, lineHeight: 1.8 }),
  h2: FONT({ weight: 400, size: 1.4, lineHeight: 1.6 }),
  body: FONT({ weight: 500, size: 1.8, lineHeight: 2.1 }),
  label: FONT({ weight: 500, size: 1.2, lineHeight: 1.4 }),
  card: FONT({ weight: 500, size: 1.3, lineHeight: 1.4 }),
  button: FONT({ weight: 700, size: 1.4, lineHeight: 1.6 }),
  text: FONT({ weight: 300, size: 1.2, lineHeight: 1.6 }),
};

export const theme: DefaultTheme = {
  colors,
  fonts,
};
