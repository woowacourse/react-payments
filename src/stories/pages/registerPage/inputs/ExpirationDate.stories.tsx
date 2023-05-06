import { Meta } from "@storybook/react";
import { ChangeEvent, KeyboardEvent } from "react";
import ExpirationDateInput from "pages/RegisterPage/FormInputs/ExpirationDateInput";
import CardInfoProvider from "components/provider/CardInfoProvider";
import useInitCardInfo from "hooks/useInitCardInfo";
import { isInvalidDate } from "validation";
import { VALID_INPUT } from "constants/limit";
import { DIRECTION } from "constants/inputDirection";
const { ONLY_NUMBER } = VALID_INPUT;
const { NEXT, PREV } = DIRECTION;

const meta = {
  component: ExpirationDateInput,
  title: "Input/ExpirationDate",
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

export const ExpirationDate = () => {
  const { month, year } = useInitCardInfo().cardInfo;
  const date = { month, year };

  const handleFocusNext = ({ target }: ChangeEvent<HTMLFormElement>) => {
    if (shouldPreventFocusMovement(target)) return;

    focusFormInput(target.form, target, NEXT);
  };

  const shouldPreventFocusMovement = (
    target: EventTarget & HTMLFormElement
  ) => {
    const { name, value, maxLength } = target;

    const isValidDate = isInvalidDate(target, date);
    if ((name === "month" || name === "year") && isValidDate) return true;

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
        <ExpirationDateInput />
      </form>
    </CardInfoProvider>
  );
};
