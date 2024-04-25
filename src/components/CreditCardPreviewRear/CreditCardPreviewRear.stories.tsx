import type { Meta, StoryObj } from "@storybook/react";
import CreditCardPreviewRear from "./CreditCardPreviewRear";

const meta = {
  title: "CreditCardPreviewRear",
  component: CreditCardPreviewRear,
} satisfies Meta<typeof CreditCardPreviewRear>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { CVC: "123" },
};
