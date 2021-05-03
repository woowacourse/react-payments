import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components';
import AddCardButton from './AddCardButton';
import Header from './Header';
import { CARD_COMPANY } from '../../constants';
import './style.css';
import Api from '../../api';

export default function CardList({ cards, setCards }) {
  useEffect(() => {
    (async () => {
      const data = await Api.card.get();
      const cards = data.docs.map((doc) => doc.data());
      cards.sort(({ timestamp: a }, { timestamp: b }) => a - b);
      setCards(cards);
    })();
  }, []);

  return (
    <div className="card-list">
      <Header />
      <li className="card-list__list">
        {cards.map((card, index) => (
          <ul key={index} className="card-list__item">
            <Card
              {...card}
              companyName={CARD_COMPANY[card.cardCompany].NAME}
              color={CARD_COMPANY[card.cardCompany].COLOR}
            ></Card>
            <span className="item__nick-name">{card.nickName}</span>
          </ul>
        ))}
        <Link to="/addCard">
          <AddCardButton />
        </Link>
      </li>
    </div>
  );
}
