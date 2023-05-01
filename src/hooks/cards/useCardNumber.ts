import type { ChangeEvent, MutableRefObject } from 'react';
import {
  encryptDisplayedCardNumber,
  formatDisplayedCardNumber,
  formatNumber,
} from '../../utils/formatter';

const useCardNumber = () => {
  const handleInputValueChange = (
    { target, nativeEvent }: ChangeEvent<HTMLInputElement>,
    cardNumberRef: MutableRefObject<string>
  ) => {
    if (!(nativeEvent instanceof InputEvent) || target.selectionStart === null) {
      return;
    }

    if (
      nativeEvent.inputType === 'insertText' ||
      nativeEvent.inputType === 'insertCompositionText'
    ) {
      const newCardNumber = cardNumberRef.current + formatNumber(target.value.at(-1) || '');
      cardNumberRef.current = formatDisplayedCardNumber(newCardNumber);
      target.value = encryptDisplayedCardNumber(cardNumberRef.current);
    }

    if (nativeEvent.inputType === 'deleteContentBackward') {
      cardNumberRef.current = '';
      target.value = cardNumberRef.current;
    }
  };

  return { handleInputValueChange };
};

export { useCardNumber };
