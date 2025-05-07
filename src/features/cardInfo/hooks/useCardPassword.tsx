import { useState } from 'react';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { ErrorKey, NO_ERROR } from '../../../entities/cardInfo/constants/cardErrorConstants';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { UseCardInfosProps } from './types';

export function useCardPassword({
  sectionState,
  sectionNavigation,
  errorState,
}: UseCardInfosProps) {
  const [cardPassword, setCardPassword] = useState<string>('');

  const updateCardPassword = (value: string) => {
    setCardPassword(value);
  };

  const validatePassword = (password: string): boolean => {
    const configItem = cardInfoSectionConfig.find((item) => item.id === CardInfoType.PASSWORD);
    if (!configItem || !configItem.validator) return false;

    const [errorIndex, errorMessage] = configItem.validator(password);
    errorState.setError(
      ErrorKey.CARD_PASSWORD,
      errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
    );
    return errorIndex === -1;
  };

  const isPasswordComplete = (password: string): boolean => {
    return password.length === CARD_INFO_VALID_RULE[CardInfoType.PASSWORD].MAX_LENGTH;
  };

  const changeCardPassword = (value: string) => {
    updateCardPassword(value);

    const isValid = validatePassword(value);

    if (isValid && isPasswordComplete(value)) {
      sectionNavigation.completeSection(CardInfoType.PASSWORD);
    } else if (!isValid) {
      sectionState.setCompleted(false);
    }
  };

  return {
    cardPassword,
    changeCardPassword,
  };
}
