export const moveFormInputFocus = (
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