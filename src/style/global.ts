import { DefaultTheme } from "styled-components";

const color = {
  primaryColor: "#BA55D3",
  lightenColor: "#FF66FF",
  grey1: "#ECEBF1",
  grey2: "#E5E5E5",
  grey3: "#737373",
  grey4: "#525252",
  grey5: "#383838",
} as const;

export const theme: DefaultTheme = {
  color,
};
