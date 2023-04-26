import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      black: string;
    };

    font: {
      title: string;
      header: string;
      subtitle: string;
      body: string;
    };
  }
}
