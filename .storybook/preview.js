import '../src/index.css';
import { BrowserRouter } from 'react-router-dom';
import { CardListProvider } from '../src/contexts/index';

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
      <CardListProvider>
        <Story />
      </CardListProvider>
    </BrowserRouter>
  ),
];
