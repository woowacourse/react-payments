import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterForm from "./CardRegisterForm";
import useInputs from "@/hooks/useInputs";
import useInput from "@/hooks/useInput";

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

  const ownerNameState = useInput("");
  const CVCNumbersState = useInput("");
  const passwordState = useInput("");
  const cardTypeState = useInput("");

  return (
    <CardRegisterForm
      cardNumbersState={cardNumbersState}
      expiredPeriodState={expiredDateState}
      ownerNameState={ownerNameState}
      CVCNumbersState={CVCNumbersState}
      passwordState={passwordState}
      cardTypeState={cardTypeState}
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
