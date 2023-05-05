import type { Meta, StoryObj } from "@storybook/react";
import Input from "../component/common/Input";

type Story = StoryObj<typeof Input>;

const meta: Meta = {
  title: "Input",
  component: Input,
};

export default meta;

export const SingleInput: Story = {
  args: {
    placeholder: "입력창이에용"
  },
};

export const LengthLimitedExample: Story = {
  args: {
    parsers: [(value) => value.slice(0, 5)],
    placeholder: "입력창이에용"
  },
};
