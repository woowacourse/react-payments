import React from "react";
import { MemoryRouter } from "react-router";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyle from "../src/styles/GlobalStyle";
import type { Preview } from "@storybook/react";

const customViewports = {
  Default: {
    name: "Default",
    styles: {
      width: "375px",
      height: "700px",
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...customViewports },
      defaultViewport: "Defalut",
    },
  },
};

export default preview;

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={["/"]}>
      <Story />
    </MemoryRouter>
  ),

  withThemeFromJSXProvider({ GlobalStyles: GlobalStyle }),
];
