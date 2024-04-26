import type { Meta, StoryObj } from "@storybook/react";
import OwnerNameField from "./OwnerNameField";
import useInput from "@/hooks/useInput";
import {
  validateDoubleSpace,
  validateEnterRequired,
  validateIsEnglish,
} from "@/utils/validation";

const meta = {
  title: "CardRegisterForm/OwnerNameField",
  component: OwnerNameField,
} satisfies Meta<typeof OwnerNameField>;

export default meta;

const OwnerNameFieldWithHook = () => {
  const ownerNameState = useInput({
    initialValue: "",
    validates: [
      (value: string) => validateIsEnglish(value),
      (value: string) => validateDoubleSpace(value),
      () => validateEnterRequired(),
    ],
  });

  return <OwnerNameField ownerNameState={ownerNameState} />;
};

type Story = StoryObj<typeof OwnerNameField>;

export const Default: Story = {
  render: () => <OwnerNameFieldWithHook />,
};
