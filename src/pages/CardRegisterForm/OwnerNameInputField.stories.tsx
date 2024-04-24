import { Meta, StoryObj } from "@storybook/react";
import OwnerNameInputField from "./OwnerNameInputField";
import useInput from "@/hooks/useInput";

const meta = {
  title: "OwnerNameInputField",
  component: OwnerNameInputField,
} satisfies Meta<typeof OwnerNameInputField>;

export default meta;

type Story = StoryObj<typeof OwnerNameInputField>;

const OwnerNameInputFieldWithHook = () => {
  const reduceds = Array.from({ length: 1 }).map(() => useInput(""));
  return <OwnerNameInputField reduceds={reduceds} />;
};

export const Default: Story = {
  render: () => <OwnerNameInputFieldWithHook />,
};
