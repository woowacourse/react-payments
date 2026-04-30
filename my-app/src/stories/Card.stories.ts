import type { Meta, StoryObj } from "@storybook/react";
import Card from "../components/Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    cardInfo: { control: "object" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Visa: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["12", "26"],
      cvc: ["123"],
      brand: "VISA",
    },
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      numbers: ["5123", "4567", "8901", "2345"],
      expiry: ["06", "27"],
      cvc: ["456"],
      brand: "MASTER",
    },
  },
};

export const Empty: Story = {
  args: {
    cardInfo: {
      numbers: [],
      expiry: [],
      cvc: [],
      brand: "",
    },
  },
};
