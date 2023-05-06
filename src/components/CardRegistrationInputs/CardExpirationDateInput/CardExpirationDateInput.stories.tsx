import type { Meta, StoryObj } from "@storybook/react";

import CardExpirationDateInput from "./CardExpirationDateInput";

const meta: Meta<typeof CardExpirationDateInput> = {
  title: "CardExpirationDateInput",
  component: CardExpirationDateInput,
};

export default meta;
type Story = StoryObj<typeof CardExpirationDateInput>;

export const Default: Story = {
  render: () => <CardExpirationDateInput />,
};
