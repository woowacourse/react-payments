import type { Meta, StoryObj } from "@storybook/react";
import Title from "./Title";

const meta = {
  title: "Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: "제목 텍스트",
  },
};
