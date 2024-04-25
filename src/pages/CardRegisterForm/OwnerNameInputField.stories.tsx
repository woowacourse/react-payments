import { Meta, StoryObj } from "@storybook/react";
import OwnerNameInputField from "./OwnerNameInputField";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS } from "@/constants/condition";

const meta = {
  title: "OwnerNameInputField",
  component: OwnerNameInputField,
} satisfies Meta<typeof OwnerNameInputField>;

export default meta;

type Story = StoryObj<typeof OwnerNameInputField>;

const OwnerNameInputFieldWithHook = () => {
  const reduceds = Array.from({ length: INPUT_COUNTS.OWNER_NAME }).map(() =>
    useInput("")
  );
  return <OwnerNameInputField reduceds={reduceds} />;
};

export const Default: Story = {
  render: () => <OwnerNameInputFieldWithHook />,
};
