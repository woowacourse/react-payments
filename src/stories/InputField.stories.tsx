import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../components/CardNumberInput";
import ExpiracyInput from "../components/ExpiracyInput";
import InputField from "../components/InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "InputField",
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const CardNumber: Story = {
  args: {
    kind: "cardNumber",
    children: <CardNumberInput />,
  },
};

export const Expiracy: Story = {
  args: {
    kind: "expiracy",
    children: <ExpiracyInput />,
  },
};
