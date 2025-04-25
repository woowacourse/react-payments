import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Components/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "카드 번호를 입력하세요",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    isError: true,
  },
};
