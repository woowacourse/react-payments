import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const CardNumber: Story = {
  args: {
    placeholder: "1234",
  },
};

export const ExpirationPeriodYear: Story = {
  args: {
    placeholder: "YY",
  },
};

export const ExpirationPeriodMonth: Story = {
  args: {
    placeholder: "MM",
  },
};

export const cvcNumber: Story = {
  args: {
    placeholder: "123",
  },
};
