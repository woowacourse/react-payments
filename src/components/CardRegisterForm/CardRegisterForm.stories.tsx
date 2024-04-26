import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterForm from "./CardRegisterForm";
import useInputs from "@/hooks/useInputs";
import useInput from "@/hooks/useInput";
import { CardType } from "@/constants/cardType";

const CardRegisterFormWithHook = () => {
  const cardNumbersState = useInputs({
    initialValue: {
      cardNumbers1: "",
      cardNumbers2: "",
      cardNumbers3: "",
      cardNumbers4: "",
    },
    validates: [],
  });

  const expiredDateState = useInputs({
    initialValue: {
      expirationMonth: "",
      expirationYear: "",
    },
    validates: [],
  });

  const ownerNameState = useInput({ initialValue: "", validates: [] });
  const CVCNumbersState = useInput({ initialValue: "", validates: [] });
  const passwordState = useInput({ initialValue: "", validates: [] });
  const cardTypeState = useInput<CardType | null>({
    initialValue: null,
    validates: [],
  });

  const step = 1;
  const setStep = () => {};

  return (
    <CardRegisterForm
      cardNumbersState={cardNumbersState}
      expirationPeriodState={expiredDateState}
      ownerNameState={ownerNameState}
      CVCNumbersState={CVCNumbersState}
      passwordState={passwordState}
      cardTypeState={cardTypeState}
      step={step}
      setStep={setStep}
      stepPassedArr={[]}
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
