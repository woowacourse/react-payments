import React from 'react';
import { Reset } from 'styled-reset';
import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';

addDecorator((story) => (
  <>
    <Reset />
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
