import React from "react";
import { MemoryRouter } from "react-router";
import type { Preview } from "@storybook/react";
import GlobalStyle from "../src/styles/GlobalStyle";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <GlobalStyle />
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;

// export const decorators = [
//   (Story) => (
//     <MemoryRouter initialEntries={["/"]}>
//       <GlobalStyle />
//       <Story />
//     </MemoryRouter>
//   ),
// ];
