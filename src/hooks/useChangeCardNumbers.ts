import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import Validation from '../utils/Validation';
import { CARD_NUMBER } from '../constants/conditions';
import { cardNumbersType, cardNumbersValidType, cardNumbersValidStatesType } from '../types/cardNumbers';

export default function useChangeCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<cardNumbersType>(['', '', '', '']);
  const [cardNumbersValid, setCardNumbersValid] = useState<cardNumbersValidType>({
    validStates: [true, true, true, true],
    errorMessage: '',
  });

  const handleChangeCardNumbers = (inputIndex: number, value: string) => {
    const cardNumberValidationResult = validateCardNumber(value);

    const newCardNumbersValidStates = cardNumbersValid.validStates.map((prevState, index) =>
      index === inputIndex ? cardNumberValidationResult : prevState,
    ) as cardNumbersValidStatesType;

    const isAllInputsValid = newCardNumbersValidStates.every((isValid) => isValid === true);
    const newErrorMessage = isAllInputsValid ? '' : ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH;

    setCardNumbersValid(() => {
      return { validStates: newCardNumbersValidStates, errorMessage: newErrorMessage };
    });

    setCardNumbers((prev) => {
      const newCardNumbers = [...prev];
      newCardNumbers[inputIndex] = value;
      return newCardNumbers as cardNumbersType;
    });
  };

  return { cardNumbers, cardNumbersValid, handleChangeCardNumbers };
}

function validateCardNumber(number: string) {
  return Validation.isNumeric(number) && Validation.hasLength(number, CARD_NUMBER.MAX_LENGTH);
}
