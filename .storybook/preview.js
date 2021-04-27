import './preview.css';

const CUSTOM_VIEW_PORTS = {
  PAYMENTS: {
    name: 'PAYMENTS',
    styles: {
      width: '375px',
      height: '700px',
    },
  },
  IPHONE_X: {
    name: 'IPHONE X',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: CUSTOM_VIEW_PORTS,
    defaultViewport: 'PAYMENTS',
  },
};
