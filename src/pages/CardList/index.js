import React from 'react';
import { AddCard, Card } from '../../components';
import './style.css';

export default function CardList({ CardList }) {
  return (
    <div className="card-list">
      <h1 className="card-list__title">보유 카드</h1>
      <li className="card-list__list">
        {CardList.map((card, index) => (
          <ul key={index} className="card-list__item">
            <Card {...card}></Card>
            <span className="item__nick-name">{card.nickName}</span>
          </ul>
        ))}
        <AddCard />
      </li>
    </div>
  );
}
