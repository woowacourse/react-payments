import React, { useEffect, useReducer } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ADD_CARD_SUCCESS, getCardListAction } from '../actions/cardDataAction';
import Card from '../components/Card';
import Header from '../components/Header';
import { cardListInitialState, cardListReducer } from '../reducer/cardReducer';
import type { CardType } from '../type';
import './CardListPage.css';

const CardListPage = () => {
  const location = useLocation();

  const [mainCardListData, dispatchMainCardListData] = useReducer(
    cardListReducer,
    cardListInitialState
  );
  const navigate = useNavigate();

  const onAddButton = () => {
    navigate('/add');
  };

  useEffect(() => {
    dispatchMainCardListData(getCardListAction());
  }, []);

  useEffect(() => {
    const cardDataItems = document.querySelectorAll('.flip');
    const cardNickNames = document.querySelectorAll('.card-nickname');

    cardDataItems.forEach((cardDataItem, index) => {
      const intervalId = setTimeout(() => {
        cardDataItem.classList.add('fade');
        cardNickNames[index].classList.add('text-fade');
      }, 150 * index);

      return () => {
        clearTimeout(intervalId);
      };
    });
  }, [mainCardListData]);

  return (
    <div className="add-card-page">
      {location.state && location.state.cardAdd === ADD_CARD_SUCCESS ? (
        <div className="card-add-success">카드 추가가 완료되었습니다😊</div>
      ) : (
        ''
      )}
      <Header headerTitle="보유카드" />
      <main className="add-card-page-body">
        {mainCardListData.length === 0 ? (
          <span className="empty-card-list-title">새로운 카드를 등록해주세요.</span>
        ) : (
          mainCardListData.map((card: CardType) => (
            <div className="card-data-item" key={card.id}>
              <Card
                cardType={card.cardType}
                cardNumber={card.cardNumber}
                cardOwner={card.cardOwner}
                expired={card.expired}
                securityCode={card.securityCode}
              />
              <div className="card-nickname">{card.cardNickName}</div>
            </div>
          ))
        )}

        <div className="add-card">
          <button type="button" className="add-card-button" onClick={onAddButton}>
            +
          </button>
          <span>카드 등록하기</span>
        </div>
      </main>
    </div>
  );
};

export default CardListPage;
