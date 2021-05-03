import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components';
import AddCardButton from './AddCardButton';
import Header from './Header';
import { CARD_COMPANY } from '../../constants';
import './style.css';

export default function CardList({ cards }) {
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
