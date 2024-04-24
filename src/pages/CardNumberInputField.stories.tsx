import { Meta, StoryObj } from "@storybook/react";
import CardNumberInputField from "./CardNumberInputField";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
} satisfies Meta<typeof CardNumberInputField>;

export default meta;

type Story = StoryObj<typeof CardNumberInputField>;

export const Default: Story = {
  render: () => <CardNumberInputField />,
};
