import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, KeyboardEvent } from "react";
import CardNumberInput from "pages/RegisterPage/FormInputs/CardNumberInput";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "components/provider/ModalStateProvider";
import { VALID_INPUT } from "constants/limit";
import { DIRECTION } from "constants/inputDirection";
const { ONLY_NUMBER } = VALID_INPUT;
const { NEXT, PREV } = DIRECTION;

const handleFocusNext = ({ target }: ChangeEvent<HTMLFormElement>) => {
  if (shouldPreventFocusMovement(target)) return;

  focusFormInput(target.form, target, NEXT);
};

const shouldPreventFocusMovement = (target: EventTarget & HTMLFormElement) => {
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

const meta = {
  component: CardNumberInput,
  title: "Input/CardNumbers",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <ModalStateProvider>
          <form onChange={handleFocusNext} onKeyDown={handleKeyDown}>
            <Story />
          </form>
        </ModalStateProvider>
      </CardInfoProvider>
    ),
  ],
} satisfies Meta<typeof CardNumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardNumbers: Story = {
  args: {},
};
