import CardPreview from 'components/CardPreview';
import Header from 'components/common/Header';
import { getCardListAPI } from 'lib/api';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardListPage = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    getCardListAPI().then((response) => setCardList(response));
  }, []);

  return (
    <div>
      <Header title="보유 카드 목록" />
      <div className="card-list mt-10">
        {cardList.map((card) => (
          <div key={card.id} className="flex-column-center">
            <CardPreview cardInfo={card} isVisibleButton="hide" theme="red" />
            <span className="text-center">{card.alias}</span>
          </div>
        ))}

        {/* 카드 추가하는 페이지*/}
        <div className="card-item">
          <div className="card-box">
            <Link to="/add" className="empty-card">
              <div className="card-add-button">+</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListPage;
