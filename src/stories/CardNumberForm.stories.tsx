import { Meta, StoryObj } from "@storybook/react";
import CardNumberForm from "../components/Form/CardNumberForm";

const meta = {
  title: "CardNumberForm",
  component: CardNumberForm,
} satisfies Meta<typeof CardNumberForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: "Card Number",
    inputCount: 4,
    type: "text",
    placeholders: ["1234", "1234", "1234", "1234"],
  },
};
