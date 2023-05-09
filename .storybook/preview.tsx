import React from 'react';
import type { Preview } from '@storybook/react';
import GlobalStyle from '../src/GlobalStyle';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '400px',
      height: '700px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: { ...customViewports },
      defaultViewport: 'Default',
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
};

export default preview;
