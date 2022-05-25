export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};

export const decorators = [
  (Story) => (
    <div style={{ padding: '16px 24px' }}>
      <Story />
    </div>
  ),
];
