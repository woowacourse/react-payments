// .storybook/preview.tsx
import { withRouter } from './decorators/withRouter';
import { withFormContext } from './decorators/withFormContext'; // FormContext 감싸는 데코레이터
import '../src/styles/color.css';
export const decorators = [withRouter, withFormContext];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
