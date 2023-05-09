import type { Preview } from '@storybook/react';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '415px',
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
};

export default preview;
