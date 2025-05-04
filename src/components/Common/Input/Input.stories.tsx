import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

const defaultArgs = {
  placeholder: "1234",
  maxLength: 4,
  value: "1234",
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    isError: false,
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    isError: true,
  },
};
