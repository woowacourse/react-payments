import { Meta, StoryObj } from "@storybook/react";
import PasswordInputField from "./PasswordInputField";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS } from "@/constants/condition";

const meta = {
  title: "PasswordInputField",
  component: PasswordInputField,
} satisfies Meta<typeof PasswordInputField>;

export default meta;

type Story = StoryObj<typeof PasswordInputField>;

const PasswordInputFieldWithHook = () => {
  const reduceds = Array.from({ length: INPUT_COUNTS.OWNER_NAME }).map(() => useInput(""));
  return <PasswordInputField reduceds={reduceds} />;
};

export const Default: Story = {
  render: () => <PasswordInputFieldWithHook />,
};
