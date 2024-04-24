import { Meta, StoryObj } from "@storybook/react";
import OwnerNameInputField from "./OwnerNameInputField";

const meta = {
  title: "OwnerNameInputField",
  component: OwnerNameInputField,
} satisfies Meta<typeof OwnerNameInputField>;

export default meta;

type Story = StoryObj<typeof OwnerNameInputField>;

export const Default: Story = {
  render: () => <OwnerNameInputField />,
};
