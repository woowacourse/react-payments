import type { Meta, StoryObj } from "@storybook/react";
import CardNumberForm from "../components/CardNumberForm";

const meta = {
  title: "CardNumberForm",
  component: CardNumberForm,
} satisfies Meta<typeof CardNumberForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxLength: 4,
  },
};
