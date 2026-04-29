import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "../components/Card";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    cardNumber: 1234567812345678,
    validityPeriod: {
      month: 4,
      year: 26,
    },
  },
};
