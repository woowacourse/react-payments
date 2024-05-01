import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "Input",
  component: Input,

  parameters: {
    layout: "centered",
  },

  argTypes: {
    inputSize: {
      type: "string",
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },

  args: {
    onChange: fn(),
  },

  decorators: [
    (Story, context) => {
      const [value, setValue] = useState(context.args.value);
      const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

      return <Story args={{ ...context.args, value, onChange }} />;
    },
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "input-test",
    type: "text",
    placeholder: "test",
    value: "",
    maxLength: 10,
    inputSize: "medium",
    isError: false,
  },
};
