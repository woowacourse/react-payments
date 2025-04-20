import type { Meta, StoryObj } from "@storybook/react";
import Description from "./Description";

const meta = {
  title: "Description",
  component: Description,
  tags: ["autodocs"],
} satisfies Meta<typeof Description>;

export default meta;

type Story = StoryObj<typeof Description>;

export const Default: Story = {
  args: {
    description: "설명 텍스트입니다.",
  },
};
