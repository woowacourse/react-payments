import './globalStyle.css';
import { CardListContext } from '../src/context';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <CardListContext.Provider>
        <div className="App">
          <Story {...context} />
        </div>
      </CardListContext.Provider>
    );
  },
];
