import 'styled-components';
import { Colors, RegisterFormInputType } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    registerFormInput: RegisterFormInputType;
    colors: Colors;
  }
}
