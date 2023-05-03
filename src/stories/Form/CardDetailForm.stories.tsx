import type { Meta, StoryObj } from "@storybook/react";
import CardDetailForm from "components/AddCardPage/CardDetailForm/CardDetailForm";

const meta = {
  component: CardDetailForm,
  title: "Form",
} satisfies Meta<typeof CardDetailForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDetail: Story = {
  args: {},
};
