/** @type { import('@storybook/react').Preview } */

import { ThemeProvider } from "styled-components";
import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyle from '../src/styles/GlobalStyles';
import theme from '../src/styles/GlobalStyles';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle, // Adds your GlobalStyle component to all stories
    themes: {
      theme: theme,
    },
    Provider: ThemeProvider,
  }),
];
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
