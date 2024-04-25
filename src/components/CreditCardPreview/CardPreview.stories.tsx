import type { Meta, StoryObj } from "@storybook/react";
import CardPreviewFront from "./CardPreviewFront";

const meta = {
  title: "CreditCardPreview",
  component: CardPreviewFront,
} satisfies Meta<typeof CardPreviewFront>;

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
  },
};
