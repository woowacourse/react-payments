import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CardNumberField from "./CardNumberField";

const meta: Meta<typeof CardNumberField> = {
  title: "Components/CardNumberField",
  component: CardNumberField,
};

export default meta;

type Story = StoryObj<typeof CardNumberField>;

export const Default: Story = {
  render: () => {
    const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
    return (
      <CardNumberField field={{ value: cardNumber, set: setCardNumber }} />
    );
  },
};
