import { Meta, StoryObj } from "@storybook/react";
import AddCardButton from "../../components/card/button/AddCardButton";

const meta: Meta<typeof AddCardButton> = {
  component: AddCardButton,
  title: "Button",
};

export default meta;
type Story = StoryObj<typeof AddCardButton>;

export const AddCard: Story = {
  args: {},
};
