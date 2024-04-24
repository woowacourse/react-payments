import { Meta, StoryObj } from "@storybook/react";
import ExpirationDateInputField from "./ExpirationDateInputField";
import useInput from "@/hooks/useInput";

const meta = {
  title: "ExpirationDateInputField",
  component: ExpirationDateInputField,
} satisfies Meta<typeof ExpirationDateInputField>;

export default meta;

type Story = StoryObj<typeof ExpirationDateInputField>;

const ExpirationDateInputFieldWithHook = () => {
  const reduceds = Array.from({ length: 2 }).map(() => useInput(""));
  return <ExpirationDateInputField reduceds={reduceds} />;
};
export const Default: Story = {
  render: () => <ExpirationDateInputFieldWithHook />,
};
