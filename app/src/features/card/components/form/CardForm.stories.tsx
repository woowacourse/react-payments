import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CardForm } from "./CardForm";

const meta = {
  title: "Card/Form/CardForm",
  component: CardForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInputSection: Story = {
  args: {
    cardNumber: "",
    setCardNumber: null,
    cardExpiryDate: "",
    setCardExpiryDate: null,
  },
  render: () => {
    const [cardNumber, setCardNumber] = useState({
      "first-digits": "",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    });
    const [cardExpiryDate, setCardExpiryDate] = useState({
      "expiry-month": "",
      "expiry-year": "",
    });
    return (
      <CardForm
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardExpiryDate={cardExpiryDate}
        setCardExpiryDate={setCardExpiryDate}
      />
    );
  },
};
