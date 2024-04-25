import { Meta, StoryObj } from "@storybook/react";

import CardOwnerNameInput from "../components/payment/CardEnrollForm/CardOwnerNameInput";
import { useState } from "react";

const meta: Meta<typeof CardOwnerNameInput> = {
  component: CardOwnerNameInput,
};

export default meta;
type Story = StoryObj<typeof CardOwnerNameInput>;

export const Default: Story = {
  args: {
    cardOwnerName: "",
  },
  render: ({ ...args }) => {
    const [cardInformation, setCardInformation] = useState({
      cardOwnerName: args.cardOwnerName,
    });

    const inputHandler = (inputValue: string, inputId: string) => {
      setCardInformation((prev) => ({
        ...prev,
        [inputId]: inputValue,
      }));
    };

    return (
      <CardOwnerNameInput
        {...args}
        cardOwnerName={cardInformation.cardOwnerName}
        onChange={inputHandler}
      />
    );
  },
};
