import React from "react";
import { MemoryRouter } from "react-router";
import type { Preview } from "@storybook/react";
import GlobalStyle from "../src/components/common/GlobalStyle";
import { CardProvier } from "../src/contexts/CardContext";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile",
          styles: {
            width: "390px",
            height: "844px",
          },
        },
      },
      defaultViewport: "mobile",
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <CardProvier>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </CardProvier>
      <div id="modal" />
    </>
  ),
];

export default preview;
