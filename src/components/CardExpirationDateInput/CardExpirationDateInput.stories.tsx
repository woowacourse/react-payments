import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardExpirationDateInput from "./CardExpirationDateInput";
import { CardExpirationDate, CardExpirationDateKey } from "../../types";

const meta: Meta<typeof CardExpirationDateInput> = {
  title: "CardExpirationDateInput",
  component: CardExpirationDateInput,
};

export default meta;
type Story = StoryObj<typeof CardExpirationDateInput>;

const CardExpirationDateInputwithHooks = () => {
  const [expirationDate, setExpirationDate] = useState<CardExpirationDate>({
    month: "",
    year: "",
  });

  const handleExpirationDate = (value: string, dateType: CardExpirationDateKey) => {
    setExpirationDate({ ...expirationDate, [dateType]: value });
  };

  return <CardExpirationDateInput expirationDate={expirationDate} onChange={handleExpirationDate} />;
};

export const Default: Story = {
  render: () => {
    return <CardExpirationDateInputwithHooks />;
  },
};
