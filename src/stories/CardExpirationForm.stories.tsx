import type { Meta, StoryObj } from "@storybook/react";
import CardExpirationForm from "../components/CardExpirationForm";

const meta = {
  title: "CardExpirationForm",
  component: CardExpirationForm,
} satisfies Meta<typeof CardExpirationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxLength: 2,
  },
};
