import { useState } from 'react';
import { cardNumberValidator, cardExpirationDateValidator, cardCVCValidator } from '../validation/cardInfoValidator';
import { ErrorProps } from '../../../shared/model/types';

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
  const [cardNumber, setCardNumber] = useState<string[]>(['', '', '', '']);
  const [cardExpirationDate, setCardExpirationDate] = useState<{ month: string; year: string }>({
    month: '',
    year: '',
  });
  const [cardCVC, setCardCVC] = useState<string>('');
  const [error, setError] = useState<ErrorProps>({
    cardNumberError: { errorIndex: -1, errorMessage: '' },
    cardExpirationDateError: { errorIndex: -1, errorMessage: '' },
    cardCVCError: { errorIndex: -1, errorMessage: '' },
  });

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('cardNumber')) {
      const index = Number(name[name.length - 1]);
      setCardNumber((prev) => {
        const updatedNumbers = prev.map((num, i) => (i === index ? value : num));
        validateAndSetError('cardNumber', updatedNumbers, setError);
        return updatedNumbers;
      });
      return;
    }

    if (name.startsWith('cardExpirationDate')) {
      const key = name.split('-')[1] as 'month' | 'year';
      setCardExpirationDate((prev) => {
        const updateDate = { ...prev, [key]: value };
        validateAndSetError('cardExpirationDate', updateDate, setError);
        return updateDate;
      });
      return;
    }

    if (name.startsWith('cardCVC')) {
      setCardCVC(() => {
        validateAndSetError('cardCVC', value, setError);
        return value;
      });
    }
  };

  return { cardNumber, cardExpirationDate, cardCVC, handleCardInfoChange, error };
}

const validateAndSetError = (key: keyof typeof VALIDATORS, value: any, setError: any) => {
  const validator = VALIDATORS[key];
  const errorKey = ERROR_KEYS[key] as keyof ErrorProps;
  const [errorIndex, errorMessage] = validator(value);
  setError(
    (prevError: any) =>
      ({
        ...prevError,
        [errorKey]: errorIndex !== -1 ? { errorIndex, errorMessage } : { errorIndex: -1, errorMessage: '' },
      } as ErrorProps)
  );
};
