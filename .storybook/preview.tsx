import React from 'react';
import type { Preview } from '@storybook/react';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { AddCardContextProvider } from '../src/context/CardContext';
import { BrowserRouter } from 'react-router-dom';

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
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AddCardContextProvider>
          <GlobalStyle />
          <Story />
        </AddCardContextProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
