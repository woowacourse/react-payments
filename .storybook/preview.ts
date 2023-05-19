import type { Preview } from '@storybook/react';

import '../src/styles/index.css';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '370px',
      height: '720px',
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
    viewport: {
      viewports: customViewports,
      defaultViewport: 'Default',
    },
  },
};

export default preview;
