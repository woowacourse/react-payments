import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "../components/common/Input.tsx";

const meta = {
  title: "Input",
  component: Input,
  parameters: {},
  tags: [],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "입력해 주세요",
  },
};

export const Error: Story = {
  args: {
    state: "error",
    placeholder: "입력해 주세요",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: "입력해 주세요",
  },
};
