import { useState } from 'react';
import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
} from '../validation/cardInfoValidator';

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: ['', '', '', ''],
    cardExpirationDate: { month: '', year: '' },
    cardCVC: '',
  });
  const [error, setError] = useState<any>({
    cardNumberError: [],
    cardExpirationDateError: [],
    cardCVCError: [],
  });

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('cardNumber')) {
      const index = Number(name[name.length - 1]);

      setCardInfo((prev) => {
        const updatedNumbers = prev.cardNumber.map((num, i) => (i === index ? value : num));

        const [errorIndex, errorMessage] = cardNumberValidator(updatedNumbers);
        setError((prevError: any) => ({
          ...prevError,
          cardNumberError: errorIndex !== -1 ? [errorIndex, errorMessage] : [],
        }));

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

        setError((prevError: any) => ({
          ...prevError,
          cardExpirationDateError: errorIndex !== -1 ? [errorIndex, errorMessage] : [],
        }));

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

        setError((prevError: any) => ({
          ...prevError,
          cardCVCError: errorIndex !== -1 ? [errorIndex, errorMessage] : [],
        }));

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
