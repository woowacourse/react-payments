import type { Meta, StoryObj } from "@storybook/react";
import OwnerNameField from "./OwnerNameField";

const meta = {
  title: "OwnerNameField",
  component: OwnerNameField,
} satisfies Meta<typeof OwnerNameField>;

export default meta;

const ownerNameState = {
  value: "",
  onChange: () => {},
  error: null,
  isError: false,
  setValue: () => {},
};

type Story = StoryObj<typeof OwnerNameField>;

export const Default: Story = {
  args: {
    ownerNameState,
  },
};
