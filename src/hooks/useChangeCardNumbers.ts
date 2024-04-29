import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import Validation from '../utils/Validation';
import { CARD_NUMBER } from '../constants/conditions';
import { CardNumbersType, CardNumbersValidType, CardNumbersValidStatesType } from '../types/CardNumbersTypes';

export default function useChangeCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<CardNumbersType>(['', '', '', '']);
  const [cardNumbersValid, setCardNumbersValid] = useState<CardNumbersValidType>({
    validStates: [true, true, true, true],
    isCompleted: false,
    errorMessage: '',
  });

  const handleChangeCardNumbers = (inputIndex: number, value: string) => {
    const cardNumberValidationResult = validateCardNumber(value);

    const newCardNumbersValidStates = cardNumbersValid.validStates.map((prevState, index) =>
      index === inputIndex ? cardNumberValidationResult : prevState,
    ) as CardNumbersValidStatesType;

    const isAllInputsValid = newCardNumbersValidStates.every((isValid) => isValid === true);
    const newErrorMessage = isAllInputsValid ? '' : ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH;

    setCardNumbersValid(() => {
      const isCompleted =
        isAllInputsValid &&
        cardNumbers.map((prevNumber, index) => (index === inputIndex ? value : prevNumber)).join('').length ===
          CARD_NUMBER.TOTAL_LENGTH;
      return { validStates: newCardNumbersValidStates, isCompleted, errorMessage: newErrorMessage };
    });

    setCardNumbers((prev) => {
      const newCardNumbers = [...prev];
      newCardNumbers[inputIndex] = value;
      return newCardNumbers as CardNumbersType;
    });
  };

  return { cardNumbers, cardNumbersValid, handleChangeCardNumbers };
}

function validateCardNumber(number: string) {
  return Validation.isNumeric(number) && Validation.hasLength(number, CARD_NUMBER.MAX_LENGTH);
}
