import { getCards } from 'apis';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from 'components/@common';
import { Card } from 'components';

import { PATH } from 'constants';

function CardList() {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const updateCards = async () => {
      try {
        const newCards = await getCards();

        setCards(newCards);
      } catch (error) {
        alert(error.message);
      }
    };

    updateCards();
  }, []);

  const onClickEmptyCard = () => {
    navigate(PATH.CARD_ADD);
  };

  return (
    <>
      <Header className="mb-10">보유 카드</Header>
      {cards.map((card) => {
        const { cardNumber, userName, expireMonth, expireYear, cardNickname } = card;

        return (
          <Card
            key={cardNumber}
            cardNumber={cardNumber}
            userName={userName}
            expireMonth={expireMonth}
            expireYear={expireYear}
            cardNickname={cardNickname}
          />
        );
      })}
      <div className="card-box">
        <button type="button" className="empty-card" onClick={onClickEmptyCard}>
          +
        </button>
      </div>
    </>
  );
}

export default CardList;
