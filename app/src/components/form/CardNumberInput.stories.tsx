import type { Meta, StoryObj } from "@storybook/react-vite";
import { userEvent, within } from "storybook/test";
import { useState } from "react";

import { CardNumberInputContainer } from "./CardNumberInput";

const meta = {
  title: "CardNumberInputContainer",
  component: CardNumberInputContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const invalidInput: Story = {
  args: {
    cardNumber: {
      "first-digits": "",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
    setCardNumber: null,
  },
  render: (args) => {
    const [cardNumber, setCardNumber] = useState(args.cardNumber);
    return (
      <CardNumberInputContainer
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const [firstInput] = canvas.getAllByRole("textbox");
    await userEvent.type(firstInput, "abc");
    await userEvent.tab();
  },
};

export const base: Story = {
  args: {
    cardNumber: {
      "first-digits": "",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
    setCardNumber: null,
  },
  render: (args) => {
    const [cardNumber, setCardNumber] = useState(args.cardNumber);
    return (
      <CardNumberInputContainer
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
      />
    );
  },
};
