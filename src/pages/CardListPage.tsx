import React, { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { getCardListAction } from '../actions/cardDataAction';
import Card from '../components/Card';
import Header from '../components/Header';
import cardReducer, { initialState } from '../reducer/cardReducer';
import type { CardType } from '../type';
import './CardListPage.css';

const CardListPage = () => {
  const CardDispatch = React.createContext({});
  const [mainCardListData, dispatchMainCardListData] = useReducer(cardReducer, initialState);

  const navigate = useNavigate();

  const onAddButton = () => {
    navigate('/add');
  };

  useEffect(() => {
    dispatchMainCardListData(getCardListAction());
  }, []);

  return (
    <CardDispatch.Provider value={dispatchMainCardListData}>
      <div className="add-card-page">
        <Header headerTitle="보유카드" />
        <main className="add-card-page-body">
          {mainCardListData.length === 0 ? (
            <span className="empty-card-list-title">새로운 카드를 등록해주세요.</span>
          ) : (
            mainCardListData.map((card: CardType) => (
              <div className="card-data-item">
                <Card
                  key={card.id}
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
    </CardDispatch.Provider>
  );
};

export default CardListPage;
