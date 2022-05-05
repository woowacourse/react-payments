import CardPreview from 'components/CardPreview';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import { getCardListAPI } from 'lib/api';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CardListPage = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    getCardListAPI().then((response) => setCardList(response));
  }, []);

  //삭제 페이지 만들기
  // 리듀서로 관리하기

  return (
    <div>
      <Header title="보유 카드 목록" />
      <div className="card-list mt-10">
        {cardList.map((card) => (
          <Link key={card.id} to={`/modify/${card.id}`}>
            <div className="flex-column-center">
              <CardPreview cardInfo={card} isVisibleButton="hide" theme="red" />
              <span className="text-center">{card.alias}</span>
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
