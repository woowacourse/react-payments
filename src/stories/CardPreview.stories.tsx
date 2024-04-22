/** @jsxImportSource @emotion/react */
import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardIssuer: "",
    cardNumbers: ["", "", "", ""],
    cardExpirationPeriod: ["", ""],
    cardHolder: "",
  },
};
