import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../pages/addCard/components/paymentInputPage/cardPreview/CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,
  args: { cardNumbers: [], expirationDate: [] },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: ["1234", "1234", "1234", "1234"],
    expirationDate: ["12", "25"],
  },
};

export const VisaUI: Story = {
  args: {
    cardNumbers: ["4111", "1234", "1234", "1234"],
    expirationDate: ["12", "25"],
  },
};

export const MasterUI: Story = {
  args: {
    cardNumbers: ["5111", "1234", "1234", "1234"],
    expirationDate: ["12", "25"],
  },
};
