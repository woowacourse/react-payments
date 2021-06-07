import PageContextProvider from '../src/contexts/PageContextProvider';
import CardContextProvider from '../src/contexts/CardContextProvider';
import { GlobalStyle } from '../src/style';

export const decorators = [
  (Story) => (
    <>
      <CardContextProvider>
        <PageContextProvider>
          <GlobalStyle />
          <Story />
        </PageContextProvider>
      </CardContextProvider>
    </>
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
