import { BrowserRouter } from 'react-router-dom';

import { CardContextProvider } from 'contexts/CardContext';

import GlobalStyle from 'GlobalStyle';

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
    <BrowserRouter>
      <GlobalStyle />
      <CardContextProvider>
        <Story />
      </CardContextProvider>
    </BrowserRouter>
  ),
];
