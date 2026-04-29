import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { expect, userEvent } from "storybook/test";

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
  play: async ({ canvasElement }) => {
    const ids = ["first-digits", "second-digits", "third-digits", "fourth-digits"];

    for (const id of ids) {
      const input = canvasElement.querySelector(`#${id}`) as HTMLElement;
      await userEvent.type(input, "123456");
      await expect(input).toHaveValue(1234);
    }
  },
};
