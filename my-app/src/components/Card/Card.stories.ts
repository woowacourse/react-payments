import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    cardInfo: { control: "object" },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardInfo: {
      numbers: [],
      expiry: [],
      cvc: "",
      brand: "",
    },
  },
};

export const Visa: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["12", "26"],
      cvc: "123",
      brand: "visa",
    },
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      numbers: ["5123", "4567", "8901", "2345"],
      expiry: ["06", "27"],
      cvc: "456",
      brand: "master",
    },
  },
};
