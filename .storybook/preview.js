import '../src/style/button.css';
import '../src/style/card.css';
import '../src/style/input.css';
import '../src/style/pageTitle.css';
import '../src/style/tooltip.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
