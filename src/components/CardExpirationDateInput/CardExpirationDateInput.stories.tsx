import { Meta, StoryObj } from "@storybook/react";
import CardExpirationDateInput from "./CardExpirationDateInput";

const meta: Meta<typeof CardExpirationDateInput> = {
  title: "CardExpirationDateInput",
  component: CardExpirationDateInput,
};

export default meta;

type Story = StoryObj<typeof CardExpirationDateInput>;

export const Default: Story = {
  args: {
    expirationDate: { month: "", year: "" },
    expirationError: false,
  },
};

export const Error: Story = {
  args: {
    expirationDate: { month: "13", year: "23" },
    expirationError: true,
  },
};
