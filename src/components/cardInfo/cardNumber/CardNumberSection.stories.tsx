import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import CardNumberSection from "./CardNumberSection";

const meta: Meta<typeof CardNumberSection> = {
  title: "Components/CardNumberSection",
  component: CardNumberSection,
};

export default meta;

type Story = StoryObj<typeof CardNumberSection>;

export const Default: Story = {
  render: () => {
    const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
    return (
      <CardNumberSection cardNumber={cardNumber} setCardNumber={setCardNumber} />
    );
  },
};
