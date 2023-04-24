import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CardType } from '../types/Card';

const useCards = () => {
  const [cards, setCards] = useState<CardType[]>([]);

  const handleSetCards = (
    cardNumbers: Record<number, string>,
    expiredDate: Record<number, string>,
    cardOwnerName: string
  ) => {
    setCards([
      ...cards,
      { id: uuidv4(), cardNumbers, expiredDate, cardOwnerName },
    ]);
  };

  return { cards, handleSetCards };
};

export default useCards;
