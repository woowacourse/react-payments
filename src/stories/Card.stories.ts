import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "@/components/CardRegister/Card/Card";
import { CARD_COMPANIES } from "@/constants/cardCompanies";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardNumberUnits: ["", "", "", ""],
    cardCompany: null,
    validityPeriod: { month: "", year: "" },
  },
};

export const Filled: Story = {
  args: {
    cardNumberUnits: ["1234", "5678", "1234", "5678"],
    cardCompany: CARD_COMPANIES[0],
    validityPeriod: { month: "04", year: "26" },
  },
};

export const Visa: Story = {
  args: {
    cardNumberUnits: ["4111", "1111", "1111", "1111"],
    cardCompany: CARD_COMPANIES[1],
    validityPeriod: { month: "04", year: "26" },
  },
};

export const MasterCard: Story = {
  args: {
    cardNumberUnits: ["5123", "4567", "8901", "2346"],
    cardCompany: CARD_COMPANIES[2],
    validityPeriod: { month: "12", year: "28" },
  },
};
