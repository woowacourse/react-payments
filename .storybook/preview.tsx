import { Global, ThemeProvider } from '@emotion/react';
import GlobalStyle from '../src/styles/globalStyle';
import theme from '../src/styles/theme';
import { Decorator, Preview, StoryContext, StoryFn } from "@storybook/react";

const withThemeProvider: Decorator = (Story: StoryFn, context: StoryContext) => (
  <ThemeProvider theme={theme}>
    <Global styles={GlobalStyle}/>
    {Story(context.args, context)}
  </ThemeProvider>
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withThemeProvider],
};

export default preview;
