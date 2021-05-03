import React, { useState, useEffect } from 'react';
import Card from '../../shared/Card';
import { firestore } from '../../../firebase';
import * as Style from './style';

const CardList = (props) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    let cardsData = [];
    const fetchData = async () => {
      const snapshot = await firestore.collection('cards').get();
      snapshot.forEach((doc) => cardsData.push({ id: doc.id, data: doc.data() }));
      setCards(cardsData);
    };

    fetchData();
  }, []);

  return (
    <Style.Root>
      {cards.map((card) => (
        <Style.CardWrapper key={card.id}>
          <Card
            width="208px"
            height="130px"
            bankId={card.data.bankId}
            cardNumbers={card.data.cardNumbers}
            ownerName={card.data.ownerName}
            expirationDate={card.data.expirationDate}
          />
          <Style.CardAlias>{card.data.alias}</Style.CardAlias>
        </Style.CardWrapper>
      ))}
      <Style.CardAddButton>+</Style.CardAddButton>
    </Style.Root>
  );
};

export default CardList;
