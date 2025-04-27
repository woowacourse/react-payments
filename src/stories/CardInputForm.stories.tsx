import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CardInputForm from "../pages/add-card/payment-input/components/cardInputForm/CardInputForm";
import { CardInfo } from "../pages/add-card/payment-input/PaymentInputPage";
import { MemoryRouter } from "react-router";

const meta = {
  title: "Components/CardInputForm",
  component: CardInputForm,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [cardInfo, setCardInfo] = useState<CardInfo>({
      cardNumbers: ["", "", "", ""],
      expirationDate: ["", ""],
      brandName: "",
    });

    function handleCardNumbersChange(cardNumbers: string[]) {
      setCardInfo((prev) => ({ ...prev, cardNumbers }));
    }

    function handleExpirationDateChange(expirationDate: string[]) {
      setCardInfo((prev) => ({ ...prev, expirationDate }));
    }

    function handleBrandNameChange(brandName: CardInfo["brandName"]) {
      setCardInfo((prev) => ({ ...prev, brandName }));
    }

    return (
      <CardInputForm
        cardInfo={cardInfo}
        handleCardNumbersChange={handleCardNumbersChange}
        handleExpirationDateChange={handleExpirationDateChange}
        handleBrandNameChange={handleBrandNameChange}
      />
    );
  },
};
