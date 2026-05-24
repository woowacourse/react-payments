import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button from "./BaseButton";

const meta = {
  title: "shared/components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "확인",
    style: "base",
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {};

export const Full: Story = {
  args: {
    style: "rounded",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    style: "base",
  },
};
