import type { Meta, StoryObj } from "@storybook/react";

import CardPasswordInput from "./CardPasswordInput";

const meta: Meta<typeof CardPasswordInput> = {
  title: "CardPasswordInput",
  component: CardPasswordInput,
};

export default meta;
type Story = StoryObj<typeof CardPasswordInput>;

export const Default: Story = {
  render: () => <CardPasswordInput />,
};
