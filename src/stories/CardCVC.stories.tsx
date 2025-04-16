import type { Meta, StoryObj } from "@storybook/react";
import CardCVCForm from "../components/CardCVCForm";

const meta = {
  title: "CardCVCForm",
  component: CardCVCForm,
} satisfies Meta<typeof CardCVCForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    maxLength: 3,
  },
};
