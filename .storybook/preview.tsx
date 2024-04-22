import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../src/styles/GlobalStyle";
import theme from "../src/styles/theme";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
    actions: { argTypesRegex: "^on.*" },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];

// export const decorators = [
//   withThemeFromJSXProvider({
//     themes: theme,
//     Provider: ThemeProvider,
//     GlobalStyles: GlobalStyle,
//   }),
// ];

export default preview;
