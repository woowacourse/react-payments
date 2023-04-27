import { KeyboardEvent, RefObject } from 'react';
import { isNumber, isOnlyKoreanAndEnglish } from '../utils';
import { TAB_INDEX_INFO } from '../constant';

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
      setNextInput();
    }
  };

  const setNextInput = () => {
    if (!formRef.current) return;
    const form = formRef.current;
    const active = document.activeElement as HTMLInputElement;
    const currentInputIndex = Array.prototype.indexOf.call(form, active);

    const totalLength = formRef.current.length;

    for (let index = currentInputIndex + 1; index < totalLength; index += 1) {
      const currentInput = formRef.current[index] as HTMLInputElement;

      const { maxLength, value, tabIndex } = currentInput;

      if (tabIndex === TAB_INDEX_INFO.dismiss) {
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

  return { onInputKeydown, setNextInput };
};
