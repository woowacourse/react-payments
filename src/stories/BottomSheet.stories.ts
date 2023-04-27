import { StoryObj } from "@storybook/react";
import { BottomSheet } from "../components";

const meta = {
  title: "BottomSheet",
  component: BottomSheet,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyBottomSheet: Story = {
  args: {
    children: null,
  },
};
