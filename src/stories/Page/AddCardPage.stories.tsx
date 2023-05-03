import type { Meta, StoryObj } from "@storybook/react";
import AddCardPage from "components/AddCardPage/AddCardPage";

const meta = {
  component: AddCardPage,
  title: "Page",
} satisfies Meta<typeof AddCardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddCard: Story = {
  args: {},
};
