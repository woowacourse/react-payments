import { useState } from 'react';
import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
} from '../../../entities/cardInfo/model/cardInfoValidator';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import CardInfo from '../../../entities/cardInfo/model/CardInfo';

const VALIDATORS = {
  cardNumber: cardNumberValidator,
  cardExpirationDate: cardExpirationDateValidator,
  cardCVC: cardCVCValidator,
};

const ERROR_KEYS = {
  cardNumber: 'cardNumberError',
  cardExpirationDate: 'cardExpirationDateError',
  cardCVC: 'cardCVCError',
};

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: ['', '', '', ''],
    cardExpirationDate: { month: '', year: '' },
    cardCVC: '',
  });
  const [error, setError] = useState<InputValidationResultProps>({
    cardNumberError: [-1, ''],
    cardExpirationDateError: [-1, ''],
    cardCVCError: [-1, ''],
  });

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('cardNumber')) {
      const index = Number(name[name.length - 1]);
      setCardInfo((prev) => {
        const updatedNumbers = prev.cardNumber.map((num, i) => (i === index ? value : num));
        validateAndSetError('cardNumber', updatedNumbers, setError);
        return { ...prev, cardNumber: updatedNumbers };
      });
      return;
    }

    if (name.startsWith('cardExpirationDate')) {
      const key = name.split('-')[1] as 'month' | 'year';
      setCardInfo((prev) => {
        const updateDate = { ...prev.cardExpirationDate, [key]: value };
        validateAndSetError('cardExpirationDate', updateDate, setError);
        return { ...prev, cardExpirationDate: updateDate };
      });
      return;
    }

    if (name.startsWith('cardCVC')) {
      setCardInfo((prev) => {
        validateAndSetError('cardCVC', value, setError);
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

const validateAndSetError = (key: keyof typeof VALIDATORS, value: any, setError: any) => {
  const validator = VALIDATORS[key];
  const errorKey = ERROR_KEYS[key] as keyof InputValidationResultProps;
  const [errorIndex, errorMessage] = validator(value);
  setError(
    (prevError: any) =>
      ({
        ...prevError,
        [errorKey]: errorIndex !== -1 ? [errorIndex, errorMessage] : [-1, ''],
      }) as InputValidationResultProps,
  );
};
