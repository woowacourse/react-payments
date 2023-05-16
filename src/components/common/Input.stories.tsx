import { Meta } from "@storybook/react";

import Input from "./Input";
import { REGEX_PATTERN } from "../../constant";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useInput } from "../../hooks/useInput";
import { Story } from "../../stories/type";

export default {
  title: "Components/Input/FirsCardNumber",
  component: Input,
} as Meta;

type InputProps = {
  autoFocus?: boolean;
  isNumber?: boolean;
  maxLength?: number;
  type?: string;
  pattern?: string;
  required?: boolean;
  textAlign?: "left" | "center" | "right";
  autoComplete?: string;
  canvasElement?: HTMLElement;
};

const Template: Story<InputProps> = (args) => {
  const { ...rest } = args;
  const input = useInput("", { name: "firstCardNumber" });
  return <Input {...rest} {...input} />;
};

export const FirstCardNumberInput = Template.bind({});
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

export const FirstCardNumberInputWithErrorMessage = Template.bind({});
FirstCardNumberInputWithErrorMessage.args = {
  ...FirstCardNumberInput.args,
};
FirstCardNumberInputWithErrorMessage.play = async ({ canvasElement }) => {
  if (!canvasElement) return;
  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "143a", {
    delay: 500,
  });
  input.blur();
};

export const FirstCardNumberInputSuccess = Template.bind({});

FirstCardNumberInputSuccess.args = { ...FirstCardNumberInput.args };

FirstCardNumberInputSuccess.play = async ({ canvasElement }) => {
  if (!canvasElement) return;

  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "1432", {
    delay: 500,
  });
  input.blur();
};
