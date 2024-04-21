import { Meta, StoryObj } from "@storybook/react";
import Input from "../components/atoms/Input/Input";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const CardNumberInput: Story = {
  args: {
    id: "cardNumber1",
    type: "string",
    maxLength: 4,
    placeholder: "1234",
    isError: false,
  },
  argTypes: {
    type: {
      options: ["string", "number"],
      control: { type: "radio" },
    },
    maxLength: {
      options: [2, 4, 15],
      control: { type: "radio" },
    },
    isError: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  render: ({ ...args }) => <Input {...args} />,
};

export const CardDateInput: Story = {
  args: {
    id: "cardDate",
    type: "string",
    maxLength: 2,
    placeholder: "MM",
    isError: false,
  },
  argTypes: {
    type: {
      options: ["string", "number"],
      control: { type: "radio" },
    },
    maxLength: {
      options: [2, 4, 15],
      control: { type: "radio" },
    },
    isError: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  render: ({ ...args }) => <Input {...args} />,
};

export const CardOwnerNameInput: Story = {
  args: {
    id: "cardOwnerName",
    type: "string",
    maxLength: 15,
    placeholder: "JAEWI MYONG",
    isError: false,
  },
  argTypes: {
    type: {
      options: ["string", "number"],
      control: { type: "radio" },
    },
    maxLength: {
      options: [2, 4, 15],
      control: { type: "radio" },
    },
    isError: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  render: ({ ...args }) => <Input {...args} />,
};

export const ErrorInput: Story = {
  args: {
    id: "cardNumber1",
    type: "string",
    maxLength: 4,
    placeholder: "1234",
    value: "abcd",
    isError: true,
  },
  argTypes: {
    type: {
      options: ["string", "number"],
      control: { type: "radio" },
    },
    maxLength: {
      options: [2, 4, 15],
      control: { type: "radio" },
    },
    isError: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  render: ({ ...args }) => <Input {...args} />,
};
