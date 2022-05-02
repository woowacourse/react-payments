import CardContext from '../src/CardContext';
import useInitialAppValue from '../src/hooks/useInitialAppValue';
import initialState from '../src/reducers/card.initialState';
import reducer from '../src/reducers/card.reducer';

initialState.dispatch = () => null;

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
  (Story) => {
    return (
      <CardContext.Provider value={useInitialAppValue(reducer, initialState)}>
        {Story()}
      </CardContext.Provider>
    );
  },
];
