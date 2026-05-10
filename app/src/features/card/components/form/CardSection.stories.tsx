import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { CardSection } from "./CardSection";
import { CardNumberInput } from "./CardNumberInput";
import { CardExpiryDateInput } from "./CardExpiryDateInput";

const meta = {
  title: "Card/Form/CardSection",
  component: CardSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = { title: "", subTitle: "", display: true, children: null };

export const CardNumberInputSection: Story = {
  args: defaultArgs,
  render: () => {
    const [cardNumber, setCardNumber] = useState({
      firstDigits: "",
      secondDigits: "",
      thirdDigits: "",
      fourthDigits: "",
    });
    return (
      <CardSection
        title="결제할 카드 번호를 입력해 주세요"
        subTitle="본인 명의의 카드만 결제 가능합니다."
        display={true}
      >
        <CardNumberInput
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
        />
      </CardSection>
    );
  },
};

export const CardExpiryDateInputSection: Story = {
  args: defaultArgs,
  render: () => {
    const [cardExpiryDate, setCardExpiryDate] = useState({
      "expiry-month": "",
      "expiry-year": "",
    });
    return (
      <CardSection
        title="카드 유효기간을 입력해 주세요"
        subTitle="월/년도(MMYY)를 순서대로 입력해 주세요."
        display={true}
      >
        <CardExpiryDateInput
          cardExpiryDate={cardExpiryDate}
          setCardExpiryDate={setCardExpiryDate}
        />
      </CardSection>
    );
  },
};
