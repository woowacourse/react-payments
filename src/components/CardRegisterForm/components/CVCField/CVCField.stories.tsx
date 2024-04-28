import type { Meta, StoryObj } from "@storybook/react";
import CVCField from "./CVCField";
import useInput from "@/hooks/useInput";
import { validateIsNumber, validateIsValidLength } from "@/utils/validation";
import { VALID_LENGTH } from "@/constants/condition";
import { useState } from "react";

const meta = {
  title: "CardRegisterForm/CVCField",
  component: CVCField,
} satisfies Meta<typeof CVCField>;

export default meta;

const CVCFieldWithHook = () => {
  const CVCNumbersState = useInput<string>({
    initialValue: "",
    validates: [
      (value: string) => validateIsValidLength(value, VALID_LENGTH.CVC_NUMBERS),
      (value: string) => validateIsNumber(value),
    ],
  });
  const [, setIsFront] = useState<boolean>(true);

  return <CVCField CVCNumbersState={CVCNumbersState} setIsFront={setIsFront} />;
};

type Story = StoryObj<typeof CVCField>;

export const Default: Story = {
  render: () => <CVCFieldWithHook />,
};
