import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "./CardNumberInput";

const meta: Meta<typeof CardNumberInput> = {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  args: {
    cardNumber: { firstGroup: "1234", secondGroup: "1234", thirdGroup: "1234", fourthGroup: "1234" },
  },
};
