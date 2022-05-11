import { Global } from '@emotion/react';
import { PageContextProvider } from 'contexts/PageContext';
import { CardDataContextProvider } from 'contexts/CardDataContext';

import appStyles from 'styles/app';

export const decorators = [
  (Story) => (
    <PageContextProvider>
      <CardDataContextProvider>
        <Global styles={appStyles} />
        <Story />
      </CardDataContextProvider>
    </PageContextProvider>
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
