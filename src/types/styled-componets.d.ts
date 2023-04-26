import 'styled-components';
import { BankColors } from '../styles/theme';

declare module 'styled-components' {
  interface Theme {
    border: string;
    color: string;
    backgroundColor: string;
  }

  interface BankColors {
    [key: string]: string;
  }

  export interface DefaultTheme {
    light: Theme;
    dark: Theme;
    blue: Theme;
    pale: Theme;
    banks: BankColors;
  }
}
