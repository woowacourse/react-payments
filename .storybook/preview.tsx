import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "../src/style/theme";
import GlobalStyles from "../src/style/global.ts";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        // date: /Date$/i,
      },
    },
  },
};

const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export default {
  ...preview,
  decorators,
};
