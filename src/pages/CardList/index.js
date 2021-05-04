import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddCardButton from './AddCardButton';
import Header from './Header';
import Api from '../../api';
import Item from './Item';
import './style.css';

export default function CardList({ cards, setCards }) {
  useEffect(() => {
    updateCardList();
  }, []);

  const updateCardList = async () => {
    const data = await Api.card.get();
    const cards = data.docs.map((doc) => doc.data());
    cards.sort(({ timestamp: a }, { timestamp: b }) => a - b);

    setCards(cards);
  };

  const onUpdateCard = async (newCardData) => {
    await Api.card.put(newCardData);
    await updateCardList();
  };

  const onDeleteCard = async (serialNumber) => {
    await Api.card.delete(serialNumber);
    await updateCardList();
  };

  return (
    <div className="card-list">
      <Header />
      <li className="card-list__list">
        {cards.map((card, index) => (
          <Item
            key={card.timestamp}
            card={card}
            index={index}
            onUpdateCard={onUpdateCard}
            onDeleteCard={onDeleteCard}
          />
        ))}
        <Link to="/addCard">
          <AddCardButton />
        </Link>
      </li>
    </div>
  );
}
