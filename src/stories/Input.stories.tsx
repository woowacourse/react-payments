import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input/Input";

const meta = {
  title: "Input",
  component: Input,
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

export const CVCNumber: Story = {
  args: {
    placeholder: "123",
  },
};
