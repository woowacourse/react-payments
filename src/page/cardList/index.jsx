import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CardPreview from 'components/CardPreview';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import { ReactComponent as DeleteIcon } from 'assets/delete_icon.svg';

import CARD_API from 'api';

const CardListPage = () => {
  const [cardList, setCardList] = useState([]);

  const handleDeleteCard = async (e, cardId) => {
    e.preventDefault();

    if (window.confirm('정말 삭제하시겠습니까?')) {
      await CARD_API.deleteCard(cardId);
      CARD_API.getCardList().then((response) => setCardList(response));
    }
  };

  useEffect(() => {
    CARD_API.getCardList().then((response) => setCardList(response));
  }, []);

  return (
    <div>
      <Header title="보유 카드 목록" />
      <div className="card-list mt-10">
        {cardList.map((card) => (
          <Link key={card.id} to={`/modify/${card.id}`}>
            <div className="flex-column-center card-item-wrapper">
              <CardPreview cardInfo={card} isVisibleButton="hide" theme="red" />
              <span className="text-center">{card.alias}</span>
              <Button
                className="card-delete-button"
                theme="red"
                handleClick={(e) => handleDeleteCard(e, card.id)}
              >
                <DeleteIcon />
              </Button>
            </div>
          </Link>
        ))}

        {/* 카드 추가하는 페이지*/}
        <div className="card-item">
          <div className="card-box">
            <Link to="/add" className="empty-card">
              <Button className="card-add-button">+</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListPage;
