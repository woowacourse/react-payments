import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyles from '../src/styles/GlobalStyles';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </>
    );
  },
];

export default preview;
