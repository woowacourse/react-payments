import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import GlobalStyle from '../src/styles/GlobalStyle';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import { withRouter } from 'storybook-addon-react-router-v6';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle, // Adds your GlobalStyle component to all stories
    themes: {
      theme: theme,
    },
    Provider: ThemeProvider,
  }),
  withRouter,
];

export const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
