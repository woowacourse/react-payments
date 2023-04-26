import React from 'react';
import type { Preview } from '@storybook/react';

import GlobalStyle from '../src/styles/global';
import { BrowserRouter } from 'react-router-dom';

import PaymentsProvider from '../src/components/context/PaymentsProvider';
import FocusRefProvider from '../src/components/context/FocusRefsProvider';
import CardListProvider from '../src/components/context/CardListProvider';

export const decorators = [
  (Story) => {
    return (
      <BrowserRouter>
        <CardListProvider>
          <PaymentsProvider>
            <FocusRefProvider>
              <GlobalStyle />
              <Story />
            </FocusRefProvider>
          </PaymentsProvider>
        </CardListProvider>
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
