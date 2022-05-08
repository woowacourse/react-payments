import React, { useContext } from 'react';
import AddCardContext from '../../AddCardContext';

function Card() {
  const { card } = useContext(AddCardContext);

  const isEmptyCard = Object.values(card).every((value) => value === '');

  return (
    <div className="card-box">
      <div className={isEmptyCard ? 'empty-card' : 'small-card'}>
        <div className="card-top">
          <span className="card-text">안카드</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip" />
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{`${card.firstCardNumber} ${card.secondCardNumber}`}</span>
            <input
              className="card-text-dot"
              type="password"
              value={card.thirdCardNumber}
              disabled
            />
            <input
              className="card-text-dot"
              type="password"
              value={card.fourthCardNumber}
              disabled
            />
          </div>
        </div>
        <div className="card-bottom__info">
          <span className="card-text name-wrap">{card.ownerName || 'NAME'}</span>
          <span className="card-text">{`${card.expireMonth || 'MM'}/${
            card.expireYear || 'YY'
          }`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
