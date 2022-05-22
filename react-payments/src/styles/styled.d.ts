import React from "react";
import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends theme {}

  export interface FlexWrapper {
    children: React.ReactNode;
    gap?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
  }

  export type DefaultBoxType = {
    [key: string]: React.ReactNode;
  };

  export type BoxType = WithoutMappedProperty<
    DefaultBoxType,
    keyof Omit<DefaultBoxType, "children">,
    string
  >;
}
