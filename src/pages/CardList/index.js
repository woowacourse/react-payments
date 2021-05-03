import { useContext } from 'react';
import { Card, Header } from '../../components';
import { CardsContext } from '../../cardsContext';
import { CARD_COMPANY } from '../../constants';
import './style.css';

export default function CardList() {
  const cards = useContext(CardsContext);

  return (
    <div>
      <Header title="카드 목록"></Header>
      <main className="card-list__container">
        {cards?.map((card) => (
          <button
            type="button"
            className="card-list__item-button"
            aria-label={`${card.nickName} 카드 별칭 수정`}
            key={card.id}
          >
            <Card
              companyName={CARD_COMPANY[card.company].NAME}
              color={CARD_COMPANY[card.company].COLOR}
              number={card.number}
              userName={card.userName}
              expirationDate={card.expirationDate}
            />
            <p>{card.nickName}</p>
          </button>
        ))}

        <button type="button" className="card-list__item-button" aria-label="카드 추가">
          <Card />
        </button>
      </main>
    </div>
  );
}
