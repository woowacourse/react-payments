import { useState } from 'react';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import CardInfo from '../../../entities/cardInfo/model/CardInfo';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { NO_ERROR, ErrorKey } from '../../../entities/cardInfo/constants/cardErrorConstants';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    [CardInfoType.NUMBER]: Array(CARD_INFO_VALID_RULE[CardInfoType.NUMBER].TOTAL_SECTIONS).fill(''),
    [CardInfoType.EXPDATE]: { month: '', year: '' },
    [CardInfoType.CVC]: '',
  });

  const [error, setError] = useState<InputValidationResultProps>({
    [ErrorKey.CARD_NUMBER]: NO_ERROR,
    [ErrorKey.CARD_EXPIRATION_DATE]: NO_ERROR,
    [ErrorKey.CARD_CVC]: NO_ERROR,
  });

  const [currentSection, setCurrentSection] = useState<CardInfoType>(CardInfoType.NUMBER);

  const [completedSections, setCompletedSections] = useState<Record<CardInfoType, boolean>>({
    [CardInfoType.NUMBER]: false,
    [CardInfoType.EXPDATE]: false,
    [CardInfoType.CVC]: false,
  });

  const handleCardNumberChange = (index: number, value: string) => {
    setCardInfo((prev) => {
      const updatedNumbers = prev.cardNumber.map((num, i) => (i === index ? value : num));
      validateCardNumber(updatedNumbers);
      return { ...prev, cardNumber: updatedNumbers };
    });
  };

  const handleExpDateChange = (key: 'month' | 'year', value: string) => {
    setCardInfo((prev) => {
      const updateDate = { ...prev.cardExpirationDate, [key]: value };
      validateExpDate(updateDate);
      return { ...prev, cardExpirationDate: updateDate };
    });
  };

  const handleCVCChange = (value: string) => {
    setCardInfo((prev) => {
      validateCVC(value);
      return { ...prev, cardCVC: value };
    });
  };

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith(CardInfoType.NUMBER)) {
      const index = Number(name[name.length - 1]);
      handleCardNumberChange(index, value);
      return;
    }

    if (name.startsWith(CardInfoType.EXPDATE)) {
      const key = name.split('-')[1] as 'month' | 'year';
      handleExpDateChange(key, value);
      return;
    }

    if (name.startsWith(CardInfoType.CVC)) {
      handleCVCChange(value);
      return;
    }

    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateCardNumber = (cardNumber: string[]) => {
    if (validateField(CardInfoType.NUMBER, cardNumber)) {
      checkCardNumberComplete(cardNumber);
    } else {
      setSectionState(CardInfoType.NUMBER, false);
    }
  };

  const validateExpDate = (expirationDate: { month: string; year: string }) => {
    if (validateField(CardInfoType.EXPDATE, expirationDate)) {
      checkExpDateComplete(expirationDate);
    } else {
      setSectionState(CardInfoType.EXPDATE, false);
    }
  };

  const validateCVC = (cvc: string) => {
    if (validateField(CardInfoType.CVC, cvc)) {
      checkCVCComplete(cvc);
    } else {
      setSectionState(CardInfoType.CVC, false);
    }
  };

  const validateField = (id: string, value: any) => {
    const configItem = cardInfoSectionConfig.find((item) => item.id === id);
    if (!configItem || !configItem.validator) return;

    const [errorIndex, errorMessage] = configItem.validator(value);
    setError((prevError) => ({
      ...prevError,
      [configItem.errorKey]: errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
    }));
    return errorIndex === -1;
  };

  const checkCardNumberComplete = (cardNumber: string[]) => {
    if (
      cardNumber.every((num) => num.length === CARD_INFO_VALID_RULE[CardInfoType.NUMBER].MAX_LENGTH)
    )
      checkSectionComplete(CardInfoType.NUMBER);
  };

  const checkExpDateComplete = (expirationDate: { month: string; year: string }) => {
    if (
      expirationDate.month.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH &&
      expirationDate.year.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH
    )
      checkSectionComplete(CardInfoType.EXPDATE);
  };

  const checkCVCComplete = (cvc: string) => {
    if (cvc.length === CARD_INFO_VALID_RULE[CardInfoType.CVC].MAX_LENGTH)
      checkSectionComplete(CardInfoType.CVC);
  };

  const setSectionState = (sectionType: CardInfoType, state: boolean) => {
    setCompletedSections((prev) => ({
      ...prev,
      [sectionType]: state,
    }));
  };

  const checkSectionComplete = (sectionType: CardInfoType) => {
    setSectionState(sectionType, true);

    if (
      sectionType === CardInfoType.NUMBER &&
      !completedSections[CardInfoType.EXPDATE] &&
      !completedSections[CardInfoType.CVC]
    ) {
      setCurrentSection(CardInfoType.EXPDATE);
    } else if (sectionType === CardInfoType.EXPDATE) {
      setCurrentSection(CardInfoType.CVC);
    }
  };

  const isAllSectionsCompleted = Object.values(completedSections).every((completed) => completed);

  return {
    cardInfo,
    handleCardInfoChange,
    error,
    currentSection,
    isAllSectionsCompleted,
  };
}
