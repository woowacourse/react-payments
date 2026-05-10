import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button from "./Button";

const meta = {
  title: "common/components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "확인",
    size: "block",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {};

export const Full: Story = {
  args: {
    size: "full",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
