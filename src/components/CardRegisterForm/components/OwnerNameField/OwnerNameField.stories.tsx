import type { Meta, StoryObj } from "@storybook/react";
import OwnerNameField from "./OwnerNameField";
import useInput from "@/hooks/useInput";
import { validateDoubleSpace, validateIsCapital } from "@/utils/validation";
import { useState } from "react";

const meta = {
  title: "CardRegisterForm/OwnerNameField",
  component: OwnerNameField,
} satisfies Meta<typeof OwnerNameField>;

export default meta;

const OwnerNameFieldWithHook = () => {
  const ownerNameState = useInput({
    initialValue: "",
    validates: [
      (value: string) => validateIsCapital(value),
      (value: string) => validateDoubleSpace(value),
    ],
  });

  const [, setIsNameEntered] = useState<boolean>(false);

  return (
    <OwnerNameField
      setIsNameEntered={setIsNameEntered}
      ownerNameState={ownerNameState}
    />
  );
};

type Story = StoryObj<typeof OwnerNameField>;

export const Default: Story = {
  render: () => <OwnerNameFieldWithHook />,
};
