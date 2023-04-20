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

const defaultState = {
  value: "",
  onChange: () => {},
};

export const CardNumber: Story = {
  args: {
    kind: "cardNumber",
    children: (
      <CardNumberInput
        firstNumber={defaultState}
        secondNumber={defaultState}
        thirdNumber={defaultState}
        fourthNumber={defaultState}
      />
    ),
  },
};

export const Expiracy: Story = {
  args: {
    kind: "expiracy",
    children: <ExpiracyInput year={defaultState} month={defaultState} />,
  },
};

export const Owner: Story = {
  args: {
    kind: "owner",
    children: <OwnerInput owner={defaultState} />,
    inputLength: "0/30",
  },
};

export const Cvc: Story = {
  args: {
    kind: "cvc",
    children: <CvcInput cvc={defaultState} />,
  },
};

export const Password: Story = {
  args: {
    kind: "password",
    children: (
      <PasswordInput
        firstPassword={defaultState}
        secondPassword={defaultState}
      />
    ),
  },
};
