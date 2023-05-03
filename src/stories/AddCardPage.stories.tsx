import { Meta, StoryObj } from "@storybook/react";

import AddCardPage from "../components/Page/AddCardPage";

const meta: Meta<typeof AddCardPage> = {
  component: AddCardPage,
  title: "Page",
};

export default meta;
type Story = StoryObj<typeof AddCardPage>;

export const AddCard: Story = {
  args: {},
};
