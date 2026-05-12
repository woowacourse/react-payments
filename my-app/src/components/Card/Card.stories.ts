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
  args: {
    cardInfo: {
      numbers: [],
      expiry: [],
      cvc: "",
      company: "",
      password: "",
    },
    brand: "",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Visa: Story = {
  args: {
    cardInfo: {
      numbers: ["4123", "4567", "8901", "2345"],
      expiry: ["12", "26"],
      cvc: "123",
      company: "신한카드",
      password: "12",
    },
    brand: "visa",
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      numbers: ["5123", "4567", "8901", "2345"],
      expiry: ["06", "27"],
      cvc: "456",
      company: "BC카드",
      password: "12",
    },
    brand: "master",
  },
};

export const Amex: Story = {
  args: {
    cardInfo: {
      numbers: ["3712", "345678", "90123"],
      expiry: ["03", "28"],
      cvc: "1234",
      company: "현대카드",
      password: "12",
    },
    brand: "amex",
  },
};

export const Diners: Story = {
  args: {
    cardInfo: {
      numbers: ["3612", "345678", "9012"],
      expiry: ["09", "26"],
      cvc: "123",
      company: "우리카드",
      password: "12",
    },
    brand: "diners",
  },
};

export const UnionPay: Story = {
  args: {
    cardInfo: {
      numbers: ["6241", "2345", "6789", "0123"],
      expiry: ["11", "27"],
      cvc: "123",
      company: "하나카드",
      password: "12",
    },
    brand: "unionpay",
  },
};
