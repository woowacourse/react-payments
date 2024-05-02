import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: () => {},
    isError: false,
    placeholder: "1234",
  },
};

export const ErrorInput: Story = {
  args: {
    onChange: () => {},
    isError: true,
    placeholder: "1234",
  },
};
