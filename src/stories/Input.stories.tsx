import { Meta, StoryObj } from "@storybook/react";

import Input from "../components/common/Input";
import { REGEX_PATTERN } from "../constant";
import { ERROR_MESSAGE } from "../constant";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UseInputProps, useInput } from "../hooks/useInput";

const meta: Meta<typeof Input> = {
  component: Input,
  title: "Input",
};

export default meta;
type Story = StoryObj<typeof Input>;

const showError = ({ target }: React.FocusEvent<HTMLInputElement>) => {
  if (target.validity.patternMismatch) {
    target.setCustomValidity(ERROR_MESSAGE[target.name]);
    target.reportValidity();
  }
  if (target.validity.tooLong) {
    target.setCustomValidity(ERROR_MESSAGE["LONG_INPUT"]);
    target.reportValidity();
  }
};

export const CommonInput: Story = {
  args: {
    type: "text",
    textAlign: undefined,
    isNumber: false,
    shape: undefined,
    maxLength: 4,
    required: false,
    pattern: undefined,
    showError: undefined,
  },
};

CommonInput.argTypes = {
  type: {
    options: ["text", "number", "password"],
    control: { type: "select" },
  },
  textAlign: {
    options: ["undefined", "center"],
    control: { type: "select" },
  },
  isNumber: {
    options: [true, false],
    control: { type: "select" },
  },
  shape: {
    options: [undefined, "underline"],
    control: { type: "select" },
  },
  maxLength: {
    control: { type: "number" },
  },
  required: {
    options: [true, false],
    control: { type: "select" },
  },
  pattern: {
    options: [...Object.keys(REGEX_PATTERN)],
    control: { type: "select" },
  },
  showError: {
    options: [showError],
    control: { type: "function" },
  },
};

export const FirstCardNumberInput: Story = (args: UseInputProps) => {
  const { ...rest } = args;
  const firstCardNumber = useInput("", { name: "firstCardNumber" });
  return <Input {...rest} {...firstCardNumber} />;
};

FirstCardNumberInput.args = {
  autoFocus: true,
  isNumber: true,
  maxLength: 4,
  type: "text",
  pattern: REGEX_PATTERN["CARD_NUMBER"],
  required: true,
  textAlign: "center",
  autoComplete: "off",
};

export const FirstCardNumberInputWithErrorMessage: Story = (
  args: UseInputProps
) => {
  const { ...rest } = args;
  const firstCardNumber = useInput("", { name: "firstCardNumber" });
  return <Input {...rest} {...firstCardNumber} />;
};

FirstCardNumberInputWithErrorMessage.args = FirstCardNumberInput.args;

FirstCardNumberInputWithErrorMessage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "143a", {
    delay: 500,
  });
  input.blur();
};

export const FirstCardNumberInputSuccess: Story = (args: UseInputProps) => {
  const { ...rest } = args;
  const firstCardNumber = useInput("", { name: "firstCardNumber" });
  return <Input {...rest} {...firstCardNumber} />;
};

FirstCardNumberInputSuccess.args = FirstCardNumberInput.args;

FirstCardNumberInputSuccess.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "1432", {
    delay: 500,
  });
  input.blur();
};

export const OwnerInput: Story = (args: UseInputProps) => {
  const { ...rest } = args;
  const owner = useInput("", { name: "owner" });
  return <Input {...rest} {...owner} />;
};

OwnerInput.args = {
  type: "text",
  isNumber: false,
  shape: undefined,
  maxLength: 30,
  required: false,
  pattern: REGEX_PATTERN["OWNER"],
};

export const OwnerInputWithErrorMessage: Story = (args: UseInputProps) => {
  const { ...rest } = args;
  const owner = useInput("", { name: "owner" });
  return <Input {...rest} {...owner} />;
};

OwnerInputWithErrorMessage.args = OwnerInput.args;

OwnerInputWithErrorMessage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "E4YK", {
    delay: 500,
  });
  input.blur();
};

export const OwnerInputSuccess: Story = (args: UseInputProps) => {
  const { ...rest } = args;
  const owner = useInput("", { name: "owner" });
  return <Input {...rest} {...owner} />;
};

OwnerInputSuccess.args = OwnerInput.args;

OwnerInputSuccess.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "EYK", {
    delay: 500,
  });
  input.blur();
};

export const MonthInput: Story = (args: UseInputProps) => {
  const { ...rest } = args;
  const expirationDate = useInput("", { name: "month" });
  return <Input {...rest} {...expirationDate} />;
};

MonthInput.args = {
  type: "text",
  isNumber: true,
  shape: undefined,
  maxLength: 2,
  required: false,
  pattern: REGEX_PATTERN["MONTH"],
};

export const MonthInputWithErrorMessage: Story = (args: UseInputProps) => {
  const { ...rest } = args;
  const month = useInput("", { name: "month" });
  return <Input {...rest} {...month} />;
};

MonthInputWithErrorMessage.args = MonthInput.args;

MonthInputWithErrorMessage.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "13", {
    delay: 500,
  });
  input.blur();
};
