import type { Meta, StoryObj } from "@storybook/react";
import Subtitle from "./Subtitle";

const meta = {
  title: "Subtitle",
  component: Subtitle,
  tags: ["autodocs"],
} satisfies Meta<typeof Subtitle>;

export default meta;

type Story = StoryObj<typeof Subtitle>;

export const Default: Story = {
  args: {
    subtitle: "카드 번호",
  },
};
