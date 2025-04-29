import type { Meta, StoryObj } from "@storybook/react";
import { CheckIcon } from "./CheckIcon";

const meta = {
  title: "CheckIcon",
  component: CheckIcon,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { fill: "#333" },
};
