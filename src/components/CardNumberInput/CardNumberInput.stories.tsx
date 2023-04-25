import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import GlobalStyle from "../../styles/GlobalStyle";
import CardNumberInput from "./CardNumberInput";
import { CardNumber, CardNumberGroups } from "../../types";

const meta: Meta<typeof CardNumberInput> = {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export default meta;
type Story = StoryObj<typeof CardNumberInput>;

const CardNumberInputwithHooks = () => {
  const [cardNumber, setCardNumber] = useState<CardNumber>({
    firstGroup: "",
    secondGroup: "",
    thirdGroup: "",
    fourthGroup: "",
  });

  const handleCardNumber = (value: string, targetGroup: CardNumberGroups) => {
    setCardNumber({ ...cardNumber, [targetGroup]: value });
  };

  return <CardNumberInput cardNumber={cardNumber} onChange={handleCardNumber} />;
};

export const Default: Story = {
  render: () => {
    return (
      <>
        <GlobalStyle />
        <CardNumberInputwithHooks />
      </>
    );
  },
};
