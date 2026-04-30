import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CardContext } from "../Card";
import { CardForm } from "./CardForm";

const meta = {
  title: "CardForm",
  component: CardForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInputSection: Story = {
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
    const [networkBrand, setNetworkBrand] = useState("");
    return (
      <CardContext
        value={{
          cardNumber,
          setCardNumber,
          cardExpiryDate,
          setCardExpiryDate,
          networkBrand,
          setNetworkBrand,
        }}
      >
        <CardForm />
      </CardContext>
    );
  },
};
