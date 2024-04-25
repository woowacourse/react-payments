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
    valueState: "",
  },
  render: ({ ...args }) => {
    const [cardInformation, setCardInformation] = useState({
      cardOwnerName: args.valueState,
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
        valueState={cardInformation.cardOwnerName}
        onChange={inputHandler}
      />
    );
  },
};
