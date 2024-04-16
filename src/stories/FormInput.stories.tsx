import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "../Components/FormInput";

const meta = {
  title: "Components/FormInput",
  component: FormInput,
  argTypes: {},
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Input 기본값",
  args: { placeholder: "MM" },
};

export const CardNumbers: Story = {
  name: "카드 숫자 Input",
  args: {
    type: "number",
    value: "1234",
    maxLength: 4,
  },
};

export const Period: Story = {
  name: "월, 년 Input",
  args: {
    type: "number",
    value: "09",
    maxLength: 2,
  },
}; // 기댓값 09

export const OwnerName: Story = {
  name: "이름 Input",
  args: {
    type: "text",
    value: "Liver",
    maxLength: 20,
    minLength: 2,
  },
};
