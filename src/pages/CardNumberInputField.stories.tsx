import { Meta, StoryObj } from "@storybook/react";
import CardNumberInputField from "./CardNumberInputField";
import useInput from "@/hooks/useInput";

const meta = {
  title: "CardNumberInputField",
  component: CardNumberInputField,
} satisfies Meta<typeof CardNumberInputField>;

export default meta;

type Story = StoryObj<typeof CardNumberInputField>;

const CardNumberInputFieldWithHook = () => {
  const reduceds = Array.from({ length: 4 }).map(() => useInput(""));
  return <CardNumberInputField reduceds={reduceds} />;
};

export const Default: Story = {
  render: () => <CardNumberInputFieldWithHook />,
};
