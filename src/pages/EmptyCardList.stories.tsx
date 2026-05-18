import type { Meta, StoryObj } from "@storybook/react";
import EmptyCardList from "./EmptyCardList";

const meta: Meta<typeof EmptyCardList> = {
  title: "Pages/EmptyCardList",
  component: EmptyCardList,
};

export default meta;
type Story = StoryObj<typeof EmptyCardList>;

export const Success: Story = {
  args: {
    type: "success",
    onClick: () => {},
  },
};

export const Error: Story = {
  args: {
    type: "error",
    onClick: () => {},
  },
};
