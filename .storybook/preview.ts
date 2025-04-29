// .storybook/preview.tsx
import { withRouter } from './decorators/withRouter';
import '../src/styles/color.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
