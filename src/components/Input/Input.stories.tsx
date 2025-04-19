import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Component/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "카드 번호를 입력하세요",
    disabled: false,
    readOnly: false,
    minLength: 0,
    maxLength: 30,
    isError: false,
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    isError: true,
  },
};
