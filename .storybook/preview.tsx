import React from "react";
import { CardProvider } from "../src/contexts/CardContext";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <CardProvider>
        <Story />
      </CardProvider>
    ),
  ],
};

export default preview;
