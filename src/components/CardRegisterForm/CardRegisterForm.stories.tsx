import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterForm from "./CardRegisterForm";
import useInputs from "@/hooks/useInputs";
import useInput from "@/hooks/useInput";
import {
  CardNumberInputType,
  ExpirationPeriodInputType,
} from "@/pages/CardRegisterPage/CardRegisterPage";

const CardRegisterFormWithHook = () => {
  const cardNumbersState = useInputs<CardNumberInputType>({
    cardNumbers1: "",
    cardNumbers2: "",
    cardNumbers3: "",
    cardNumbers4: "",
  });

  const expiredDateState = useInputs<ExpirationPeriodInputType>({
    expirationMonth: "",
    expirationYear: "",
  });

  const ownerNameState = useInput("");

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
