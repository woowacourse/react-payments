import type { Meta, StoryObj } from "@storybook/react";
import Card from "../components/Card";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: [],
    expiration: [],
  },
};
