import { Meta, StoryObj } from "@storybook/react";
import PasswordInputField from "./PasswordInputField";
import useInput from "@/hooks/useInput";

const meta = {
  title: "PasswordInputField",
  component: PasswordInputField,
} satisfies Meta<typeof PasswordInputField>;

export default meta;

type Story = StoryObj<typeof PasswordInputField>;

const PasswordInputFieldWithHook = () => {
  const inputStates = [useInput("")];
  return <PasswordInputField inputStates={inputStates} />;
};

export const Default: Story = {
  render: () => <PasswordInputFieldWithHook />,
};
