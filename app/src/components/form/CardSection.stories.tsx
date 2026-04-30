import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { CardContext } from "../Card";

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
    const [cardNumber, setCardNumber] = useState({
      "first-digits": "",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    });
    const [, setNetworkBrand] = useState("");
    return (
      <CardContext
        value={{
          cardNumber,
          setCardNumber,
          networkBrand: "",
          setNetworkBrand,
          cardExpiryDate: { "expiry-month": "", "expiry-year": "" },
          setCardExpiryDate: () => {},
        }}
      >
        <CardSection
          title="결제할 카드 번호를 입력해 주세요"
          subTitle="본인 명의의 카드만 결제 가능합니다."
        >
          <CardNumberInputContainer />
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
    return (
      <CardContext
        value={{
          cardNumber: {
            "first-digits": "",
            "second-digits": "",
            "third-digits": "",
            "fourth-digits": "",
          },
          setCardNumber: () => {},
          networkBrand: "",
          setNetworkBrand: () => {},
          cardExpiryDate,
          setCardExpiryDate,
        }}
      >
        <CardSection
          title="카드 유효기간을 입력해 주세요"
          subTitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <CardExpiryDateInputContainer />
        </CardSection>
      </CardContext>
    );
  },
};
