import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "../src/style/theme";

import GlobalStyles from "../src/style/common";

export const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
