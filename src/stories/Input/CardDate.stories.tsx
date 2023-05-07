import type { Meta, StoryObj } from "@storybook/react";
import CardDateInput from "components/AddCardPage/CardDetailForm/CardDateInput/CardDateInput";

const meta = {
  component: CardDateInput,
  title: "Input",
} satisfies Meta<typeof CardDateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDate: Story = {
  args: {},
};
