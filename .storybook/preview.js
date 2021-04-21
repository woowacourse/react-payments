import { configure, addDecorator } from '@storybook/react';
import { makeDecorator } from '@storybook/addons';

import * as React from 'react';
import GlobalStyle from '../src/GlobalStyle';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((style) => (
  <>
    <GlobalStyle />
    {style()}
  </>
));

configure(require.context('../src', true, /\.stories\.js?$/), module);
