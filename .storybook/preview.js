import { addDecorator } from '@storybook/react';
import CardsProvider from '../src/context/CardsProvider';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};

addDecorator((story) => (
  <MemoryRouter>
    <CardsProvider>{story()}</CardsProvider>
  </MemoryRouter>
));
