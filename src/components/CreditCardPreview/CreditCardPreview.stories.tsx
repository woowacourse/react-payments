import type { Meta, StoryObj } from "@storybook/react";
import CreditCardPreview from "./CreditCardPreview";

const meta = {
  title: "CreditCardPreview",
  component: CreditCardPreview,
} satisfies Meta<typeof CreditCardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardBrand: "MASTER",
    cardNumbers: ["1234", "1234", "1234", "1234"],
    expirationDate: "04/18",
    ownerName: "",
  },
};
