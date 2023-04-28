import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/common/Button";

interface ButtonProps {
  disabled?: boolean;
  buttonLabel: string;
}

const ButtonWithLabel = ({ disabled, buttonLabel }: ButtonProps) => {
  return <Button disabled={disabled}>{buttonLabel}</Button>;
};

const meta = {
  title: "Payment/Common",
  component: ButtonWithLabel,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonWithLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultButton: Story = {
  args: {
    buttonLabel: "버튼",
  },
};

export const DisabledButton: Story = {
  args: {
    buttonLabel: "버튼",
    disabled: true,
  },
};
