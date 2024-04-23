import React from 'react';

import type { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';

import theme from '../src/styles/theme';
import GlobalStyles from '../src/styles/Global.style';

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
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
