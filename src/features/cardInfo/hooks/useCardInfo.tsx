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

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith(CardInfoType.NUMBER)) {
      const index = Number(name[name.length - 1]);
      setCardInfo((prev) => {
        const updatedNumbers = prev.cardNumber.map((num, i) => (i === index ? value : num));
        validateAndSetError(CardInfoType.NUMBER, updatedNumbers, setError);
        return { ...prev, cardNumber: updatedNumbers };
      });
      return;
    }

    if (name.startsWith(CardInfoType.EXPDATE)) {
      const key = name.split('-')[1] as 'month' | 'year';
      setCardInfo((prev) => {
        const updateDate = { ...prev.cardExpirationDate, [key]: value };
        validateAndSetError(CardInfoType.EXPDATE, updateDate, setError);
        return { ...prev, cardExpirationDate: updateDate };
      });
      return;
    }

    if (name.startsWith(CardInfoType.CVC)) {
      setCardInfo((prev) => {
        validateAndSetError(CardInfoType.CVC, value, setError);
        return { ...prev, cardCVC: value };
      });
      return;
    }

    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardInfo, setCardInfo, handleCardInfoChange, error };
}

const validateAndSetError = (id: string, value: any, setError: any) => {
  const configItem = cardInfoSectionConfig.find((item) => item.id === id);
  if (!configItem || !configItem.validator) return;

  const [errorIndex, errorMessage] = configItem.validator(value);
  setError(
    (prevError: any) =>
      ({
        ...prevError,
        [configItem.errorKey]: errorIndex !== -1 ? [errorIndex, errorMessage] : NO_ERROR,
      }) as InputValidationResultProps,
  );
};
