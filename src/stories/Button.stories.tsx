import { Meta, StoryObj } from "@storybook/react";

import AddCardButton from "../components/AddCardButton";

const meta: Meta<typeof AddCardButton> = {
  component: AddCardButton,
  title: "AddCardButton",
};

export default meta;
type Story = StoryObj<typeof AddCardButton>;

export const AddButton: Story = {
  args: {},
};
