import { Meta, StoryObj } from "@storybook/react";

import CardExpirationDate from "../components/CardExpirationDate";
import { useState } from "react";

const meta: Meta<typeof CardExpirationDate> = {
  component: CardExpirationDate,
};

export default meta;
type Story = StoryObj<typeof CardExpirationDate>;

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
      <CardExpirationDate
        {...args}
        cardExpirationMonth={cardInformation.cardExpirationMonth}
        cardExpirationYear={cardInformation.cardExpirationYear}
        onChange={inputHandler}
      />
    );
  },
};
