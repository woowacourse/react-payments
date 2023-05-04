import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/GlobalStyle';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '450px',
      height: '754px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    decorators: [
      (Story) => (
        <>
          <GlobalStyle />
          <Story />
        </>
      ),
    ],
    viewport: {
      viewports: { ...customViewports },
      defaultViewport: 'Default',
    },
  },
};

export default preview;
