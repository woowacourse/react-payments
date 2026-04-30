import type { Meta, StoryObj } from "@storybook/react-vite";
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
