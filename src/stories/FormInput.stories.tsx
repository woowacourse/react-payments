import type { Meta, StoryObj } from "@storybook/react";
import FormInput from "../Components/common/Input/Input";

const meta = {
  title: "Components/FormInput",
  component: FormInput,
  argTypes: {},
} satisfies Meta<typeof FormInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Input 기본값",
  args: { placeholder: "MM", onChange: () => {} },
};

export const CardNumbers: Story = {
  name: "카드 숫자 Input",
  args: {
    type: "number",
    value: "1234",
    maxLength: 4,
    sizePreset: "small",
    onChange: () => {},
  },
};

export const Period: Story = {
  name: "월, 년 Input",
  args: {
    type: "number",
    value: "9",
    maxLength: 2,
    sizePreset: "medium",
    onChange: () => {},
  },
};

export const OwnerName: Story = {
  name: "이름 Input",
  args: {
    type: "text",
    value: "Liver",
    maxLength: 18,
    minLength: 2,
    sizePreset: "large",
    onChange: () => {},
  },
};
