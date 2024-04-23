import type { Meta, StoryObj } from "@storybook/react";
import CreditCardPreview from "./CreditCardPreview";

const meta = {
  title: "CreditCardPreview",
  component: CreditCardPreview,
} satisfies Meta<typeof CreditCardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardType: "MASTER",
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
