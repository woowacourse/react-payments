import React from 'react';
import PropTypes from 'prop-types';
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
              <React.Fragment key={card.ownerName + String(index)}>
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

CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.shape({
        firstCardNumber: PropTypes.string,
        secondCardNumber: PropTypes.string,
        thirdCardNumber: PropTypes.string,
        fourthCardNumber: PropTypes.string,
        expireMonth: PropTypes.string,
        expireYear: PropTypes.string,
        ownerName: PropTypes.string,
        securityCode: PropTypes.string,
        firstPassword: PropTypes.string,
        secondPassword: PropTypes.string,
      }),
      nick: PropTypes.string,
    })
  ).isRequired,
};

export default CardList;
