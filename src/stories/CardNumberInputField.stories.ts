import type { Meta, StoryObj } from "@storybook/react-vite";

import CardNumberInputField from "../components/CardNumberInputField";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
} satisfies Meta<typeof CardNumberInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
