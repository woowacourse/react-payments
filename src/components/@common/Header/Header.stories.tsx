import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";
import { BrowserRouter } from "react-router-dom";

const header = {
  component: Header,
  title: "Header",
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      );
    },
  ],
} satisfies Meta<typeof Header>;

export default header;

type Story = StoryObj<typeof header>;

export const Example = {
  args: {
    headingText: "카드 추가",
    backButton: true,
  },
} satisfies Story;
