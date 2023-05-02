import { useState } from 'react';
import { isValidCardNumber } from '../../cardInputValidator';
import { isNumeric } from '../../utils/validator';
import { isEmptyInput, isFirst, isFullInput, isLast } from '../../utils';
import { CARD_NUMBER_INPUT_SIZE, ERROR, PASSWORD_START_INDEX } from '../../constants';
import { CardNumber } from '../../types';

interface Props {
  cardNumber: CardNumber;
  allRef: React.RefObject<HTMLInputElement>[];
  setCardNumber: (input: CardNumber) => void;
  moveFocusToExpirationDate?: () => void;
}

export const useCardNumberInput = ({
  cardNumber,
  allRef,
  setCardNumber,
  moveFocusToExpirationDate,
}: Props) => {
  const [isFullInputs, setIsFullInputs] = useState([false, false, false]);
  const [cardNumberError, setCardNumberError] = useState('');

  const isPasswordInput = (index: number) => index >= PASSWORD_START_INDEX;

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(cardNumber[index]) && !isFirst(index)) {
      e.preventDefault();
      setIsFullInputs((prev) => [...prev.slice(1), false]);
      allRef.at(index - 1)?.current?.focus();
    }
  };

  const handleCardNumberInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = e.target.value;
    setCardNumber(newCardNumber);

    if (!isNumeric(e.target.value)) {
      setCardNumberError(ERROR.IS_NOT_NUMBER);
      return;
    }
    setCardNumberError('');

    if (isFullInput(e.target.value, CARD_NUMBER_INPUT_SIZE)) {
      setIsFullInputs((prev) => [true, ...prev.slice(0, -1)]);

      if (!isLast(index, CARD_NUMBER_INPUT_SIZE)) allRef.at(index + 1)?.current?.focus();
      if (isLast(index, CARD_NUMBER_INPUT_SIZE) && moveFocusToExpirationDate) {
        moveFocusToExpirationDate();
      }
    }
  };

  const updateCardNumberError = (e: React.FocusEvent<HTMLElement>) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    if (!(e.target instanceof HTMLInputElement)) return;

    const inputs = [...cardNumber.slice(0, -1), e.target.value];

    if (!isValidCardNumber(inputs)) {
      setCardNumberError(ERROR.INVALID_CARD_NUMBER);
      return;
    }

    setCardNumberError('');
  };

  return {
    isFullInputs,
    cardNumberError,
    updateCardNumberError,
    isPasswordInput,
    handleCardNumberInputChange,
    handleBackspacePress,
  };
};
