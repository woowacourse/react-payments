import { KeyboardEvent, RefObject } from 'react';
import { DISMISS_TAB_INDEX } from '../constant';
import { isNumber, isOnlyKoreanAndEnglish } from '../utils';

const numberType = 'numeric';
const textType = 'text';

export const useFocusInput = (formRef: RefObject<HTMLFormElement>) => {
  const onInputKeydown = (event: KeyboardEvent<HTMLFormElement>) => {
    const active = document.activeElement as HTMLInputElement;
    if (!active) return;
    const curMaxLength = active.getAttribute('maxLength');
    const curInputKind = active.getAttribute('inputmode');

    const curInputLength = active.value.length;

    const isValueMaxLength = curInputLength + 1 >= Number(curMaxLength);

    const isNumberRequirement =
      curInputKind === numberType && isNumber(event.key);
    const isTextRequirement =
      curInputKind === textType && isOnlyKoreanAndEnglish(event.key);

    if (!isValueMaxLength) return;

    if (isNumberRequirement || isTextRequirement) {
      setNextInput(event);
    }
  };

  const setNextInput = (event: KeyboardEvent<HTMLFormElement>) => {
    if (!formRef.current) return;
    const form = event.currentTarget;
    const currentInputIndex = Array.prototype.indexOf.call(form, event.target);
    const totalLength = formRef.current.length;

    for (let index = currentInputIndex + 1; index < totalLength; index += 1) {
      const currentInput = formRef.current[index] as HTMLInputElement;

      if (currentInput.tabIndex === DISMISS_TAB_INDEX) {
        continue;
      }

      setTimeout(() => {
        currentInput.focus();
      });
      break;
    }
  };

  return { onInputKeydown };
};
