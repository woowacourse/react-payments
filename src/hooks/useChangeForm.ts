import { useContext, useEffect } from 'react';
import { CardContext } from '../context/CardContext';

export const useChangeForm = () => {
  const { bankName, cardName, setCard } = useContext(CardContext);

  const handleChangeForm = (
    cardNumber: string[],
    expirationDate: string[],
    name: string
  ) => {
    const updatedCard = {
      id: Date.now(),
      cardNumber,
      expirationDate,
      name,
      bankName,
      cardName,
    };
    setCard(updatedCard);
  };

  useEffect(() => {
    setCard((prevState) => ({
      ...prevState,
      bankName,
      cardName,
    }));
  }, [bankName, cardName]);

  return { handleChangeForm };
};
