import { useState } from 'react';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { NO_ERROR, ErrorKey } from '../../../entities/cardInfo/constants/cardErrorConstants';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
  SECTION_ORDER,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import CardInfo from '../../../entities/cardInfo/types/CardInfo';

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    [CardInfoType.NUMBER]: Array(CARD_INFO_VALID_RULE[CardInfoType.NUMBER].TOTAL_SECTIONS).fill(''),
    [CardInfoType.COMPANY]: '',
    [CardInfoType.EXPDATE]: { month: '', year: '' },
    [CardInfoType.CVC]: '',
    [CardInfoType.PASSWORD]: '',
  });

  const [error, setError] = useState<InputValidationResultProps>({
    [ErrorKey.CARD_NUMBER]: NO_ERROR,
    [ErrorKey.CARD_COMPANY]: NO_ERROR,
    [ErrorKey.CARD_EXPIRATION_DATE]: NO_ERROR,
    [ErrorKey.CARD_CVC]: NO_ERROR,
    [ErrorKey.CARD_PASSWORD]: NO_ERROR,
  });

  const [currentSection, setCurrentSection] = useState<CardInfoType>(CardInfoType.NUMBER);

  const [completedSections, setCompletedSections] = useState<Record<CardInfoType, boolean>>({
    [CardInfoType.NUMBER]: false,
    [CardInfoType.COMPANY]: false,
    [CardInfoType.EXPDATE]: false,
    [CardInfoType.CVC]: false,
    [CardInfoType.PASSWORD]: false,
  });

  const updateCardNumber = (index: number, value: string) => {
    setCardInfo((prev) => {
      const updatedNumbers = prev.cardNumber.map((num, i) => (i === index ? value : num));
      return { ...prev, cardNumber: updatedNumbers };
    });
  };

  const updateCardCompany = (value: string) => {
    setCardInfo((prev) => ({ ...prev, cardCompany: value }));
  };

  const updateCardExpDate = (key: 'month' | 'year', value: string) => {
    setCardInfo((prev) => {
      const updateDate = { ...prev.cardExpirationDate, [key]: value };
      return { ...prev, cardExpirationDate: updateDate };
    });
  };

  const updateCardCVC = (value: string) => {
    setCardInfo((prev) => ({ ...prev, cardCVC: value }));
  };

  const updateCardPassword = (value: string) => {
    setCardInfo((prev) => ({ ...prev, cardPassword: value }));
  };

  const validateField = (id: string, value: any): boolean => {
    const configItem = cardInfoSectionConfig.find((item) => item.id === id);
    if (!configItem || !configItem.validator) return false;

    const [errorIndex, errorMessage] = configItem.validator(value);
    setError((prevError) => ({
      ...prevError,
      [configItem.errorKey]: errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
    }));
    return errorIndex === -1;
  };

  const validateCardNumber = (cardNumber: string[]): boolean => {
    return validateField(CardInfoType.NUMBER, cardNumber);
  };

  const validateExpDate = (expirationDate: { month: string; year: string }): boolean => {
    return validateField(CardInfoType.EXPDATE, expirationDate);
  };

  const validateCVC = (cvc: string): boolean => {
    return validateField(CardInfoType.CVC, cvc);
  };

  const validatePassword = (password: string): boolean => {
    return validateField(CardInfoType.PASSWORD, password);
  };

  const isCardNumberComplete = (cardNumber: string[]): boolean => {
    return cardNumber.every(
      (num) => num.length === CARD_INFO_VALID_RULE[CardInfoType.NUMBER].MAX_LENGTH,
    );
  };

  const isExpDateComplete = (expirationDate: { month: string; year: string }): boolean => {
    return (
      expirationDate.month.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH &&
      expirationDate.year.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH
    );
  };

  const isCVCComplete = (cvc: string): boolean => {
    return cvc.length === CARD_INFO_VALID_RULE[CardInfoType.CVC].MAX_LENGTH;
  };

  const isPasswordComplete = (password: string): boolean => {
    return password.length === CARD_INFO_VALID_RULE[CardInfoType.PASSWORD].MAX_LENGTH;
  };

  const setSectionState = (sectionType: CardInfoType, state: boolean) => {
    setCompletedSections((prev) => ({
      ...prev,
      [sectionType]: state,
    }));
  };

  const completeSection = (sectionType: CardInfoType) => {
    setSectionState(sectionType, true);

    const currentSectionIndex = SECTION_ORDER.indexOf(sectionType);
    if (currentSectionIndex === SECTION_ORDER.length - 1) return;

    const nextSection = SECTION_ORDER[currentSectionIndex + 1];

    if (
      !completedSections[nextSection] &&
      SECTION_ORDER.indexOf(currentSection) <= currentSectionIndex
    ) {
      setCurrentSection(nextSection);
    }
  };

  const changeCardNumber = (index: number, value: string) => {
    updateCardNumber(index, value);

    const updatedNumbers = cardInfo.cardNumber.map((num, i) => (i === index ? value : num));
    const isValid = validateCardNumber(updatedNumbers);

    if (isValid && isCardNumberComplete(updatedNumbers)) {
      completeSection(CardInfoType.NUMBER);
    } else if (!isValid) {
      setSectionState(CardInfoType.NUMBER, false);
    }
  };

  const changeCardCompany = (value: string) => {
    updateCardCompany(value);

    if (value) {
      completeSection(CardInfoType.COMPANY);
    }
  };

  const changeCardExpDate = (key: 'month' | 'year', value: string) => {
    updateCardExpDate(key, value);

    const updatedDate = {
      ...cardInfo.cardExpirationDate,
      [key]: value,
    };

    const isValid = validateExpDate(updatedDate);

    if (isValid && isExpDateComplete(updatedDate)) {
      completeSection(CardInfoType.EXPDATE);
    } else if (!isValid) {
      setSectionState(CardInfoType.EXPDATE, false);
    }
  };

  const changeCardCVC = (value: string) => {
    updateCardCVC(value);

    const isValid = validateCVC(value);

    if (isValid && isCVCComplete(value)) {
      completeSection(CardInfoType.CVC);
    } else if (!isValid) {
      setSectionState(CardInfoType.CVC, false);
    }
  };

  const changeCardPassword = (value: string) => {
    updateCardPassword(value);

    const isValid = validatePassword(value);

    if (isValid && isPasswordComplete(value)) {
      completeSection(CardInfoType.PASSWORD);
    } else if (!isValid) {
      setSectionState(CardInfoType.PASSWORD, false);
    }
  };

  const handleCardInfo = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith(CardInfoType.NUMBER)) {
      const index = Number(name[name.length - 1]);
      changeCardNumber(index, value);
      return;
    }

    if (name === CardInfoType.COMPANY) {
      changeCardCompany(value);
      return;
    }

    if (name.startsWith(CardInfoType.EXPDATE)) {
      const key = name.split('-')[1] as 'month' | 'year';
      changeCardExpDate(key, value);
      return;
    }

    if (name.startsWith(CardInfoType.CVC)) {
      changeCardCVC(value);
      return;
    }

    if (name.startsWith(CardInfoType.PASSWORD)) {
      changeCardPassword(value);
      return;
    }
  };

  const isAllSectionsCompleted = Object.values(completedSections).every((completed) => completed);

  return {
    cardInfo,
    handleCardInfo,
    error,
    currentSection,
    isAllSectionsCompleted,
  };
}
