import type { ChangeEvent, MutableRefObject } from 'react';
import { CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH } from '../../constants/input';
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
      if (cardNumberRef.current.length > 10) {
        cardNumberRef.current = cardNumberRef.current.slice(
          0,
          CARD_NUMBER_INPUT_MAX_VISIBLE_LENGTH - 1
        );
      } else {
        const modifiedValue =
          cardNumberRef.current.slice(0, target.selectionStart) +
          cardNumberRef.current.slice(target.selectionStart + 1);

        cardNumberRef.current = formatDisplayedCardNumber(modifiedValue);
      }

      target.value = encryptDisplayedCardNumber(cardNumberRef.current);
    }
  };

  return { handleInputValueChange };
};

export { useCardNumber };
