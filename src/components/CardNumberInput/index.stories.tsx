import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from ".";
import Caption from "../common/Caption";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "CardNumberInput",
  component: CardNumberInput,

  parameters: {
    layout: "centered",
  },

  decorators: [
    (Story, context) => {
      const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
      const handleCardNumberChange = (index: number, value: string) => {
        setCardNumbers((prevNumbers) => {
          const updatedCardNumbers = [...prevNumbers];
          updatedCardNumbers[index] = value;

          return updatedCardNumbers;
        });
      };

      return (
        <Story
          args={{ ...context.args, cardNumbers, onCardNumberChange: handleCardNumberChange }}
        />
      );
    },
  ],

  tags: ["autodocs"],

  args: {
    cardNumbers: ["", "", "", ""],
    onCardNumberChange: fn(),
  },
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorCaption: (errorText: string) => (
      <Caption text={errorText} type="error" />
    ),
  },
};
