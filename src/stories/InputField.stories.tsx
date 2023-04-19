import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../components/CardNumberInput";
import CvcInput from "../components/CvcInput";
import ExpiracyInput from "../components/ExpiracyInput";
import InputField from "../components/InputField";
import OwnerInput from "../components/OwnerInput";
import PasswordInput from "../components/PasswordInput";

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

export const Cvc: Story = {
  args: {
    kind: "cvc",
    children: <CvcInput />,
  },
};

export const Password: Story = {
  args: {
    kind: "password",
    children: <PasswordInput />,
  },
};
