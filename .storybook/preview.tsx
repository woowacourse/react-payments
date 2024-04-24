import type { Preview } from "@storybook/react";
import React from "react";
import Global from "../src/styles/Global";
import styled from "@emotion/styled";

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
    <Container>
      <Global />
      <Story />
    </Container>
  ),
];

export default preview;

const Container = styled.div`
  width: 200px;
  height: 200px;
`;
