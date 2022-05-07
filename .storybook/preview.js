import { addDecorator } from '@storybook/react';
import { GlobalStyle } from '../src/App';
import { CardFormProvider } from '../src/context/card-form-context';

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
    <CardFormProvider>{story()}</CardFormProvider>
  </>
));
