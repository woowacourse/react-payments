import { KeyboardEvent, RefObject } from 'react';
import { setNextInputFocus } from '../utils/common';
import { isNumber, isOnlyKoreanAndEnglish } from '../utils/validate';

const numberType = 'numeric';
const textType = 'text';

export const useFocusInput = (formRef: RefObject<HTMLFormElement>) => {
  const onInputKeydown = (event: KeyboardEvent<HTMLFormElement>) => {
    const active = document.activeElement as HTMLInputElement;

    if (!active) return;

    const curMaxLength = active.getAttribute('maxLength');
    const curInputKind = active.getAttribute('inputMode');

    const curInputLength = active.value.length;

    const isValueMaxLength = curInputLength + 1 >= Number(curMaxLength);

    const isNumberRequirement =
      curInputKind === numberType && isNumber(event.key);
    const isTextRequirement =
      curInputKind === textType && isOnlyKoreanAndEnglish(event.key);

    if (!isValueMaxLength) return;

    if (isNumberRequirement || isTextRequirement) {
      setNextInputFocus(formRef.current);
    }
  };

  return { onInputKeydown };
};
