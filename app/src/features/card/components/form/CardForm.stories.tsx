import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CardForm } from "./CardForm";
import { withCardRouter } from "../storybook/decorators";
import { ExpiryDate } from "../../ExpiryDate";

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
  setCardNumber: () => {},
  cardExpiryDate: new ExpiryDate("", ""),
  setCardExpiryDate: () => {},
  cardBrand: null as string | null,
  setCardBrand: () => {},
  cardCVC: "",
  setCardCVC: () => {},
  cardPassword: "",
  setCardPassword: () => {},
  gotoCreateCardDonePage: () => {},
};

const renderWithState: NonNullable<Story["render"]> = (args) => {
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
      gotoCreateCardDonePage={args.gotoCreateCardDonePage}
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
    cardExpiryDate: new ExpiryDate("01", "28"),
    cardBrand: "kakao",
    cardCVC: "111",
    cardPassword: "12",
  },
  render: renderWithState,
};
