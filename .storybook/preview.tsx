import React from 'react';
import type { Preview } from '@storybook/react';

import GlobalStyle from '../src/styles/global';
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  (Story) => {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Story />
      </BrowserRouter>
    );
  },
];

const preview: Preview = {
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

export default preview;
