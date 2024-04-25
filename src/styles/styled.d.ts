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
      cardCVC: string;
      submitButton: string;
    };
    color: {
      white: string;
      black: string;
      gray: string;
      red: string;
      brightGray: string;
      lightGray: string;
      darkGray: string;
      charcoalGray: string;
      magenta: string;
      blue: string;
      yellow: string;
      black: string;
      brightBlue: string;
      orange: string;
      teal: string;
      brownishGray: string;
      ocher: string;
      magnetic: string;
      dropShadow: string;
    };
  }
}
