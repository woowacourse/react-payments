import React from 'react';
import { useContext } from 'react';
import { CardStateContext } from 'context/CardContext';

function CardList() {
  const { cards } = useContext(CardStateContext);

  return (
    <div>
      <span>{JSON.stringify(cards)}</span>
    </div>
  );
}

export default CardList;
