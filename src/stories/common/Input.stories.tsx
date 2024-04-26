import { Meta, StoryObj } from "@storybook/react";

import Input from "../../components/common/Input";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultInput: Story = {
  args: {
    placeholder: "1234",
    maxLength: 4,
    type: "string",
  },
  argTypes: {
    maxLength: {
      options: [4, 2],
      control: { type: "radio" },
    },
    type: {
      options: ["string", "number"],
      control: { type: "radio" },
    },
  },
  render: ({ ...args }) => <Input {...args} />,
};

const InputWithHooks = ({ ...args }) => {
  const [value, setValue] = useState("");

  // Sets a change handler to change the input's value
  const handleOnChange = (inputValue: string) => {
    setValue(inputValue);
    return false;
  };

  // Sets a Blur handler to blur the input element
  const handleOnBlur = (inputValue: string) => {
    if (inputValue.length < 4) {
      return true;
    }
    return false;
  };

  return (
    <Input
      type={args.type}
      maxLength={args.maxLength}
      placeholder={args.placeholder}
      onChange={handleOnChange}
      onBlur={handleOnBlur}
      value={value}
    />
  );
};

export const NumberInput: Story = {
  args: {
    type: "string",
    maxLength: 4,
    placeholder: "1234",
  },
  argTypes: {
    type: {
      options: ["string", "number"],
      control: { type: "radio" },
    },
    maxLength: {
      options: [4, 2],
      control: { type: "radio" },
    },
  },
  render: ({ ...args }) => <InputWithHooks {...args} />,
};
