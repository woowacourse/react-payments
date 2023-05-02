import { StoryFn } from "@storybook/react";
import Card from "../components/common/Card";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Card",
  component: Card,
} as Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Gray: Story = {
  args: {
    $backgroundColor: "#E5E5E5",
  },
};
