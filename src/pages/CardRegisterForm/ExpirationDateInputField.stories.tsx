import { Meta, StoryObj } from "@storybook/react";
import ExpirationDateInputField from "./ExpirationDateInputField";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS } from "@/constants/condition";

const meta = {
  title: "ExpirationDateInputField",
  component: ExpirationDateInputField,
} satisfies Meta<typeof ExpirationDateInputField>;

export default meta;

type Story = StoryObj<typeof ExpirationDateInputField>;

const ExpirationDateInputFieldWithHook = () => {
  const reduceds = Array.from({ length: INPUT_COUNTS.EXPIRATION_DATE }).map(
    () => useInput("")
  );
  return <ExpirationDateInputField reduceds={reduceds} />;
};
export const Default: Story = {
  render: () => <ExpirationDateInputFieldWithHook />,
};
