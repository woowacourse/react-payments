import type { Meta, StoryObj } from "@storybook/react";
import PaymentInputPage from "../pages/add-card/payment-input/PaymentInputPage";

const meta = {
  title: "PaymentInputPage",
  component: PaymentInputPage,
  args: {},
} satisfies Meta<typeof PaymentInputPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
