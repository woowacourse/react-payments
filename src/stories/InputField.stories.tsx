import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../components/Input/CardNumberInput";
import CvcInput from "../components/Input/CvcInput";
import ExpirationInput from "../components/Input/ExpirationInput";
import InputField from "../components/common/InputField";
import OwnerInput from "../components/Input/OwnerInput";
import PasswordInput from "../components/Input/PasswordInput";
import { useInput } from "../hooks/useInput";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

export const Expiration: Story = {
  args: {
    kind: "expiration",
    children: <ExpirationInput year={defaultState} month={defaultState} />,
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

export const CvcErrorMessage: Story = () => {
  const cvc = useInput("", { name: "cvc" });
  return <InputField kind="cvc" children={<CvcInput cvc={cvc} />} />;
};

CvcErrorMessage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByLabelText("보안 코드(CVC/CVV)", {
    selector: 'input[type="password"]',
  });
  input.focus();
  await userEvent.type(input, "19a", {
    delay: 500,
  });
  input.blur();
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
