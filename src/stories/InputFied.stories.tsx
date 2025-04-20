import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import InputField from "../components/common/InputField/InputField";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "1234",
    onChange: fn(),
    isError: false,
    placeholder: "1234",
  },
};

export const Error: Story = {
  args: {
    value: "1234",
    onChange: fn(),
    isError: true,
    placeholder: "1234",
  },
};
