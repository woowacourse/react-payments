import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../../shared/Card';
import { firestore } from '../../../firebase';
import * as Style from './style';

const CardList = (props) => {
  const [cards, setCards] = useState([]);
  const { handleAddCard, handleGoUpdate } = props;

  useEffect(() => {
    let cardsData = [];
    const fetchData = async () => {
      const snapshot = await firestore.collection('cards').get();
      snapshot.forEach((doc) => cardsData.push({ id: doc.id, data: doc.data() }));
      setCards(cardsData);
    };

    fetchData();
  }, []);

  const handleUpdateCardAlias = (event) => {
    const cardId = event.currentTarget.dataset.cardId;

    handleGoUpdate(cardId);
  };

  return (
    <Style.Root>
      {cards.map((card) => (
        <Style.CardWrapper key={card.id} data-card-id={card.id} onClick={handleUpdateCardAlias}>
          <Card
            width="208px"
            height="130px"
            bankId={card.data.bankId}
            cardNumbers={card.data.cardNumbers}
            ownerName={card.data.ownerName}
            expirationDate={card.data.expirationDate}
          />
          <Style.CardAlias>{card.data.cardAlias}</Style.CardAlias>
        </Style.CardWrapper>
      ))}
      <Style.CardAddButton onClick={handleAddCard}>+</Style.CardAddButton>
    </Style.Root>
  );
};

CardList.propTypes = {
  handleAddCard: PropTypes.func.isRequired,
  handleGoUpdate: PropTypes.func.isRequired,
};

export default CardList;
