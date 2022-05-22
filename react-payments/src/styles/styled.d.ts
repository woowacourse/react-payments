import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends theme {}

  export interface FlexWrapper {
    gap?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
  }

  export interface BoxType {
    [key: string]: string;
  }
}
