import './globalStyle.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
    },
  },
};

export const decorators = [
  (Story, context) => {
    return (
      <div className="App">
        <Story {...context} />
      </div>
    );
  },
];
