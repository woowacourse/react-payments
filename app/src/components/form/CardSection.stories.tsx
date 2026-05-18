import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState, useRef } from "react";
import { CardContext } from "../../context/CardContext";

import { CardSection } from "./CardSection";
import { CardNumberInputContainer } from "./CardNumberInput";
import { CardExpiryDateInputContainer } from "./CardExpiryDateInput";

const meta = {
  title: "CardSection",
  component: CardSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumberInputSection: Story = {
  args: { title: "", children: null },
  render: () => {
    const [cardNumber, setCardNumber] = useState(['', '', '', '']);
    const firstRef = useRef<HTMLInputElement>(null);
    return (
      <CardContext
        value={{
          cardNumber,
          setCardNumber,
          cardExpiryDate: { "expiry-month": "", "expiry-year": "" },
          setCardExpiryDate: () => {},
          cardCompany: '',
          setCardCompany: () => {},
          cardCVC: '',
          setCardCVC: () => {},
          cardPassword: '',
          setCardPassword: () => {},
          networkBrand: '',
        }}
      >
        <CardSection
          title="결제할 카드 번호를 입력해 주세요"
          subTitle="본인 명의의 카드만 결제 가능합니다."
        >
          <CardNumberInputContainer firstRef={firstRef} serverError={null} onCardNumberComplete={() => {}} />
        </CardSection>
      </CardContext>
    );
  },
};

export const CardExpiryDateInputSection: Story = {
  args: { title: "", children: null },
  render: () => {
    const [cardExpiryDate, setCardExpiryDate] = useState({
      "expiry-month": "",
      "expiry-year": "",
    });
    const firstRef = useRef<HTMLInputElement>(null);
    return (
      <CardContext
        value={{
          cardNumber: ['', '', '', ''],
          setCardNumber: () => {},
          cardCompany: '',
          setCardCompany: () => {},
          cardCVC: '',
          setCardCVC: () => {},
          cardPassword: '',
          setCardPassword: () => {},
          cardExpiryDate,
          setCardExpiryDate,
          networkBrand: '',
        }}
      >
        <CardSection
          title="카드 유효기간을 입력해 주세요"
          subTitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <CardExpiryDateInputContainer expiryMonthRef={firstRef} serverError={null} onCardExpiryDateComplete={() => {}} />
        </CardSection>
      </CardContext>
    );
  },
};
