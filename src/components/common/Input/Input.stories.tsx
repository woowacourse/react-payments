import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { useState } from "react";

const meta = {
  title: "MyComponent/MyInput",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    placeholder: "Basic",
    maxLength: 4,
    value: "",
  },
  render: (args: any) => {
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

export const Error: Story = {
  args: {
    placeholder: "Error",
    maxLength: 4,
    value: "",
  },
  render: (args: any) => {
    const [value, setValue] = useState(args.value);

    return (
      <Input placeholder={args.placeholder} maxLength={args.maxLength} value={value} onChange={setValue} error={true} />
    );
  },
};
