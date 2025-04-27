import { useState } from 'react';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import CardInfo from '../../../entities/cardInfo/model/CardInfo';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { NO_ERROR, ErrorKey } from '../../../entities/cardInfo/constants/cardErrorConstants';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
  SECTION_ORDER,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';

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

  const handleCardNumberChange = (index: number, value: string) => {
    setCardInfo((prev) => {
      const updatedNumbers = prev.cardNumber.map((num, i) => (i === index ? value : num));
      validateCardNumber(updatedNumbers);
      return { ...prev, cardNumber: updatedNumbers };
    });
  };

  const handleCardCompanyChange = (value: string) => {
    setCardInfo((prev) => {
      if (value) {
        completeSection(CardInfoType.COMPANY);
      }
      return { ...prev, cardCompany: value };
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

  const handlePasswordChange = (value: string) => {
    setCardInfo((prev) => {
      validatePassword(value);
      return { ...prev, cardPassword: value };
    });
  };

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith(CardInfoType.NUMBER)) {
      const index = Number(name[name.length - 1]);
      handleCardNumberChange(index, value);
      return;
    }

    if (name === CardInfoType.COMPANY) {
      handleCardCompanyChange(value);
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

    if (name.startsWith(CardInfoType.PASSWORD)) {
      handlePasswordChange(value);
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

  const validatePassword = (password: string) => {
    if (validateField(CardInfoType.PASSWORD, password)) {
      checkPasswordComplete(password);
    } else {
      setSectionState(CardInfoType.PASSWORD, false);
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
      completeSection(CardInfoType.NUMBER);
  };

  const checkExpDateComplete = (expirationDate: { month: string; year: string }) => {
    if (
      expirationDate.month.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH &&
      expirationDate.year.length === CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH
    )
      completeSection(CardInfoType.EXPDATE);
  };

  const checkCVCComplete = (cvc: string) => {
    if (cvc.length === CARD_INFO_VALID_RULE[CardInfoType.CVC].MAX_LENGTH)
      completeSection(CardInfoType.CVC);
  };

  const checkPasswordComplete = (password: string) => {
    if (password.length === CARD_INFO_VALID_RULE[CardInfoType.PASSWORD].MAX_LENGTH)
      completeSection(CardInfoType.PASSWORD);
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

  const isAllSectionsCompleted = Object.values(completedSections).every((completed) => completed);

  return {
    cardInfo,
    handleCardInfoChange,
    error,
    currentSection,
    isAllSectionsCompleted,
  };
}
