import type { Meta, StoryObj } from "@storybook/react-vite";

import CardNumberInputField from "../components/feature/CardNumberInputField/CardNumberInputField";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
} satisfies Meta<typeof CardNumberInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardNumberUnits: ["", "", "", ""],
    onChange: () => {},
  },
};

export const Filled: Story = {
  args: {
    cardNumberUnits: ["1234", "5678", "1234", "5678"],
    onChange: () => {},
  },
};
