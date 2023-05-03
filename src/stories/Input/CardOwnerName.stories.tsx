import type { Meta, StoryObj } from "@storybook/react";
import CardOwnerNameInput from "components/AddCardPage/CardDetailForm/CardOwnerNameInput/CardOwnerNameInput";

const meta = {
  component: CardOwnerNameInput,
  title: "Input",
} satisfies Meta<typeof CardOwnerNameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardOwnerName: Story = {
  args: {},
};
