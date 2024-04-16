import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      title: string;
      caption: string;
      label: string;
      input: string;
      cardNumber: string;
      cardDate: string;
      cardUserName: string;
    };
    color: {
      black: string;
      gray: string;
      red: string;
      lightGray: string;
    };
  }
}
