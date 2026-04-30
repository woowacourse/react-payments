import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardPreview } from "./CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    cardNumber: {
      "first-digits": "",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
    cardExpiryDate: {
      "expiry-month": "",
      "expiry-year": "",
    },
    networkBrand: "",
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const CardNumberPartiallyFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};

export const CardNumberFullyFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "3456",
    },
  },
};

export const ExpiryDateFilled: Story = {
  args: {
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "26",
    },
  },
};

export const FullyFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "3456",
    },
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "26",
    },
  },
};
