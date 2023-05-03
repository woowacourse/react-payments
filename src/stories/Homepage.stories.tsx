import { Meta, StoryObj } from "@storybook/react";

import Homepage from "../components/Page/Homepage";

const meta: Meta<typeof Homepage> = {
  component: Homepage,
  title: "Page",
};

export default meta;
type Story = StoryObj<typeof Homepage>;

export const Home: Story = {
  args: {},
};
