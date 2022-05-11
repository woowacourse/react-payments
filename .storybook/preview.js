import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
import { CardListContext, CardIndexContext } from '../src/contexts/index';

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
      <CardListContext.Provider>
        <CardIndexContext.Provider>
          <Story />
        </CardIndexContext.Provider>
      </CardListContext.Provider>
    </BrowserRouter>
  ),
];
