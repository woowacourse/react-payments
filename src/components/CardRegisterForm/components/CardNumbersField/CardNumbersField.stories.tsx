import type { Meta, StoryObj } from "@storybook/react";
import CardNumbersField from "./CardNumbersField";

const meta = {
  title: "CardNumbersField",
  component: CardNumbersField,
} satisfies Meta<typeof CardNumbersField>;

export default meta;

const cardNumbersState = {
  values: {
    cardNumbers1: "",
    cardNumbers2: "",
    cardNumbers3: "",
    cardNumbers4: "",
  },
  onChange: () => {},
  errors: {
    cardNumbers1: "",
    cardNumbers2: "",
    cardNumbers3: "",
    cardNumbers4: "",
  },
  setValues: () => {},
  isError: false,
  setErrors: () => {},
};

type Story = StoryObj<typeof CardNumbersField>;

export const Default: Story = {
  args: {
    cardNumbersState,
  },
};
