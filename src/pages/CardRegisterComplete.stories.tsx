import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterComplete from "./CardRegisterComplete";

const meta = {
  title: "CardRegisterComplete",
  component: CardRegisterComplete,
} satisfies Meta<typeof CardRegisterComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { cardCompany: "BC카드", cardNumber: 5551 } };
