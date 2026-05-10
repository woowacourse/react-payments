import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CardForm } from "./CardForm";
import { withCardRouter } from "../storybook/decorators";

const meta = {
  title: "Card/Form/CardForm",
  component: CardForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withCardRouter],
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardNumber: {
    firstDigits: "",
    secondDigits: "",
    thirdDigits: "",
    fourthDigits: "",
  },
  setCardNumber: null,
  cardExpiryDate: {
    "expiry-month": "",
    "expiry-year": "",
  },
  setCardExpiryDate: null,
  cardBrand: "",
  setCardBrand: null,
  cardCVC: "",
  setCardCVC: null,
  cardPassword: "",
  setCardPassword: null,
};

const renderWithState = (args: typeof defaultArgs) => {
  const [cardNumber, setCardNumber] = useState(args.cardNumber);
  const [cardExpiryDate, setCardExpiryDate] = useState(args.cardExpiryDate);
  const [cardBrand, setCardBrand] = useState(args.cardBrand);
  const [cardCVC, setCardCVC] = useState(args.cardCVC);
  const [cardPassword, setCardPassword] = useState(args.cardPassword);

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
};

export const BaseCardForm: Story = {
  args: { ...defaultArgs },
  render: renderWithState,
};

export const CompleteCardForm: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      firstDigits: "4321",
      secondDigits: "4321",
      thirdDigits: "4321",
      fourthDigits: "4321",
    },
    cardExpiryDate: {
      "expiry-month": "01",
      "expiry-year": "28",
    },
    cardBrand: "kakao",
    cardCVC: "111",
    cardPassword: "12",
  },
  render: renderWithState,
};
