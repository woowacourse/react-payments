import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterForm from "./CardRegisterForm";
import useInputs from "@/hooks/useInputs";
import { makeStringArray } from "../utils/arrayHelper";
import { INPUT_COUNTS } from "@/constants/condition";

import { expirationDateValidators, ownerNameValidators } from "../utils/validation";

const CardRegisterFormWithHook = () => {
  const cardNumbersState = useInputs({
    initialValue: makeStringArray(INPUT_COUNTS.CARD_NUMBERS),
    maxNumberLength: 4,
    validLength: 4,
  });

  const expiredDateState = useInputs({
    initialValue: makeStringArray(INPUT_COUNTS.EXPIRATION_DATE),
    maxNumberLength: 2,
    validLength: 2,
    onBlurValidators: expirationDateValidators,
  });

  const ownerNameState = useInputs({
    initialValue: makeStringArray(1),
    onChangeValidators: ownerNameValidators,
  });

  return (
    <CardRegisterForm
      cardNumbersState={cardNumbersState}
      expiredPeriodState={expiredDateState}
      ownerNameState={ownerNameState}
    />
  );
};

const meta = {
  title: "CardRegisterForm",
  component: CardRegisterForm,
} satisfies Meta<typeof CardRegisterForm>;

export default meta;

type Story = StoryObj<typeof CardRegisterForm>;

export const Default: Story = {
  render: () => <CardRegisterFormWithHook />,
};
