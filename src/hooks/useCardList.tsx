import { useState } from 'react';
import CreditCardInfo from '../@types/creditCardInfo';

interface Props {
  key: string;
  initialValue?: Array<CreditCardInfo>;
}

function useCardList({ key, initialValue }: Props) {
  const saved = localStorage.getItem(key);
  const savedList = (saved ? JSON.parse(saved) : []) as Array<CreditCardInfo>;

  const [cardList, setCardList] = useState<Array<CreditCardInfo>>([
    ...(initialValue ?? []),
    ...savedList,
  ]);

  const saveCard = (cardInfo: CreditCardInfo) => {
    const savedData = JSON.stringify([...cardList, cardInfo]);
    localStorage.setItem(key, savedData);

    setCardList((prev) => [...prev, cardInfo]);
  };

  return { cardList, saveCard };
}

export default useCardList;
