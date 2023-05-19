import type { KeyboardEvent } from 'react';
import { isElementOfType } from '../../utils/eventUtils';

const useInputBackwardFocus = () => {
  const handleBackspacePress = (event: KeyboardEvent<HTMLElement>) => {
    if (!isElementOfType<HTMLInputElement>(event)) return;

    const index = Number(event.target.dataset.index);

    if (index === 0) return;

    if (event.key === 'Backspace' && event.target.value === '') {
      (event.currentTarget.childNodes[index - 1] as HTMLInputElement).focus();
    }
  };

  return { handleBackspacePress };
};

export { useInputBackwardFocus };
