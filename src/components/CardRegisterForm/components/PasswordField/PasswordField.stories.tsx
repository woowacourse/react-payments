import type { Meta, StoryObj } from "@storybook/react";
import useInput from "@/hooks/useInput";
import { validateIsNumber, validateIsValidLength } from "@/utils/validation";
import { VALID_LENGTH } from "@/constants/condition";
import PasswordField from "./PasswordField";

const meta = {
  title: "CardRegisterForm/PasswordField",
  component: PasswordField,
} satisfies Meta<typeof PasswordField>;

export default meta;

const PasswordFiledWithHook = () => {
  const passwordState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.PASSWORD),
      (value: string) => validateIsNumber(value),
    ],
  });
  return <PasswordField passwordState={passwordState} />;
};

type Story = StoryObj<typeof PasswordField>;

export const Default: Story = {
  render: () => <PasswordFiledWithHook />,
};
