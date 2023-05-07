import type { Meta, StoryObj } from "@storybook/react";
import AddCardButton from "components/CardListPage/CardList/AddCardButton/AddCardButton";

const meta = {
  component: AddCardButton,
  title: "Button",
} satisfies Meta<typeof AddCardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddCard: Story = {
  args: {},
};
