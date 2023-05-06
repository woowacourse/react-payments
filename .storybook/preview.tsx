import React from "react";
import { MemoryRouter } from "react-router";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyle from "../src/styles/GlobalStyle";
import type { Preview } from "@storybook/react";
import { CardRegistrationInfoProvider } from "../src/context/CardRegistrationInfoContext";

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
    <CardRegistrationInfoProvider>
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    </CardRegistrationInfoProvider>
  ),

  withThemeFromJSXProvider({ GlobalStyles: GlobalStyle }),
];
