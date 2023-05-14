import { Meta } from "@storybook/react";
import Input from "../common/Input";
import { useInput } from "../../hooks/useInput";
import { Story } from "../../stories/type";
import { REGEX_PATTERN } from "../../constant";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export default {
  title: "Components/Input/Year",
  component: Input,
} as Meta;

type InputProps = {
  shape?: string;
  isNumber: boolean;
  maxLength: number;
  type: string;
  pattern: string;
  required: boolean;
  canvasElement?: HTMLElement;
};

export const Template: Story<InputProps> = (args) => {
  const { ...rest } = args;
  const expirationDate = useInput("", { name: "month" });
  return <Input {...rest} {...expirationDate} />;
};

export const MonthInput = Template.bind({});

MonthInput.args = {
  type: "text",
  isNumber: true,
  shape: undefined,
  maxLength: 2,
  required: true,
  pattern: REGEX_PATTERN["YEAR"],
};

export const MonthInputWithErrorMessage = Template.bind({});

MonthInputWithErrorMessage.args = MonthInput.args;

MonthInputWithErrorMessage.play = async ({ canvasElement }) => {
  if (!canvasElement) return;

  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "19", {
    delay: 500,
  });
  input.blur();
};
