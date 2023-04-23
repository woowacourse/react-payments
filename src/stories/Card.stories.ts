import { StoryObj } from "@storybook/react";
import Card from "../components/Card";

const meta = {
  title: "Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const RedCard: Story = {
  args: {
    color: "red",
    cardNumber: "1111-2222-3333-4444",
    ownerName: "LIGHT",
    expiredDate: "12 / 24",
  },
};

export const PinkCard: Story = {
  args: {
    color: "green",
    cardNumber: "9999-9999-9999-9999",
    ownerName: "PATRICK",
    expiredDate: "08 / 25",
  },
};
