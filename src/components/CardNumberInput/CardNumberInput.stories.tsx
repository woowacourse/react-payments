import type { Meta, StoryObj } from "@storybook/react";

import CardNumberInput from "./CardNumberInput";

const meta: Meta<typeof CardNumberInput> = {
  title: "CardNumberInput",
  component: CardNumberInput,
};

export default meta;
type Story = StoryObj<typeof CardNumberInput>;

export const Default: Story = {
  render: () => <CardNumberInput />,
};
