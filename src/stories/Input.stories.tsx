import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/common/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    value: "",
    placeholder: "Enter text",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    ...Default.args,
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const WithValidation: Story = {
  args: {
    ...Default.args,
    validator: (value) => value.length >= 5,
  },
};
