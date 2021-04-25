const customViewports = {
  reactPayments: {
    name: 'react-payments',
    styles: {
      width: '375px',
      height: '700px',
    },
    type: 'mobile',
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
    viewports: customViewports,
    defaultViewport: 'reactPayments',
  },
};
