import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "./CardNumberInput";

const meta = {
  component: CardNumberInput,
  title: "CardDetailForm/CardNumberInput",
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    cardNumberHidden: "1111-2222-••••-••••",
  },
};
