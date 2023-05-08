import { createContext, useContext, useState } from 'react';
import type { CardInformation } from '../../../domain/types/card';

const CardContext = createContext<CardInformation | null>(null);
const CardUpdateContext = createContext<React.Dispatch<React.SetStateAction<CardInformation>> | null>(null);

export function CardProvider({ children }: React.PropsWithChildren) {
  const [card, setCard] = useState<CardInformation>({
    id: Date.now(),
    cardType: '하나카드',
    cardNumber: ['', '', '', ''],
    expirationDate: { month: '', year: '' },
    owner: '',
    alias: '',
  });

  return (
    <CardContext.Provider value={card}>
      <CardUpdateContext.Provider value={setCard}>{children}</CardUpdateContext.Provider>
    </CardContext.Provider>
  );
}

export function useCardContext() {
  const card = useContext(CardContext);
  const setCard = useContext(CardUpdateContext);

  if (card === null || setCard === null) {
    throw new Error('CardContext가 null입니다');
  }

  return { card, setCard };
}
