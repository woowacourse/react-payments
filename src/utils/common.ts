import { TAB_INDEX_INFO } from '@constants/constant';

export const createUniqueId = () => 'id' + Math.random().toString(16).slice(2);

export const setNextInputFocus = (form: HTMLFormElement | null) => {
  if (!form) return;

  const active = document.activeElement as HTMLInputElement;
  const currentInputIndex = Array.prototype.indexOf.call(form, active);

  const totalLength = form.length;

  for (let index = currentInputIndex + 1; index < totalLength; index += 1) {
    const currentInput = form[index] as HTMLInputElement;

    const { maxLength, value, tabIndex } = currentInput;

    if (tabIndex === TAB_INDEX_INFO.DISMISS) {
      continue;
    }
    if (maxLength === value.length) {
      continue;
    }
    setTimeout(() => {
      currentInput.focus();
    });
    break;
  }
};
