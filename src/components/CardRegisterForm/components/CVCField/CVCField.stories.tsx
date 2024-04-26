import type { Meta, StoryObj } from "@storybook/react";
import CVCField from "./CVCField";
import useInput from "@/hooks/useInput";
import { validateIsNumber, validateIsValidLength } from "@/utils/validation";
import { VALID_LENGTH } from "@/constants/condition";

const meta = {
  title: "CVCField",
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

  return <CVCField CVCNumbersState={CVCNumbersState} />;
};

type Story = StoryObj<typeof CVCField>;

export const Default: Story = {
  render: () => <CVCFieldWithHook />,
};
