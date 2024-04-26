import type { Meta, StoryObj } from "@storybook/react";
import CardNumbersField, { CardNumberInputType } from "./CardNumbersField";
import useInputs from "@/hooks/useInputs";
import { validateIsNumber, validateIsValidLength } from "@/utils/validation";
import { VALID_LENGTH } from "@/constants/condition";

const meta = {
  title: "CardNumbersField",
  component: CardNumbersField,
} satisfies Meta<typeof CardNumbersField>;

export default meta;

const CardNumbersStateWithHook = () => {
  const cardNumbersState = useInputs<CardNumberInputType>({
    initialValue: {
      cardNumbers1: "",
      cardNumbers2: "",
      cardNumbers3: "",
      cardNumbers4: "",
    },
    validates: [
      (value: string) =>
        validateIsValidLength(value, VALID_LENGTH.CARD_NUMBERS),
      (value: string) => validateIsNumber(value),
    ],
  });
  return <CardNumbersField cardNumbersState={cardNumbersState} />;
};

type Story = StoryObj<typeof CardNumbersField>;

export const Default: Story = {
  render: () => <CardNumbersStateWithHook />,
};
