import { Meta, StoryObj } from "@storybook/react";
import { CardNumber } from "./cardNumber";

const meta: Meta<typeof CardNumber> = {
  component: CardNumber,
  title: "CardNumber",
};

export default meta;

type Story = StoryObj<typeof CardNumber>;

export const Default: Story = {
  args: {},
};
