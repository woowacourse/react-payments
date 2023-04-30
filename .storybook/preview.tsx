import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { CardInformationProvider } from '../src/context/CardInformationProvider';
import type { Preview } from '@storybook/react';

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

export const decorators = [
  Story => (
    <CardInformationProvider>
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    </CardInformationProvider>
  ),
];

export default preview;
