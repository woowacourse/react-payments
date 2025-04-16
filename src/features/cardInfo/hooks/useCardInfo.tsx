import { useState } from 'react';

export default function useCardInfo() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: ['', '', '', ''],
    cardExpirationDate: { month: '', year: '' },
    cardCVC: '',
  });

  const handleCardInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('cardNumber')) {
      const index = Number(name[name.length - 1]);
      setCardInfo((prev) => ({
        ...prev,
        cardNumber: prev.cardNumber.map((num, i) => (i === index ? value : num)),
      }));
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

  return { cardInfo, setCardInfo, handleCardInfoChange };
}
