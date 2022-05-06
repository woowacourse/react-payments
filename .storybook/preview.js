import { CardInfoProvider, CardListProvider, SetPathContext } from '../src/context';

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
    // <SetPathContext.Provider value={setPath}>
    <CardInfoProvider>
      <CardListProvider>
        <Story />
      </CardListProvider>
    </CardInfoProvider>
    // </SetPathContext.Provider>
  ),
];
