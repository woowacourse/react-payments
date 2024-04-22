import type { Meta, StoryObj } from "@storybook/react";
import CardNumbersField from "./CardNumbersField";

const meta = {
  title: "CardNumbersField",
  component: CardNumbersField,
} satisfies Meta<typeof CardNumbersField>;

export default meta;

const cardNumbersState = {
  inputs: ["", "", "", ""],
  onChange: () => {},
};

type Story = StoryObj<typeof CardNumbersField>;

export const Default: Story = {
  args: {
    cardNumbersState,
  },
};
