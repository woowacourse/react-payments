import { useState } from 'react';
import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
  cardIssuerValidator,
  cardPasswordValidator,
} from '../validation/cardInfoValidator';
import { ErrorProps } from '../../../shared/model/types';
import { NO_ERROR } from '../../../shared/constants/errorConstants';

const VALIDATORS = {
  cardNumber: cardNumberValidator,
  cardExpirationDate: cardExpirationDateValidator,
  cardCVC: cardCVCValidator,
  cardIssuer: cardIssuerValidator,
  cardPassword: cardPasswordValidator,
};

const ERROR_KEYS = {
  cardNumber: 'cardNumberError',
  cardExpirationDate: 'cardExpirationDateError',
  cardCVC: 'cardCVCError',
  cardIssuer: 'cardIssuerError',
  cardPassword: 'cardPasswordError',
};

export default function useCardInfo() {
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState<{ month: string; year: string }>({
    month: '',
    year: '',
  });
  const [cardCVC, setCardCVC] = useState<string>('');
  const [cardIssuer, setCardIssuer] = useState<string>('');
  const [cardPassword, setCardPassword] = useState<string>('');
  const [error, setError] = useState<ErrorProps>({
    cardNumberError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardExpirationDateError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardCVCError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardIssuerError: { errorIndex: NO_ERROR, errorMessage: '' },
    cardPasswordError: { errorIndex: NO_ERROR, errorMessage: '' },
  });

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.startsWith('cardNumber')) {
      const index = Number(name[name.length - 1]);
      setCardNumber((prev) => {
        const updatedNumbers = prev.map((num, i) => (i === index ? value : num));
        validateAndSetError('cardNumber', updatedNumbers, setError);
        return updatedNumbers;
      });
    } else if (name.startsWith('cardExpirationDate')) {
      const key = name.split('-')[1] as 'month' | 'year';
      setCardExpirationDate((prev) => {
        const updateDate = { ...prev, [key]: value };
        validateAndSetError('cardExpirationDate', updateDate, setError);
        return updateDate;
      });
    } else if (name.startsWith('cardCVC')) {
      setCardCVC(() => {
        validateAndSetError('cardCVC', value, setError);
        return value;
      });
    } else if (name.startsWith('cardIssuer')) {
      setCardIssuer(() => {
        validateAndSetError('cardIssuer', value, setError);
        return value;
      });
    } else if (name.startsWith('cardPassword')) {
      setCardPassword(() => {
        validateAndSetError('cardPassword', value, setError);
        return value;
      });
    }
  };

  const cardInfo = {
    cardNumber,
    cardExpirationDate,
    cardCVC,
    cardIssuer,
    cardPassword,
  };

  return { cardInfo, handleCardInfoChange, error };
}

const validateAndSetError = (key: keyof typeof VALIDATORS, value: any, setError: any) => {
  const validator = VALIDATORS[key];
  const errorKey = ERROR_KEYS[key] as keyof ErrorProps;
  const [errorIndex, errorMessage] = validator(value);
  setError(
    (prevError: any) =>
      ({
        ...prevError,
        [errorKey]: errorIndex !== NO_ERROR ? { errorIndex, errorMessage } : { errorIndex: NO_ERROR, errorMessage: '' },
      } as ErrorProps)
  );
};
