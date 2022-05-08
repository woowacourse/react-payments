import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../addCard/components/Card';

function CardList({ cardList }) {
  const navigator = useNavigate();

  const moveToAddCard = () => {
    navigator('/addCard');
  };

  return (
    <>
      <div className="header-wrapper">
        <h2 className="page-title">보유 카드</h2>
      </div>
      <div className="card-list-container">
        <div className="app flex-column-center">
          {cardList.map((card, index) => {
            return (
              <React.Fragment key={card.card.ownerName + String(index)}>
                <Card completedCard={card} />
                <span className="card-nickname">{card.nickName}</span>
              </React.Fragment>
            );
          })}
          <div
            className="card-box add-card"
            onClick={moveToAddCard}
            onKeyDown={() => {}}
            role="button"
            tabIndex={0}
          >
            <div className="empty-card">+</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardList;
