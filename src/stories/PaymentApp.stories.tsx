import { Meta, StoryObj } from "@storybook/react";
import PaymentApp from "../components/PaymentApp";

const meta = {
  title: "PaymentApp",
  component: PaymentApp,
} satisfies Meta<typeof PaymentApp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
