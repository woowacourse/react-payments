import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";

const meta: Meta<typeof CardPreview> = {
  title: "CardPreview",
  component: CardPreview,
};

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    card: {
      cardCompany: "현대카드",
      cardNumber: {
        firstGroup: "1234",
        secondGroup: "1234",
        thirdGroup: "1234",
        fourthGroup: "1234",
      },
      expirationDate: {
        month: "12",
        year: "12",
      },
      ownerName: "KIM",
    },
  },
};
