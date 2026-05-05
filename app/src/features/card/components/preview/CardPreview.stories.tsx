import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardPreview } from "./CardPreview";

const meta = {
  title: "Card/Preview/CardPreview",
  component: CardPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultCardNumber = {
  "first-digits": "",
  "second-digits": "",
  "third-digits": "",
  "fourth-digits": "",
};
const defaultCardExpiryDate = { "expiry-month": "", "expiry-year": "" };

export const Empty: Story = {
  args: {
    cardNumber: defaultCardNumber,
    cardExpiryDate: defaultCardExpiryDate,
  },
};

export const CardNumberPartiallyFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "",
      "fourth-digits": "",
    },
    cardExpiryDate: defaultCardExpiryDate,
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
    cardExpiryDate: defaultCardExpiryDate,
  },
};

export const ExpiryDateFilled: Story = {
  args: {
    cardNumber: defaultCardNumber,
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

export const VisaBrand: Story = {
  args: {
    cardNumber: {
      "first-digits": "4111",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
    cardExpiryDate: defaultCardExpiryDate,
  },
};

export const MasterBrand: Story = {
  args: {
    cardNumber: {
      "first-digits": "5111",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
    cardExpiryDate: defaultCardExpiryDate,
  },
};
