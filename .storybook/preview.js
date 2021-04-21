import { configure, addDecorator } from '@storybook/react';

import * as React from 'react';
import { ThemeProvider } from 'emotion-theming';

import GlobalStyle from '../src/GlobalStyle';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((style) => <ThemeProvider theme={theme}>{style()}</ThemeProvider>);

addDecorator((style) => (
  <>
    <GlobalStyle />
    {style()}
  </>
));

configure(require.context('../src', true, /\.stories\.js?$/), module);
