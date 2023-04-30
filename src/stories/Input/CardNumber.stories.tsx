import type { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../../component/AddCardPage/CardDetailForm/CardNumberInput/CardNumberInput";

const meta = {
  component: CardNumberInput,
  title: "Input",
} satisfies Meta<typeof CardNumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {},
};
