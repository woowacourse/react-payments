import { CardContextProvider } from '../src/context/CardContext';
import { MemoryRouter } from 'react-router';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  Story => (
    <CardContextProvider>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </CardContextProvider>
  ),
];
