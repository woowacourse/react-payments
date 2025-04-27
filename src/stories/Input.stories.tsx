import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input from "../components/common/inputField/input/Input";
import { validatorUtils } from "../utils/validationUtils";
import { userEvent, within, expect, waitFor } from "@storybook/test";
import styles from "../components/common/inputField/input/Input.module.css";

function onChangeHandler(
  e: React.ChangeEvent<HTMLInputElement>,
  setIsValid: (state: boolean) => void
) {
  const numberString = e.target.value;
  if (!validatorUtils.isNumber(numberString)) {
    setIsValid(false);
    return;
  }
  setIsValid(true);
}

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isValid, setIsValid] = useState(true);

    return (
      <Input
        type="text"
        placeholder="숫자를 입력하세요"
        maxLength={3}
        onChange={(e) => onChangeHandler(e, setIsValid)}
        isValid={isValid}
      />
    );
  },
};

export const ErrorInput: Story = {
  render: () => {
    const [isValid, setIsValid] = useState(true);

    return (
      <Input
        type="text"
        placeholder="숫자를 입력하세요"
        maxLength={3}
        onChange={(e) => onChangeHandler(e, setIsValid)}
        isValid={isValid}
      />
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText("숫자를 입력하세요");

    await userEvent.type(input, "abc");
    expect(input.className).toContain(styles.isNotValid);

    await userEvent.clear(input);
    await userEvent.type(input, "123");
    await waitFor(() => {
      expect(input.className).not.toContain(styles.isNotValid);
    });
  },
};
