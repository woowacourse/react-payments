import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../FormInputs/CardNumberInput";

const meta = {
  component: CardNumberInput,
  title: "Input/CardNumbers",
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbersStory: Story = {
  args: {
    cardNumber: {
      number1: "1111",
      number2: "2222",
      number3: "3333",
      number4: "4444",
    },

    setCardNumber: () => {},
  },
};
