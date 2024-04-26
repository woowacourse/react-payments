import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";

const meta = {
  title: "CreditCardPreview",
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardType: "BC카드",
    cardNumbers: {
      cardNumbers1: "1234",
      cardNumbers2: "1234",
      cardNumbers3: "1234",
      cardNumbers4: "1234",
    },
    expirationDate: {
      expirationMonth: "01",
      expirationYear: "25",
    },
    ownerName: "RIAN OH",
    CVCNumbers: "123",
    isFrontShow: true,
  },
};
