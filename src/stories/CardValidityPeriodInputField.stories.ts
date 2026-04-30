import type { Meta, StoryObj } from "@storybook/react-vite";

import CardValidityPeriodInputField from "../components/CardValidityPeriodInputField";

const meta = {
  title: "CardValidityPeriodInputField",
  component: CardValidityPeriodInputField,
} satisfies Meta<typeof CardValidityPeriodInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    validityPeriod: { month: "", year: "" },
    onChange: () => {},
  },
};

export const Filled: Story = {
  args: {
    validityPeriod: { month: "04", year: "26" },
    onChange: () => {},
  },
};
