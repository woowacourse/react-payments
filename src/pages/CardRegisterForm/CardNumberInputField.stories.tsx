import { Meta, StoryObj } from "@storybook/react";
import CardNumberInputField from "./CardNumberInputField";
import useInput from "@/hooks/useInput";
import { INPUT_COUNTS } from "@/constants/condition";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
} satisfies Meta<typeof CardNumberInputField>;

export default meta;

type Story = StoryObj<typeof CardNumberInputField>;

const CardNumberInputFieldWithHook = () => {
  const reduceds = Array.from({ length: INPUT_COUNTS.CARD_NUMBERS }).map(() =>
    useInput("")
  );
  return <CardNumberInputField reduceds={reduceds} />;
};

export const Default: Story = {
  render: () => <CardNumberInputFieldWithHook />,
};
