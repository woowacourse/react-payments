import { useReducer } from 'react';
import CardContext from '../src/CardContext';
import useInitialAppValue from '../src/hooks/useInitialAppValue';
import { initialState, reducer } from '../src/reducers';

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
