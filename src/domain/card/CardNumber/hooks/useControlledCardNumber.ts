import { useCallback, useMemo, useRef, useState } from 'react';
import { CardNumberType, HandleInputChangeProps, SequenceType } from '../types';
import { ERROR_MESSAGE, ONLY_NUMBER_PATTERN } from '../../../../constants';
import { CARD_NUMBER_ERROR_MESSAGE, CARD_NUMBER_MAX_LENGTH } from '../constants';
import { validateErrorMessages } from '../../../../utils';

export const useControlledCardNumber = () => {
  const [cardNumber, setCardNumber] = useState<CardNumberType>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });
  const [cardNumberErrorMessage, setCardNumberErrorMessage] = useState<CardNumberType>({
    first: '',
    second: '',
    third: '',
    fourth: '',
  });

  const cardNumberRefs = useRef<{ [key in SequenceType]: HTMLInputElement | null }>({
    first: null,
    second: null,
    third: null,
    fourth: null,
  });

  const getErrorMessage = (value: string) => {
    if (!ONLY_NUMBER_PATTERN.test(value)) {
      return ERROR_MESSAGE.onlyNumber;
    }

    if (value.length < CARD_NUMBER_MAX_LENGTH) {
      return CARD_NUMBER_ERROR_MESSAGE.minLength;
    }

    return '';
  };

  const handleInputFocus = useCallback((index: number) => {
    const nextSequence = Object.keys(cardNumberRefs.current)[index + 1] as SequenceType;
    cardNumberRefs.current[nextSequence]?.focus();
  }, []);

  const handleCardNumberInputChange = useCallback(({ index, value, sequence }: HandleInputChangeProps) => {
    const errorMessage = getErrorMessage(value);
    setCardNumber((prev) => ({ ...prev, [sequence]: value }));
    setCardNumberErrorMessage((prev) => ({ ...prev, [sequence]: errorMessage }));
    if (errorMessage === '') handleInputFocus(index);
  }, []);

  const isCardNumberNextStep = useMemo(() => {
    const isCardNumberFill = Object.values(cardNumber).every((number) => number.length === CARD_NUMBER_MAX_LENGTH);
    const isValid = validateErrorMessages<SequenceType, CardNumberType>(cardNumberErrorMessage);

    return isCardNumberFill && isValid;
  }, [cardNumber, cardNumberErrorMessage]);

  return { cardNumber, cardNumberErrorMessage, isCardNumberNextStep, cardNumberRefs, handleCardNumberInputChange };
};
