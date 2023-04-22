import { KeyboardEvent, RefObject } from 'react';
import { DISMISS_TAB_INDEX } from '../constant';

export const useFocusInput = (formRef: RefObject<HTMLFormElement>) => {
  const onInputKeydown = (event: KeyboardEvent<HTMLFormElement>) => {
    const active = document.activeElement as HTMLInputElement;
    if (!active) return;
    const curInputLength = active.value.length;

    if (curInputLength > 0 && event.key === 'Enter') {
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

      currentInput.focus();
      break;
    }
  };

  return { onInputKeydown };
};
