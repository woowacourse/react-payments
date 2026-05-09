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
    cardBrand: "",
    setCardBrand: null,
    cardCVC: "",
    setCardCVC: null,
    cardPassword: "",
    setCardPassword: null,
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

    const [cardBrand, setCardBrand] = useState(null);

    const [cardCVC, setCardCVC] = useState("");

    const [cardPassword, setCardPassword] = useState("");
    return (
      <CardForm
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardExpiryDate={cardExpiryDate}
        setCardExpiryDate={setCardExpiryDate}
        cardBrand={cardBrand}
        setCardBrand={setCardBrand}
        cardCVC={cardCVC}
        setCardCVC={setCardCVC}
        cardPassword={cardPassword}
        setCardPassword={setCardPassword}
      />
    );
  },
};
