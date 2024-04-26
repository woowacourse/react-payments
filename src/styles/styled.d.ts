import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      heading: string;
      title: string;
      caption: string;
      label: string;
      input: string;
      button: string;
      paragraph1: string;
      paragraph2: string;
    };
    color: {
      white: string;
      black: string;
      gray: string;
      red: string;
      lightGray: string;
      darkGray: string;
      magnetic: string;
      dropShadow: string;
      brand: {
        bc: string;
        shinhan: string;
        kakao: string;
        hyundai: string;
        woori: string;
        lotte: string;
        hana: string;
        kookmin: string;
      };
    };
  }
}
