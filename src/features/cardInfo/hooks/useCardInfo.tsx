import { useState } from 'react';
import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
} from '../validation/cardInfoValidator';
import { ErrorProps } from '../../../shared/type/types';

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: ['', '', '', ''],
    cardExpirationDate: { month: '', year: '' },
    cardCVC: '',
  });
  const [error, setError] = useState<ErrorProps>({
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

        const [errorIndex, errorMessage] = cardNumberValidator(updatedNumbers);
        setError(
          (prevError): ErrorProps => ({
            ...prevError,
            cardNumberError:
              errorIndex !== -1 ? ([errorIndex, errorMessage] as [number, string]) : [-1, ''],
          }),
        );

        return {
          ...prev,
          cardNumber: updatedNumbers,
        };
      });
      return;
    }

    if (name.startsWith('cardExpirationDate')) {
      const key = name.split('-')[1] as 'month' | 'year';
      setCardInfo((prev) => {
        const updateDate = { ...prev.cardExpirationDate, [key]: value };
        const [errorIndex, errorMessage] = cardExpirationDateValidator(updateDate);

        setError(
          (prevError): ErrorProps => ({
            ...prevError,
            cardExpirationDateError:
              errorIndex !== -1 ? ([errorIndex, errorMessage] as [number, string]) : [-1, ''],
          }),
        );

        return {
          ...prev,
          cardExpirationDate: updateDate,
        };
      });
      return;
    }

    if (name.startsWith('cardCVC')) {
      setCardInfo((prev) => {
        const updateCVC = value;
        const [errorIndex, errorMessage] = cardCVCValidator(updateCVC);

        setError(
          (prevError): ErrorProps => ({
            ...prevError,
            cardCVCError:
              errorIndex !== -1 ? ([errorIndex, errorMessage] as [number, string]) : [-1, ''],
          }),
        );

        return {
          ...prev,
          cardCVC: updateCVC,
        };
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
