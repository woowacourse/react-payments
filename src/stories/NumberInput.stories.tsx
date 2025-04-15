import type { Meta, StoryObj } from "@storybook/react";
import NumberInput from "../components/NumberInput";

const meta = {
  title: "NumberInput",
  component: NumberInput,
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    maxLength: 4,
    placeholder: "1234",
  },
};
export const CVCNumber: Story = { args: { maxLength: 3, placeholder: "123" } };
export const ExpirationMonth: Story = {
  args: { maxLength: 2, placeholder: "MM" },
};
export const ExpirationYear: Story = {
  args: { maxLength: 2, placeholder: "YY" },
};
