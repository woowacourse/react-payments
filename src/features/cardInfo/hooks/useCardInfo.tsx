import { useState } from 'react';
import { cardNumberValidator } from '../validation/cardInfoValidator';

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
        if (errorIndex !== -1) {
          setError((prev: any) => ({
            ...prev,
            cardNumberError: [errorIndex, errorMessage],
          }));
          console.log(error.cardNumberError);
        } else {
          setError((prev: any) => ({
            ...prev,
            cardNumberError: [],
          }));
        }

        return {
          ...prev,
          cardNumber: updatedNumbers,
        };
      });

      return;
    }

    if (name.startsWith('cardExpirationDate')) {
      const key = name.split('-')[1];
      setCardInfo((prev) => ({
        ...prev,
        cardExpirationDate: {
          ...prev.cardExpirationDate,
          [key]: value,
        },
      }));
      return;
    }

    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { cardInfo, setCardInfo, handleCardInfoChange, error };
}
