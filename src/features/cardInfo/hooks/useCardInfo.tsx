import { useState } from 'react';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import CardInfo from '../../../entities/cardInfo/model/CardInfo';
import { cardInfoSectionConfig } from '../config/cardInfoSectionConfig';
import { NO_ERROR, ErrorKey } from '../../../entities/cardInfo/constants/cardErrorConstants';
import { CardInfoType } from '../../../entities/cardInfo/constants/cardInfoTypeConstants';

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: ['', '', '', ''],
    cardExpirationDate: { month: '', year: '' },
    cardCVC: '',
  });

  const [error, setError] = useState<InputValidationResultProps>({
    [ErrorKey.CARD_NUMBER]: NO_ERROR,
    [ErrorKey.CARD_EXPIRATION_DATE]: NO_ERROR,
    [ErrorKey.CARD_CVC]: NO_ERROR,
  });

  const validateCardNumber = (cardNumber: string[]) => {
    validateField(CardInfoType.NUMBER, cardNumber);
  };

  const validateExpirationDate = (expirationDate: { month: string; year: string }) => {
    validateField(CardInfoType.EXPDATE, expirationDate);
  };

  const validateCVC = (cvc: string) => {
    validateField(CardInfoType.CVC, cvc);
  };

  const validateField = (id: string, value: any) => {
    const configItem = cardInfoSectionConfig.find((item) => item.id === id);
    if (!configItem || !configItem.validator) return;

    const [errorIndex, errorMessage] = configItem.validator(value);
    setError((prevError) => ({
      ...prevError,
      [configItem.errorKey]: errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
    }));
  };

  const handleCardNumberChange = (index: number, value: string) => {
    setCardInfo((prev) => {
      const updatedNumbers = prev.cardNumber.map((num, i) => (i === index ? value : num));
      validateCardNumber(updatedNumbers);
      return { ...prev, cardNumber: updatedNumbers };
    });
  };

  const handleExpirationDateChange = (key: 'month' | 'year', value: string) => {
    setCardInfo((prev) => {
      const updateDate = { ...prev.cardExpirationDate, [key]: value };
      validateExpirationDate(updateDate);
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
      handleExpirationDateChange(key, value);
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

  return { cardInfo, handleCardInfoChange, error };
}
