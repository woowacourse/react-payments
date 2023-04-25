import type { Meta, StoryObj } from "@storybook/react";
import Header from "./index";
import { withRouter } from "storybook-addon-react-router-v6";

const header = {
  component: Header,
  title: "Header",
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: "/card-list",
    },
  },
} satisfies Meta<typeof Header>;

export default header;

type Story = StoryObj<typeof header>;

export const Example = {
  args: {
    headingText: "카드 추가",
    backButton: true,
  },
} satisfies Story;
