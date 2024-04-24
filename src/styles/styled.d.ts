import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      title: string;
      caption: string;
      label: string;
      input: string;
      dropDown: string;
      cardNumber: string;
      cardExpirationDate: string;
      cardUserName: string;
    };
    color: {
      white: string;
      black: string;
      gray: string;
      red: string;
      lightGray: string;
      darkGray: string;
      magenta: string;
      blue: string;
      yellow: string;
      black: string;
      brightBlue: string;
      orange: string;
      teal: string;
      brownishGray: string;
      magnetic: string;
      dropShadow: string;
    };
  }
}
