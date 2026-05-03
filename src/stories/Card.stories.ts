import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "../components/common/Card";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardNumberUnits: ["", "", "", ""],
    validityPeriod: { month: "", year: "" },
  },
};

export const Filled: Story = {
  args: {
    cardNumberUnits: ["1234", "5678", "1234", "5678"],
    validityPeriod: { month: "04", year: "26" },
  },
};

export const Visa: Story = {
  args: {
    cardNumberUnits: ["4111", "1111", "1111", "1111"],
    validityPeriod: { month: "04", year: "26" },
    brand: "Visa",
  },
};

export const MasterCard: Story = {
  args: {
    cardNumberUnits: ["5123", "4567", "8901", "2346"],
    validityPeriod: { month: "12", year: "28" },
    brand: "MasterCard",
  },
};
