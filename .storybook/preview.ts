import type { Preview } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'responsive'
    }
  }
};

export default preview;
