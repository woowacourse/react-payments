import React, { useState } from 'react';
import { CardListContext } from '../../hooks/useContextHooks';
import { Card } from '../../store/type';

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
