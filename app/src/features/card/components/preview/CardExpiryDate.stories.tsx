import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardExpiryDate } from "./CardExpiryDate";

const meta = {
  title: "Card/Preview/CardExpiryDate",
  component: CardExpiryDate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpiryDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardExpiryDate: {
      "expiry-month": "1",
      "expiry-year": "",
    },
  },
};

export const MonthPartiallyFilled: Story = {
  args: {
    cardExpiryDate: {
      "expiry-month": "1",
      "expiry-year": "",
    },
  },
};

export const MonthFilledWithSlash: Story = {
  args: {
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "",
    },
  },
};

export const FullyFilled: Story = {
  args: {
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "26",
    },
  },
};
