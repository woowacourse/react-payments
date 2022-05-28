import 'styles/index.css';

import { CardContextProvider } from 'contexts';

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
  (Story) => (
    <CardContextProvider>
      <Story />
    </CardContextProvider>
  ),
];
