import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { useState } from "react";
import { InputProps } from "../../types/componentPropsType";

const meta = {
  title: "MyComponent/MyInput",
  component: Input,
} satisfies Meta<InputProps>;

export default meta;

type Story = StoryObj<InputProps>;

export const Primary: Story = {
  args: {
    placeholder: "1234",
    maxLength: 4,
    value: "",
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <Input
        placeholder={args.placeholder}
        maxLength={args.maxLength}
        value={value}
        onChange={setValue}
        error={false}
      />
    );
  },
};
