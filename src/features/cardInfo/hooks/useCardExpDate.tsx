import { useState } from 'react';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { ErrorKey, NO_ERROR } from '../../../entities/cardInfo/constants/cardErrorConstants';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { UseCardInfosProps } from './types';
import { ExpDateType } from '../../../entities/cardInfo/types/CardInfo';

export function useCardExpDate({ sectionState, sectionNavigation, errorState }: UseCardInfosProps) {
  const [cardExpirationDate, setCardExpirationDate] = useState<ExpDateType>({
    month: '',
    year: '',
  });

  const updateCardExpDate = (key: 'month' | 'year', value: string) => {
    setCardExpirationDate((prev) => ({ ...prev, [key]: value }));
  };

  const validateExpDate = (expirationDate: ExpDateType): boolean => {
    const configItem = cardInfoSectionConfig.find((item) => item.id === CardInfoType.EXPDATE);
    if (!configItem || !configItem.validator) return false;

    const [errorIndex, errorMessage] = configItem.validator(expirationDate);
    errorState.setError(
      ErrorKey.CARD_EXPIRATION_DATE,
      errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
    );
    return errorIndex === -1;
  };

  const isExpDateComplete = (expirationDate: ExpDateType): boolean => {
    return (
      expirationDate.month.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH &&
      expirationDate.year.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH
    );
  };

  const changeCardExpDate = (key: 'month' | 'year', value: string) => {
    updateCardExpDate(key, value);

    const updatedDate = {
      ...cardExpirationDate,
      [key]: value,
    };

    const isValid = validateExpDate(updatedDate);

    if (isValid && isExpDateComplete(updatedDate)) {
      sectionNavigation.completeSection(CardInfoType.EXPDATE);
    } else if (!isValid) {
      sectionState.setCompleted(false);
    }
  };

  return {
    cardExpirationDate,
    changeCardExpDate,
  };
}
