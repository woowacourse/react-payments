import React from 'react';
import { Link } from 'react-router-dom';
import { AddCard, Card } from '../../components';
import './style.css';

export default function CardList({ cards }) {
  return (
    <div className="card-list">
      <h1 className="card-list__title">보유 카드</h1>
      <li className="card-list__list">
        {cards.map((card, index) => (
          <ul key={index} className="card-list__item">
            <Card {...card}></Card>
            <span className="item__nick-name">{card.nickName}</span>
          </ul>
        ))}
        <Link to="/addCard">
          <AddCard />
        </Link>
      </li>
    </div>
  );
}
