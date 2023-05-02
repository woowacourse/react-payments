import React, { useState } from 'react';

import { Card } from '../../store/type';
import { CardListContext } from './CardPaymentContext';

type ChildProps = {
  children: React.ReactNode;
};

const CardListProvider: React.FC<ChildProps> = ({ children }) => {
  const [cardList, setCardList] = useState<Card[]>([]);

  return (
    <CardListContext.Provider value={{ cardList, setCardList }}>
      {children}
    </CardListContext.Provider>
  );
};

export default CardListProvider;
