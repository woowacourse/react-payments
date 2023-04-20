import 'styled-components';

declare module 'styled-components' {
  interface Theme {
    border: string;
    color: string;
    backgroundColor: string;
  }

  export interface DefaultTheme {
    light: Theme;
    dark: Theme;
    blue: Theme;
    pale: Theme;
  }
}
