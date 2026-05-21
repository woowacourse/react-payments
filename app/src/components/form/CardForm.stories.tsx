import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useRef } from "react";
import { MemoryRouter } from "react-router-dom";
import { CardContext } from "../../context/CardContext";
import type { CardCompany } from "../../context/CardContext";

import { CardForm } from "./CardForm";

const meta = {
  title: "CardForm",
  component: CardForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    refs: {
      cardNumberFirstRef: { current: null },
      expiryMonthRef: { current: null },
      cardCVCRef: { current: null },
      cardPasswordRef: { current: null },
    },
    currentStep: 0,
    isFormComplete: false,
    serverError: null,
    onCardNumberComplete: () => {},
    onCardCompanySelected: () => {},
    onCardExpiryDateComplete: () => {},
    onCardCVCComplete: () => {},
    handleFormSubmit: () => {},
  },
} satisfies Meta<typeof CardForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  render: () => {
    const [cardNumber, setCardNumber] = useState(['', '', '', '']);
    const [cardExpiryDate, setCardExpiryDate] = useState({
      "expiry-month": "",
      "expiry-year": "",
    });
    const [cardCompany, setCardCompany] = useState<CardCompany>('');
    const [cardCVC, setCardCVC] = useState('');
    const [cardPassword, setCardPassword] = useState('');
    const refs = {
      cardNumberFirstRef: useRef<HTMLInputElement>(null),
      expiryMonthRef: useRef<HTMLInputElement>(null),
      cardCVCRef: useRef<HTMLInputElement>(null),
      cardPasswordRef: useRef<HTMLInputElement>(null),
    };
    return (
      <MemoryRouter>
        <CardContext
          value={{
            cardNumber,
            setCardNumber,
            cardExpiryDate,
            setCardExpiryDate,
            cardCompany,
            setCardCompany,
            cardCVC,
            setCardCVC,
            cardPassword,
            setCardPassword,
            networkBrand: '',
          }}
        >
          <CardForm
            refs={refs}
            currentStep={0}
            isFormComplete={false}
            serverError={null}
            onCardNumberComplete={() => {}}
            onCardCompanySelected={() => {}}
            onCardExpiryDateComplete={() => {}}
            onCardCVCComplete={() => {}}
            handleFormSubmit={() => {}}
          />
        </CardContext>
      </MemoryRouter>
    );
  },
};
