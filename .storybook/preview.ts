import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { GlobalStyle } from "../src/GlobalStyle";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle,
  }),
];

const customViewport = {
  Default: {
    name: "Default",
    styles: {
      width: "375px",
      height: "667px",
    },
  },
};

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...customViewport },
      defaultViewport: "Default",
    },
  },
};

export default preview;
