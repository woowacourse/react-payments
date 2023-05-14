import { Meta } from "@storybook/react";
import Input from "../common/Input";
import { useInput } from "../../hooks/useInput";
import { REGEX_PATTERN } from "../../constant";
import { within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Story } from "../../stories/type";
export default {
  title: "Components/Input/Owner",
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

const Template: Story<InputProps> = (args) => {
  const { ...rest } = args;
  const input = useInput("", { name: "owner" });
  return <Input {...rest} {...input} />;
};

export const OwnerInput = Template.bind({});
OwnerInput.args = {
  type: "text",
  isNumber: false,
  shape: undefined,
  maxLength: 30,
  required: false,
  pattern: REGEX_PATTERN["OWNER"],
};

export const OwnerInputWithErrorMessage = Template.bind({});

OwnerInputWithErrorMessage.args = OwnerInput.args;

OwnerInputWithErrorMessage.play = async ({ canvasElement }) => {
  if (!canvasElement) return;

  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "E4YK", {
    delay: 500,
  });
  input.blur();
};

export const OwnerInputSuccess = Template.bind({});

OwnerInputSuccess.args = { ...OwnerInput.args };

OwnerInputSuccess.play = async ({ canvasElement }) => {
  if (!canvasElement) return;

  const canvas = within(canvasElement);
  const input = canvas.getByRole("textbox") as HTMLInputElement;
  input.focus();
  await userEvent.type(input, "EYK", {
    delay: 500,
  });
  input.blur();
};
