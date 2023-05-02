import 'styled-components';
import { ColorsType } from '@styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
