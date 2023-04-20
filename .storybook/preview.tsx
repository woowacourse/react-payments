import '../src/index.css';
import React from 'react';
import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

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

export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
];
