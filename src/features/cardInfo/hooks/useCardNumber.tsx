import { useState } from 'react';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { ErrorKey, NO_ERROR } from '../../../entities/cardInfo/constants/cardErrorConstants';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { UseCardInfosProps } from './types';

export function useCardNumber({ sectionState, sectionNavigation, errorState }: UseCardInfosProps) {
  const [cardNumber, setCardNumber] = useState<string[]>(
    Array(CARD_INFO_VALID_RULE[CardInfoType.NUMBER].TOTAL_SECTIONS).fill(''),
  );

  const updateCardNumber = (index: number, value: string) => {
    setCardNumber((prev) => prev.map((num, i) => (i === index ? value : num)));
  };

  const validateCardNumber = (cardNumber: string[]): boolean => {
    const configItem = cardInfoSectionConfig.find((item) => item.id === CardInfoType.NUMBER);
    if (!configItem || !configItem.validator) return false;

    const [errorIndex, errorMessage] = configItem.validator(cardNumber);
    errorState.setError(
      ErrorKey.CARD_NUMBER,
      errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
    );
    return errorIndex === -1;
  };

  const isCardNumberComplete = (cardNumber: string[]): boolean => {
    return cardNumber.every(
      (num) => num.length === CARD_INFO_VALID_RULE[CardInfoType.NUMBER].MAX_LENGTH,
    );
  };

  const changeCardNumber = (index: number, value: string) => {
    updateCardNumber(index, value);

    const updatedNumbers = cardNumber.map((num, i) => (i === index ? value : num));
    const isValid = validateCardNumber(updatedNumbers);

    if (isValid && isCardNumberComplete(updatedNumbers)) {
      sectionNavigation.completeSection(CardInfoType.NUMBER);
    } else if (!isValid) {
      sectionState.setCompleted(false);
    }
  };

  return {
    cardNumber,
    changeCardNumber,
  };
}
