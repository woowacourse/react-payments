import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../components/CardNumberInput";
import ExpiracyInput from "../components/ExpiracyInput";
import InputField from "../components/InputField";
import OwnerInput from "../components/OwnerInput";

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

export const Owner: Story = {
  args: {
    kind: "owner",
    children: <OwnerInput />,
    inputLength: "0/30",
  },
};
