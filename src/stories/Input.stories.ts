import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "../components/Input.tsx";

const meta = {
  title: "Input",
  component: Input,
  parameters: {},
  tags: [],
  argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "placeholder",
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    placeholder: "placeholder",
  },
};
