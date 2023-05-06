import type { Meta, StoryObj } from "@storybook/react";

import CardOwnerNameInput from "./CardOwnerNameInput";

const meta: Meta<typeof CardOwnerNameInput> = {
  title: "CardOwnerNameInput",
  component: CardOwnerNameInput,
};

export default meta;
type Story = StoryObj<typeof CardOwnerNameInput>;

export const Default: Story = {
  render: () => <CardOwnerNameInput />,
};
