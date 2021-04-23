import '../src/index.css';

const customViewports = {
  Default: {
    name: 'Default',
    styles: {
      width: '375px',
      height: '701px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {},
  viewport: {
    viewports: {
      ...customViewports,
    },
    defaultViewport: 'Default',
  },
};
