import type { Meta, StoryObj } from "@storybook/react";
import OwnerNameField from "./OwnerNameField";

const meta = {
  title: "OwnerNameField",
  component: OwnerNameField,
} satisfies Meta<typeof OwnerNameField>;

export default meta;

const ownerNameState = {
  inputs: [""],
  onChange: () => {},
};

type Story = StoryObj<typeof OwnerNameField>;

export const Default: Story = {
  args: {
    ownerNameState,
  },
};
