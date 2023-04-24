import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../components/Input/CardNumberInput";
import CvcInput from "../components/Input/CvcInput";
import ExpiracyInput from "../components/Input/ExpiracyInput";
import InputField from "../components/common/InputField";
import OwnerInput from "../components/Input/OwnerInput";
import PasswordInput from "../components/Input/PasswordInput";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "InputField",
};

export default meta;
type Story = StoryObj<typeof InputField>;

const defaultState = {
  value: "",
  onChange: () => {},
  name: "",
  showError: () => {},
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
