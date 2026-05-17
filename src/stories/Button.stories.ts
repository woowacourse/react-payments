import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "../components/common/Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {},
  tags: [],
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "다음",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "다음",
  },
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: "다음",
  },
};
