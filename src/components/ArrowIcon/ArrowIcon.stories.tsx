import type { Meta, StoryObj } from "@storybook/react";
import ArrowIcon from "./ArrowIcon";

const meta = {
  title: "Component/ArrowIcon",
  component: ArrowIcon,
  args: {
    direction: "up",
    color: "#acacac",
  },
} satisfies Meta<typeof ArrowIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
