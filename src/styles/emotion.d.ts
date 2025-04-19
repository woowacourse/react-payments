import '@emotion/react';
import { ColorType } from './theme';

declare module '@emotion/react' {
  export interface Theme {
    color: ColorType;
  }
}
