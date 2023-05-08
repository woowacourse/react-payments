import type { Preview } from '@storybook/react';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { ResetStyle } from '../src/styles/ResetStyle';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <HashRouter>
          <ResetStyle />
          <Story />
        </HashRouter>
      </>
    ),
  ],
};

export default preview;
