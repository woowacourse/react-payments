import type { Meta, StoryObj } from "@storybook/react";
import CheckIcon from "./CheckIcon";

const meta = {
  title: "Component/CheckIcon",
  component: CheckIcon,
  args: {
    fill: "#007bff",
  },
} satisfies Meta<typeof CheckIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
