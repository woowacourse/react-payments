import { useState } from 'react';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { ErrorKey, NO_ERROR } from '../../../entities/cardInfo/constants/cardErrorConstants';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { UseCardInfosProps } from './types';

export function useCardCVC({ sectionState, sectionNavigation, errorState }: UseCardInfosProps) {
  const [cardCVC, setCardCVC] = useState<string>('');

  const updateCardCVC = (value: string) => {
    setCardCVC(value);
  };

  const validateCVC = (cvc: string): boolean => {
    const configItem = cardInfoSectionConfig.find((item) => item.id === CardInfoType.CVC);
    if (!configItem || !configItem.validator) return false;

    const [errorIndex, errorMessage] = configItem.validator(cvc);
    errorState.setError(
      ErrorKey.CARD_CVC,
      errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
    );
    return errorIndex === -1;
  };

  const isCVCComplete = (cvc: string): boolean => {
    return cvc.length === CARD_INFO_VALID_RULE[CardInfoType.CVC].MAX_LENGTH;
  };

  const changeCardCVC = (value: string) => {
    updateCardCVC(value);

    const isValid = validateCVC(value);

    if (isValid && isCVCComplete(value)) {
      sectionNavigation.completeSection(CardInfoType.CVC);
    } else if (!isValid) {
      sectionState.setCompleted(false);
    }
  };

  return {
    cardCVC,
    changeCardCVC,
  };
}
