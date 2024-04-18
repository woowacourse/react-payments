import type { Preview } from "@storybook/react";
import React from "react";
import GlobalStyles from '../src/styles/GlobalStyles';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
};

export default preview;
