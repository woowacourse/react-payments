import { Meta } from "@storybook/react";
import { ChangeEvent, KeyboardEvent } from "react";
import PasswordInput from "pages/RegisterPage/FormInputs/PasswordInput";
import { VALID_INPUT } from "constants/limit";
import { DIRECTION } from "constants/inputDirection";
import CardInfoProvider from "components/provider/CardInfoProvider";
const { ONLY_NUMBER } = VALID_INPUT;
const { NEXT, PREV } = DIRECTION;

const meta = {
  component: PasswordInput,
  title: "Input/Password",
} satisfies Meta<typeof PasswordInput>;

export default meta;

export const Password = () => {
  const handleFocusNext = ({ target }: ChangeEvent<HTMLFormElement>) => {
    if (shouldPreventFocusMovement(target)) return;

    focusFormInput(target.form, target, NEXT);
  };

  const shouldPreventFocusMovement = (
    target: EventTarget & HTMLFormElement
  ) => {
    const { value, maxLength } = target;

    const validValue = value.replace(ONLY_NUMBER, "");

    return validValue.length !== maxLength;
  };

  const focusFormInput = (
    form: HTMLFormElement,
    currentInput: EventTarget,
    direction: number
  ) => {
    const formControlList = [...form];

    if (!(currentInput instanceof HTMLInputElement)) return;

    const currentInputIndex = formControlList.indexOf(currentInput);
    const nextInput = formControlList[currentInputIndex + direction];

    if (!nextInput || !(nextInput instanceof HTMLInputElement)) return;

    nextInput.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLFormElement>) => {
    const { key, target, currentTarget: form } = event;

    if (!(target instanceof HTMLInputElement)) return;
    if (key !== "Backspace" || target.value !== "") return;

    focusFormInput(form, target, PREV);
  };

  return (
    <CardInfoProvider>
      <form onChange={handleFocusNext} onKeyDown={handleKeyDown}>
        <PasswordInput />
      </form>
    </CardInfoProvider>
  );
};
