import type { Preview } from "@storybook/react";
import React from "react";
import Global from "../src/styles/Global";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global />
      <Story />
    </>
  ),
];

export default preview;
