import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import CardInputForm from "../pages/add-card/components/paymentInputPage/cardInputForm/CardInputForm";

const meta = {
  title: "CardInputForm",
  component: CardInputForm,
  args: {
    setCardNumbers: () => {},
    setExpirationDate: () => {},
  },
} satisfies Meta<typeof CardInputForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [cardNumbers, setCardNumbers] = useState<string[]>([]);
    const [expirationDate, setExpirationDate] = useState<string[]>([]);
    return (
      <CardInputForm
        setCardNumbers={setCardNumbers}
        setExpirationDate={setExpirationDate}
      />
    );
  },
};
