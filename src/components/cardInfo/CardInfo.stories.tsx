import type { Meta, StoryObj } from "@storybook/react-vite";
import CardInfo from "./CardInfo";
import { useState } from "react";

const meta: Meta<typeof CardInfo> = {
  title: "Components/CardInfo",
  component: CardInfo,
};

export default meta;

type Story = StoryObj<typeof CardInfo>;

export const Default: Story = {
  render: () => {
    const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
    const [expireDate, setExpireDate] = useState({ month: "", year: "" });
    const [cvcNumber, setCvcNumber] = useState([""]);

    return (
      <CardInfo
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        expireDate={expireDate}
        setExpireDate={setExpireDate}
        cvcNumber={cvcNumber}
        setCvcNumber={setCvcNumber}
      />
    );
  },
};
