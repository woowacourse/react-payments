import React from 'react';
import '../src/style/button.css';
import '../src/style/card.css';
import '../src/style/input.css';
import '../src/style/title.css';
import '../src/style/tooltip.css';
import CardInfoContextProvider from '../src/CardInfoContextProvider';

export const decorators = [
  (Story) => (
    <CardInfoContextProvider>
      <Story />
    </CardInfoContextProvider>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
