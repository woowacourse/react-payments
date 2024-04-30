import Input, { InputProps } from "../../components/common/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Input> = {
  component: Input,
};
export default meta;

type Story = StoryObj<typeof Input>;

const args: InputProps = {
  placeholder: "1234",
  maxLength: 4,
  type: "string",
  isError: false,
};

export const Default: Story = {
  args,
  argTypes: {
    maxLength: {
      options: [4, 2],
      control: { type: "radio" },
    },
    type: {
      options: ["string", "number"],
      control: { type: "radio" },
    },
    isError: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
};
