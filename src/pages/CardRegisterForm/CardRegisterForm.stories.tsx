import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterForm from "./CardRegisterForm";
import { INPUT_COUNTS } from "@/constants/condition";
import useInput from "@/hooks/useInput";

const CardRegisterFormWithHook = () => {
  const cardNumbersReduceds = Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }).map(() => useInput(""));
  const expirationDateReduceds = Array.from({ length: INPUT_COUNTS.EXPIRATION_DATE }).map(() => useInput(""));
  const ownerNameReduceds = Array.from({ length: INPUT_COUNTS.OWNER_NAME }).map(() => useInput(""));

  return (
    <CardRegisterForm
      cardNumbersReduceds={cardNumbersReduceds}
      expirationDateReduceds={expirationDateReduceds}
      ownerNameReduceds={ownerNameReduceds}
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
