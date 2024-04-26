import { Meta, StoryObj } from "@storybook/react";

import CardExpirationDateInput from "../../components/payment/CardEnrollForm/CardExpirationDateInput";
import { useState } from "react";

const meta: Meta<typeof CardExpirationDateInput> = {
  component: CardExpirationDateInput,
};

export default meta;
type Story = StoryObj<typeof CardExpirationDateInput>;

export const Default: Story = {
  render: ({ ...args }) => {
    const [cardInformation, setCardInformation] = useState({
      cardExpirationMonth: "",
      cardExpirationYear: "",
    });

    const inputHandler = (inputValue: string, inputId: string) => {
      setCardInformation((prev) => ({
        ...prev,
        [inputId]: inputValue,
      }));
    };

    return (
      <CardExpirationDateInput
        {...args}
        cardExpirationMonth={cardInformation.cardExpirationMonth}
        cardExpirationYear={cardInformation.cardExpirationYear}
        onChange={inputHandler}
      />
    );
  },
};
