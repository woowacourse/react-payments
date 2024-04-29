import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import React from "react";
import { theme } from "../src/style/theme";
import GlobalStyles from "../src/style/global.ts";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

const decorators = [
  (Story) => (
    // <MemoryRouter>
    //   <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
    //   </BrowserRouter>
    // </MemoryRouter>
  ),
];

export default {
  ...preview,
  decorators,
};
