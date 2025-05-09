import { Meta, StoryObj } from "@storybook/react";
import CardNumberInputs from "../ui/CardNumberInputs";

const meta = {
  title: "CardNumberInputs",
  component: CardNumberInputs,
} satisfies Meta<typeof CardNumberInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: { first: "12", second: "23", third: "34", fourth: "45" },
    changeCardNumber: () => alert("변경"),
  },
};
