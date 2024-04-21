import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Input, { InputProps } from "./Input";

const meta: Meta<InputProps> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    onChange: (e) => console.log(e.target.value),
  },
};

export const WithValue: Story = {
  args: {
    value: "Initial value",
    placeholder: "Enter text...",
    onChange: (e) => console.log(e.target.value),
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Enter text...",
    isError: true,
    onChange: (e) => console.log(e.target.value),
  },
};
