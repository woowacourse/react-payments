import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";
import { CardExpiryDateInputContainer } from "./CardExpiryDateInput";

const meta = {
  title: "CardExpiryDateInputContainer",
  component: CardExpiryDateInputContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    setCardExpiryDate: fn(),
  },
} satisfies Meta<typeof CardExpiryDateInputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    cardExpiryDate: {
      "expiry-month": "",
      "expiry-year": "",
    },
  },
};
