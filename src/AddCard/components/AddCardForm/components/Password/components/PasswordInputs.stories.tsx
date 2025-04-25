import type { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent } from "@storybook/test";
import PasswordInputs from "./PasswordInputs";
import useControlledPassword from "../hooks/useControlledPassword";

const meta = {
  title: "Component/AddCard/PasswordsInput",
  component: PasswordInputs,
  tags: ["autodocs"],
  args: {
    passwordState: { errorMessage: "", value: "" },
    handlePasswordChange: () => {},
  },
} satisfies Meta<typeof PasswordInputs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    passwordState: {
      value: "0",
      errorMessage: "패스워드는 2자리의 숫자만 입력 가능합니다.",
    },
  },
};

export const WithValidationTest: Story = {
  render: () => {
    const { passwordState, handlePasswordChange } = useControlledPassword();

    return (
      <PasswordInputs
        passwordState={passwordState}
        handlePasswordChange={handlePasswordChange}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const inputElement = canvasElement.querySelector(
      "#password-input"
    ) as HTMLInputElement;

    await userEvent.type(inputElement, "aaa");
    expect(inputElement.value).toBe("");

    const errorMessageEl = canvasElement.querySelector(
      "#error-message"
    ) as HTMLParagraphElement;

    expect(errorMessageEl.textContent).toBe("숫자만 입력 가능합니다.");
    await userEvent.type(inputElement, "1");
    expect(inputElement.value).toBe("1");
    expect(errorMessageEl.textContent).toBe(
      "비밀번호는 앞 2자리의 숫자만 입력 가능합니다."
    );
  },
};
