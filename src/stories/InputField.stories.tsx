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
export const CardNumberInteraction: Story = () => {
  const firstNumber = useInput("", { name: "firstNumber" });
  const secondNumber = useInput("", { name: "secondNumber" });
  const thirdNumber = useInput("", { name: "thirdNumber" });
  const fourthNumber = useInput("", { name: "fourthNumber" });
  return (
    <InputField
      kind="cardNumber"
      children={
        <CardNumberInput
          firstNumber={firstNumber}
          secondNumber={secondNumber}
          thirdNumber={thirdNumber}
          fourthNumber={fourthNumber}
        />
      }
    />
  );
};

CardNumberInteraction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByLabelText("카드 번호", {
    selector: 'input[type="text"]',
  });
  input.focus();
  await userEvent.type(input, "1234", {
    delay: 500,
  });
  input.blur();

  const input2 = canvas.getByLabelText("secondCardNumber");
  input2.focus();
  await userEvent.type(input2, "5678", {
    delay: 500,
  });

  const input3 = canvas.getByLabelText("thirdCardNumber");
  input3.focus();
  await userEvent.type(input3, "9012", {
    delay: 500,
  });

  const input4 = canvas.getByLabelText("fourthCardNumber");
  input4.focus();
  await userEvent.type(input4, "3456", {
    delay: 500,
  });
  input4.blur();
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
