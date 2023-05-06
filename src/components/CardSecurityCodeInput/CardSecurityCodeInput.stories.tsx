import type { Meta, StoryObj } from "@storybook/react";

import CardSecurityCodeInput from "./CardSecurityCodeInput";

const meta: Meta<typeof CardSecurityCodeInput> = {
  title: "CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

export default meta;
type Story = StoryObj<typeof CardSecurityCodeInput>;

export const Default: Story = {
  render: () => <CardSecurityCodeInput />,
};
