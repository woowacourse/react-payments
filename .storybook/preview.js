import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/App';
import { CardFormProvider } from '../src/context/card-form-context';
import { MemoryRouter } from 'react-router-dom';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((story) => (
  <>
    <GlobalStyle />
    <MemoryRouter>
      <CardFormProvider>{story()}</CardFormProvider>
    </MemoryRouter>
  </>
));
