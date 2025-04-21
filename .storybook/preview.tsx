import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/styles/theme.ts';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      return (
        <ThemeProvider theme={theme}>
          <Story {...context} />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
